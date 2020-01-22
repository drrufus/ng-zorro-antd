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
import { ESCAPE } from '@angular/cdk/keycodes';
import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Inject, Injector, Input, Optional, Output, Renderer2, TemplateRef, Type, ViewChild, ViewContainerRef } from '@angular/core';
import { FocusTrapFactory } from '@angular/cdk/a11y';
import { Overlay, OverlayConfig, OverlayKeyboardDispatcher } from '@angular/cdk/overlay';
import { CdkPortalOutlet, ComponentPortal, PortalInjector, TemplatePortal } from '@angular/cdk/portal';
import { Subject } from 'rxjs';
import { toCssPixel, InputBoolean, NzConfigService, WithConfig } from 'ng-zorro-antd/core';
import { takeUntil } from 'rxjs/operators';
import { NzDrawerRef } from './nz-drawer-ref';
/** @type {?} */
export var DRAWER_ANIMATE_DURATION = 300;
/** @type {?} */
var NZ_CONFIG_COMPONENT_NAME = 'drawer';
/**
 * @template T, R, D
 */
var NzDrawerComponent = /** @class */ (function (_super) {
    tslib_1.__extends(NzDrawerComponent, _super);
    function NzDrawerComponent(document, nzConfigService, renderer, overlay, injector, changeDetectorRef, focusTrapFactory, viewContainerRef, overlayKeyboardDispatcher) {
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
            drawerRef: (/** @type {?} */ (_this))
        };
        _this.nzAfterOpen = new Subject();
        _this.nzAfterClose = new Subject();
        return _this;
    }
    Object.defineProperty(NzDrawerComponent.prototype, "nzVisible", {
        get: /**
         * @return {?}
         */
        function () {
            return this.isOpen;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.isOpen = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzDrawerComponent.prototype, "offsetTransform", {
        get: /**
         * @return {?}
         */
        function () {
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
        get: /**
         * @return {?}
         */
        function () {
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
        get: /**
         * @return {?}
         */
        function () {
            return this.isLeftOrRight ? toCssPixel(this.nzWidth) : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzDrawerComponent.prototype, "height", {
        get: /**
         * @return {?}
         */
        function () {
            return !this.isLeftOrRight ? toCssPixel(this.nzHeight) : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzDrawerComponent.prototype, "isLeftOrRight", {
        get: /**
         * @return {?}
         */
        function () {
            return this.nzPlacement === 'left' || this.nzPlacement === 'right';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzDrawerComponent.prototype, "afterOpen", {
        get: /**
         * @return {?}
         */
        function () {
            return this.nzAfterOpen.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzDrawerComponent.prototype, "afterClose", {
        get: /**
         * @return {?}
         */
        function () {
            return this.nzAfterClose.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} value
     * @return {?}
     */
    NzDrawerComponent.prototype.isTemplateRef = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return value instanceof TemplateRef;
    };
    /**
     * @return {?}
     */
    NzDrawerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.attachOverlay();
        this.updateOverlayStyle();
        this.updateBodyOverflow();
        this.templateContext = { $implicit: this.nzContentParams, drawerRef: (/** @type {?} */ (this)) };
        this.changeDetectorRef.detectChanges();
    };
    /**
     * @return {?}
     */
    NzDrawerComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.attachBodyContent();
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.nzOnViewInit.emit();
        }));
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NzDrawerComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.hasOwnProperty('nzVisible')) {
            /** @type {?} */
            var value = changes.nzVisible.currentValue;
            if (value) {
                this.open();
            }
            else {
                this.close();
            }
        }
    };
    /**
     * @return {?}
     */
    NzDrawerComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy$.next();
        this.destroy$.complete();
        this.disposeOverlay();
    };
    /**
     * @private
     * @return {?}
     */
    NzDrawerComponent.prototype.getAnimationDuration = /**
     * @private
     * @return {?}
     */
    function () {
        return this.nzNoAnimation ? 0 : DRAWER_ANIMATE_DURATION;
    };
    /**
     * @param {?=} result
     * @return {?}
     */
    NzDrawerComponent.prototype.close = /**
     * @param {?=} result
     * @return {?}
     */
    function (result) {
        var _this = this;
        this.isOpen = false;
        this.updateOverlayStyle();
        this.overlayKeyboardDispatcher.remove((/** @type {?} */ (this.overlayRef)));
        this.changeDetectorRef.detectChanges();
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.updateBodyOverflow();
            _this.restoreFocus();
            _this.nzAfterClose.next(result);
            _this.nzAfterClose.complete();
        }), this.getAnimationDuration());
    };
    /**
     * @return {?}
     */
    NzDrawerComponent.prototype.open = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.isOpen = true;
        this.overlayKeyboardDispatcher.add((/** @type {?} */ (this.overlayRef)));
        this.updateOverlayStyle();
        this.updateBodyOverflow();
        this.savePreviouslyFocusedElement();
        this.trapFocus();
        this.changeDetectorRef.detectChanges();
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.nzAfterOpen.next();
        }), this.getAnimationDuration());
    };
    /**
     * @return {?}
     */
    NzDrawerComponent.prototype.closeClick = /**
     * @return {?}
     */
    function () {
        this.nzOnClose.emit();
    };
    /**
     * @return {?}
     */
    NzDrawerComponent.prototype.maskClick = /**
     * @return {?}
     */
    function () {
        if (this.nzMaskClosable && this.nzMask) {
            this.nzOnClose.emit();
        }
    };
    /**
     * @private
     * @return {?}
     */
    NzDrawerComponent.prototype.attachBodyContent = /**
     * @private
     * @return {?}
     */
    function () {
        this.bodyPortalOutlet.dispose();
        if (this.nzContent instanceof Type) {
            /** @type {?} */
            var childInjector = new PortalInjector(this.injector, new WeakMap([[NzDrawerRef, this]]));
            /** @type {?} */
            var componentPortal = new ComponentPortal(this.nzContent, null, childInjector);
            /** @type {?} */
            var componentRef = this.bodyPortalOutlet.attachComponentPortal(componentPortal);
            Object.assign(componentRef.instance, this.nzContentParams);
            componentRef.changeDetectorRef.detectChanges();
        }
    };
    /**
     * @private
     * @return {?}
     */
    NzDrawerComponent.prototype.attachOverlay = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.overlayRef) {
            this.portal = new TemplatePortal(this.drawerTemplate, this.viewContainerRef);
            this.overlayRef = this.overlay.create(this.getOverlayConfig());
        }
        if (this.overlayRef && !this.overlayRef.hasAttached()) {
            this.overlayRef.attach(this.portal);
            (/** @type {?} */ (this.overlayRef)).keydownEvents()
                .pipe(takeUntil(this.destroy$))
                .subscribe((/**
             * @param {?} event
             * @return {?}
             */
            function (event) {
                if (event.keyCode === ESCAPE && _this.isOpen && _this.nzKeyboard) {
                    _this.nzOnClose.emit();
                }
            }));
        }
    };
    /**
     * @private
     * @return {?}
     */
    NzDrawerComponent.prototype.disposeOverlay = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.overlayRef) {
            this.overlayRef.dispose();
        }
        this.overlayRef = null;
    };
    /**
     * @private
     * @return {?}
     */
    NzDrawerComponent.prototype.getOverlayConfig = /**
     * @private
     * @return {?}
     */
    function () {
        return new OverlayConfig({
            positionStrategy: this.overlay.position().global(),
            scrollStrategy: this.overlay.scrollStrategies.block()
        });
    };
    /**
     * @private
     * @return {?}
     */
    NzDrawerComponent.prototype.updateOverlayStyle = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.overlayRef && this.overlayRef.overlayElement) {
            this.renderer.setStyle(this.overlayRef.overlayElement, 'pointer-events', this.isOpen ? 'auto' : 'none');
        }
    };
    /**
     * @private
     * @return {?}
     */
    NzDrawerComponent.prototype.updateBodyOverflow = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.overlayRef) {
            if (this.isOpen) {
                (/** @type {?} */ (this.overlayRef.getConfig().scrollStrategy)).enable();
            }
            else {
                (/** @type {?} */ (this.overlayRef.getConfig().scrollStrategy)).disable();
            }
        }
    };
    /**
     * @return {?}
     */
    NzDrawerComponent.prototype.savePreviouslyFocusedElement = /**
     * @return {?}
     */
    function () {
        if (this.document && !this.previouslyFocusedElement) {
            this.previouslyFocusedElement = (/** @type {?} */ (this.document.activeElement));
            // We need the extra check, because IE's svg element has no blur method.
            if (this.previouslyFocusedElement && typeof this.previouslyFocusedElement.blur === 'function') {
                this.previouslyFocusedElement.blur();
            }
        }
    };
    /**
     * @private
     * @return {?}
     */
    NzDrawerComponent.prototype.trapFocus = /**
     * @private
     * @return {?}
     */
    function () {
        if (!this.focusTrap && this.overlayRef && this.overlayRef.overlayElement) {
            this.focusTrap = this.focusTrapFactory.create((/** @type {?} */ (this.overlayRef)).overlayElement);
            this.focusTrap.focusInitialElement();
        }
    };
    /**
     * @private
     * @return {?}
     */
    NzDrawerComponent.prototype.restoreFocus = /**
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
        }
    };
    NzDrawerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-drawer',
                    exportAs: 'nzDrawer',
                    template: "<ng-template #drawerTemplate>\r\n  <div\r\n    class=\"ant-drawer\"\r\n    [nzNoAnimation]=\"nzNoAnimation\"\r\n    [class.ant-drawer-open]=\"isOpen\"\r\n    [class.ant-drawer-top]=\"nzPlacement === 'top'\"\r\n    [class.ant-drawer-bottom]=\"nzPlacement === 'bottom'\"\r\n    [class.ant-drawer-right]=\"nzPlacement === 'right'\"\r\n    [class.ant-drawer-left]=\"nzPlacement === 'left'\"\r\n    [style.transform]=\"offsetTransform\"\r\n    [style.zIndex]=\"nzZIndex\">\r\n    <div  class=\"ant-drawer-mask\" (click)=\"maskClick()\" *ngIf=\"nzMask\" [ngStyle]=\"nzMaskStyle\"></div>\r\n    <div class=\"ant-drawer-content-wrapper {{ nzWrapClassName }}\"\r\n         [style.width]=\"width\"\r\n         [style.height]=\"height\"\r\n         [style.transform]=\"transform\">\r\n      <div class=\"ant-drawer-content\">\r\n        <div class=\"ant-drawer-wrapper-body\" [style.height]=\"isLeftOrRight ? '100%' : null\">\r\n          <div *ngIf=\"nzTitle || nzClosable\"\r\n            [class.ant-drawer-header]=\"!!nzTitle\"\r\n            [class.ant-drawer-header-no-title]=\"!!nzTitle\">\r\n            <div *ngIf=\"nzTitle\" class=\"ant-drawer-title\">\r\n              <ng-container *nzStringTemplateOutlet=\"nzTitle\"><div [innerHTML]=\"nzTitle\"></div></ng-container>\r\n            </div>\r\n            <button *ngIf=\"nzClosable\" (click)=\"closeClick()\" aria-label=\"Close\" class=\"ant-drawer-close\">\r\n              <i nz-icon nzType=\"close\"></i>\r\n            </button>\r\n          </div>\r\n          <div class=\"ant-drawer-body\" [ngStyle]=\"nzBodyStyle\">\r\n            <ng-template cdkPortalOutlet></ng-template>\r\n            <ng-container *ngIf=\"isTemplateRef(nzContent)\">\r\n              <ng-container *ngTemplateOutlet=\"nzContent; context: templateContext\"></ng-container>\r\n            </ng-container>\r\n            <ng-content *ngIf=\"!nzContent\"></ng-content>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n",
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    NzDrawerComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [DOCUMENT,] }] },
        { type: NzConfigService },
        { type: Renderer2 },
        { type: Overlay },
        { type: Injector },
        { type: ChangeDetectorRef },
        { type: FocusTrapFactory },
        { type: ViewContainerRef },
        { type: OverlayKeyboardDispatcher }
    ]; };
    NzDrawerComponent.propDecorators = {
        nzContent: [{ type: Input }],
        nzClosable: [{ type: Input }],
        nzMaskClosable: [{ type: Input }],
        nzMask: [{ type: Input }],
        nzNoAnimation: [{ type: Input }],
        nzKeyboard: [{ type: Input }],
        nzTitle: [{ type: Input }],
        nzPlacement: [{ type: Input }],
        nzMaskStyle: [{ type: Input }],
        nzBodyStyle: [{ type: Input }],
        nzWrapClassName: [{ type: Input }],
        nzWidth: [{ type: Input }],
        nzHeight: [{ type: Input }],
        nzZIndex: [{ type: Input }],
        nzOffsetX: [{ type: Input }],
        nzOffsetY: [{ type: Input }],
        nzVisible: [{ type: Input }],
        nzOnViewInit: [{ type: Output }],
        nzOnClose: [{ type: Output }],
        drawerTemplate: [{ type: ViewChild, args: ['drawerTemplate', { static: true },] }],
        bodyPortalOutlet: [{ type: ViewChild, args: [CdkPortalOutlet, { static: false },] }]
    };
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Boolean)
    ], NzDrawerComponent.prototype, "nzClosable", void 0);
    tslib_1.__decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME, true), InputBoolean(),
        tslib_1.__metadata("design:type", Boolean)
    ], NzDrawerComponent.prototype, "nzMaskClosable", void 0);
    tslib_1.__decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME, true), InputBoolean(),
        tslib_1.__metadata("design:type", Boolean)
    ], NzDrawerComponent.prototype, "nzMask", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzDrawerComponent.prototype, "nzNoAnimation", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Boolean)
    ], NzDrawerComponent.prototype, "nzKeyboard", void 0);
    return NzDrawerComponent;
}(NzDrawerRef));
export { NzDrawerComponent };
if (false) {
    /** @type {?} */
    NzDrawerComponent.prototype.nzContent;
    /** @type {?} */
    NzDrawerComponent.prototype.nzClosable;
    /** @type {?} */
    NzDrawerComponent.prototype.nzMaskClosable;
    /** @type {?} */
    NzDrawerComponent.prototype.nzMask;
    /** @type {?} */
    NzDrawerComponent.prototype.nzNoAnimation;
    /** @type {?} */
    NzDrawerComponent.prototype.nzKeyboard;
    /** @type {?} */
    NzDrawerComponent.prototype.nzTitle;
    /** @type {?} */
    NzDrawerComponent.prototype.nzPlacement;
    /** @type {?} */
    NzDrawerComponent.prototype.nzMaskStyle;
    /** @type {?} */
    NzDrawerComponent.prototype.nzBodyStyle;
    /** @type {?} */
    NzDrawerComponent.prototype.nzWrapClassName;
    /** @type {?} */
    NzDrawerComponent.prototype.nzWidth;
    /** @type {?} */
    NzDrawerComponent.prototype.nzHeight;
    /** @type {?} */
    NzDrawerComponent.prototype.nzZIndex;
    /** @type {?} */
    NzDrawerComponent.prototype.nzOffsetX;
    /** @type {?} */
    NzDrawerComponent.prototype.nzOffsetY;
    /** @type {?} */
    NzDrawerComponent.prototype.nzOnViewInit;
    /** @type {?} */
    NzDrawerComponent.prototype.nzOnClose;
    /** @type {?} */
    NzDrawerComponent.prototype.drawerTemplate;
    /** @type {?} */
    NzDrawerComponent.prototype.bodyPortalOutlet;
    /** @type {?} */
    NzDrawerComponent.prototype.destroy$;
    /** @type {?} */
    NzDrawerComponent.prototype.previouslyFocusedElement;
    /** @type {?} */
    NzDrawerComponent.prototype.nzContentParams;
    /** @type {?} */
    NzDrawerComponent.prototype.overlayRef;
    /** @type {?} */
    NzDrawerComponent.prototype.portal;
    /** @type {?} */
    NzDrawerComponent.prototype.focusTrap;
    /** @type {?} */
    NzDrawerComponent.prototype.isOpen;
    /** @type {?} */
    NzDrawerComponent.prototype.templateContext;
    /** @type {?} */
    NzDrawerComponent.prototype.nzAfterOpen;
    /** @type {?} */
    NzDrawerComponent.prototype.nzAfterClose;
    /**
     * @type {?}
     * @private
     */
    NzDrawerComponent.prototype.document;
    /** @type {?} */
    NzDrawerComponent.prototype.nzConfigService;
    /**
     * @type {?}
     * @private
     */
    NzDrawerComponent.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    NzDrawerComponent.prototype.overlay;
    /**
     * @type {?}
     * @private
     */
    NzDrawerComponent.prototype.injector;
    /**
     * @type {?}
     * @private
     */
    NzDrawerComponent.prototype.changeDetectorRef;
    /**
     * @type {?}
     * @private
     */
    NzDrawerComponent.prototype.focusTrapFactory;
    /**
     * @type {?}
     * @private
     */
    NzDrawerComponent.prototype.viewContainerRef;
    /**
     * @type {?}
     * @private
     */
    NzDrawerComponent.prototype.overlayKeyboardDispatcher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotZHJhd2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvZHJhd2VyLyIsInNvdXJjZXMiOlsibnotZHJhd2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFFTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxZQUFZLEVBQ1osTUFBTSxFQUNOLFFBQVEsRUFDUixLQUFLLEVBSUwsUUFBUSxFQUNSLE1BQU0sRUFDTixTQUFTLEVBRVQsV0FBVyxFQUNYLElBQUksRUFDSixTQUFTLEVBQ1QsZ0JBQWdCLEVBQ2pCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBYSxnQkFBZ0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxPQUFPLEVBQUUsYUFBYSxFQUFFLHlCQUF5QixFQUFjLE1BQU0sc0JBQXNCLENBQUM7QUFDckcsT0FBTyxFQUFFLGVBQWUsRUFBRSxlQUFlLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRXZHLE9BQU8sRUFBYyxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsZUFBZSxFQUFFLFVBQVUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQzNGLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0saUJBQWlCLENBQUM7O0FBRTlDLE1BQU0sS0FBTyx1QkFBdUIsR0FBRyxHQUFHOztJQUVwQyx3QkFBd0IsR0FBRyxRQUFROzs7O0FBRXpDO0lBUWtFLDZDQUFjO0lBMEc5RSwyQkFFd0Ms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QVksRUFBRTs7cURBQWlCO0lBQzVEO1FBQWYsWUFBWSxFQUFFOzs0REFBdUI7SUFDdEI7UUFBZixZQUFZLEVBQUU7O3lEQUE0QjtJQWdSdEQsd0JBQUM7Q0FBQSxBQS9SRCxDQVFrRSxXQUFXLEdBdVI1RTtTQXZSWSxpQkFBaUI7OztJQUU1QixzQ0FBdUY7O0lBQ3ZGLHVDQUFvRDs7SUFDcEQsMkNBQTZGOztJQUM3RixtQ0FBcUY7O0lBQ3JGLDBDQUErQzs7SUFDL0MsdUNBQW9EOztJQUNwRCxvQ0FBMkM7O0lBQzNDLHdDQUFrRDs7SUFDbEQsd0NBQWtDOztJQUNsQyx3Q0FBa0M7O0lBQ2xDLDRDQUFpQzs7SUFDakMsb0NBQXdDOztJQUN4QyxxQ0FBeUM7O0lBQ3pDLHFDQUF5Qjs7SUFDekIsc0NBQXVCOztJQUN2QixzQ0FBdUI7O0lBV3ZCLHlDQUEyRDs7SUFDM0Qsc0NBQThEOztJQUU5RCwyQ0FBaUY7O0lBQ2pGLDZDQUFpRjs7SUFFakYscUNBQStCOztJQUMvQixxREFBc0M7O0lBQ3RDLDRDQUFtQjs7SUFDbkIsdUNBQThCOztJQUM5QixtQ0FBdUI7O0lBQ3ZCLHNDQUFxQjs7SUFDckIsbUNBQWU7O0lBQ2YsNENBR0U7O0lBK0NGLHdDQUFrQzs7SUFDbEMseUNBQWdDOzs7OztJQWdCOUIscUNBQW1EOztJQUNuRCw0Q0FBdUM7Ozs7O0lBQ3ZDLHFDQUEyQjs7Ozs7SUFDM0Isb0NBQXdCOzs7OztJQUN4QixxQ0FBMEI7Ozs7O0lBQzFCLDhDQUE0Qzs7Ozs7SUFDNUMsNkNBQTBDOzs7OztJQUMxQyw2Q0FBMEM7Ozs7O0lBQzFDLHNEQUE0RCIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgRVNDQVBFIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2tleWNvZGVzJztcclxuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQge1xyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbmplY3QsXHJcbiAgSW5qZWN0b3IsXHJcbiAgSW5wdXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgT3B0aW9uYWwsXHJcbiAgT3V0cHV0LFxyXG4gIFJlbmRlcmVyMixcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFR5cGUsXHJcbiAgVmlld0NoaWxkLFxyXG4gIFZpZXdDb250YWluZXJSZWZcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IEZvY3VzVHJhcCwgRm9jdXNUcmFwRmFjdG9yeSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9hMTF5JztcclxuaW1wb3J0IHsgT3ZlcmxheSwgT3ZlcmxheUNvbmZpZywgT3ZlcmxheUtleWJvYXJkRGlzcGF0Y2hlciwgT3ZlcmxheVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcclxuaW1wb3J0IHsgQ2RrUG9ydGFsT3V0bGV0LCBDb21wb25lbnRQb3J0YWwsIFBvcnRhbEluamVjdG9yLCBUZW1wbGF0ZVBvcnRhbCB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xyXG5cclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5cclxuaW1wb3J0IHsgdG9Dc3NQaXhlbCwgSW5wdXRCb29sZWFuLCBOekNvbmZpZ1NlcnZpY2UsIFdpdGhDb25maWcgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IE56RHJhd2VyT3B0aW9uc09mQ29tcG9uZW50LCBOekRyYXdlclBsYWNlbWVudCB9IGZyb20gJy4vbnotZHJhd2VyLW9wdGlvbnMnO1xyXG5pbXBvcnQgeyBOekRyYXdlclJlZiB9IGZyb20gJy4vbnotZHJhd2VyLXJlZic7XHJcblxyXG5leHBvcnQgY29uc3QgRFJBV0VSX0FOSU1BVEVfRFVSQVRJT04gPSAzMDA7XHJcblxyXG5jb25zdCBOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUgPSAnZHJhd2VyJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbnotZHJhd2VyJyxcclxuICBleHBvcnRBczogJ256RHJhd2VyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vbnotZHJhd2VyLmNvbXBvbmVudC5odG1sJyxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbmV4cG9ydCBjbGFzcyBOekRyYXdlckNvbXBvbmVudDxUID0gYW55LCBSID0gYW55LCBEID0gYW55PiBleHRlbmRzIE56RHJhd2VyUmVmPFI+XHJcbiAgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzLCBOekRyYXdlck9wdGlvbnNPZkNvbXBvbmVudCB7XHJcbiAgQElucHV0KCkgbnpDb250ZW50OiBUZW1wbGF0ZVJlZjx7ICRpbXBsaWNpdDogRDsgZHJhd2VyUmVmOiBOekRyYXdlclJlZjxSPiB9PiB8IFR5cGU8VD47XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56Q2xvc2FibGU6IGJvb2xlYW4gPSB0cnVlO1xyXG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSwgdHJ1ZSkgQElucHV0Qm9vbGVhbigpIG56TWFza0Nsb3NhYmxlOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSwgdHJ1ZSkgQElucHV0Qm9vbGVhbigpIG56TWFzazogYm9vbGVhbjtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpOb0FuaW1hdGlvbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuektleWJvYXJkOiBib29sZWFuID0gdHJ1ZTtcclxuICBASW5wdXQoKSBuelRpdGxlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx7fT47XHJcbiAgQElucHV0KCkgbnpQbGFjZW1lbnQ6IE56RHJhd2VyUGxhY2VtZW50ID0gJ3JpZ2h0JztcclxuICBASW5wdXQoKSBuek1hc2tTdHlsZTogb2JqZWN0ID0ge307XHJcbiAgQElucHV0KCkgbnpCb2R5U3R5bGU6IG9iamVjdCA9IHt9O1xyXG4gIEBJbnB1dCgpIG56V3JhcENsYXNzTmFtZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIG56V2lkdGg6IG51bWJlciB8IHN0cmluZyA9IDI1NjtcclxuICBASW5wdXQoKSBuekhlaWdodDogbnVtYmVyIHwgc3RyaW5nID0gMjU2O1xyXG4gIEBJbnB1dCgpIG56WkluZGV4ID0gMTAwMDtcclxuICBASW5wdXQoKSBuek9mZnNldFggPSAwO1xyXG4gIEBJbnB1dCgpIG56T2Zmc2V0WSA9IDA7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IG56VmlzaWJsZSh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5pc09wZW4gPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIGdldCBuelZpc2libGUoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5pc09wZW47XHJcbiAgfVxyXG5cclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpPblZpZXdJbml0ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuek9uQ2xvc2UgPSBuZXcgRXZlbnRFbWl0dGVyPE1vdXNlRXZlbnQ+KCk7XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ2RyYXdlclRlbXBsYXRlJywgeyBzdGF0aWM6IHRydWUgfSkgZHJhd2VyVGVtcGxhdGU6IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIEBWaWV3Q2hpbGQoQ2RrUG9ydGFsT3V0bGV0LCB7IHN0YXRpYzogZmFsc2UgfSkgYm9keVBvcnRhbE91dGxldDogQ2RrUG9ydGFsT3V0bGV0O1xyXG5cclxuICBkZXN0cm95JCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XHJcbiAgcHJldmlvdXNseUZvY3VzZWRFbGVtZW50OiBIVE1MRWxlbWVudDtcclxuICBuekNvbnRlbnRQYXJhbXM6IEQ7IC8vIG9ubHkgc2VydmljZVxyXG4gIG92ZXJsYXlSZWY6IE92ZXJsYXlSZWYgfCBudWxsO1xyXG4gIHBvcnRhbDogVGVtcGxhdGVQb3J0YWw7XHJcbiAgZm9jdXNUcmFwOiBGb2N1c1RyYXA7XHJcbiAgaXNPcGVuID0gZmFsc2U7XHJcbiAgdGVtcGxhdGVDb250ZXh0OiB7ICRpbXBsaWNpdDogRCB8IHVuZGVmaW5lZDsgZHJhd2VyUmVmOiBOekRyYXdlclJlZjxSPiB9ID0ge1xyXG4gICAgJGltcGxpY2l0OiB1bmRlZmluZWQsXHJcbiAgICBkcmF3ZXJSZWY6IHRoaXMgYXMgTnpEcmF3ZXJSZWY8Uj5cclxuICB9O1xyXG5cclxuICBnZXQgb2Zmc2V0VHJhbnNmb3JtKCk6IHN0cmluZyB8IG51bGwge1xyXG4gICAgaWYgKCF0aGlzLmlzT3BlbiB8fCB0aGlzLm56T2Zmc2V0WCArIHRoaXMubnpPZmZzZXRZID09PSAwKSB7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgc3dpdGNoICh0aGlzLm56UGxhY2VtZW50KSB7XHJcbiAgICAgIGNhc2UgJ2xlZnQnOlxyXG4gICAgICAgIHJldHVybiBgdHJhbnNsYXRlWCgke3RoaXMubnpPZmZzZXRYfXB4KWA7XHJcbiAgICAgIGNhc2UgJ3JpZ2h0JzpcclxuICAgICAgICByZXR1cm4gYHRyYW5zbGF0ZVgoLSR7dGhpcy5uek9mZnNldFh9cHgpYDtcclxuICAgICAgY2FzZSAndG9wJzpcclxuICAgICAgICByZXR1cm4gYHRyYW5zbGF0ZVkoJHt0aGlzLm56T2Zmc2V0WX1weClgO1xyXG4gICAgICBjYXNlICdib3R0b20nOlxyXG4gICAgICAgIHJldHVybiBgdHJhbnNsYXRlWSgtJHt0aGlzLm56T2Zmc2V0WX1weClgO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IHRyYW5zZm9ybSgpOiBzdHJpbmcgfCBudWxsIHtcclxuICAgIGlmICh0aGlzLmlzT3Blbikge1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBzd2l0Y2ggKHRoaXMubnpQbGFjZW1lbnQpIHtcclxuICAgICAgY2FzZSAnbGVmdCc6XHJcbiAgICAgICAgcmV0dXJuIGB0cmFuc2xhdGVYKC0xMDAlKWA7XHJcbiAgICAgIGNhc2UgJ3JpZ2h0JzpcclxuICAgICAgICByZXR1cm4gYHRyYW5zbGF0ZVgoMTAwJSlgO1xyXG4gICAgICBjYXNlICd0b3AnOlxyXG4gICAgICAgIHJldHVybiBgdHJhbnNsYXRlWSgtMTAwJSlgO1xyXG4gICAgICBjYXNlICdib3R0b20nOlxyXG4gICAgICAgIHJldHVybiBgdHJhbnNsYXRlWSgxMDAlKWA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgd2lkdGgoKTogc3RyaW5nIHwgbnVsbCB7XHJcbiAgICByZXR1cm4gdGhpcy5pc0xlZnRPclJpZ2h0ID8gdG9Dc3NQaXhlbCh0aGlzLm56V2lkdGgpIDogbnVsbDtcclxuICB9XHJcblxyXG4gIGdldCBoZWlnaHQoKTogc3RyaW5nIHwgbnVsbCB7XHJcbiAgICByZXR1cm4gIXRoaXMuaXNMZWZ0T3JSaWdodCA/IHRvQ3NzUGl4ZWwodGhpcy5uekhlaWdodCkgOiBudWxsO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGlzTGVmdE9yUmlnaHQoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5uelBsYWNlbWVudCA9PT0gJ2xlZnQnIHx8IHRoaXMubnpQbGFjZW1lbnQgPT09ICdyaWdodCc7XHJcbiAgfVxyXG5cclxuICBuekFmdGVyT3BlbiA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XHJcbiAgbnpBZnRlckNsb3NlID0gbmV3IFN1YmplY3Q8Uj4oKTtcclxuXHJcbiAgZ2V0IGFmdGVyT3BlbigpOiBPYnNlcnZhYmxlPHZvaWQ+IHtcclxuICAgIHJldHVybiB0aGlzLm56QWZ0ZXJPcGVuLmFzT2JzZXJ2YWJsZSgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGFmdGVyQ2xvc2UoKTogT2JzZXJ2YWJsZTxSPiB7XHJcbiAgICByZXR1cm4gdGhpcy5uekFmdGVyQ2xvc2UuYXNPYnNlcnZhYmxlKCk7XHJcbiAgfVxyXG5cclxuICBpc1RlbXBsYXRlUmVmKHZhbHVlOiB7fSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWY7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jdW1lbnQ6IGFueSxcclxuICAgIHB1YmxpYyBuekNvbmZpZ1NlcnZpY2U6IE56Q29uZmlnU2VydmljZSxcclxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICAgIHByaXZhdGUgb3ZlcmxheTogT3ZlcmxheSxcclxuICAgIHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yLFxyXG4gICAgcHJpdmF0ZSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICBwcml2YXRlIGZvY3VzVHJhcEZhY3Rvcnk6IEZvY3VzVHJhcEZhY3RvcnksXHJcbiAgICBwcml2YXRlIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsXHJcbiAgICBwcml2YXRlIG92ZXJsYXlLZXlib2FyZERpc3BhdGNoZXI6IE92ZXJsYXlLZXlib2FyZERpc3BhdGNoZXJcclxuICApIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuYXR0YWNoT3ZlcmxheSgpO1xyXG4gICAgdGhpcy51cGRhdGVPdmVybGF5U3R5bGUoKTtcclxuICAgIHRoaXMudXBkYXRlQm9keU92ZXJmbG93KCk7XHJcbiAgICB0aGlzLnRlbXBsYXRlQ29udGV4dCA9IHsgJGltcGxpY2l0OiB0aGlzLm56Q29udGVudFBhcmFtcywgZHJhd2VyUmVmOiB0aGlzIGFzIE56RHJhd2VyUmVmPFI+IH07XHJcbiAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuYXR0YWNoQm9keUNvbnRlbnQoKTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0aGlzLm56T25WaWV3SW5pdC5lbWl0KCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIGlmIChjaGFuZ2VzLmhhc093blByb3BlcnR5KCduelZpc2libGUnKSkge1xyXG4gICAgICBjb25zdCB2YWx1ZSA9IGNoYW5nZXMubnpWaXNpYmxlLmN1cnJlbnRWYWx1ZTtcclxuICAgICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5vcGVuKCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5jbG9zZSgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xyXG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xyXG4gICAgdGhpcy5kaXNwb3NlT3ZlcmxheSgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRBbmltYXRpb25EdXJhdGlvbigpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMubnpOb0FuaW1hdGlvbiA/IDAgOiBEUkFXRVJfQU5JTUFURV9EVVJBVElPTjtcclxuICB9XHJcblxyXG4gIGNsb3NlKHJlc3VsdD86IFIpOiB2b2lkIHtcclxuICAgIHRoaXMuaXNPcGVuID0gZmFsc2U7XHJcbiAgICB0aGlzLnVwZGF0ZU92ZXJsYXlTdHlsZSgpO1xyXG4gICAgdGhpcy5vdmVybGF5S2V5Ym9hcmREaXNwYXRjaGVyLnJlbW92ZSh0aGlzLm92ZXJsYXlSZWYhKTtcclxuICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRoaXMudXBkYXRlQm9keU92ZXJmbG93KCk7XHJcbiAgICAgIHRoaXMucmVzdG9yZUZvY3VzKCk7XHJcbiAgICAgIHRoaXMubnpBZnRlckNsb3NlLm5leHQocmVzdWx0KTtcclxuICAgICAgdGhpcy5uekFmdGVyQ2xvc2UuY29tcGxldGUoKTtcclxuICAgIH0sIHRoaXMuZ2V0QW5pbWF0aW9uRHVyYXRpb24oKSk7XHJcbiAgfVxyXG5cclxuICBvcGVuKCk6IHZvaWQge1xyXG4gICAgdGhpcy5pc09wZW4gPSB0cnVlO1xyXG4gICAgdGhpcy5vdmVybGF5S2V5Ym9hcmREaXNwYXRjaGVyLmFkZCh0aGlzLm92ZXJsYXlSZWYhKTtcclxuICAgIHRoaXMudXBkYXRlT3ZlcmxheVN0eWxlKCk7XHJcbiAgICB0aGlzLnVwZGF0ZUJvZHlPdmVyZmxvdygpO1xyXG4gICAgdGhpcy5zYXZlUHJldmlvdXNseUZvY3VzZWRFbGVtZW50KCk7XHJcbiAgICB0aGlzLnRyYXBGb2N1cygpO1xyXG4gICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgdGhpcy5uekFmdGVyT3Blbi5uZXh0KCk7XHJcbiAgICB9LCB0aGlzLmdldEFuaW1hdGlvbkR1cmF0aW9uKCkpO1xyXG4gIH1cclxuXHJcbiAgY2xvc2VDbGljaygpOiB2b2lkIHtcclxuICAgIHRoaXMubnpPbkNsb3NlLmVtaXQoKTtcclxuICB9XHJcblxyXG4gIG1hc2tDbGljaygpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLm56TWFza0Nsb3NhYmxlICYmIHRoaXMubnpNYXNrKSB7XHJcbiAgICAgIHRoaXMubnpPbkNsb3NlLmVtaXQoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgYXR0YWNoQm9keUNvbnRlbnQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmJvZHlQb3J0YWxPdXRsZXQuZGlzcG9zZSgpO1xyXG5cclxuICAgIGlmICh0aGlzLm56Q29udGVudCBpbnN0YW5jZW9mIFR5cGUpIHtcclxuICAgICAgY29uc3QgY2hpbGRJbmplY3RvciA9IG5ldyBQb3J0YWxJbmplY3Rvcih0aGlzLmluamVjdG9yLCBuZXcgV2Vha01hcChbW056RHJhd2VyUmVmLCB0aGlzXV0pKTtcclxuICAgICAgY29uc3QgY29tcG9uZW50UG9ydGFsID0gbmV3IENvbXBvbmVudFBvcnRhbDxUPih0aGlzLm56Q29udGVudCwgbnVsbCwgY2hpbGRJbmplY3Rvcik7XHJcbiAgICAgIGNvbnN0IGNvbXBvbmVudFJlZiA9IHRoaXMuYm9keVBvcnRhbE91dGxldC5hdHRhY2hDb21wb25lbnRQb3J0YWwoY29tcG9uZW50UG9ydGFsKTtcclxuICAgICAgT2JqZWN0LmFzc2lnbihjb21wb25lbnRSZWYuaW5zdGFuY2UsIHRoaXMubnpDb250ZW50UGFyYW1zKTtcclxuICAgICAgY29tcG9uZW50UmVmLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgYXR0YWNoT3ZlcmxheSgpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5vdmVybGF5UmVmKSB7XHJcbiAgICAgIHRoaXMucG9ydGFsID0gbmV3IFRlbXBsYXRlUG9ydGFsKHRoaXMuZHJhd2VyVGVtcGxhdGUsIHRoaXMudmlld0NvbnRhaW5lclJlZik7XHJcbiAgICAgIHRoaXMub3ZlcmxheVJlZiA9IHRoaXMub3ZlcmxheS5jcmVhdGUodGhpcy5nZXRPdmVybGF5Q29uZmlnKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLm92ZXJsYXlSZWYgJiYgIXRoaXMub3ZlcmxheVJlZi5oYXNBdHRhY2hlZCgpKSB7XHJcbiAgICAgIHRoaXMub3ZlcmxheVJlZi5hdHRhY2godGhpcy5wb3J0YWwpO1xyXG4gICAgICB0aGlzLm92ZXJsYXlSZWYhLmtleWRvd25FdmVudHMoKVxyXG4gICAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcclxuICAgICAgICAuc3Vic2NyaWJlKChldmVudDogS2V5Ym9hcmRFdmVudCkgPT4ge1xyXG4gICAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IEVTQ0FQRSAmJiB0aGlzLmlzT3BlbiAmJiB0aGlzLm56S2V5Ym9hcmQpIHtcclxuICAgICAgICAgICAgdGhpcy5uek9uQ2xvc2UuZW1pdCgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBkaXNwb3NlT3ZlcmxheSgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLm92ZXJsYXlSZWYpIHtcclxuICAgICAgdGhpcy5vdmVybGF5UmVmLmRpc3Bvc2UoKTtcclxuICAgIH1cclxuICAgIHRoaXMub3ZlcmxheVJlZiA9IG51bGw7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldE92ZXJsYXlDb25maWcoKTogT3ZlcmxheUNvbmZpZyB7XHJcbiAgICByZXR1cm4gbmV3IE92ZXJsYXlDb25maWcoe1xyXG4gICAgICBwb3NpdGlvblN0cmF0ZWd5OiB0aGlzLm92ZXJsYXkucG9zaXRpb24oKS5nbG9iYWwoKSxcclxuICAgICAgc2Nyb2xsU3RyYXRlZ3k6IHRoaXMub3ZlcmxheS5zY3JvbGxTdHJhdGVnaWVzLmJsb2NrKClcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB1cGRhdGVPdmVybGF5U3R5bGUoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5vdmVybGF5UmVmICYmIHRoaXMub3ZlcmxheVJlZi5vdmVybGF5RWxlbWVudCkge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMub3ZlcmxheVJlZi5vdmVybGF5RWxlbWVudCwgJ3BvaW50ZXItZXZlbnRzJywgdGhpcy5pc09wZW4gPyAnYXV0bycgOiAnbm9uZScpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB1cGRhdGVCb2R5T3ZlcmZsb3coKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5vdmVybGF5UmVmKSB7XHJcbiAgICAgIGlmICh0aGlzLmlzT3Blbikge1xyXG4gICAgICAgIHRoaXMub3ZlcmxheVJlZi5nZXRDb25maWcoKS5zY3JvbGxTdHJhdGVneSEuZW5hYmxlKCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5vdmVybGF5UmVmLmdldENvbmZpZygpLnNjcm9sbFN0cmF0ZWd5IS5kaXNhYmxlKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNhdmVQcmV2aW91c2x5Rm9jdXNlZEVsZW1lbnQoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5kb2N1bWVudCAmJiAhdGhpcy5wcmV2aW91c2x5Rm9jdXNlZEVsZW1lbnQpIHtcclxuICAgICAgdGhpcy5wcmV2aW91c2x5Rm9jdXNlZEVsZW1lbnQgPSB0aGlzLmRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICAgIC8vIFdlIG5lZWQgdGhlIGV4dHJhIGNoZWNrLCBiZWNhdXNlIElFJ3Mgc3ZnIGVsZW1lbnQgaGFzIG5vIGJsdXIgbWV0aG9kLlxyXG4gICAgICBpZiAodGhpcy5wcmV2aW91c2x5Rm9jdXNlZEVsZW1lbnQgJiYgdHlwZW9mIHRoaXMucHJldmlvdXNseUZvY3VzZWRFbGVtZW50LmJsdXIgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICB0aGlzLnByZXZpb3VzbHlGb2N1c2VkRWxlbWVudC5ibHVyKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgdHJhcEZvY3VzKCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLmZvY3VzVHJhcCAmJiB0aGlzLm92ZXJsYXlSZWYgJiYgdGhpcy5vdmVybGF5UmVmLm92ZXJsYXlFbGVtZW50KSB7XHJcbiAgICAgIHRoaXMuZm9jdXNUcmFwID0gdGhpcy5mb2N1c1RyYXBGYWN0b3J5LmNyZWF0ZSh0aGlzLm92ZXJsYXlSZWYhLm92ZXJsYXlFbGVtZW50KTtcclxuICAgICAgdGhpcy5mb2N1c1RyYXAuZm9jdXNJbml0aWFsRWxlbWVudCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZXN0b3JlRm9jdXMoKTogdm9pZCB7XHJcbiAgICAvLyBXZSBuZWVkIHRoZSBleHRyYSBjaGVjaywgYmVjYXVzZSBJRSBjYW4gc2V0IHRoZSBgYWN0aXZlRWxlbWVudGAgdG8gbnVsbCBpbiBzb21lIGNhc2VzLlxyXG4gICAgaWYgKHRoaXMucHJldmlvdXNseUZvY3VzZWRFbGVtZW50ICYmIHR5cGVvZiB0aGlzLnByZXZpb3VzbHlGb2N1c2VkRWxlbWVudC5mb2N1cyA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICB0aGlzLnByZXZpb3VzbHlGb2N1c2VkRWxlbWVudC5mb2N1cygpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuZm9jdXNUcmFwKSB7XHJcbiAgICAgIHRoaXMuZm9jdXNUcmFwLmRlc3Ryb3koKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19