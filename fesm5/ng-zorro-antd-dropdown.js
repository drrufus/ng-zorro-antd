import { __extends, __spread, __read, __decorate, __metadata } from 'tslib';
import { ESCAPE, hasModifierKey } from '@angular/cdk/keycodes';
import { OverlayConfig, Overlay, OverlayModule, ConnectionPositionPair } from '@angular/cdk/overlay';
import { Platform, PlatformModule } from '@angular/cdk/platform';
import { TemplatePortal } from '@angular/cdk/portal';
import { ɵɵdefineInjectable, ɵɵgetInheritedFactory, ɵsetClassMetadata, Injectable, ɵɵgetCurrentView, ɵɵelementStart, ɵɵlistener, ɵɵrestoreView, ɵɵnextContext, ɵɵprojection, ɵɵelementEnd, ɵɵclassMap, ɵɵproperty, ɵɵadvance, ɵɵclassProp, ɵɵtemplate, ɵɵdirectiveInject, ChangeDetectorRef, ElementRef, Renderer2, ViewContainerRef, ɵɵdefineComponent, ɵɵstaticViewQuery, TemplateRef, ɵɵqueryRefresh, ɵɵloadQuery, ɵɵProvidersFeature, Self, Injector, ɵɵprojectionDef, Component, ViewEncapsulation, ChangeDetectionStrategy, Host, Optional, ViewChild, EventEmitter, ɵɵdefineDirective, ɵɵNgOnChangesFeature, Directive, Input, Output, ɵɵdefineNgModule, ɵɵdefineInjector, NgModule, ɵɵsetNgModuleScope, ɵɵinject } from '@angular/core';
import { NzButtonComponent, NzButtonGroupComponent, NzButtonModule } from 'ng-zorro-antd/button';
import { NzMenuBaseService, NzNoAnimationDirective, NzDropdownHigherOrderServiceToken, slideMotion, DEFAULT_DROPDOWN_POSITIONS, POSITION_MAP, InputBoolean, NzNoAnimationModule, NzOverlayModule, NzAddOnModule } from 'ng-zorro-antd/core';
import { Subject, Subscription, merge, fromEvent, EMPTY, combineLatest } from 'rxjs';
import { mapTo, tap, takeUntil, filter, map, debounceTime, distinctUntilChanged, take } from 'rxjs/operators';
import { NgIf, NgClass, NgStyle, CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMenuModule } from 'ng-zorro-antd/menu';

var NzMenuDropdownService = /** @class */ (function (_super) {
    __extends(NzMenuDropdownService, _super);
    function NzMenuDropdownService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isInDropDown = true;
        return _this;
    }
    /** @nocollapse */ NzMenuDropdownService.ɵfac = function NzMenuDropdownService_Factory(t) { return ɵNzMenuDropdownService_BaseFactory(t || NzMenuDropdownService); };
    /** @nocollapse */ NzMenuDropdownService.ɵprov = ɵɵdefineInjectable({ token: NzMenuDropdownService, factory: NzMenuDropdownService.ɵfac });
    return NzMenuDropdownService;
}(NzMenuBaseService));
var ɵNzMenuDropdownService_BaseFactory = ɵɵgetInheritedFactory(NzMenuDropdownService);
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzMenuDropdownService, [{
        type: Injectable
    }], null, null); })();

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
function NzDropdownMenuComponent_ng_template_0_div_0_Template(rf, ctx) { if (rf & 1) {
    var _r2074 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 1);
    ɵɵlistener("mouseenter", function NzDropdownMenuComponent_ng_template_0_div_0_Template_div_mouseenter_0_listener($event) { ɵɵrestoreView(_r2074); var ctx_r2073 = ɵɵnextContext(2); return ctx_r2073.setVisibleStateWhen(true, "hover"); })("mouseleave", function NzDropdownMenuComponent_ng_template_0_div_0_Template_div_mouseleave_0_listener($event) { ɵɵrestoreView(_r2074); var ctx_r2075 = ɵɵnextContext(2); return ctx_r2075.setVisibleStateWhen(false, "hover"); });
    ɵɵelementStart(1, "div");
    ɵɵprojection(2);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r2072 = ɵɵnextContext(2);
    ɵɵclassMap("ant-dropdown nz-dropdown ant-dropdown-placement-" + ctx_r2072.nzPlacement);
    ɵɵproperty("ngClass", ctx_r2072.nzOverlayClassName)("ngStyle", ctx_r2072.nzOverlayStyle)("@slideMotion", ctx_r2072.dropDownPosition)("@.disabled", ctx_r2072.noAnimation == null ? null : ctx_r2072.noAnimation.nzNoAnimation)("nzNoAnimation", ctx_r2072.noAnimation == null ? null : ctx_r2072.noAnimation.nzNoAnimation);
    ɵɵadvance(1);
    ɵɵclassProp("ant-table-filter-dropdown", ctx_r2072.nzTableFilter);
} }
function NzDropdownMenuComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵtemplate(0, NzDropdownMenuComponent_ng_template_0_div_0_Template, 3, 9, "div", 0);
} if (rf & 2) {
    var ctx_r2071 = ɵɵnextContext();
    ɵɵproperty("ngIf", ctx_r2071.open);
} }
var _c0 = ["*"];
function dropdownMenuServiceFactory(injector) {
    return injector.get(NzMenuDropdownService);
}
var NzDropdownMenuComponent = /** @class */ (function () {
    function NzDropdownMenuComponent(cdr, elementRef, renderer, viewContainerRef, nzMenuDropdownService, noAnimation) {
        this.cdr = cdr;
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.viewContainerRef = viewContainerRef;
        this.nzMenuDropdownService = nzMenuDropdownService;
        this.noAnimation = noAnimation;
        this.open = false;
        this.triggerWidth = 0;
        this.dropDownPosition = 'bottom';
        this.visible$ = new Subject();
        this.nzTrigger = 'hover';
        this.nzPlacement = 'bottomLeft';
        this.nzOverlayClassName = '';
        this.nzOverlayStyle = {};
        this.nzTableFilter = false;
    }
    NzDropdownMenuComponent.prototype.setVisibleStateWhen = function (visible, trigger) {
        if (trigger === void 0) { trigger = 'all'; }
        if (this.nzTrigger === trigger || trigger === 'all') {
            this.visible$.next(visible);
        }
    };
    NzDropdownMenuComponent.prototype.setValue = function (key, value) {
        this[key] = value;
        this.cdr.markForCheck();
    };
    NzDropdownMenuComponent.prototype.ngAfterContentInit = function () {
        this.renderer.removeChild(this.renderer.parentNode(this.elementRef.nativeElement), this.elementRef.nativeElement);
    };
    /** @nocollapse */ NzDropdownMenuComponent.ɵfac = function NzDropdownMenuComponent_Factory(t) { return new (t || NzDropdownMenuComponent)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(NzMenuDropdownService), ɵɵdirectiveInject(NzNoAnimationDirective, 9)); };
    /** @nocollapse */ NzDropdownMenuComponent.ɵcmp = ɵɵdefineComponent({ type: NzDropdownMenuComponent, selectors: [["nz-dropdown-menu"]], viewQuery: function NzDropdownMenuComponent_Query(rf, ctx) { if (rf & 1) {
            ɵɵstaticViewQuery(TemplateRef, true);
        } if (rf & 2) {
            var _t;
            ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.templateRef = _t.first);
        } }, exportAs: ["nzDropdownMenu"], features: [ɵɵProvidersFeature([
                NzMenuDropdownService,
                {
                    provide: NzDropdownHigherOrderServiceToken,
                    useFactory: dropdownMenuServiceFactory,
                    deps: [[new Self(), Injector]]
                }
            ])], ngContentSelectors: _c0, decls: 1, vars: 0, consts: [[3, "class", "ngClass", "ngStyle", "nzNoAnimation", "mouseenter", "mouseleave", 4, "ngIf"], [3, "ngClass", "ngStyle", "nzNoAnimation", "mouseenter", "mouseleave"]], template: function NzDropdownMenuComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵprojectionDef();
            ɵɵtemplate(0, NzDropdownMenuComponent_ng_template_0_Template, 1, 1, "ng-template");
        } }, directives: [NgIf, NgClass, NgStyle, NzNoAnimationDirective], styles: ["\n      :root .ant-dropdown.nz-dropdown {\n        top: 0;\n        left: 0;\n        position: relative;\n        width: 100%;\n        margin-top: 4px;\n        margin-bottom: 4px;\n      }\n    "], encapsulation: 2, data: { animation: [slideMotion] }, changeDetection: 0 });
    return NzDropdownMenuComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzDropdownMenuComponent, [{
        type: Component,
        args: [{
                selector: "nz-dropdown-menu",
                templateUrl: './nz-dropdown-menu.component.html',
                exportAs: "nzDropdownMenu",
                animations: [slideMotion],
                providers: [
                    NzMenuDropdownService,
                    {
                        provide: NzDropdownHigherOrderServiceToken,
                        useFactory: dropdownMenuServiceFactory,
                        deps: [[new Self(), Injector]]
                    }
                ],
                styles: [
                    "\n      :root .ant-dropdown.nz-dropdown {\n        top: 0;\n        left: 0;\n        position: relative;\n        width: 100%;\n        margin-top: 4px;\n        margin-bottom: 4px;\n      }\n    "
                ],
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: ChangeDetectorRef }, { type: ElementRef }, { type: Renderer2 }, { type: ViewContainerRef }, { type: NzMenuDropdownService }, { type: NzNoAnimationDirective, decorators: [{
                type: Host
            }, {
                type: Optional
            }] }]; }, { templateRef: [{
            type: ViewChild,
            args: [TemplateRef, { static: true }]
        }] }); })();

var NzDropDownDirective = /** @class */ (function () {
    function NzDropDownDirective(elementRef, renderer, overlay, platform, nzButtonComponent, nzButtonGroupComponent, viewContainerRef) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.overlay = overlay;
        this.platform = platform;
        this.nzButtonComponent = nzButtonComponent;
        this.nzButtonGroupComponent = nzButtonGroupComponent;
        this.viewContainerRef = viewContainerRef;
        this.overlayRef = null;
        this.destroy$ = new Subject();
        this.triggerWidth = 0;
        this.el = this.elementRef.nativeElement;
        this.dropdownOpen = false;
        this.positions = __spread(DEFAULT_DROPDOWN_POSITIONS);
        this.positionSubscription = Subscription.EMPTY;
        this.overlaySubscription = Subscription.EMPTY;
        this.hover$ = merge(fromEvent(this.el, 'mouseenter').pipe(mapTo(true)), fromEvent(this.el, 'mouseleave').pipe(mapTo(false)));
        this.$click = fromEvent(this.el, 'click').pipe(tap(function (e) { return e.stopPropagation(); }), mapTo(true));
        this.nzTrigger = 'hover';
        this.nzBackdrop = true;
        this.nzClickHide = true;
        this.nzDisabled = false;
        this.nzVisible = false;
        this.nzTableFilter = false;
        this.nzOverlayClassName = '';
        this.nzOverlayStyle = {};
        this.nzPlacement = 'bottomLeft';
        this.nzVisibleChange = new EventEmitter();
        renderer.addClass(elementRef.nativeElement, 'ant-dropdown-trigger');
        if (this.nzButtonComponent) {
            this.nzButtonComponent.isInDropdown = true;
        }
        if (this.nzButtonGroupComponent) {
            this.nzButtonGroupComponent.isInDropdown = true;
        }
    }
    NzDropDownDirective.prototype.setDisabled = function (disabled) {
        if (disabled) {
            this.renderer.setAttribute(this.el, 'disabled', '');
            if (this.nzVisible) {
                this.nzVisible = false;
                this.nzVisibleChange.emit(this.nzVisible);
                this.updateOverlayByVisible();
            }
        }
        else {
            this.renderer.removeAttribute(this.el, 'disabled');
        }
    };
    NzDropDownDirective.prototype.getOverlayConfig = function () {
        return new OverlayConfig({
            positionStrategy: this.overlay
                .position()
                .flexibleConnectedTo(this.el)
                .withLockedPosition(),
            minWidth: this.triggerWidth,
            hasBackdrop: this.nzTrigger === 'click',
            backdropClass: this.nzBackdrop ? undefined : 'nz-overlay-transparent-backdrop',
            scrollStrategy: this.overlay.scrollStrategies.reposition()
        });
    };
    NzDropDownDirective.prototype.createOverlay = function () {
        if (!this.overlayRef) {
            var config = this.getOverlayConfig();
            this.overlayRef = this.overlay.create(config);
            this.subscribeOverlayEvent(this.overlayRef);
            this.subscribeToPositions(config.positionStrategy);
            return this.overlayRef;
        }
        else {
            var overlayConfig = this.overlayRef.getConfig();
            this.updateOverlayConfig(overlayConfig);
            return this.overlayRef;
        }
    };
    NzDropDownDirective.prototype.updateOverlayConfig = function (overlayConfig) {
        overlayConfig.minWidth = this.triggerWidth;
        overlayConfig.hasBackdrop = this.nzTrigger === 'click';
        return overlayConfig;
    };
    NzDropDownDirective.prototype.dispose = function () {
        if (this.overlayRef) {
            this.overlayRef.dispose();
            this.overlayRef = null;
            this.positionSubscription.unsubscribe();
            this.overlaySubscription.unsubscribe();
        }
    };
    NzDropDownDirective.prototype.subscribeToPositions = function (position) {
        var _this = this;
        this.positionSubscription.unsubscribe();
        this.positionSubscription = position.positionChanges.pipe(takeUntil(this.destroy$)).subscribe(function (change) {
            _this.nzDropdownMenu.setValue('dropDownPosition', change.connectionPair.originY);
        });
    };
    NzDropDownDirective.prototype.subscribeOverlayEvent = function (overlayRef) {
        var _this = this;
        this.overlaySubscription.unsubscribe();
        this.overlaySubscription = merge(overlayRef.backdropClick(), overlayRef.detachments(), overlayRef.keydownEvents().pipe(filter(function (e) { return e.keyCode === ESCAPE && !hasModifierKey(e); })))
            .pipe(takeUntil(this.destroy$))
            .subscribe(function () {
            _this.nzDropdownMenu.setVisibleStateWhen(false);
        });
    };
    NzDropDownDirective.prototype.getPortal = function () {
        if (!this.portal || this.portal.templateRef !== this.nzDropdownMenu.templateRef) {
            this.portal = new TemplatePortal(this.nzDropdownMenu.templateRef, this.viewContainerRef);
        }
        return this.portal;
    };
    NzDropDownDirective.prototype.openMenu = function () {
        if (!this.dropdownOpen) {
            var overlayRef = this.createOverlay();
            var overlayConfig = overlayRef.getConfig();
            this.nzDropdownMenu.setValue('open', true);
            this.setPosition(overlayConfig.positionStrategy);
            overlayRef.attach(this.getPortal());
            this.dropdownOpen = true;
        }
    };
    NzDropDownDirective.prototype.closeMenu = function () {
        if (this.overlayRef) {
            this.overlayRef.detach();
            this.dropdownOpen = false;
            this.nzDropdownMenu.setValue('open', false);
        }
    };
    NzDropDownDirective.prototype.setPosition = function (positionStrategy) {
        this.positionStrategy = positionStrategy;
        positionStrategy.withPositions(__spread(this.positions));
    };
    NzDropDownDirective.prototype.updatePositionStrategy = function (positions) {
        if (this.positionStrategy) {
            this.positionStrategy.withPositions(positions);
        }
    };
    NzDropDownDirective.prototype.setTriggerWidth = function () {
        if (this.platform.isBrowser) {
            var element = this.nzMatchWidthElement ? this.nzMatchWidthElement.nativeElement : this.el;
            this.triggerWidth = element.getBoundingClientRect().width;
        }
    };
    NzDropDownDirective.prototype.initActionSubscribe = function () {
        var _this = this;
        var hostVisible$ = this.nzTrigger === 'hover' ? this.hover$ : this.$click;
        var dropdownMenuVisible$ = this.nzDropdownMenu.visible$;
        var menuClickVisible$ = this.nzClickHide ? this.nzDropdownMenu.nzMenuDropdownService.menuItemClick$.pipe(mapTo(false)) : EMPTY;
        var supVisible$ = merge(dropdownMenuVisible$, hostVisible$, menuClickVisible$);
        var subVisible$ = this.nzDropdownMenu.nzMenuDropdownService.menuOpen$;
        combineLatest([supVisible$, subVisible$])
            .pipe(map(function (_a) {
            var _b = __read(_a, 2), supVisible = _b[0], subVisible = _b[1];
            return supVisible || subVisible;
        }), debounceTime(50), distinctUntilChanged(), takeUntil(this.destroy$))
            .subscribe(function (visible) {
            if (!_this.nzDisabled && _this.nzVisible !== visible) {
                _this.nzVisible = visible;
                _this.updateOverlayByVisible();
                _this.nzVisibleChange.emit(_this.nzVisible);
                _this.setTriggerWidth();
                _this.nzDropdownMenu.setValue('triggerWidth', _this.triggerWidth);
            }
        });
    };
    NzDropDownDirective.prototype.updateOverlayByVisible = function () {
        if (this.nzVisible) {
            this.openMenu();
        }
        else {
            this.closeMenu();
        }
    };
    NzDropDownDirective.prototype.updateDisabledState = function () {
        this.setDisabled(this.nzDisabled);
    };
    NzDropDownDirective.prototype.regeneratePosition = function (placement, positions) {
        return __spread([POSITION_MAP[placement]], positions);
    };
    NzDropDownDirective.prototype.ngAfterViewInit = function () {
        if (this.nzDropdownMenu) {
            this.setTriggerWidth();
            this.initActionSubscribe();
            this.updateDisabledState();
        }
    };
    NzDropDownDirective.prototype.ngOnDestroy = function () {
        this.destroy$.next();
        this.destroy$.complete();
        this.dispose();
    };
    NzDropDownDirective.prototype.ngOnChanges = function (changes) {
        var nzVisible = changes.nzVisible, nzTrigger = changes.nzTrigger, nzPlacement = changes.nzPlacement, nzDisabled = changes.nzDisabled, nzOverlayClassName = changes.nzOverlayClassName, nzOverlayStyle = changes.nzOverlayStyle, nzTableFilter = changes.nzTableFilter;
        if (this.nzDropdownMenu) {
            if (nzVisible) {
                this.updateOverlayByVisible();
                this.nzDropdownMenu.visible$.next(this.nzVisible);
            }
            if (nzTrigger) {
                this.nzDropdownMenu.setValue('nzTrigger', this.nzTrigger);
            }
            if (nzTableFilter) {
                this.nzDropdownMenu.setValue('nzTableFilter', this.nzTableFilter);
            }
            if (nzOverlayClassName) {
                this.nzDropdownMenu.setValue('nzOverlayClassName', this.nzOverlayClassName);
            }
            if (nzOverlayStyle) {
                this.nzDropdownMenu.setValue('nzOverlayStyle', this.nzOverlayStyle);
            }
            if (nzPlacement) {
                this.nzDropdownMenu.setValue('nzPlacement', this.nzPlacement);
                this.nzDropdownMenu.setValue('dropDownPosition', this.nzDropdownMenu.nzPlacement.indexOf('top') !== -1 ? 'top' : 'bottom');
                this.positions = this.regeneratePosition(this.nzPlacement, this.positions);
                this.updatePositionStrategy(this.positions);
            }
        }
        if (nzDisabled) {
            this.updateDisabledState();
        }
    };
    /** @nocollapse */ NzDropDownDirective.ɵfac = function NzDropDownDirective_Factory(t) { return new (t || NzDropDownDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(Overlay), ɵɵdirectiveInject(Platform), ɵɵdirectiveInject(NzButtonComponent, 9), ɵɵdirectiveInject(NzButtonGroupComponent, 8), ɵɵdirectiveInject(ViewContainerRef)); };
    /** @nocollapse */ NzDropDownDirective.ɵdir = ɵɵdefineDirective({ type: NzDropDownDirective, selectors: [["", "nz-dropdown", ""]], inputs: { nzDropdownMenu: "nzDropdownMenu", nzTrigger: "nzTrigger", nzMatchWidthElement: "nzMatchWidthElement", nzBackdrop: "nzBackdrop", nzClickHide: "nzClickHide", nzDisabled: "nzDisabled", nzVisible: "nzVisible", nzTableFilter: "nzTableFilter", nzOverlayClassName: "nzOverlayClassName", nzOverlayStyle: "nzOverlayStyle", nzPlacement: "nzPlacement" }, outputs: { nzVisibleChange: "nzVisibleChange" }, exportAs: ["nzDropdown"], features: [ɵɵNgOnChangesFeature()] });
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzDropDownDirective.prototype, "nzBackdrop", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzDropDownDirective.prototype, "nzClickHide", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzDropDownDirective.prototype, "nzDisabled", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzDropDownDirective.prototype, "nzVisible", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzDropDownDirective.prototype, "nzTableFilter", void 0);
    return NzDropDownDirective;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzDropDownDirective, [{
        type: Directive,
        args: [{
                selector: '[nz-dropdown]',
                exportAs: 'nzDropdown'
            }]
    }], function () { return [{ type: ElementRef }, { type: Renderer2 }, { type: Overlay }, { type: Platform }, { type: NzButtonComponent, decorators: [{
                type: Optional
            }, {
                type: Host
            }] }, { type: NzButtonGroupComponent, decorators: [{
                type: Optional
            }] }, { type: ViewContainerRef }]; }, { nzDropdownMenu: [{
            type: Input
        }], nzTrigger: [{
            type: Input
        }], nzMatchWidthElement: [{
            type: Input
        }], nzBackdrop: [{
            type: Input
        }], nzClickHide: [{
            type: Input
        }], nzDisabled: [{
            type: Input
        }], nzVisible: [{
            type: Input
        }], nzTableFilter: [{
            type: Input
        }], nzOverlayClassName: [{
            type: Input
        }], nzOverlayStyle: [{
            type: Input
        }], nzPlacement: [{
            type: Input
        }], nzVisibleChange: [{
            type: Output
        }] }); })();

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
var NzDropdownServiceModule = /** @class */ (function () {
    function NzDropdownServiceModule() {
    }
    /** @nocollapse */ NzDropdownServiceModule.ɵmod = ɵɵdefineNgModule({ type: NzDropdownServiceModule });
    /** @nocollapse */ NzDropdownServiceModule.ɵinj = ɵɵdefineInjector({ factory: function NzDropdownServiceModule_Factory(t) { return new (t || NzDropdownServiceModule)(); } });
    return NzDropdownServiceModule;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzDropdownServiceModule, [{
        type: NgModule
    }], null, null); })();

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
var NzContextMenuServiceModule = /** @class */ (function () {
    function NzContextMenuServiceModule() {
    }
    /** @nocollapse */ NzContextMenuServiceModule.ɵmod = ɵɵdefineNgModule({ type: NzContextMenuServiceModule });
    /** @nocollapse */ NzContextMenuServiceModule.ɵinj = ɵɵdefineInjector({ factory: function NzContextMenuServiceModule_Factory(t) { return new (t || NzContextMenuServiceModule)(); } });
    return NzContextMenuServiceModule;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzContextMenuServiceModule, [{
        type: NgModule
    }], null, null); })();

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
var NzDropDownADirective = /** @class */ (function () {
    function NzDropDownADirective(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.renderer.addClass(this.elementRef.nativeElement, 'ant-dropdown-link');
    }
    /** @nocollapse */ NzDropDownADirective.ɵfac = function NzDropDownADirective_Factory(t) { return new (t || NzDropDownADirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2)); };
    /** @nocollapse */ NzDropDownADirective.ɵdir = ɵɵdefineDirective({ type: NzDropDownADirective, selectors: [["a", "nz-dropdown", ""]], exportAs: ["nzDropdown"] });
    return NzDropDownADirective;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzDropDownADirective, [{
        type: Directive,
        args: [{
                selector: 'a[nz-dropdown]',
                exportAs: 'nzDropdown'
            }]
    }], function () { return [{ type: ElementRef }, { type: Renderer2 }]; }, null); })();

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
var NzDropDownModule = /** @class */ (function () {
    function NzDropDownModule() {
    }
    /** @nocollapse */ NzDropDownModule.ɵmod = ɵɵdefineNgModule({ type: NzDropDownModule });
    /** @nocollapse */ NzDropDownModule.ɵinj = ɵɵdefineInjector({ factory: function NzDropDownModule_Factory(t) { return new (t || NzDropDownModule)(); }, imports: [[
                CommonModule,
                OverlayModule,
                FormsModule,
                NzButtonModule,
                NzMenuModule,
                NzIconModule,
                PlatformModule,
                NzNoAnimationModule,
                NzOverlayModule,
                NzDropdownServiceModule,
                NzContextMenuServiceModule,
                NzAddOnModule
            ],
            NzMenuModule] });
    return NzDropDownModule;
}());
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(NzDropDownModule, { declarations: [NzDropDownDirective, NzDropDownADirective, NzDropdownMenuComponent], imports: [CommonModule,
        OverlayModule,
        FormsModule,
        NzButtonModule,
        NzMenuModule,
        NzIconModule,
        PlatformModule,
        NzNoAnimationModule,
        NzOverlayModule,
        NzDropdownServiceModule,
        NzContextMenuServiceModule,
        NzAddOnModule], exports: [NzMenuModule, NzDropDownDirective, NzDropDownADirective, NzDropdownMenuComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzDropDownModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    OverlayModule,
                    FormsModule,
                    NzButtonModule,
                    NzMenuModule,
                    NzIconModule,
                    PlatformModule,
                    NzNoAnimationModule,
                    NzOverlayModule,
                    NzDropdownServiceModule,
                    NzContextMenuServiceModule,
                    NzAddOnModule
                ],
                entryComponents: [NzDropdownMenuComponent],
                declarations: [NzDropDownDirective, NzDropDownADirective, NzDropdownMenuComponent],
                exports: [NzMenuModule, NzDropDownDirective, NzDropDownADirective, NzDropdownMenuComponent]
            }]
    }], null, null); })();

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
var NzContextMenuService = /** @class */ (function () {
    function NzContextMenuService(overlay) {
        this.overlay = overlay;
        this.clickOutsideSubscription = Subscription.EMPTY;
        this.clickMenuSubscription = Subscription.EMPTY;
        this.positionSubscription = Subscription.EMPTY;
    }
    NzContextMenuService.prototype.create = function ($event, nzDropdownMenuComponent) {
        $event.preventDefault();
        var overlayRef = this.createOverlay($event);
        if (overlayRef.hasAttached()) {
            this.close();
        }
        this.attachTemplatePortal(overlayRef, nzDropdownMenuComponent);
        this.handleClickOutside();
    };
    NzContextMenuService.prototype.close = function () {
        if (this.overlayRef) {
            this.overlayRef.detach();
            this.setOpenState(false);
            this.clickOutsideSubscription.unsubscribe();
            this.clickMenuSubscription.unsubscribe();
            this.positionSubscription.unsubscribe();
        }
    };
    NzContextMenuService.prototype.handleClickOutside = function () {
        var _this = this;
        this.clickOutsideSubscription.unsubscribe();
        this.clickOutsideSubscription = fromEvent(document, 'click')
            .pipe(filter(function (event) { return !!_this.overlayRef && !_this.overlayRef.overlayElement.contains(event.target); }), 
        // handle firefox contextmenu event
        filter(function (event) { return event.button !== 2; }), take(1))
            .subscribe(function () {
            _this.close();
        });
    };
    NzContextMenuService.prototype.attachTemplatePortal = function (overlayRef, nzDropdownMenuComponent) {
        var _this = this;
        this.nzDropdownMenuComponent = nzDropdownMenuComponent;
        nzDropdownMenuComponent.setValue('nzTrigger', 'click');
        this.clickMenuSubscription.unsubscribe();
        this.clickMenuSubscription = nzDropdownMenuComponent.nzMenuDropdownService.menuItemClick$.subscribe(function () {
            _this.close();
        });
        overlayRef.attach(new TemplatePortal(nzDropdownMenuComponent.templateRef, nzDropdownMenuComponent.viewContainerRef));
        this.setOpenState(true);
    };
    NzContextMenuService.prototype.setOpenState = function (state) {
        this.nzDropdownMenuComponent.setValue('open', state);
    };
    NzContextMenuService.prototype.getOverlayConfig = function ($event) {
        return new OverlayConfig({
            panelClass: 'nz-dropdown-panel',
            positionStrategy: this.generatePositionStrategy($event),
            scrollStrategy: this.overlay.scrollStrategies.close()
        });
    };
    NzContextMenuService.prototype.generatePositionStrategy = function ($event) {
        return this.overlay
            .position()
            .flexibleConnectedTo({ x: $event.x, y: $event.y })
            .withPositions([
            new ConnectionPositionPair({ originX: 'start', originY: 'top' }, { overlayX: 'start', overlayY: 'top' }),
            new ConnectionPositionPair({ originX: 'start', originY: 'top' }, { overlayX: 'start', overlayY: 'bottom' }),
            new ConnectionPositionPair({ originX: 'start', originY: 'top' }, { overlayX: 'end', overlayY: 'bottom' }),
            new ConnectionPositionPair({ originX: 'start', originY: 'top' }, { overlayX: 'end', overlayY: 'top' })
        ]);
    };
    NzContextMenuService.prototype.subscribeToPositions = function (position) {
        var _this = this;
        this.positionSubscription.unsubscribe();
        this.positionSubscription = position.positionChanges.subscribe(function (change) {
            // TODO: positionChanges won't trigger if not dispose
            _this.nzDropdownMenuComponent.setValue('dropDownPosition', change.connectionPair.overlayY === 'bottom' ? 'top' : 'bottom');
        });
    };
    NzContextMenuService.prototype.createOverlay = function ($event) {
        var config = this.getOverlayConfig($event);
        if (!this.overlayRef) {
            this.overlayRef = this.overlay.create(config);
        }
        else {
            this.updatePosition(this.overlayRef, $event);
        }
        this.subscribeToPositions(config.positionStrategy);
        return this.overlayRef;
    };
    NzContextMenuService.prototype.updatePosition = function (overlayRef, $event) {
        overlayRef.updatePositionStrategy(this.generatePositionStrategy($event));
    };
    /** @nocollapse */ NzContextMenuService.ɵfac = function NzContextMenuService_Factory(t) { return new (t || NzContextMenuService)(ɵɵinject(Overlay)); };
    /** @nocollapse */ NzContextMenuService.ɵprov = ɵɵdefineInjectable({ token: NzContextMenuService, factory: NzContextMenuService.ɵfac, providedIn: NzContextMenuServiceModule });
    return NzContextMenuService;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzContextMenuService, [{
        type: Injectable,
        args: [{
                providedIn: NzContextMenuServiceModule
            }]
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

export { NzContextMenuService, NzContextMenuServiceModule, NzDropDownADirective, NzDropDownDirective, NzDropDownModule, NzDropdownMenuComponent, NzDropdownServiceModule, NzMenuDropdownService, dropdownMenuServiceFactory };
//# sourceMappingURL=ng-zorro-antd-dropdown.js.map
