import { __decorate, __metadata } from "tslib";
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ESCAPE } from '@angular/cdk/keycodes';
import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Inject, Injector, Input, Optional, Output, Renderer2, TemplateRef, Type, ViewChild, ViewContainerRef } from '@angular/core';
import { FocusTrapFactory } from '@angular/cdk/a11y';
import { Overlay, OverlayConfig, OverlayKeyboardDispatcher } from '@angular/cdk/overlay';
import { CdkPortalOutlet, ComponentPortal, PortalInjector, TemplatePortal } from '@angular/cdk/portal';
import { Subject } from 'rxjs';
import { InputBoolean, NzConfigService, toCssPixel, WithConfig } from 'ng-zorro-antd/core';
import { takeUntil } from 'rxjs/operators';
import { NzDrawerRef } from './nz-drawer-ref';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/core";
import * as i2 from "@angular/cdk/overlay";
import * as i3 from "@angular/cdk/a11y";
import * as i4 from "@angular/common";
import * as i5 from "@angular/cdk/portal";
import * as i6 from "ng-zorro-antd/icon";
const _c0 = ["drawerTemplate"];
function NzDrawerComponent_ng_template_0_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r400 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 9);
    i0.ɵɵlistener("click", function NzDrawerComponent_ng_template_0_div_1_Template_div_click_0_listener($event) { i0.ɵɵrestoreView(_r400); const ctx_r399 = i0.ɵɵnextContext(2); return ctx_r399.maskClick(); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r394 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngStyle", ctx_r394.nzMaskStyle);
} }
function NzDrawerComponent_ng_template_0_div_5_div_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "div", 14);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r403 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("innerHTML", ctx_r403.nzTitle, i0.ɵɵsanitizeHtml);
} }
function NzDrawerComponent_ng_template_0_div_5_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 12);
    i0.ɵɵtemplate(1, NzDrawerComponent_ng_template_0_div_5_div_1_ng_container_1_Template, 2, 1, "ng-container", 13);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r401 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzStringTemplateOutlet", ctx_r401.nzTitle);
} }
function NzDrawerComponent_ng_template_0_div_5_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r405 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 15);
    i0.ɵɵlistener("click", function NzDrawerComponent_ng_template_0_div_5_button_2_Template_button_click_0_listener($event) { i0.ɵɵrestoreView(_r405); const ctx_r404 = i0.ɵɵnextContext(3); return ctx_r404.closeClick(); });
    i0.ɵɵelement(1, "i", 16);
    i0.ɵɵelementEnd();
} }
function NzDrawerComponent_ng_template_0_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, NzDrawerComponent_ng_template_0_div_5_div_1_Template, 2, 1, "div", 10);
    i0.ɵɵtemplate(2, NzDrawerComponent_ng_template_0_div_5_button_2_Template, 2, 0, "button", 11);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r395 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("ant-drawer-header", !!ctx_r395.nzTitle)("ant-drawer-header-no-title", !!ctx_r395.nzTitle);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r395.nzTitle);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r395.nzClosable);
} }
function NzDrawerComponent_ng_template_0_ng_template_7_Template(rf, ctx) { }
function NzDrawerComponent_ng_template_0_ng_container_8_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function NzDrawerComponent_ng_template_0_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, NzDrawerComponent_ng_template_0_ng_container_8_ng_container_1_Template, 1, 0, "ng-container", 17);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r397 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r397.nzContent)("ngTemplateOutletContext", ctx_r397.templateContext);
} }
function NzDrawerComponent_ng_template_0_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵprojection(0, 0, ["*ngIf", "!nzContent"]);
} }
function NzDrawerComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 1);
    i0.ɵɵtemplate(1, NzDrawerComponent_ng_template_0_div_1_Template, 1, 1, "div", 2);
    i0.ɵɵelementStart(2, "div");
    i0.ɵɵelementStart(3, "div", 3);
    i0.ɵɵelementStart(4, "div", 4);
    i0.ɵɵtemplate(5, NzDrawerComponent_ng_template_0_div_5_Template, 3, 4, "div", 5);
    i0.ɵɵelementStart(6, "div", 6);
    i0.ɵɵtemplate(7, NzDrawerComponent_ng_template_0_ng_template_7_Template, 0, 0, "ng-template", 7);
    i0.ɵɵtemplate(8, NzDrawerComponent_ng_template_0_ng_container_8_Template, 2, 2, "ng-container", 8);
    i0.ɵɵtemplate(9, NzDrawerComponent_ng_template_0_9_Template, 1, 0, undefined, 8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r393 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("transform", ctx_r393.offsetTransform)("z-index", ctx_r393.nzZIndex);
    i0.ɵɵclassProp("ant-drawer-open", ctx_r393.isOpen)("ant-drawer-top", ctx_r393.nzPlacement === "top")("ant-drawer-bottom", ctx_r393.nzPlacement === "bottom")("ant-drawer-right", ctx_r393.nzPlacement === "right")("ant-drawer-left", ctx_r393.nzPlacement === "left");
    i0.ɵɵproperty("nzNoAnimation", ctx_r393.nzNoAnimation);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r393.nzMask);
    i0.ɵɵadvance(1);
    i0.ɵɵclassMapInterpolate1("ant-drawer-content-wrapper ", ctx_r393.nzWrapClassName, "");
    i0.ɵɵstyleProp("width", ctx_r393.width)("height", ctx_r393.height)("transform", ctx_r393.transform);
    i0.ɵɵadvance(2);
    i0.ɵɵstyleProp("height", ctx_r393.isLeftOrRight ? "100%" : null);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r393.nzTitle || ctx_r393.nzClosable);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngStyle", ctx_r393.nzBodyStyle);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r393.isTemplateRef(ctx_r393.nzContent));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r393.nzContent);
} }
const _c1 = ["*"];
export const DRAWER_ANIMATE_DURATION = 300;
const NZ_CONFIG_COMPONENT_NAME = 'drawer';
// tslint:disable-next-line:no-any
export class NzDrawerComponent extends NzDrawerRef {
    constructor(
    // tslint:disable-next-line:no-any
    document, nzConfigService, renderer, overlay, injector, changeDetectorRef, focusTrapFactory, viewContainerRef, overlayKeyboardDispatcher) {
        super();
        this.document = document;
        this.nzConfigService = nzConfigService;
        this.renderer = renderer;
        this.overlay = overlay;
        this.injector = injector;
        this.changeDetectorRef = changeDetectorRef;
        this.focusTrapFactory = focusTrapFactory;
        this.viewContainerRef = viewContainerRef;
        this.overlayKeyboardDispatcher = overlayKeyboardDispatcher;
        this.nzClosable = true;
        this.nzNoAnimation = false;
        this.nzKeyboard = true;
        this.nzPlacement = 'right';
        this.nzMaskStyle = {};
        this.nzBodyStyle = {};
        this.nzWidth = 256;
        this.nzHeight = 256;
        this.nzZIndex = 1000;
        this.nzOffsetX = 0;
        this.nzOffsetY = 0;
        this.nzOnViewInit = new EventEmitter();
        this.nzOnClose = new EventEmitter();
        this.destroy$ = new Subject();
        this.isOpen = false;
        this.templateContext = {
            $implicit: undefined,
            drawerRef: this
        };
        this.nzAfterOpen = new Subject();
        this.nzAfterClose = new Subject();
    }
    set nzVisible(value) {
        this.isOpen = value;
    }
    get nzVisible() {
        return this.isOpen;
    }
    get offsetTransform() {
        if (!this.isOpen || this.nzOffsetX + this.nzOffsetY === 0) {
            return null;
        }
        switch (this.nzPlacement) {
            case 'left':
                return `translateX(${this.nzOffsetX}px)`;
            case 'right':
                return `translateX(-${this.nzOffsetX}px)`;
            case 'top':
                return `translateY(${this.nzOffsetY}px)`;
            case 'bottom':
                return `translateY(-${this.nzOffsetY}px)`;
        }
    }
    get transform() {
        if (this.isOpen) {
            return null;
        }
        switch (this.nzPlacement) {
            case 'left':
                return `translateX(-100%)`;
            case 'right':
                return `translateX(100%)`;
            case 'top':
                return `translateY(-100%)`;
            case 'bottom':
                return `translateY(100%)`;
        }
    }
    get width() {
        return this.isLeftOrRight ? toCssPixel(this.nzWidth) : null;
    }
    get height() {
        return !this.isLeftOrRight ? toCssPixel(this.nzHeight) : null;
    }
    get isLeftOrRight() {
        return this.nzPlacement === 'left' || this.nzPlacement === 'right';
    }
    get afterOpen() {
        return this.nzAfterOpen.asObservable();
    }
    get afterClose() {
        return this.nzAfterClose.asObservable();
    }
    isTemplateRef(value) {
        return value instanceof TemplateRef;
    }
    ngOnInit() {
        this.attachOverlay();
        this.updateOverlayStyle();
        this.updateBodyOverflow();
        this.templateContext = { $implicit: this.nzContentParams, drawerRef: this };
        this.changeDetectorRef.detectChanges();
    }
    ngAfterViewInit() {
        this.attachBodyContent();
        setTimeout(() => {
            this.nzOnViewInit.emit();
        });
    }
    ngOnChanges(changes) {
        if (changes.hasOwnProperty('nzVisible')) {
            const value = changes.nzVisible.currentValue;
            if (value) {
                this.open();
            }
            else {
                this.close();
            }
        }
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
        this.disposeOverlay();
    }
    getAnimationDuration() {
        return this.nzNoAnimation ? 0 : DRAWER_ANIMATE_DURATION;
    }
    close(result) {
        this.isOpen = false;
        this.updateOverlayStyle();
        this.overlayKeyboardDispatcher.remove(this.overlayRef);
        this.changeDetectorRef.detectChanges();
        setTimeout(() => {
            this.updateBodyOverflow();
            this.restoreFocus();
            this.nzAfterClose.next(result);
            this.nzAfterClose.complete();
        }, this.getAnimationDuration());
    }
    open() {
        this.isOpen = true;
        this.overlayKeyboardDispatcher.add(this.overlayRef);
        this.updateOverlayStyle();
        this.updateBodyOverflow();
        this.savePreviouslyFocusedElement();
        this.trapFocus();
        this.changeDetectorRef.detectChanges();
        setTimeout(() => {
            this.nzAfterOpen.next();
        }, this.getAnimationDuration());
    }
    closeClick() {
        this.nzOnClose.emit();
    }
    maskClick() {
        if (this.nzMaskClosable && this.nzMask) {
            this.nzOnClose.emit();
        }
    }
    attachBodyContent() {
        this.bodyPortalOutlet.dispose();
        if (this.nzContent instanceof Type) {
            const childInjector = new PortalInjector(this.injector, new WeakMap([[NzDrawerRef, this]]));
            const componentPortal = new ComponentPortal(this.nzContent, null, childInjector);
            const componentRef = this.bodyPortalOutlet.attachComponentPortal(componentPortal);
            Object.assign(componentRef.instance, this.nzContentParams);
            componentRef.changeDetectorRef.detectChanges();
        }
    }
    attachOverlay() {
        if (!this.overlayRef) {
            this.portal = new TemplatePortal(this.drawerTemplate, this.viewContainerRef);
            this.overlayRef = this.overlay.create(this.getOverlayConfig());
        }
        if (this.overlayRef && !this.overlayRef.hasAttached()) {
            this.overlayRef.attach(this.portal);
            this.overlayRef.keydownEvents()
                .pipe(takeUntil(this.destroy$))
                .subscribe((event) => {
                if (event.keyCode === ESCAPE && this.isOpen && this.nzKeyboard) {
                    this.nzOnClose.emit();
                }
            });
        }
    }
    disposeOverlay() {
        if (this.overlayRef) {
            this.overlayRef.dispose();
        }
        this.overlayRef = null;
    }
    getOverlayConfig() {
        return new OverlayConfig({
            positionStrategy: this.overlay.position().global(),
            scrollStrategy: this.overlay.scrollStrategies.block()
        });
    }
    updateOverlayStyle() {
        if (this.overlayRef && this.overlayRef.overlayElement) {
            this.renderer.setStyle(this.overlayRef.overlayElement, 'pointer-events', this.isOpen ? 'auto' : 'none');
        }
    }
    updateBodyOverflow() {
        if (this.overlayRef) {
            if (this.isOpen) {
                this.overlayRef.getConfig().scrollStrategy.enable();
            }
            else {
                this.overlayRef.getConfig().scrollStrategy.disable();
            }
        }
    }
    savePreviouslyFocusedElement() {
        if (this.document && !this.previouslyFocusedElement) {
            this.previouslyFocusedElement = this.document.activeElement;
            // We need the extra check, because IE's svg element has no blur method.
            if (this.previouslyFocusedElement && typeof this.previouslyFocusedElement.blur === 'function') {
                this.previouslyFocusedElement.blur();
            }
        }
    }
    trapFocus() {
        if (!this.focusTrap && this.overlayRef && this.overlayRef.overlayElement) {
            this.focusTrap = this.focusTrapFactory.create(this.overlayRef.overlayElement);
            this.focusTrap.focusInitialElement();
        }
    }
    restoreFocus() {
        // We need the extra check, because IE can set the `activeElement` to null in some cases.
        if (this.previouslyFocusedElement && typeof this.previouslyFocusedElement.focus === 'function') {
            this.previouslyFocusedElement.focus();
        }
        if (this.focusTrap) {
            this.focusTrap.destroy();
        }
    }
}
/** @nocollapse */ NzDrawerComponent.ɵfac = function NzDrawerComponent_Factory(t) { return new (t || NzDrawerComponent)(i0.ɵɵdirectiveInject(DOCUMENT, 8), i0.ɵɵdirectiveInject(i1.NzConfigService), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i2.Overlay), i0.ɵɵdirectiveInject(i0.Injector), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i3.FocusTrapFactory), i0.ɵɵdirectiveInject(i0.ViewContainerRef), i0.ɵɵdirectiveInject(i2.OverlayKeyboardDispatcher)); };
/** @nocollapse */ NzDrawerComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NzDrawerComponent, selectors: [["nz-drawer"]], viewQuery: function NzDrawerComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵstaticViewQuery(_c0, true);
        i0.ɵɵviewQuery(CdkPortalOutlet, true);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.drawerTemplate = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.bodyPortalOutlet = _t.first);
    } }, inputs: { nzContent: "nzContent", nzClosable: "nzClosable", nzMaskClosable: "nzMaskClosable", nzMask: "nzMask", nzNoAnimation: "nzNoAnimation", nzKeyboard: "nzKeyboard", nzTitle: "nzTitle", nzPlacement: "nzPlacement", nzMaskStyle: "nzMaskStyle", nzBodyStyle: "nzBodyStyle", nzWrapClassName: "nzWrapClassName", nzWidth: "nzWidth", nzHeight: "nzHeight", nzZIndex: "nzZIndex", nzOffsetX: "nzOffsetX", nzOffsetY: "nzOffsetY", nzVisible: "nzVisible" }, outputs: { nzOnViewInit: "nzOnViewInit", nzOnClose: "nzOnClose" }, exportAs: ["nzDrawer"], features: [i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature()], ngContentSelectors: _c1, decls: 2, vars: 0, consts: [["drawerTemplate", ""], [1, "ant-drawer", 3, "nzNoAnimation"], ["class", "ant-drawer-mask", 3, "ngStyle", "click", 4, "ngIf"], [1, "ant-drawer-content"], [1, "ant-drawer-wrapper-body"], [3, "ant-drawer-header", "ant-drawer-header-no-title", 4, "ngIf"], [1, "ant-drawer-body", 3, "ngStyle"], ["cdkPortalOutlet", ""], [4, "ngIf"], [1, "ant-drawer-mask", 3, "ngStyle", "click"], ["class", "ant-drawer-title", 4, "ngIf"], ["aria-label", "Close", "class", "ant-drawer-close", 3, "click", 4, "ngIf"], [1, "ant-drawer-title"], [4, "nzStringTemplateOutlet"], [3, "innerHTML"], ["aria-label", "Close", 1, "ant-drawer-close", 3, "click"], ["nz-icon", "", "nzType", "close"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"]], template: function NzDrawerComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵtemplate(0, NzDrawerComponent_ng_template_0_Template, 10, 20, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
    } }, directives: [i1.NzNoAnimationDirective, i4.NgIf, i4.NgStyle, i5.CdkPortalOutlet, i1.NzStringTemplateOutletDirective, i6.NzIconDirective, i4.NgTemplateOutlet], encapsulation: 2, changeDetection: 0 });
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
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzDrawerComponent, [{
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
            }] }, { type: i1.NzConfigService }, { type: i0.Renderer2 }, { type: i2.Overlay }, { type: i0.Injector }, { type: i0.ChangeDetectorRef }, { type: i3.FocusTrapFactory }, { type: i0.ViewContainerRef }, { type: i2.OverlayKeyboardDispatcher }]; }, { nzContent: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotZHJhd2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvZHJhd2VyLyIsInNvdXJjZXMiOlsibnotZHJhd2VyLmNvbXBvbmVudC50cyIsIm56LWRyYXdlci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBRUwsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsWUFBWSxFQUNaLE1BQU0sRUFDTixRQUFRLEVBQ1IsS0FBSyxFQUlMLFFBQVEsRUFDUixNQUFNLEVBQ04sU0FBUyxFQUVULFdBQVcsRUFDWCxJQUFJLEVBQ0osU0FBUyxFQUNULGdCQUFnQixFQUNqQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQWEsZ0JBQWdCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsT0FBTyxFQUFFLGFBQWEsRUFBRSx5QkFBeUIsRUFBYyxNQUFNLHNCQUFzQixDQUFDO0FBQ3JHLE9BQU8sRUFBRSxlQUFlLEVBQUUsZUFBZSxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUV2RyxPQUFPLEVBQWMsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxZQUFZLEVBQUUsZUFBZSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUMzRixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGlCQUFpQixDQUFDOzs7Ozs7Ozs7OztJQzdCMUMsOEJBQWdHO0lBQW5FLDRNQUFxQjtJQUF3QyxpQkFBTTs7O0lBQTlCLDhDQUF1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RUFBRSxZQUFZLEVBQUU7O2lEQUFpQjtBQUM1RDtJQUFmLFlBQVksRUFBRTs7d0RBQXVCO0FBQ3RCO0lBQWYsWUFBWSxFQUFFOztxREFBNEI7a0RBUHpDLGlCQUFpQjtjQVI3QixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLFdBQVc7Z0JBQ3JCLFFBQVEsRUFBRSxVQUFVO2dCQUNwQixXQUFXLEVBQUUsNEJBQTRCO2dCQUN6QyxtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDs7c0JBOEdJLFFBQVE7O3NCQUFJLE1BQU07dUJBQUMsUUFBUTs7a0JBMUc3QixLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFFTCxLQUFLOztrQkFTTCxNQUFNOztrQkFDTixNQUFNOztrQkFFTixTQUFTO21CQUFDLGdCQUFnQixFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTs7a0JBQzVDLFNBQVM7bUJBQUMsZUFBZSxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgRVNDQVBFIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2tleWNvZGVzJztcclxuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQge1xyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbmplY3QsXHJcbiAgSW5qZWN0b3IsXHJcbiAgSW5wdXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgT3B0aW9uYWwsXHJcbiAgT3V0cHV0LFxyXG4gIFJlbmRlcmVyMixcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFR5cGUsXHJcbiAgVmlld0NoaWxkLFxyXG4gIFZpZXdDb250YWluZXJSZWZcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IEZvY3VzVHJhcCwgRm9jdXNUcmFwRmFjdG9yeSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9hMTF5JztcclxuaW1wb3J0IHsgT3ZlcmxheSwgT3ZlcmxheUNvbmZpZywgT3ZlcmxheUtleWJvYXJkRGlzcGF0Y2hlciwgT3ZlcmxheVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcclxuaW1wb3J0IHsgQ2RrUG9ydGFsT3V0bGV0LCBDb21wb25lbnRQb3J0YWwsIFBvcnRhbEluamVjdG9yLCBUZW1wbGF0ZVBvcnRhbCB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xyXG5cclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5cclxuaW1wb3J0IHsgSW5wdXRCb29sZWFuLCBOekNvbmZpZ1NlcnZpY2UsIHRvQ3NzUGl4ZWwsIFdpdGhDb25maWcgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IE56RHJhd2VyT3B0aW9uc09mQ29tcG9uZW50LCBOekRyYXdlclBsYWNlbWVudCB9IGZyb20gJy4vbnotZHJhd2VyLW9wdGlvbnMnO1xyXG5pbXBvcnQgeyBOekRyYXdlclJlZiB9IGZyb20gJy4vbnotZHJhd2VyLXJlZic7XHJcblxyXG5leHBvcnQgY29uc3QgRFJBV0VSX0FOSU1BVEVfRFVSQVRJT04gPSAzMDA7XHJcblxyXG5jb25zdCBOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUgPSAnZHJhd2VyJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbnotZHJhd2VyJyxcclxuICBleHBvcnRBczogJ256RHJhd2VyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vbnotZHJhd2VyLmNvbXBvbmVudC5odG1sJyxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbmV4cG9ydCBjbGFzcyBOekRyYXdlckNvbXBvbmVudDxUID0gYW55LCBSID0gYW55LCBEID0gYW55PiBleHRlbmRzIE56RHJhd2VyUmVmPFI+XHJcbiAgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzLCBOekRyYXdlck9wdGlvbnNPZkNvbXBvbmVudCB7XHJcbiAgQElucHV0KCkgbnpDb250ZW50OiBUZW1wbGF0ZVJlZjx7ICRpbXBsaWNpdDogRDsgZHJhd2VyUmVmOiBOekRyYXdlclJlZjxSPiB9PiB8IFR5cGU8VD47XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56Q2xvc2FibGU6IGJvb2xlYW4gPSB0cnVlO1xyXG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSwgdHJ1ZSkgQElucHV0Qm9vbGVhbigpIG56TWFza0Nsb3NhYmxlOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSwgdHJ1ZSkgQElucHV0Qm9vbGVhbigpIG56TWFzazogYm9vbGVhbjtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpOb0FuaW1hdGlvbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuektleWJvYXJkOiBib29sZWFuID0gdHJ1ZTtcclxuICBASW5wdXQoKSBuelRpdGxlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx7fT47XHJcbiAgQElucHV0KCkgbnpQbGFjZW1lbnQ6IE56RHJhd2VyUGxhY2VtZW50ID0gJ3JpZ2h0JztcclxuICBASW5wdXQoKSBuek1hc2tTdHlsZTogb2JqZWN0ID0ge307XHJcbiAgQElucHV0KCkgbnpCb2R5U3R5bGU6IG9iamVjdCA9IHt9O1xyXG4gIEBJbnB1dCgpIG56V3JhcENsYXNzTmFtZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIG56V2lkdGg6IG51bWJlciB8IHN0cmluZyA9IDI1NjtcclxuICBASW5wdXQoKSBuekhlaWdodDogbnVtYmVyIHwgc3RyaW5nID0gMjU2O1xyXG4gIEBJbnB1dCgpIG56WkluZGV4ID0gMTAwMDtcclxuICBASW5wdXQoKSBuek9mZnNldFggPSAwO1xyXG4gIEBJbnB1dCgpIG56T2Zmc2V0WSA9IDA7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IG56VmlzaWJsZSh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5pc09wZW4gPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIGdldCBuelZpc2libGUoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5pc09wZW47XHJcbiAgfVxyXG5cclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpPblZpZXdJbml0ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuek9uQ2xvc2UgPSBuZXcgRXZlbnRFbWl0dGVyPE1vdXNlRXZlbnQ+KCk7XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ2RyYXdlclRlbXBsYXRlJywgeyBzdGF0aWM6IHRydWUgfSkgZHJhd2VyVGVtcGxhdGU6IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIEBWaWV3Q2hpbGQoQ2RrUG9ydGFsT3V0bGV0LCB7IHN0YXRpYzogZmFsc2UgfSkgYm9keVBvcnRhbE91dGxldDogQ2RrUG9ydGFsT3V0bGV0O1xyXG5cclxuICBkZXN0cm95JCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XHJcbiAgcHJldmlvdXNseUZvY3VzZWRFbGVtZW50OiBIVE1MRWxlbWVudDtcclxuICBuekNvbnRlbnRQYXJhbXM6IEQ7IC8vIG9ubHkgc2VydmljZVxyXG4gIG92ZXJsYXlSZWY6IE92ZXJsYXlSZWYgfCBudWxsO1xyXG4gIHBvcnRhbDogVGVtcGxhdGVQb3J0YWw7XHJcbiAgZm9jdXNUcmFwOiBGb2N1c1RyYXA7XHJcbiAgaXNPcGVuID0gZmFsc2U7XHJcbiAgdGVtcGxhdGVDb250ZXh0OiB7ICRpbXBsaWNpdDogRCB8IHVuZGVmaW5lZDsgZHJhd2VyUmVmOiBOekRyYXdlclJlZjxSPiB9ID0ge1xyXG4gICAgJGltcGxpY2l0OiB1bmRlZmluZWQsXHJcbiAgICBkcmF3ZXJSZWY6IHRoaXMgYXMgTnpEcmF3ZXJSZWY8Uj5cclxuICB9O1xyXG5cclxuICBnZXQgb2Zmc2V0VHJhbnNmb3JtKCk6IHN0cmluZyB8IG51bGwge1xyXG4gICAgaWYgKCF0aGlzLmlzT3BlbiB8fCB0aGlzLm56T2Zmc2V0WCArIHRoaXMubnpPZmZzZXRZID09PSAwKSB7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgc3dpdGNoICh0aGlzLm56UGxhY2VtZW50KSB7XHJcbiAgICAgIGNhc2UgJ2xlZnQnOlxyXG4gICAgICAgIHJldHVybiBgdHJhbnNsYXRlWCgke3RoaXMubnpPZmZzZXRYfXB4KWA7XHJcbiAgICAgIGNhc2UgJ3JpZ2h0JzpcclxuICAgICAgICByZXR1cm4gYHRyYW5zbGF0ZVgoLSR7dGhpcy5uek9mZnNldFh9cHgpYDtcclxuICAgICAgY2FzZSAndG9wJzpcclxuICAgICAgICByZXR1cm4gYHRyYW5zbGF0ZVkoJHt0aGlzLm56T2Zmc2V0WX1weClgO1xyXG4gICAgICBjYXNlICdib3R0b20nOlxyXG4gICAgICAgIHJldHVybiBgdHJhbnNsYXRlWSgtJHt0aGlzLm56T2Zmc2V0WX1weClgO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IHRyYW5zZm9ybSgpOiBzdHJpbmcgfCBudWxsIHtcclxuICAgIGlmICh0aGlzLmlzT3Blbikge1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBzd2l0Y2ggKHRoaXMubnpQbGFjZW1lbnQpIHtcclxuICAgICAgY2FzZSAnbGVmdCc6XHJcbiAgICAgICAgcmV0dXJuIGB0cmFuc2xhdGVYKC0xMDAlKWA7XHJcbiAgICAgIGNhc2UgJ3JpZ2h0JzpcclxuICAgICAgICByZXR1cm4gYHRyYW5zbGF0ZVgoMTAwJSlgO1xyXG4gICAgICBjYXNlICd0b3AnOlxyXG4gICAgICAgIHJldHVybiBgdHJhbnNsYXRlWSgtMTAwJSlgO1xyXG4gICAgICBjYXNlICdib3R0b20nOlxyXG4gICAgICAgIHJldHVybiBgdHJhbnNsYXRlWSgxMDAlKWA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgd2lkdGgoKTogc3RyaW5nIHwgbnVsbCB7XHJcbiAgICByZXR1cm4gdGhpcy5pc0xlZnRPclJpZ2h0ID8gdG9Dc3NQaXhlbCh0aGlzLm56V2lkdGgpIDogbnVsbDtcclxuICB9XHJcblxyXG4gIGdldCBoZWlnaHQoKTogc3RyaW5nIHwgbnVsbCB7XHJcbiAgICByZXR1cm4gIXRoaXMuaXNMZWZ0T3JSaWdodCA/IHRvQ3NzUGl4ZWwodGhpcy5uekhlaWdodCkgOiBudWxsO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGlzTGVmdE9yUmlnaHQoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5uelBsYWNlbWVudCA9PT0gJ2xlZnQnIHx8IHRoaXMubnpQbGFjZW1lbnQgPT09ICdyaWdodCc7XHJcbiAgfVxyXG5cclxuICBuekFmdGVyT3BlbiA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XHJcbiAgbnpBZnRlckNsb3NlID0gbmV3IFN1YmplY3Q8Uj4oKTtcclxuXHJcbiAgZ2V0IGFmdGVyT3BlbigpOiBPYnNlcnZhYmxlPHZvaWQ+IHtcclxuICAgIHJldHVybiB0aGlzLm56QWZ0ZXJPcGVuLmFzT2JzZXJ2YWJsZSgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGFmdGVyQ2xvc2UoKTogT2JzZXJ2YWJsZTxSPiB7XHJcbiAgICByZXR1cm4gdGhpcy5uekFmdGVyQ2xvc2UuYXNPYnNlcnZhYmxlKCk7XHJcbiAgfVxyXG5cclxuICBpc1RlbXBsYXRlUmVmKHZhbHVlOiB7fSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWY7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jdW1lbnQ6IGFueSxcclxuICAgIHB1YmxpYyBuekNvbmZpZ1NlcnZpY2U6IE56Q29uZmlnU2VydmljZSxcclxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICAgIHByaXZhdGUgb3ZlcmxheTogT3ZlcmxheSxcclxuICAgIHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yLFxyXG4gICAgcHJpdmF0ZSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICBwcml2YXRlIGZvY3VzVHJhcEZhY3Rvcnk6IEZvY3VzVHJhcEZhY3RvcnksXHJcbiAgICBwcml2YXRlIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsXHJcbiAgICBwcml2YXRlIG92ZXJsYXlLZXlib2FyZERpc3BhdGNoZXI6IE92ZXJsYXlLZXlib2FyZERpc3BhdGNoZXJcclxuICApIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuYXR0YWNoT3ZlcmxheSgpO1xyXG4gICAgdGhpcy51cGRhdGVPdmVybGF5U3R5bGUoKTtcclxuICAgIHRoaXMudXBkYXRlQm9keU92ZXJmbG93KCk7XHJcbiAgICB0aGlzLnRlbXBsYXRlQ29udGV4dCA9IHsgJGltcGxpY2l0OiB0aGlzLm56Q29udGVudFBhcmFtcywgZHJhd2VyUmVmOiB0aGlzIGFzIE56RHJhd2VyUmVmPFI+IH07XHJcbiAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuYXR0YWNoQm9keUNvbnRlbnQoKTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0aGlzLm56T25WaWV3SW5pdC5lbWl0KCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIGlmIChjaGFuZ2VzLmhhc093blByb3BlcnR5KCduelZpc2libGUnKSkge1xyXG4gICAgICBjb25zdCB2YWx1ZSA9IGNoYW5nZXMubnpWaXNpYmxlLmN1cnJlbnRWYWx1ZTtcclxuICAgICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5vcGVuKCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5jbG9zZSgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xyXG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xyXG4gICAgdGhpcy5kaXNwb3NlT3ZlcmxheSgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRBbmltYXRpb25EdXJhdGlvbigpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMubnpOb0FuaW1hdGlvbiA/IDAgOiBEUkFXRVJfQU5JTUFURV9EVVJBVElPTjtcclxuICB9XHJcblxyXG4gIGNsb3NlKHJlc3VsdD86IFIpOiB2b2lkIHtcclxuICAgIHRoaXMuaXNPcGVuID0gZmFsc2U7XHJcbiAgICB0aGlzLnVwZGF0ZU92ZXJsYXlTdHlsZSgpO1xyXG4gICAgdGhpcy5vdmVybGF5S2V5Ym9hcmREaXNwYXRjaGVyLnJlbW92ZSh0aGlzLm92ZXJsYXlSZWYhKTtcclxuICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRoaXMudXBkYXRlQm9keU92ZXJmbG93KCk7XHJcbiAgICAgIHRoaXMucmVzdG9yZUZvY3VzKCk7XHJcbiAgICAgIHRoaXMubnpBZnRlckNsb3NlLm5leHQocmVzdWx0KTtcclxuICAgICAgdGhpcy5uekFmdGVyQ2xvc2UuY29tcGxldGUoKTtcclxuICAgIH0sIHRoaXMuZ2V0QW5pbWF0aW9uRHVyYXRpb24oKSk7XHJcbiAgfVxyXG5cclxuICBvcGVuKCk6IHZvaWQge1xyXG4gICAgdGhpcy5pc09wZW4gPSB0cnVlO1xyXG4gICAgdGhpcy5vdmVybGF5S2V5Ym9hcmREaXNwYXRjaGVyLmFkZCh0aGlzLm92ZXJsYXlSZWYhKTtcclxuICAgIHRoaXMudXBkYXRlT3ZlcmxheVN0eWxlKCk7XHJcbiAgICB0aGlzLnVwZGF0ZUJvZHlPdmVyZmxvdygpO1xyXG4gICAgdGhpcy5zYXZlUHJldmlvdXNseUZvY3VzZWRFbGVtZW50KCk7XHJcbiAgICB0aGlzLnRyYXBGb2N1cygpO1xyXG4gICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgdGhpcy5uekFmdGVyT3Blbi5uZXh0KCk7XHJcbiAgICB9LCB0aGlzLmdldEFuaW1hdGlvbkR1cmF0aW9uKCkpO1xyXG4gIH1cclxuXHJcbiAgY2xvc2VDbGljaygpOiB2b2lkIHtcclxuICAgIHRoaXMubnpPbkNsb3NlLmVtaXQoKTtcclxuICB9XHJcblxyXG4gIG1hc2tDbGljaygpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLm56TWFza0Nsb3NhYmxlICYmIHRoaXMubnpNYXNrKSB7XHJcbiAgICAgIHRoaXMubnpPbkNsb3NlLmVtaXQoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgYXR0YWNoQm9keUNvbnRlbnQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmJvZHlQb3J0YWxPdXRsZXQuZGlzcG9zZSgpO1xyXG5cclxuICAgIGlmICh0aGlzLm56Q29udGVudCBpbnN0YW5jZW9mIFR5cGUpIHtcclxuICAgICAgY29uc3QgY2hpbGRJbmplY3RvciA9IG5ldyBQb3J0YWxJbmplY3Rvcih0aGlzLmluamVjdG9yLCBuZXcgV2Vha01hcChbW056RHJhd2VyUmVmLCB0aGlzXV0pKTtcclxuICAgICAgY29uc3QgY29tcG9uZW50UG9ydGFsID0gbmV3IENvbXBvbmVudFBvcnRhbDxUPih0aGlzLm56Q29udGVudCwgbnVsbCwgY2hpbGRJbmplY3Rvcik7XHJcbiAgICAgIGNvbnN0IGNvbXBvbmVudFJlZiA9IHRoaXMuYm9keVBvcnRhbE91dGxldC5hdHRhY2hDb21wb25lbnRQb3J0YWwoY29tcG9uZW50UG9ydGFsKTtcclxuICAgICAgT2JqZWN0LmFzc2lnbihjb21wb25lbnRSZWYuaW5zdGFuY2UsIHRoaXMubnpDb250ZW50UGFyYW1zKTtcclxuICAgICAgY29tcG9uZW50UmVmLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgYXR0YWNoT3ZlcmxheSgpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5vdmVybGF5UmVmKSB7XHJcbiAgICAgIHRoaXMucG9ydGFsID0gbmV3IFRlbXBsYXRlUG9ydGFsKHRoaXMuZHJhd2VyVGVtcGxhdGUsIHRoaXMudmlld0NvbnRhaW5lclJlZik7XHJcbiAgICAgIHRoaXMub3ZlcmxheVJlZiA9IHRoaXMub3ZlcmxheS5jcmVhdGUodGhpcy5nZXRPdmVybGF5Q29uZmlnKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLm92ZXJsYXlSZWYgJiYgIXRoaXMub3ZlcmxheVJlZi5oYXNBdHRhY2hlZCgpKSB7XHJcbiAgICAgIHRoaXMub3ZlcmxheVJlZi5hdHRhY2godGhpcy5wb3J0YWwpO1xyXG4gICAgICB0aGlzLm92ZXJsYXlSZWYhLmtleWRvd25FdmVudHMoKVxyXG4gICAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcclxuICAgICAgICAuc3Vic2NyaWJlKChldmVudDogS2V5Ym9hcmRFdmVudCkgPT4ge1xyXG4gICAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IEVTQ0FQRSAmJiB0aGlzLmlzT3BlbiAmJiB0aGlzLm56S2V5Ym9hcmQpIHtcclxuICAgICAgICAgICAgdGhpcy5uek9uQ2xvc2UuZW1pdCgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBkaXNwb3NlT3ZlcmxheSgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLm92ZXJsYXlSZWYpIHtcclxuICAgICAgdGhpcy5vdmVybGF5UmVmLmRpc3Bvc2UoKTtcclxuICAgIH1cclxuICAgIHRoaXMub3ZlcmxheVJlZiA9IG51bGw7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldE92ZXJsYXlDb25maWcoKTogT3ZlcmxheUNvbmZpZyB7XHJcbiAgICByZXR1cm4gbmV3IE92ZXJsYXlDb25maWcoe1xyXG4gICAgICBwb3NpdGlvblN0cmF0ZWd5OiB0aGlzLm92ZXJsYXkucG9zaXRpb24oKS5nbG9iYWwoKSxcclxuICAgICAgc2Nyb2xsU3RyYXRlZ3k6IHRoaXMub3ZlcmxheS5zY3JvbGxTdHJhdGVnaWVzLmJsb2NrKClcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB1cGRhdGVPdmVybGF5U3R5bGUoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5vdmVybGF5UmVmICYmIHRoaXMub3ZlcmxheVJlZi5vdmVybGF5RWxlbWVudCkge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMub3ZlcmxheVJlZi5vdmVybGF5RWxlbWVudCwgJ3BvaW50ZXItZXZlbnRzJywgdGhpcy5pc09wZW4gPyAnYXV0bycgOiAnbm9uZScpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB1cGRhdGVCb2R5T3ZlcmZsb3coKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5vdmVybGF5UmVmKSB7XHJcbiAgICAgIGlmICh0aGlzLmlzT3Blbikge1xyXG4gICAgICAgIHRoaXMub3ZlcmxheVJlZi5nZXRDb25maWcoKS5zY3JvbGxTdHJhdGVneSEuZW5hYmxlKCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5vdmVybGF5UmVmLmdldENvbmZpZygpLnNjcm9sbFN0cmF0ZWd5IS5kaXNhYmxlKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNhdmVQcmV2aW91c2x5Rm9jdXNlZEVsZW1lbnQoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5kb2N1bWVudCAmJiAhdGhpcy5wcmV2aW91c2x5Rm9jdXNlZEVsZW1lbnQpIHtcclxuICAgICAgdGhpcy5wcmV2aW91c2x5Rm9jdXNlZEVsZW1lbnQgPSB0aGlzLmRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICAgIC8vIFdlIG5lZWQgdGhlIGV4dHJhIGNoZWNrLCBiZWNhdXNlIElFJ3Mgc3ZnIGVsZW1lbnQgaGFzIG5vIGJsdXIgbWV0aG9kLlxyXG4gICAgICBpZiAodGhpcy5wcmV2aW91c2x5Rm9jdXNlZEVsZW1lbnQgJiYgdHlwZW9mIHRoaXMucHJldmlvdXNseUZvY3VzZWRFbGVtZW50LmJsdXIgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICB0aGlzLnByZXZpb3VzbHlGb2N1c2VkRWxlbWVudC5ibHVyKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgdHJhcEZvY3VzKCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLmZvY3VzVHJhcCAmJiB0aGlzLm92ZXJsYXlSZWYgJiYgdGhpcy5vdmVybGF5UmVmLm92ZXJsYXlFbGVtZW50KSB7XHJcbiAgICAgIHRoaXMuZm9jdXNUcmFwID0gdGhpcy5mb2N1c1RyYXBGYWN0b3J5LmNyZWF0ZSh0aGlzLm92ZXJsYXlSZWYhLm92ZXJsYXlFbGVtZW50KTtcclxuICAgICAgdGhpcy5mb2N1c1RyYXAuZm9jdXNJbml0aWFsRWxlbWVudCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZXN0b3JlRm9jdXMoKTogdm9pZCB7XHJcbiAgICAvLyBXZSBuZWVkIHRoZSBleHRyYSBjaGVjaywgYmVjYXVzZSBJRSBjYW4gc2V0IHRoZSBgYWN0aXZlRWxlbWVudGAgdG8gbnVsbCBpbiBzb21lIGNhc2VzLlxyXG4gICAgaWYgKHRoaXMucHJldmlvdXNseUZvY3VzZWRFbGVtZW50ICYmIHR5cGVvZiB0aGlzLnByZXZpb3VzbHlGb2N1c2VkRWxlbWVudC5mb2N1cyA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICB0aGlzLnByZXZpb3VzbHlGb2N1c2VkRWxlbWVudC5mb2N1cygpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuZm9jdXNUcmFwKSB7XHJcbiAgICAgIHRoaXMuZm9jdXNUcmFwLmRlc3Ryb3koKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiPG5nLXRlbXBsYXRlICNkcmF3ZXJUZW1wbGF0ZT5cclxuICA8ZGl2XHJcbiAgICBjbGFzcz1cImFudC1kcmF3ZXJcIlxyXG4gICAgW256Tm9BbmltYXRpb25dPVwibnpOb0FuaW1hdGlvblwiXHJcbiAgICBbY2xhc3MuYW50LWRyYXdlci1vcGVuXT1cImlzT3BlblwiXHJcbiAgICBbY2xhc3MuYW50LWRyYXdlci10b3BdPVwibnpQbGFjZW1lbnQgPT09ICd0b3AnXCJcclxuICAgIFtjbGFzcy5hbnQtZHJhd2VyLWJvdHRvbV09XCJuelBsYWNlbWVudCA9PT0gJ2JvdHRvbSdcIlxyXG4gICAgW2NsYXNzLmFudC1kcmF3ZXItcmlnaHRdPVwibnpQbGFjZW1lbnQgPT09ICdyaWdodCdcIlxyXG4gICAgW2NsYXNzLmFudC1kcmF3ZXItbGVmdF09XCJuelBsYWNlbWVudCA9PT0gJ2xlZnQnXCJcclxuICAgIFtzdHlsZS50cmFuc2Zvcm1dPVwib2Zmc2V0VHJhbnNmb3JtXCJcclxuICAgIFtzdHlsZS56SW5kZXhdPVwibnpaSW5kZXhcIlxyXG4gID5cclxuICAgIDxkaXYgY2xhc3M9XCJhbnQtZHJhd2VyLW1hc2tcIiAoY2xpY2spPVwibWFza0NsaWNrKClcIiAqbmdJZj1cIm56TWFza1wiIFtuZ1N0eWxlXT1cIm56TWFza1N0eWxlXCI+PC9kaXY+XHJcbiAgICA8ZGl2XHJcbiAgICAgIGNsYXNzPVwiYW50LWRyYXdlci1jb250ZW50LXdyYXBwZXIge3sgbnpXcmFwQ2xhc3NOYW1lIH19XCJcclxuICAgICAgW3N0eWxlLndpZHRoXT1cIndpZHRoXCJcclxuICAgICAgW3N0eWxlLmhlaWdodF09XCJoZWlnaHRcIlxyXG4gICAgICBbc3R5bGUudHJhbnNmb3JtXT1cInRyYW5zZm9ybVwiXHJcbiAgICA+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJhbnQtZHJhd2VyLWNvbnRlbnRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiYW50LWRyYXdlci13cmFwcGVyLWJvZHlcIiBbc3R5bGUuaGVpZ2h0XT1cImlzTGVmdE9yUmlnaHQgPyAnMTAwJScgOiBudWxsXCI+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICpuZ0lmPVwibnpUaXRsZSB8fCBuekNsb3NhYmxlXCJcclxuICAgICAgICAgICAgW2NsYXNzLmFudC1kcmF3ZXItaGVhZGVyXT1cIiEhbnpUaXRsZVwiXHJcbiAgICAgICAgICAgIFtjbGFzcy5hbnQtZHJhd2VyLWhlYWRlci1uby10aXRsZV09XCIhIW56VGl0bGVcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2ICpuZ0lmPVwibnpUaXRsZVwiIGNsYXNzPVwiYW50LWRyYXdlci10aXRsZVwiPlxyXG4gICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm56U3RyaW5nVGVtcGxhdGVPdXRsZXQ9XCJuelRpdGxlXCJcclxuICAgICAgICAgICAgICAgID48ZGl2IFtpbm5lckhUTUxdPVwibnpUaXRsZVwiPjwvZGl2XHJcbiAgICAgICAgICAgICAgPjwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICpuZ0lmPVwibnpDbG9zYWJsZVwiXHJcbiAgICAgICAgICAgICAgKGNsaWNrKT1cImNsb3NlQ2xpY2soKVwiXHJcbiAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkNsb3NlXCJcclxuICAgICAgICAgICAgICBjbGFzcz1cImFudC1kcmF3ZXItY2xvc2VcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGkgbnotaWNvbiBuelR5cGU9XCJjbG9zZVwiPjwvaT5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJhbnQtZHJhd2VyLWJvZHlcIiBbbmdTdHlsZV09XCJuekJvZHlTdHlsZVwiPlxyXG4gICAgICAgICAgICA8bmctdGVtcGxhdGUgY2RrUG9ydGFsT3V0bGV0PjwvbmctdGVtcGxhdGU+XHJcbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJpc1RlbXBsYXRlUmVmKG56Q29udGVudClcIj5cclxuICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwibnpDb250ZW50OyBjb250ZXh0OiB0ZW1wbGF0ZUNvbnRleHRcIj48L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgIDxuZy1jb250ZW50ICpuZ0lmPVwiIW56Q29udGVudFwiPjwvbmctY29udGVudD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L25nLXRlbXBsYXRlPlxyXG4iXX0=