import { __decorate, __metadata } from 'tslib';
import { ContentObserver, ObserversModule } from '@angular/cdk/observers';
import { Component, ChangeDetectionStrategy, ViewEncapsulation, ElementRef, ChangeDetectorRef, Renderer2, NgZone, Optional, Inject, ViewChild, ContentChildren, HostBinding, Input, NgModule } from '@angular/core';
import { ANIMATION_MODULE_TYPE } from '@angular/platform-browser/animations';
import { NzWaveDirective, isEmpty, findFirstNotEmptyNode, findLastNotEmptyNode, NzUpdateHostClassService, NzConfigService, NZ_WAVE_GLOBAL_CONFIG, InputBoolean, WithConfig, NzWaveModule } from 'ng-zorro-antd/core';
import { NzIconDirective, NzIconModule } from 'ng-zorro-antd/icon';
import { Subject } from 'rxjs';
import { takeUntil, startWith } from 'rxjs/operators';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/cdk/observers';
import * as ɵngcc2 from 'ng-zorro-antd/core';
import * as ɵngcc3 from '@angular/common';
import * as ɵngcc4 from 'ng-zorro-antd/icon';

var _c0 = ["contentElement"];
var _c1 = ["nz-button", ""];
function NzButtonComponent_i_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "i", 2);
} }
var _c2 = ["*"];
var NZ_CONFIG_COMPONENT_NAME = 'button';
var NzButtonComponent = /** @class */ (function () {
    function NzButtonComponent(elementRef, cdr, renderer, contentObserver, nzUpdateHostClassService, ngZone, nzConfigService, waveConfig, animationType) {
        var _this = this;
        this.elementRef = elementRef;
        this.cdr = cdr;
        this.renderer = renderer;
        this.contentObserver = contentObserver;
        this.nzUpdateHostClassService = nzUpdateHostClassService;
        this.ngZone = ngZone;
        this.nzConfigService = nzConfigService;
        this.waveConfig = waveConfig;
        this.animationType = animationType;
        this.nzWave = new NzWaveDirective(this.ngZone, this.elementRef, this.waveConfig, this.animationType);
        this.nzBlock = false;
        this.nzGhost = false;
        this.nzSearch = false;
        this.nzLoading = false;
        this.nzType = 'default';
        this.nzShape = null;
        this.el = this.elementRef.nativeElement;
        this.isInDropdown = false;
        this.iconOnly = false;
        this.destroy$ = new Subject();
        this.renderer.addClass(elementRef.nativeElement, 'ant-btn');
        this.nzConfigService
            .getConfigChangeEventForComponent(NZ_CONFIG_COMPONENT_NAME)
            .pipe(takeUntil(this.destroy$))
            .subscribe((/**
         * @return {?}
         */
        function () {
            _this.setClassMap();
            _this.cdr.markForCheck();
        }));
    }
    /** temp solution since no method add classMap to host https://github.com/angular/angular/issues/7289 */
    /**
     * temp solution since no method add classMap to host https://github.com/angular/angular/issues/7289
     * @return {?}
     */
    NzButtonComponent.prototype.setClassMap = /**
     * temp solution since no method add classMap to host https://github.com/angular/angular/issues/7289
     * @return {?}
     */
    function () {
        var _a;
        /** @type {?} */
        var prefixCls = 'ant-btn';
        /** @type {?} */
        var sizeMap = { large: 'lg', small: 'sm' };
        this.nzUpdateHostClassService.updateHostClass(this.el, (_a = {},
            _a[prefixCls + "-" + this.nzType] = this.nzType,
            _a[prefixCls + "-" + this.nzShape] = this.nzShape,
            _a[prefixCls + "-" + sizeMap[this.nzSize]] = sizeMap[this.nzSize],
            _a[prefixCls + "-loading"] = this.nzLoading,
            _a[prefixCls + "-icon-only"] = this.iconOnly && !this.nzSearch && !this.isInDropdown,
            _a[prefixCls + "-background-ghost"] = this.nzGhost,
            _a[prefixCls + "-block"] = this.nzBlock,
            _a["ant-input-search-button"] = this.nzSearch,
            _a));
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NzButtonComponent.prototype.updateIconDisplay = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (this.iconElement) {
            this.renderer.setStyle(this.iconElement, 'display', value ? 'none' : 'inline-block');
        }
    };
    /**
     * @return {?}
     */
    NzButtonComponent.prototype.checkContent = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var hasIcon = this.listOfIconElement && this.listOfIconElement.length;
        if (hasIcon) {
            this.moveIcon();
        }
        this.renderer.removeStyle(this.contentElement.nativeElement, 'display');
        /** https://github.com/angular/angular/issues/12530 **/
        if (isEmpty(this.contentElement.nativeElement)) {
            this.renderer.setStyle(this.contentElement.nativeElement, 'display', 'none');
            this.iconOnly = !!hasIcon;
        }
        else {
            this.renderer.removeStyle(this.contentElement.nativeElement, 'display');
            this.iconOnly = false;
        }
        this.setClassMap();
        this.updateIconDisplay(this.nzLoading);
        if (!((/** @type {?} */ (this.cdr))).destroyed) {
            this.cdr.detectChanges();
        }
    };
    /**
     * @return {?}
     */
    NzButtonComponent.prototype.moveIcon = /**
     * @return {?}
     */
    function () {
        if (this.listOfIconElement && this.listOfIconElement.length) {
            /** @type {?} */
            var firstChildElement = findFirstNotEmptyNode(this.contentElement.nativeElement);
            /** @type {?} */
            var lastChildElement = findLastNotEmptyNode(this.contentElement.nativeElement);
            if (firstChildElement && firstChildElement === this.listOfIconElement.first.nativeElement) {
                this.renderer.insertBefore(this.el, firstChildElement, this.contentElement.nativeElement);
                this.iconElement = (/** @type {?} */ (firstChildElement));
            }
            else if (lastChildElement && lastChildElement === this.listOfIconElement.last.nativeElement) {
                this.renderer.appendChild(this.el, lastChildElement);
            }
        }
    };
    /**
     * @return {?}
     */
    NzButtonComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.contentObserver
            .observe(this.contentElement)
            .pipe(startWith(true), takeUntil(this.destroy$))
            .subscribe((/**
         * @return {?}
         */
        function () {
            // https://github.com/NG-ZORRO/ng-zorro-antd/issues/3079
            Promise.resolve().then((/**
             * @return {?}
             */
            function () { return _this.checkContent(); }));
        }));
    };
    /**
     * @return {?}
     */
    NzButtonComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.setClassMap();
        this.nzWave.ngOnInit();
    };
    /**
     * @return {?}
     */
    NzButtonComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy$.next();
        this.destroy$.complete();
        this.nzWave.ngOnDestroy();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NzButtonComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.nzBlock ||
            changes.nzGhost ||
            changes.nzSearch ||
            changes.nzType ||
            changes.nzShape ||
            changes.nzSize ||
            changes.nzLoading) {
            this.setClassMap();
        }
        if (changes.nzLoading) {
            this.updateIconDisplay(this.nzLoading);
        }
        if (changes.nzType && changes.nzType.currentValue === 'link') {
            this.nzWave.disable();
        }
        else {
            this.nzWave.enable();
        }
    };
    /** @nocollapse */
    NzButtonComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: Renderer2 },
        { type: ContentObserver },
        { type: NzUpdateHostClassService },
        { type: NgZone },
        { type: NzConfigService },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [NZ_WAVE_GLOBAL_CONFIG,] }] },
        { type: String, decorators: [{ type: Optional }, { type: Inject, args: [ANIMATION_MODULE_TYPE,] }] }
    ]; };
    NzButtonComponent.propDecorators = {
        contentElement: [{ type: ViewChild, args: ['contentElement', { static: true },] }],
        listOfIconElement: [{ type: ContentChildren, args: [NzIconDirective, { read: ElementRef },] }],
        nzWave: [{ type: HostBinding, args: ['attr.nz-wave',] }],
        nzBlock: [{ type: Input }],
        nzGhost: [{ type: Input }],
        nzSearch: [{ type: Input }],
        nzLoading: [{ type: Input }],
        nzType: [{ type: Input }],
        nzShape: [{ type: Input }],
        nzSize: [{ type: Input }]
    };
    __decorate([
        InputBoolean(),
        __metadata("design:type", Boolean)
    ], NzButtonComponent.prototype, "nzBlock", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Boolean)
    ], NzButtonComponent.prototype, "nzGhost", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Boolean)
    ], NzButtonComponent.prototype, "nzSearch", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Boolean)
    ], NzButtonComponent.prototype, "nzLoading", void 0);
    __decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME, 'default'),
        __metadata("design:type", String)
    ], NzButtonComponent.prototype, "nzSize", void 0);
NzButtonComponent.ɵfac = function NzButtonComponent_Factory(t) { return new (t || NzButtonComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.ContentObserver), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.NzUpdateHostClassService), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.NgZone), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.NzConfigService), ɵngcc0.ɵɵdirectiveInject(NZ_WAVE_GLOBAL_CONFIG, 8), ɵngcc0.ɵɵdirectiveInject(ANIMATION_MODULE_TYPE, 8)); };
NzButtonComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzButtonComponent, selectors: [["", "nz-button", ""]], contentQueries: function NzButtonComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, NzIconDirective, false, ElementRef);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.listOfIconElement = _t);
    } }, viewQuery: function NzButtonComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵstaticViewQuery(_c0, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.contentElement = _t.first);
    } }, hostVars: 1, hostBindings: function NzButtonComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵattribute("nz-wave", ctx.nzWave);
    } }, inputs: { nzBlock: "nzBlock", nzGhost: "nzGhost", nzSearch: "nzSearch", nzLoading: "nzLoading", nzType: "nzType", nzShape: "nzShape", nzSize: "nzSize" }, exportAs: ["nzButton"], features: [ɵngcc0.ɵɵProvidersFeature([NzUpdateHostClassService]), ɵngcc0.ɵɵNgOnChangesFeature], attrs: _c1, ngContentSelectors: _c2, decls: 4, vars: 1, consts: [["nz-icon", "", "nzType", "loading", 4, "ngIf"], ["contentElement", ""], ["nz-icon", "", "nzType", "loading"]], template: function NzButtonComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵtemplate(0, NzButtonComponent_i_0_Template, 1, 0, "i", 0);
        ɵngcc0.ɵɵelementStart(1, "span", null, 1);
        ɵngcc0.ɵɵprojection(3);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", ctx.nzLoading);
    } }, directives: [ɵngcc3.NgIf, ɵngcc4.NzIconDirective], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzButtonComponent, [{
        type: Component,
        args: [{
                selector: '[nz-button]',
                exportAs: 'nzButton',
                providers: [NzUpdateHostClassService],
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                template: "<i nz-icon nzType=\"loading\" *ngIf=\"nzLoading\"></i>\r\n<span #contentElement><ng-content></ng-content></span>"
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc0.Renderer2 }, { type: ɵngcc1.ContentObserver }, { type: ɵngcc2.NzUpdateHostClassService }, { type: ɵngcc0.NgZone }, { type: ɵngcc2.NzConfigService }, { type: undefined, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [NZ_WAVE_GLOBAL_CONFIG]
            }] }, { type: String, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [ANIMATION_MODULE_TYPE]
            }] }]; }, { nzWave: [{
            type: HostBinding,
            args: ['attr.nz-wave']
        }], nzBlock: [{
            type: Input
        }], nzGhost: [{
            type: Input
        }], nzSearch: [{
            type: Input
        }], nzLoading: [{
            type: Input
        }], nzType: [{
            type: Input
        }], nzShape: [{
            type: Input
        }], contentElement: [{
            type: ViewChild,
            args: ['contentElement', { static: true }]
        }], listOfIconElement: [{
            type: ContentChildren,
            args: [NzIconDirective, { read: ElementRef }]
        }], nzSize: [{
            type: Input
        }] }); })();
    return NzButtonComponent;
}());
if (false) {
    /** @type {?} */
    NzButtonComponent.prototype.contentElement;
    /** @type {?} */
    NzButtonComponent.prototype.listOfIconElement;
    /** @type {?} */
    NzButtonComponent.prototype.nzWave;
    /** @type {?} */
    NzButtonComponent.prototype.nzBlock;
    /** @type {?} */
    NzButtonComponent.prototype.nzGhost;
    /** @type {?} */
    NzButtonComponent.prototype.nzSearch;
    /** @type {?} */
    NzButtonComponent.prototype.nzLoading;
    /** @type {?} */
    NzButtonComponent.prototype.nzType;
    /** @type {?} */
    NzButtonComponent.prototype.nzShape;
    /** @type {?} */
    NzButtonComponent.prototype.nzSize;
    /** @type {?} */
    NzButtonComponent.prototype.el;
    /** @type {?} */
    NzButtonComponent.prototype.isInDropdown;
    /**
     * @type {?}
     * @private
     */
    NzButtonComponent.prototype.iconElement;
    /**
     * @type {?}
     * @private
     */
    NzButtonComponent.prototype.iconOnly;
    /**
     * @type {?}
     * @private
     */
    NzButtonComponent.prototype.destroy$;
    /**
     * @type {?}
     * @private
     */
    NzButtonComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    NzButtonComponent.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    NzButtonComponent.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    NzButtonComponent.prototype.contentObserver;
    /**
     * @type {?}
     * @private
     */
    NzButtonComponent.prototype.nzUpdateHostClassService;
    /**
     * @type {?}
     * @private
     */
    NzButtonComponent.prototype.ngZone;
    /** @type {?} */
    NzButtonComponent.prototype.nzConfigService;
    /**
     * @type {?}
     * @private
     */
    NzButtonComponent.prototype.waveConfig;
    /**
     * @type {?}
     * @private
     */
    NzButtonComponent.prototype.animationType;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NzButtonGroupComponent = /** @class */ (function () {
    function NzButtonGroupComponent(nzUpdateHostClassService, elementRef) {
        this.nzUpdateHostClassService = nzUpdateHostClassService;
        this.elementRef = elementRef;
        this.isInDropdown = false;
    }
    Object.defineProperty(NzButtonGroupComponent.prototype, "nzSize", {
        get: /**
         * @return {?}
         */
        function () {
            return this._size;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._size = value;
            this.setClassMap();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzButtonGroupComponent.prototype.setClassMap = /**
     * @return {?}
     */
    function () {
        var _a;
        /** @type {?} */
        var prefixCls = 'ant-btn-group';
        /** @type {?} */
        var classMap = (_a = {},
            _a[prefixCls] = true,
            _a["ant-dropdown-button"] = this.isInDropdown,
            _a[prefixCls + "-lg"] = this.nzSize === 'large',
            _a[prefixCls + "-sm"] = this.nzSize === 'small',
            _a);
        this.nzUpdateHostClassService.updateHostClass(this.elementRef.nativeElement, classMap);
    };
    /**
     * @return {?}
     */
    NzButtonGroupComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.setClassMap();
    };
    /** @nocollapse */
    NzButtonGroupComponent.ctorParameters = function () { return [
        { type: NzUpdateHostClassService },
        { type: ElementRef }
    ]; };
    NzButtonGroupComponent.propDecorators = {
        nzSize: [{ type: Input }]
    };
NzButtonGroupComponent.ɵfac = function NzButtonGroupComponent_Factory(t) { return new (t || NzButtonGroupComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc2.NzUpdateHostClassService), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
NzButtonGroupComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzButtonGroupComponent, selectors: [["nz-button-group"]], inputs: { nzSize: "nzSize" }, exportAs: ["nzButtonGroup"], features: [ɵngcc0.ɵɵProvidersFeature([NzUpdateHostClassService])], ngContentSelectors: _c2, decls: 1, vars: 0, template: function NzButtonGroupComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzButtonGroupComponent, [{
        type: Component,
        args: [{
                selector: 'nz-button-group',
                exportAs: 'nzButtonGroup',
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                preserveWhitespaces: false,
                providers: [NzUpdateHostClassService],
                template: "<ng-content></ng-content>\r\n"
            }]
    }], function () { return [{ type: ɵngcc2.NzUpdateHostClassService }, { type: ɵngcc0.ElementRef }]; }, { nzSize: [{
            type: Input
        }] }); })();
    return NzButtonGroupComponent;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    NzButtonGroupComponent.prototype._size;
    /** @type {?} */
    NzButtonGroupComponent.prototype.isInDropdown;
    /**
     * @type {?}
     * @private
     */
    NzButtonGroupComponent.prototype.nzUpdateHostClassService;
    /**
     * @type {?}
     * @private
     */
    NzButtonGroupComponent.prototype.elementRef;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NzButtonModule = /** @class */ (function () {
    function NzButtonModule() {
    }
NzButtonModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: NzButtonModule });
NzButtonModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function NzButtonModule_Factory(t) { return new (t || NzButtonModule)(); }, imports: [[CommonModule, ObserversModule, NzWaveModule, NzIconModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(NzButtonModule, { declarations: function () { return [NzButtonComponent,
        NzButtonGroupComponent]; }, imports: function () { return [CommonModule, ObserversModule, NzWaveModule, NzIconModule]; }, exports: function () { return [NzButtonComponent,
        NzButtonGroupComponent]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzButtonModule, [{
        type: NgModule,
        args: [{
                declarations: [NzButtonComponent, NzButtonGroupComponent],
                exports: [NzButtonComponent, NzButtonGroupComponent],
                imports: [CommonModule, ObserversModule, NzWaveModule, NzIconModule]
            }]
    }], function () { return []; }, null); })();
    return NzButtonModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { NzButtonComponent, NzButtonGroupComponent, NzButtonModule };


//# sourceMappingURL=ng-zorro-antd-button.js.map