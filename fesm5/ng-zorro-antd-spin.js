import { __decorate, __metadata } from 'tslib';
import { ɵɵelementStart, ɵɵelement, ɵɵelementEnd, ɵɵnextContext, ɵɵclassProp, ɵɵtext, ɵɵadvance, ɵɵtextInterpolate, ɵɵtemplate, ɵɵreference, ɵɵproperty, ɵɵprojection, ɵɵdirectiveInject, ChangeDetectorRef, ɵɵdefineComponent, ɵɵallocHostVars, ɵɵNgOnChangesFeature, ɵɵprojectionDef, ɵɵtemplateRefExtractor, TemplateRef, ɵsetClassMetadata, Component, ViewEncapsulation, ChangeDetectionStrategy, Input, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';
import { NzConfigService, WithConfig, InputNumber, InputBoolean } from 'ng-zorro-antd/core';
import { NgIf, NgTemplateOutlet, CommonModule } from '@angular/common';
import { ObserversModule } from '@angular/cdk/observers';

function NzSpinComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span", 3);
    ɵɵelement(1, "i", 4);
    ɵɵelement(2, "i", 4);
    ɵɵelement(3, "i", 4);
    ɵɵelement(4, "i", 4);
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r281 = ɵɵnextContext();
    ɵɵclassProp("ant-spin-dot-spin", ctx_r281.loading);
} }
function NzSpinComponent_div_2_ng_template_2_Template(rf, ctx) { }
function NzSpinComponent_div_2_div_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 8);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r285 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r285.nzTip);
} }
function NzSpinComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵelementStart(1, "div", 5);
    ɵɵtemplate(2, NzSpinComponent_div_2_ng_template_2_Template, 0, 0, "ng-template", 6);
    ɵɵtemplate(3, NzSpinComponent_div_2_div_3_Template, 2, 1, "div", 7);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r282 = ɵɵnextContext();
    var _r280 = ɵɵreference(1);
    ɵɵadvance(1);
    ɵɵclassProp("ant-spin-spinning", ctx_r282.loading)("ant-spin-lg", ctx_r282.nzSize === "large")("ant-spin-sm", ctx_r282.nzSize === "small")("ant-spin-show-text", ctx_r282.nzTip);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", ctx_r282.nzIndicator || _r280);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r282.nzTip);
} }
function NzSpinComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 9);
    ɵɵprojection(1);
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r283 = ɵɵnextContext();
    ɵɵclassProp("ant-spin-blur", ctx_r283.loading);
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
    NzSpinComponent.prototype.subscribeLoading = function () {
        var _this = this;
        this.unsubscribeLoading();
        this.loading_ = this.loading$.subscribe(function (data) {
            _this.loading = data;
            _this.cdr.markForCheck();
        });
    };
    NzSpinComponent.prototype.unsubscribeLoading = function () {
        if (this.loading_) {
            this.loading_.unsubscribe();
            this.loading_ = null;
        }
    };
    NzSpinComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscribeLoading();
        this.nzConfigService
            .getConfigChangeEventForComponent(NZ_CONFIG_COMPONENT_NAME)
            .pipe(takeUntil(this.destroy$))
            .subscribe(function () { return _this.cdr.markForCheck(); });
    };
    NzSpinComponent.prototype.ngOnChanges = function (changes) {
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
    NzSpinComponent.prototype.ngOnDestroy = function () {
        this.destroy$.next();
        this.destroy$.complete();
        this.unsubscribeLoading();
    };
    /** @nocollapse */ NzSpinComponent.ɵfac = function NzSpinComponent_Factory(t) { return new (t || NzSpinComponent)(ɵɵdirectiveInject(NzConfigService), ɵɵdirectiveInject(ChangeDetectorRef)); };
    /** @nocollapse */ NzSpinComponent.ɵcmp = ɵɵdefineComponent({ type: NzSpinComponent, selectors: [["nz-spin"]], hostBindings: function NzSpinComponent_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
            ɵɵallocHostVars(1);
        } if (rf & 2) {
            ɵɵclassProp("ant-spin-nested-loading", !ctx.nzSimple);
        } }, inputs: { nzIndicator: "nzIndicator", nzSize: "nzSize", nzTip: "nzTip", nzDelay: "nzDelay", nzSimple: "nzSimple", nzSpinning: "nzSpinning" }, exportAs: ["nzSpin"], features: [ɵɵNgOnChangesFeature()], ngContentSelectors: _c0, decls: 4, vars: 2, consts: [["defaultIndicatorTemplate", ""], [4, "ngIf"], ["class", "ant-spin-container", 3, "ant-spin-blur", 4, "ngIf"], [1, "ant-spin-dot"], [1, "ant-spin-dot-item"], [1, "ant-spin"], [3, "ngTemplateOutlet"], ["class", "ant-spin-text", 4, "ngIf"], [1, "ant-spin-text"], [1, "ant-spin-container"]], template: function NzSpinComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵprojectionDef();
            ɵɵtemplate(0, NzSpinComponent_ng_template_0_Template, 5, 1, "ng-template", null, 0, ɵɵtemplateRefExtractor);
            ɵɵtemplate(2, NzSpinComponent_div_2_Template, 4, 6, "div", 1);
            ɵɵtemplate(3, NzSpinComponent_div_3_Template, 2, 1, "div", 2);
        } if (rf & 2) {
            ɵɵadvance(2);
            ɵɵproperty("ngIf", ctx.loading);
            ɵɵadvance(1);
            ɵɵproperty("ngIf", !ctx.nzSimple);
        } }, directives: [NgIf, NgTemplateOutlet], styles: ["\n      nz-spin {\n        display: block;\n      }\n    "], encapsulation: 2, changeDetection: 0 });
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
    return NzSpinComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzSpinComponent, [{
        type: Component,
        args: [{
                selector: 'nz-spin',
                exportAs: 'nzSpin',
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                templateUrl: './nz-spin.component.html',
                host: {
                    '[class.ant-spin-nested-loading]': '!nzSimple'
                },
                styles: [
                    "\n      nz-spin {\n        display: block;\n      }\n    "
                ]
            }]
    }], function () { return [{ type: NzConfigService }, { type: ChangeDetectorRef }]; }, { nzIndicator: [{
            type: Input
        }], nzSize: [{
            type: Input
        }], nzTip: [{
            type: Input
        }], nzDelay: [{
            type: Input
        }], nzSimple: [{
            type: Input
        }], nzSpinning: [{
            type: Input
        }] }); })();

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
var NzSpinModule = /** @class */ (function () {
    function NzSpinModule() {
    }
    /** @nocollapse */ NzSpinModule.ɵmod = ɵɵdefineNgModule({ type: NzSpinModule });
    /** @nocollapse */ NzSpinModule.ɵinj = ɵɵdefineInjector({ factory: function NzSpinModule_Factory(t) { return new (t || NzSpinModule)(); }, imports: [[CommonModule, ObserversModule]] });
    return NzSpinModule;
}());
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(NzSpinModule, { declarations: [NzSpinComponent], imports: [CommonModule, ObserversModule], exports: [NzSpinComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzSpinModule, [{
        type: NgModule,
        args: [{
                exports: [NzSpinComponent],
                declarations: [NzSpinComponent],
                imports: [CommonModule, ObserversModule]
            }]
    }], null, null); })();

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

export { NzSpinComponent, NzSpinModule };
//# sourceMappingURL=ng-zorro-antd-spin.js.map
