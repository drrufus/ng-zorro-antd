import { __decorate, __metadata } from 'tslib';
import { Component, ViewEncapsulation, ChangeDetectionStrategy, ChangeDetectorRef, Input, TemplateRef, NgModule } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';
import { NzConfigService, WithConfig, InputNumber, InputBoolean } from 'ng-zorro-antd/core';
import { ObserversModule } from '@angular/cdk/observers';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from 'ng-zorro-antd/core';
import * as ɵngcc2 from '@angular/common';

function NzSpinComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span", 3);
    ɵngcc0.ɵɵelement(1, "i", 4);
    ɵngcc0.ɵɵelement(2, "i", 4);
    ɵngcc0.ɵɵelement(3, "i", 4);
    ɵngcc0.ɵɵelement(4, "i", 4);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassProp("ant-spin-dot-spin", ctx_r1.loading);
} }
function NzSpinComponent_div_2_ng_template_2_Template(rf, ctx) { }
function NzSpinComponent_div_2_div_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 8);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r5 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r5.nzTip);
} }
function NzSpinComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div");
    ɵngcc0.ɵɵelementStart(1, "div", 5);
    ɵngcc0.ɵɵtemplate(2, NzSpinComponent_div_2_ng_template_2_Template, 0, 0, "ng-template", 6);
    ɵngcc0.ɵɵtemplate(3, NzSpinComponent_div_2_div_3_Template, 2, 1, "div", 7);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r2 = ɵngcc0.ɵɵnextContext();
    var _r0 = ɵngcc0.ɵɵreference(1);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassProp("ant-spin-spinning", ctx_r2.loading)("ant-spin-lg", ctx_r2.nzSize === "large")("ant-spin-sm", ctx_r2.nzSize === "small")("ant-spin-show-text", ctx_r2.nzTip);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r2.nzIndicator || _r0);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r2.nzTip);
} }
function NzSpinComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 9);
    ɵngcc0.ɵɵprojection(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r3 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassProp("ant-spin-blur", ctx_r3.loading);
} }
var _c0 = ["*"];
var NZ_CONFIG_COMPONENT_NAME = 'spin';
var NzSpinComponent = /** @class */ (function () {
    function NzSpinComponent(nzConfigService, cdr) {
        this.nzConfigService = nzConfigService;
        this.cdr = cdr;
        this.nzSize = 'default';
        this.nzDelay = 0;
        this.nzSimple = false;
        this.nzSpinning = true;
        this.loading = true;
        this.destroy$ = new Subject();
        this.spinning$ = new BehaviorSubject(this.nzSpinning);
        this.loading$ = this.spinning$.pipe(debounceTime(this.nzDelay));
    }
    /**
     * @return {?}
     */
    NzSpinComponent.prototype.subscribeLoading = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.unsubscribeLoading();
        this.loading_ = this.loading$.subscribe((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            _this.loading = data;
            _this.cdr.markForCheck();
        }));
    };
    /**
     * @return {?}
     */
    NzSpinComponent.prototype.unsubscribeLoading = /**
     * @return {?}
     */
    function () {
        if (this.loading_) {
            this.loading_.unsubscribe();
            this.loading_ = null;
        }
    };
    /**
     * @return {?}
     */
    NzSpinComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.subscribeLoading();
        this.nzConfigService
            .getConfigChangeEventForComponent(NZ_CONFIG_COMPONENT_NAME)
            .pipe(takeUntil(this.destroy$))
            .subscribe((/**
         * @return {?}
         */
        function () { return _this.cdr.markForCheck(); }));
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NzSpinComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.nzSpinning) {
            if (changes.nzSpinning.isFirstChange()) {
                this.loading = this.nzSpinning;
            }
            this.spinning$.next(this.nzSpinning);
        }
        if (changes.nzDelay) {
            this.loading$ = this.spinning$.pipe(debounceTime(this.nzDelay));
            this.subscribeLoading();
        }
    };
    /**
     * @return {?}
     */
    NzSpinComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy$.next();
        this.destroy$.complete();
        this.unsubscribeLoading();
    };
    /** @nocollapse */
    NzSpinComponent.ctorParameters = function () { return [
        { type: NzConfigService },
        { type: ChangeDetectorRef }
    ]; };
    NzSpinComponent.propDecorators = {
        nzIndicator: [{ type: Input }],
        nzSize: [{ type: Input }],
        nzTip: [{ type: Input }],
        nzDelay: [{ type: Input }],
        nzSimple: [{ type: Input }],
        nzSpinning: [{ type: Input }]
    };
    __decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME),
        __metadata("design:type", TemplateRef)
    ], NzSpinComponent.prototype, "nzIndicator", void 0);
    __decorate([
        InputNumber(),
        __metadata("design:type", Object)
    ], NzSpinComponent.prototype, "nzDelay", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzSpinComponent.prototype, "nzSimple", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzSpinComponent.prototype, "nzSpinning", void 0);
NzSpinComponent.ɵfac = function NzSpinComponent_Factory(t) { return new (t || NzSpinComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.NzConfigService), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
NzSpinComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzSpinComponent, selectors: [["nz-spin"]], hostVars: 2, hostBindings: function NzSpinComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("ant-spin-nested-loading", !ctx.nzSimple);
    } }, inputs: { nzSize: "nzSize", nzDelay: "nzDelay", nzSimple: "nzSimple", nzSpinning: "nzSpinning", nzIndicator: "nzIndicator", nzTip: "nzTip" }, exportAs: ["nzSpin"], features: [ɵngcc0.ɵɵNgOnChangesFeature], ngContentSelectors: _c0, decls: 4, vars: 2, consts: [["defaultIndicatorTemplate", ""], [4, "ngIf"], ["class", "ant-spin-container", 3, "ant-spin-blur", 4, "ngIf"], [1, "ant-spin-dot"], [1, "ant-spin-dot-item"], [1, "ant-spin"], [3, "ngTemplateOutlet"], ["class", "ant-spin-text", 4, "ngIf"], [1, "ant-spin-text"], [1, "ant-spin-container"]], template: function NzSpinComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵtemplate(0, NzSpinComponent_ng_template_0_Template, 5, 2, "ng-template", null, 0, ɵngcc0.ɵɵtemplateRefExtractor);
        ɵngcc0.ɵɵtemplate(2, NzSpinComponent_div_2_Template, 4, 10, "div", 1);
        ɵngcc0.ɵɵtemplate(3, NzSpinComponent_div_3_Template, 2, 2, "div", 2);
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", ctx.loading);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.nzSimple);
    } }, directives: [ɵngcc2.NgIf, ɵngcc2.NgTemplateOutlet], styles: ["\n      nz-spin {\n        display: block;\n      }\n    "], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzSpinComponent, [{
        type: Component,
        args: [{
                selector: 'nz-spin',
                exportAs: 'nzSpin',
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: "<ng-template #defaultIndicatorTemplate>\r\n  <span class=\"ant-spin-dot\" [class.ant-spin-dot-spin]=\"loading\">\r\n    <i class=\"ant-spin-dot-item\"></i><i class=\"ant-spin-dot-item\"></i><i class=\"ant-spin-dot-item\"></i><i class=\"ant-spin-dot-item\"></i>\r\n  </span>\r\n</ng-template>\r\n<div *ngIf=\"loading\">\r\n  <div class=\"ant-spin\"\r\n    [class.ant-spin-spinning]=\"loading\"\r\n    [class.ant-spin-lg]=\"nzSize === 'large'\"\r\n    [class.ant-spin-sm]=\"nzSize === 'small'\"\r\n    [class.ant-spin-show-text]=\"nzTip\">\r\n    <ng-template [ngTemplateOutlet]=\"nzIndicator || defaultIndicatorTemplate\"></ng-template>\r\n    <div class=\"ant-spin-text\" *ngIf=\"nzTip\">{{ nzTip }}</div>\r\n  </div>\r\n</div>\r\n<div *ngIf=\"!nzSimple\"\r\n  class=\"ant-spin-container\"\r\n  [class.ant-spin-blur]=\"loading\">\r\n  <ng-content></ng-content>\r\n</div>\r\n",
                host: {
                    '[class.ant-spin-nested-loading]': '!nzSimple'
                },
                styles: ["\n      nz-spin {\n        display: block;\n      }\n    "]
            }]
    }], function () { return [{ type: ɵngcc1.NzConfigService }, { type: ɵngcc0.ChangeDetectorRef }]; }, { nzSize: [{
            type: Input
        }], nzDelay: [{
            type: Input
        }], nzSimple: [{
            type: Input
        }], nzSpinning: [{
            type: Input
        }], nzIndicator: [{
            type: Input
        }], nzTip: [{
            type: Input
        }] }); })();
    return NzSpinComponent;
}());
if (false) {
    /** @type {?} */
    NzSpinComponent.prototype.nzIndicator;
    /** @type {?} */
    NzSpinComponent.prototype.nzSize;
    /** @type {?} */
    NzSpinComponent.prototype.nzTip;
    /** @type {?} */
    NzSpinComponent.prototype.nzDelay;
    /** @type {?} */
    NzSpinComponent.prototype.nzSimple;
    /** @type {?} */
    NzSpinComponent.prototype.nzSpinning;
    /** @type {?} */
    NzSpinComponent.prototype.loading;
    /**
     * @type {?}
     * @private
     */
    NzSpinComponent.prototype.destroy$;
    /**
     * @type {?}
     * @private
     */
    NzSpinComponent.prototype.spinning$;
    /**
     * @type {?}
     * @private
     */
    NzSpinComponent.prototype.loading$;
    /**
     * @type {?}
     * @private
     */
    NzSpinComponent.prototype.loading_;
    /** @type {?} */
    NzSpinComponent.prototype.nzConfigService;
    /**
     * @type {?}
     * @private
     */
    NzSpinComponent.prototype.cdr;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NzSpinModule = /** @class */ (function () {
    function NzSpinModule() {
    }
NzSpinModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: NzSpinModule });
NzSpinModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function NzSpinModule_Factory(t) { return new (t || NzSpinModule)(); }, imports: [[CommonModule, ObserversModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(NzSpinModule, { declarations: function () { return [NzSpinComponent]; }, imports: function () { return [CommonModule, ObserversModule]; }, exports: function () { return [NzSpinComponent]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzSpinModule, [{
        type: NgModule,
        args: [{
                exports: [NzSpinComponent],
                declarations: [NzSpinComponent],
                imports: [CommonModule, ObserversModule]
            }]
    }], function () { return []; }, null); })();
    return NzSpinModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { NzSpinComponent, NzSpinModule };


//# sourceMappingURL=ng-zorro-antd-spin.js.map