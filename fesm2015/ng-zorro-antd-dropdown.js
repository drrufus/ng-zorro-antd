import { __decorate, __metadata } from 'tslib';
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

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzMenuDropdownService extends NzMenuBaseService {
    constructor() {
        super(...arguments);
        this.isInDropDown = true;
    }
}
/** @nocollapse */ NzMenuDropdownService.ɵfac = function NzMenuDropdownService_Factory(t) { return ɵNzMenuDropdownService_BaseFactory(t || NzMenuDropdownService); };
/** @nocollapse */ NzMenuDropdownService.ɵprov = ɵɵdefineInjectable({ token: NzMenuDropdownService, factory: NzMenuDropdownService.ɵfac });
const ɵNzMenuDropdownService_BaseFactory = ɵɵgetInheritedFactory(NzMenuDropdownService);
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
    const _r2069 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 1);
    ɵɵlistener("mouseenter", function NzDropdownMenuComponent_ng_template_0_div_0_Template_div_mouseenter_0_listener($event) { ɵɵrestoreView(_r2069); const ctx_r2068 = ɵɵnextContext(2); return ctx_r2068.setVisibleStateWhen(true, "hover"); })("mouseleave", function NzDropdownMenuComponent_ng_template_0_div_0_Template_div_mouseleave_0_listener($event) { ɵɵrestoreView(_r2069); const ctx_r2070 = ɵɵnextContext(2); return ctx_r2070.setVisibleStateWhen(false, "hover"); });
    ɵɵelementStart(1, "div");
    ɵɵprojection(2);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2067 = ɵɵnextContext(2);
    ɵɵclassMap("ant-dropdown nz-dropdown ant-dropdown-placement-" + ctx_r2067.nzPlacement);
    ɵɵproperty("ngClass", ctx_r2067.nzOverlayClassName)("ngStyle", ctx_r2067.nzOverlayStyle)("@slideMotion", ctx_r2067.dropDownPosition)("@.disabled", ctx_r2067.noAnimation == null ? null : ctx_r2067.noAnimation.nzNoAnimation)("nzNoAnimation", ctx_r2067.noAnimation == null ? null : ctx_r2067.noAnimation.nzNoAnimation);
    ɵɵadvance(1);
    ɵɵclassProp("ant-table-filter-dropdown", ctx_r2067.nzTableFilter);
} }
function NzDropdownMenuComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵtemplate(0, NzDropdownMenuComponent_ng_template_0_div_0_Template, 3, 9, "div", 0);
} if (rf & 2) {
    const ctx_r2066 = ɵɵnextContext();
    ɵɵproperty("ngIf", ctx_r2066.open);
} }
const _c0 = ["*"];
function dropdownMenuServiceFactory(injector) {
    return injector.get(NzMenuDropdownService);
}
class NzDropdownMenuComponent {
    constructor(cdr, elementRef, renderer, viewContainerRef, nzMenuDropdownService, noAnimation) {
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
    setVisibleStateWhen(visible, trigger = 'all') {
        if (this.nzTrigger === trigger || trigger === 'all') {
            this.visible$.next(visible);
        }
    }
    setValue(key, value) {
        this[key] = value;
        this.cdr.markForCheck();
    }
    ngAfterContentInit() {
        this.renderer.removeChild(this.renderer.parentNode(this.elementRef.nativeElement), this.elementRef.nativeElement);
    }
}
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
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzDropdownMenuComponent, [{
        type: Component,
        args: [{
                selector: `nz-dropdown-menu`,
                templateUrl: './nz-dropdown-menu.component.html',
                exportAs: `nzDropdownMenu`,
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
                    `
      :root .ant-dropdown.nz-dropdown {
        top: 0;
        left: 0;
        position: relative;
        width: 100%;
        margin-top: 4px;
        margin-bottom: 4px;
      }
    `
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

class NzDropDownDirective {
    constructor(elementRef, renderer, overlay, platform, nzButtonComponent, nzButtonGroupComponent, viewContainerRef) {
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
        this.positions = [...DEFAULT_DROPDOWN_POSITIONS];
        this.positionSubscription = Subscription.EMPTY;
        this.overlaySubscription = Subscription.EMPTY;
        this.hover$ = merge(fromEvent(this.el, 'mouseenter').pipe(mapTo(true)), fromEvent(this.el, 'mouseleave').pipe(mapTo(false)));
        this.$click = fromEvent(this.el, 'click').pipe(tap(e => e.stopPropagation()), mapTo(true));
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
    setDisabled(disabled) {
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
    }
    getOverlayConfig() {
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
    }
    createOverlay() {
        if (!this.overlayRef) {
            const config = this.getOverlayConfig();
            this.overlayRef = this.overlay.create(config);
            this.subscribeOverlayEvent(this.overlayRef);
            this.subscribeToPositions(config.positionStrategy);
            return this.overlayRef;
        }
        else {
            const overlayConfig = this.overlayRef.getConfig();
            this.updateOverlayConfig(overlayConfig);
            return this.overlayRef;
        }
    }
    updateOverlayConfig(overlayConfig) {
        overlayConfig.minWidth = this.triggerWidth;
        overlayConfig.hasBackdrop = this.nzTrigger === 'click';
        return overlayConfig;
    }
    dispose() {
        if (this.overlayRef) {
            this.overlayRef.dispose();
            this.overlayRef = null;
            this.positionSubscription.unsubscribe();
            this.overlaySubscription.unsubscribe();
        }
    }
    subscribeToPositions(position) {
        this.positionSubscription.unsubscribe();
        this.positionSubscription = position.positionChanges.pipe(takeUntil(this.destroy$)).subscribe(change => {
            this.nzDropdownMenu.setValue('dropDownPosition', change.connectionPair.originY);
        });
    }
    subscribeOverlayEvent(overlayRef) {
        this.overlaySubscription.unsubscribe();
        this.overlaySubscription = merge(overlayRef.backdropClick(), overlayRef.detachments(), overlayRef.keydownEvents().pipe(filter(e => e.keyCode === ESCAPE && !hasModifierKey(e))))
            .pipe(takeUntil(this.destroy$))
            .subscribe(() => {
            this.nzDropdownMenu.setVisibleStateWhen(false);
        });
    }
    getPortal() {
        if (!this.portal || this.portal.templateRef !== this.nzDropdownMenu.templateRef) {
            this.portal = new TemplatePortal(this.nzDropdownMenu.templateRef, this.viewContainerRef);
        }
        return this.portal;
    }
    openMenu() {
        if (!this.dropdownOpen) {
            const overlayRef = this.createOverlay();
            const overlayConfig = overlayRef.getConfig();
            this.nzDropdownMenu.setValue('open', true);
            this.setPosition(overlayConfig.positionStrategy);
            overlayRef.attach(this.getPortal());
            this.dropdownOpen = true;
        }
    }
    closeMenu() {
        if (this.overlayRef) {
            this.overlayRef.detach();
            this.dropdownOpen = false;
            this.nzDropdownMenu.setValue('open', false);
        }
    }
    setPosition(positionStrategy) {
        this.positionStrategy = positionStrategy;
        positionStrategy.withPositions([...this.positions]);
    }
    updatePositionStrategy(positions) {
        if (this.positionStrategy) {
            this.positionStrategy.withPositions(positions);
        }
    }
    setTriggerWidth() {
        if (this.platform.isBrowser) {
            const element = this.nzMatchWidthElement ? this.nzMatchWidthElement.nativeElement : this.el;
            this.triggerWidth = element.getBoundingClientRect().width;
        }
    }
    initActionSubscribe() {
        const hostVisible$ = this.nzTrigger === 'hover' ? this.hover$ : this.$click;
        const dropdownMenuVisible$ = this.nzDropdownMenu.visible$;
        const menuClickVisible$ = this.nzClickHide ? this.nzDropdownMenu.nzMenuDropdownService.menuItemClick$.pipe(mapTo(false)) : EMPTY;
        const supVisible$ = merge(dropdownMenuVisible$, hostVisible$, menuClickVisible$);
        const subVisible$ = this.nzDropdownMenu.nzMenuDropdownService.menuOpen$;
        combineLatest([supVisible$, subVisible$])
            .pipe(map(([supVisible, subVisible]) => supVisible || subVisible), debounceTime(50), distinctUntilChanged(), takeUntil(this.destroy$))
            .subscribe(visible => {
            if (!this.nzDisabled && this.nzVisible !== visible) {
                this.nzVisible = visible;
                this.updateOverlayByVisible();
                this.nzVisibleChange.emit(this.nzVisible);
                this.setTriggerWidth();
                this.nzDropdownMenu.setValue('triggerWidth', this.triggerWidth);
            }
        });
    }
    updateOverlayByVisible() {
        if (this.nzVisible) {
            this.openMenu();
        }
        else {
            this.closeMenu();
        }
    }
    updateDisabledState() {
        this.setDisabled(this.nzDisabled);
    }
    regeneratePosition(placement, positions) {
        return [POSITION_MAP[placement], ...positions];
    }
    ngAfterViewInit() {
        if (this.nzDropdownMenu) {
            this.setTriggerWidth();
            this.initActionSubscribe();
            this.updateDisabledState();
        }
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
        this.dispose();
    }
    ngOnChanges(changes) {
        const { nzVisible, nzTrigger, nzPlacement, nzDisabled, nzOverlayClassName, nzOverlayStyle, nzTableFilter } = changes;
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
    }
}
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
class NzDropdownServiceModule {
}
/** @nocollapse */ NzDropdownServiceModule.ɵmod = ɵɵdefineNgModule({ type: NzDropdownServiceModule });
/** @nocollapse */ NzDropdownServiceModule.ɵinj = ɵɵdefineInjector({ factory: function NzDropdownServiceModule_Factory(t) { return new (t || NzDropdownServiceModule)(); } });
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
class NzContextMenuServiceModule {
}
/** @nocollapse */ NzContextMenuServiceModule.ɵmod = ɵɵdefineNgModule({ type: NzContextMenuServiceModule });
/** @nocollapse */ NzContextMenuServiceModule.ɵinj = ɵɵdefineInjector({ factory: function NzContextMenuServiceModule_Factory(t) { return new (t || NzContextMenuServiceModule)(); } });
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
class NzDropDownADirective {
    constructor(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.renderer.addClass(this.elementRef.nativeElement, 'ant-dropdown-link');
    }
}
/** @nocollapse */ NzDropDownADirective.ɵfac = function NzDropDownADirective_Factory(t) { return new (t || NzDropDownADirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2)); };
/** @nocollapse */ NzDropDownADirective.ɵdir = ɵɵdefineDirective({ type: NzDropDownADirective, selectors: [["a", "nz-dropdown", ""]], exportAs: ["nzDropdown"] });
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
class NzDropDownModule {
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
class NzContextMenuService {
    constructor(overlay) {
        this.overlay = overlay;
        this.clickOutsideSubscription = Subscription.EMPTY;
        this.clickMenuSubscription = Subscription.EMPTY;
        this.positionSubscription = Subscription.EMPTY;
    }
    create($event, nzDropdownMenuComponent) {
        $event.preventDefault();
        const overlayRef = this.createOverlay($event);
        if (overlayRef.hasAttached()) {
            this.close();
        }
        this.attachTemplatePortal(overlayRef, nzDropdownMenuComponent);
        this.handleClickOutside();
    }
    close() {
        if (this.overlayRef) {
            this.overlayRef.detach();
            this.setOpenState(false);
            this.clickOutsideSubscription.unsubscribe();
            this.clickMenuSubscription.unsubscribe();
            this.positionSubscription.unsubscribe();
        }
    }
    handleClickOutside() {
        this.clickOutsideSubscription.unsubscribe();
        this.clickOutsideSubscription = fromEvent(document, 'click')
            .pipe(filter(event => !!this.overlayRef && !this.overlayRef.overlayElement.contains(event.target)), 
        // handle firefox contextmenu event
        filter(event => event.button !== 2), take(1))
            .subscribe(() => {
            this.close();
        });
    }
    attachTemplatePortal(overlayRef, nzDropdownMenuComponent) {
        this.nzDropdownMenuComponent = nzDropdownMenuComponent;
        nzDropdownMenuComponent.setValue('nzTrigger', 'click');
        this.clickMenuSubscription.unsubscribe();
        this.clickMenuSubscription = nzDropdownMenuComponent.nzMenuDropdownService.menuItemClick$.subscribe(() => {
            this.close();
        });
        overlayRef.attach(new TemplatePortal(nzDropdownMenuComponent.templateRef, nzDropdownMenuComponent.viewContainerRef));
        this.setOpenState(true);
    }
    setOpenState(state) {
        this.nzDropdownMenuComponent.setValue('open', state);
    }
    getOverlayConfig($event) {
        return new OverlayConfig({
            panelClass: 'nz-dropdown-panel',
            positionStrategy: this.generatePositionStrategy($event),
            scrollStrategy: this.overlay.scrollStrategies.close()
        });
    }
    generatePositionStrategy($event) {
        return this.overlay
            .position()
            .flexibleConnectedTo({ x: $event.x, y: $event.y })
            .withPositions([
            new ConnectionPositionPair({ originX: 'start', originY: 'top' }, { overlayX: 'start', overlayY: 'top' }),
            new ConnectionPositionPair({ originX: 'start', originY: 'top' }, { overlayX: 'start', overlayY: 'bottom' }),
            new ConnectionPositionPair({ originX: 'start', originY: 'top' }, { overlayX: 'end', overlayY: 'bottom' }),
            new ConnectionPositionPair({ originX: 'start', originY: 'top' }, { overlayX: 'end', overlayY: 'top' })
        ]);
    }
    subscribeToPositions(position) {
        this.positionSubscription.unsubscribe();
        this.positionSubscription = position.positionChanges.subscribe(change => {
            // TODO: positionChanges won't trigger if not dispose
            this.nzDropdownMenuComponent.setValue('dropDownPosition', change.connectionPair.overlayY === 'bottom' ? 'top' : 'bottom');
        });
    }
    createOverlay($event) {
        const config = this.getOverlayConfig($event);
        if (!this.overlayRef) {
            this.overlayRef = this.overlay.create(config);
        }
        else {
            this.updatePosition(this.overlayRef, $event);
        }
        this.subscribeToPositions(config.positionStrategy);
        return this.overlayRef;
    }
    updatePosition(overlayRef, $event) {
        overlayRef.updatePositionStrategy(this.generatePositionStrategy($event));
    }
}
/** @nocollapse */ NzContextMenuService.ɵfac = function NzContextMenuService_Factory(t) { return new (t || NzContextMenuService)(ɵɵinject(Overlay)); };
/** @nocollapse */ NzContextMenuService.ɵprov = ɵɵdefineInjectable({ token: NzContextMenuService, factory: NzContextMenuService.ɵfac, providedIn: NzContextMenuServiceModule });
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
