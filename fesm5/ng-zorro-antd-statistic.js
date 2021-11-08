import { __extends, __read } from 'tslib';
import { Platform, PlatformModule } from '@angular/cdk/platform';
import { Component, ChangeDetectionStrategy, ViewEncapsulation, Input, EventEmitter, ChangeDetectorRef, NgZone, Output, Inject, LOCALE_ID, NgModule } from '@angular/core';
import { interval } from 'rxjs';
import { getLocaleNumberSymbol, NumberSymbol, CommonModule } from '@angular/common';
import { NzAddOnModule, NzPipesModule } from 'ng-zorro-antd/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
/** @type {?} */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from 'ng-zorro-antd/core';
import * as ɵngcc2 from '@angular/common';
import * as ɵngcc3 from '@angular/cdk/platform';

function NzStatisticComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r0.nzTitle);
} }
function NzStatisticComponent_span_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r3 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r3.nzPrefix);
} }
function NzStatisticComponent_span_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span", 6);
    ɵngcc0.ɵɵtemplate(1, NzStatisticComponent_span_3_ng_container_1_Template, 2, 1, "ng-container", 1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("nzStringTemplateOutlet", ctx_r1.nzPrefix);
} }
function NzStatisticComponent_span_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r4 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r4.nzSuffix);
} }
function NzStatisticComponent_span_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span", 7);
    ɵngcc0.ɵɵtemplate(1, NzStatisticComponent_span_5_ng_container_1_Template, 2, 1, "ng-container", 1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("nzStringTemplateOutlet", ctx_r2.nzSuffix);
} }
function NzCountdownComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtext(0);
    ɵngcc0.ɵɵpipe(1, "nzTimeRange");
} if (rf & 2) {
    var ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵtextInterpolate(ɵngcc0.ɵɵpipeBind2(1, 1, ctx_r1.diff, ctx_r1.nzFormat));
} }
var _c0 = function (a0) { return { $implicit: a0 }; };
function NzStatisticNumberComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0, 2);
} if (rf & 2) {
    var ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r0.nzValueTemplate)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction1(2, _c0, ctx_r0.nzValue));
} }
function NzStatisticNumberComponent_ng_container_1_span_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span", 5);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r2 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r2.displayInt);
} }
function NzStatisticNumberComponent_ng_container_1_span_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span", 6);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r3 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r3.displayDecimal);
} }
function NzStatisticNumberComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, NzStatisticNumberComponent_ng_container_1_span_1_Template, 2, 1, "span", 3);
    ɵngcc0.ɵɵtemplate(2, NzStatisticNumberComponent_ng_container_1_span_2_Template, 2, 1, "span", 4);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r1.displayInt);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r1.displayDecimal);
} }
var REFRESH_INTERVAL = 1000 / 30;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NzStatisticComponent = /** @class */ (function () {
    function NzStatisticComponent() {
        this.nzValueStyle = {};
    }
    NzStatisticComponent.propDecorators = {
        nzPrefix: [{ type: Input }],
        nzSuffix: [{ type: Input }],
        nzTitle: [{ type: Input }],
        nzValue: [{ type: Input }],
        nzValueStyle: [{ type: Input }],
        nzValueTemplate: [{ type: Input }]
    };
NzStatisticComponent.ɵfac = function NzStatisticComponent_Factory(t) { return new (t || NzStatisticComponent)(); };
NzStatisticComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzStatisticComponent, selectors: [["nz-statistic"]], hostAttrs: [1, "ant-statistic"], inputs: { nzValueStyle: "nzValueStyle", nzPrefix: "nzPrefix", nzSuffix: "nzSuffix", nzTitle: "nzTitle", nzValue: "nzValue", nzValueTemplate: "nzValueTemplate" }, exportAs: ["nzStatistic"], decls: 6, vars: 6, consts: [[1, "ant-statistic-title"], [4, "nzStringTemplateOutlet"], [1, "ant-statistic-content", 3, "ngStyle"], ["class", "ant-statistic-content-prefix", 4, "ngIf"], [3, "nzValue", "nzValueTemplate"], ["class", "ant-statistic-content-suffix", 4, "ngIf"], [1, "ant-statistic-content-prefix"], [1, "ant-statistic-content-suffix"]], template: function NzStatisticComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵtemplate(1, NzStatisticComponent_ng_container_1_Template, 2, 1, "ng-container", 1);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(2, "div", 2);
        ɵngcc0.ɵɵtemplate(3, NzStatisticComponent_span_3_Template, 2, 1, "span", 3);
        ɵngcc0.ɵɵelement(4, "nz-statistic-number", 4);
        ɵngcc0.ɵɵtemplate(5, NzStatisticComponent_span_5_Template, 2, 1, "span", 5);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("nzStringTemplateOutlet", ctx.nzTitle);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngStyle", ctx.nzValueStyle);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.nzPrefix);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("nzValue", ctx.nzValue)("nzValueTemplate", ctx.nzValueTemplate);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.nzSuffix);
    } }, directives: function () { return [ɵngcc1.NzStringTemplateOutletDirective, ɵngcc2.NgStyle, ɵngcc2.NgIf, NzStatisticNumberComponent]; }, styles: ["nz-statistic { display: block; }"], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzStatisticComponent, [{
        type: Component,
        args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                selector: 'nz-statistic',
                exportAs: 'nzStatistic',
                template: "<div class=\"ant-statistic-title\">\r\n  <ng-container *nzStringTemplateOutlet=\"nzTitle\">{{ nzTitle }}</ng-container>\r\n</div>\r\n<div class=\"ant-statistic-content\" [ngStyle]=\"nzValueStyle\">\r\n  <span *ngIf=\"nzPrefix\" class=\"ant-statistic-content-prefix\">\r\n    <ng-container *nzStringTemplateOutlet=\"nzPrefix\">{{ nzPrefix }}</ng-container>\r\n  </span>\r\n  <nz-statistic-number\r\n    [nzValue]=\"nzValue\"\r\n    [nzValueTemplate]=\"nzValueTemplate\">\r\n  </nz-statistic-number>\r\n  <span *ngIf=\"nzSuffix\" class=\"ant-statistic-content-suffix\">\r\n    <ng-container *nzStringTemplateOutlet=\"nzSuffix\">{{ nzSuffix }}</ng-container>\r\n  </span>\r\n</div>\r\n",
                host: {
                    class: 'ant-statistic'
                },
                styles: ['nz-statistic { display: block; }']
            }]
    }], function () { return []; }, { nzValueStyle: [{
            type: Input
        }], nzPrefix: [{
            type: Input
        }], nzSuffix: [{
            type: Input
        }], nzTitle: [{
            type: Input
        }], nzValue: [{
            type: Input
        }], nzValueTemplate: [{
            type: Input
        }] }); })();
    return NzStatisticComponent;
}());
if (false) {
    /** @type {?} */
    NzStatisticComponent.prototype.nzPrefix;
    /** @type {?} */
    NzStatisticComponent.prototype.nzSuffix;
    /** @type {?} */
    NzStatisticComponent.prototype.nzTitle;
    /** @type {?} */
    NzStatisticComponent.prototype.nzValue;
    /** @type {?} */
    NzStatisticComponent.prototype.nzValueStyle;
    /** @type {?} */
    NzStatisticComponent.prototype.nzValueTemplate;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NzCountdownComponent = /** @class */ (function (_super) {
    __extends(NzCountdownComponent, _super);
    function NzCountdownComponent(cdr, ngZone, platform) {
        var _this = _super.call(this) || this;
        _this.cdr = cdr;
        _this.ngZone = ngZone;
        _this.platform = platform;
        /**
         * @override
         */
        _this.nzFormat = 'HH:mm:ss';
        _this.nzCountdownFinish = new EventEmitter();
        return _this;
    }
    /** @override */
    /**
     * @override
     * @param {?} changes
     * @return {?}
     */
    NzCountdownComponent.prototype.ngOnChanges = /**
     * @override
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.nzValue) {
            this.target = Number(changes.nzValue.currentValue);
            if (!changes.nzValue.isFirstChange()) {
                this.syncTimer();
            }
        }
    };
    /**
     * @return {?}
     */
    NzCountdownComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.syncTimer();
    };
    /**
     * @return {?}
     */
    NzCountdownComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.stopTimer();
    };
    /**
     * @return {?}
     */
    NzCountdownComponent.prototype.syncTimer = /**
     * @return {?}
     */
    function () {
        if (this.target >= Date.now()) {
            this.startTimer();
        }
        else {
            this.stopTimer();
        }
    };
    /**
     * @return {?}
     */
    NzCountdownComponent.prototype.startTimer = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.platform.isBrowser) {
            this.ngZone.runOutsideAngular((/**
             * @return {?}
             */
            function () {
                _this.stopTimer();
                _this.updater_ = interval(REFRESH_INTERVAL).subscribe((/**
                 * @return {?}
                 */
                function () {
                    _this.updateValue();
                    _this.cdr.detectChanges();
                }));
            }));
        }
    };
    /**
     * @return {?}
     */
    NzCountdownComponent.prototype.stopTimer = /**
     * @return {?}
     */
    function () {
        if (this.updater_) {
            this.updater_.unsubscribe();
            this.updater_ = null;
        }
    };
    /**
     * Update time that should be displayed on the screen.
     */
    /**
     * Update time that should be displayed on the screen.
     * @protected
     * @return {?}
     */
    NzCountdownComponent.prototype.updateValue = /**
     * Update time that should be displayed on the screen.
     * @protected
     * @return {?}
     */
    function () {
        this.diff = Math.max(this.target - Date.now(), 0);
        if (this.diff === 0) {
            this.stopTimer();
            this.nzCountdownFinish.emit();
        }
    };
    /** @nocollapse */
    NzCountdownComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: NgZone },
        { type: Platform }
    ]; };
    NzCountdownComponent.propDecorators = {
        nzFormat: [{ type: Input }],
        nzCountdownFinish: [{ type: Output }]
    };
NzCountdownComponent.ɵfac = function NzCountdownComponent_Factory(t) { return new (t || NzCountdownComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.NgZone), ɵngcc0.ɵɵdirectiveInject(ɵngcc3.Platform)); };
NzCountdownComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzCountdownComponent, selectors: [["nz-countdown"]], inputs: { nzFormat: "nzFormat" }, outputs: { nzCountdownFinish: "nzCountdownFinish" }, exportAs: ["nzCountdown"], features: [ɵngcc0.ɵɵInheritDefinitionFeature, ɵngcc0.ɵɵNgOnChangesFeature], decls: 3, vars: 6, consts: [[3, "nzValue", "nzValueStyle", "nzValueTemplate", "nzTitle", "nzPrefix", "nzSuffix"], ["countDownTpl", ""]], template: function NzCountdownComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelement(0, "nz-statistic", 0);
        ɵngcc0.ɵɵtemplate(1, NzCountdownComponent_ng_template_1_Template, 2, 4, "ng-template", null, 1, ɵngcc0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        var _r0 = ɵngcc0.ɵɵreference(2);
        ɵngcc0.ɵɵproperty("nzValue", ctx.diff)("nzValueStyle", ctx.nzValueStyle)("nzValueTemplate", ctx.nzValueTemplate || _r0)("nzTitle", ctx.nzTitle)("nzPrefix", ctx.nzPrefix)("nzSuffix", ctx.nzSuffix);
    } }, directives: [NzStatisticComponent], pipes: [ɵngcc1.NzTimeRangePipe], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzCountdownComponent, [{
        type: Component,
        args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                selector: 'nz-countdown',
                exportAs: 'nzCountdown',
                template: "<nz-statistic\r\n  [nzValue]=\"diff\"\r\n  [nzValueStyle]=\"nzValueStyle\"\r\n  [nzValueTemplate]=\"nzValueTemplate || countDownTpl\"\r\n  [nzTitle]=\"nzTitle\"\r\n  [nzPrefix]=\"nzPrefix\"\r\n  [nzSuffix]=\"nzSuffix\">\r\n</nz-statistic>\r\n\r\n<ng-template #countDownTpl>{{ diff | nzTimeRange: nzFormat }}</ng-template>"
            }]
    }], function () { return [{ type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc0.NgZone }, { type: ɵngcc3.Platform }]; }, { nzFormat: [{
            type: Input
        }], nzCountdownFinish: [{
            type: Output
        }] }); })();
    return NzCountdownComponent;
}(NzStatisticComponent));
if (false) {
    /**
     * @override
     * @type {?}
     */
    NzCountdownComponent.prototype.nzFormat;
    /** @type {?} */
    NzCountdownComponent.prototype.nzCountdownFinish;
    /** @type {?} */
    NzCountdownComponent.prototype.diff;
    /**
     * @type {?}
     * @private
     */
    NzCountdownComponent.prototype.target;
    /**
     * @type {?}
     * @private
     */
    NzCountdownComponent.prototype.updater_;
    /**
     * @type {?}
     * @private
     */
    NzCountdownComponent.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    NzCountdownComponent.prototype.ngZone;
    /**
     * @type {?}
     * @private
     */
    NzCountdownComponent.prototype.platform;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NzStatisticNumberComponent = /** @class */ (function () {
    function NzStatisticNumberComponent(locale_id) {
        this.locale_id = locale_id;
        this.displayInt = '';
        this.displayDecimal = '';
    }
    /**
     * @return {?}
     */
    NzStatisticNumberComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        this.formatNumber();
    };
    /**
     * @private
     * @return {?}
     */
    NzStatisticNumberComponent.prototype.formatNumber = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var decimalSeparator = typeof this.nzValue === 'number' ? '.' : getLocaleNumberSymbol(this.locale_id, NumberSymbol.Decimal);
        /** @type {?} */
        var value = String(this.nzValue);
        var _a = __read(value.split(decimalSeparator), 2), int = _a[0], decimal = _a[1];
        this.displayInt = int;
        this.displayDecimal = decimal ? "" + decimalSeparator + decimal : '';
    };
    /** @nocollapse */
    NzStatisticNumberComponent.ctorParameters = function () { return [
        { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] }
    ]; };
    NzStatisticNumberComponent.propDecorators = {
        nzValue: [{ type: Input }],
        nzValueTemplate: [{ type: Input }]
    };
NzStatisticNumberComponent.ɵfac = function NzStatisticNumberComponent_Factory(t) { return new (t || NzStatisticNumberComponent)(ɵngcc0.ɵɵdirectiveInject(LOCALE_ID)); };
NzStatisticNumberComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzStatisticNumberComponent, selectors: [["nz-statistic-number"]], hostAttrs: [1, "ant-statistic-content-value"], inputs: { nzValue: "nzValue", nzValueTemplate: "nzValueTemplate" }, exportAs: ["nzStatisticNumber"], features: [ɵngcc0.ɵɵNgOnChangesFeature], decls: 2, vars: 2, consts: [[3, "ngTemplateOutlet", "ngTemplateOutletContext", 4, "ngIf"], [4, "ngIf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["class", "ant-statistic-content-value-int", 4, "ngIf"], ["class", "ant-statistic-content-value-decimal", 4, "ngIf"], [1, "ant-statistic-content-value-int"], [1, "ant-statistic-content-value-decimal"]], template: function NzStatisticNumberComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, NzStatisticNumberComponent_ng_container_0_Template, 1, 4, "ng-container", 0);
        ɵngcc0.ɵɵtemplate(1, NzStatisticNumberComponent_ng_container_1_Template, 3, 2, "ng-container", 1);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", ctx.nzValueTemplate);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.nzValueTemplate);
    } }, directives: [ɵngcc2.NgIf, ɵngcc2.NgTemplateOutlet], styles: ["nz-number { display: inline }"], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzStatisticNumberComponent, [{
        type: Component,
        args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                preserveWhitespaces: false,
                selector: 'nz-statistic-number',
                exportAs: 'nzStatisticNumber',
                template: "<ng-container\r\n  *ngIf=\"nzValueTemplate\"\r\n  [ngTemplateOutlet]=\"nzValueTemplate\"\r\n  [ngTemplateOutletContext]=\"{ $implicit: nzValue }\">\r\n</ng-container>\r\n<ng-container *ngIf=\"!nzValueTemplate\">\r\n  <span *ngIf=\"displayInt\" class=\"ant-statistic-content-value-int\">{{ displayInt }}</span>\r\n  <span *ngIf=\"displayDecimal\" class=\"ant-statistic-content-value-decimal\">{{ displayDecimal }}</span>\r\n</ng-container>\r\n",
                host: {
                    class: 'ant-statistic-content-value'
                },
                styles: ['nz-number { display: inline }']
            }]
    }], function () { return [{ type: String, decorators: [{
                type: Inject,
                args: [LOCALE_ID]
            }] }]; }, { nzValue: [{
            type: Input
        }], nzValueTemplate: [{
            type: Input
        }] }); })();
    return NzStatisticNumberComponent;
}());
if (false) {
    /** @type {?} */
    NzStatisticNumberComponent.prototype.nzValue;
    /** @type {?} */
    NzStatisticNumberComponent.prototype.nzValueTemplate;
    /** @type {?} */
    NzStatisticNumberComponent.prototype.displayInt;
    /** @type {?} */
    NzStatisticNumberComponent.prototype.displayDecimal;
    /**
     * @type {?}
     * @private
     */
    NzStatisticNumberComponent.prototype.locale_id;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NzStatisticModule = /** @class */ (function () {
    function NzStatisticModule() {
    }
NzStatisticModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: NzStatisticModule });
NzStatisticModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function NzStatisticModule_Factory(t) { return new (t || NzStatisticModule)(); }, imports: [[CommonModule, PlatformModule, NzAddOnModule, NzPipesModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(NzStatisticModule, { declarations: function () { return [NzStatisticComponent,
        NzCountdownComponent,
        NzStatisticNumberComponent]; }, imports: function () { return [CommonModule, PlatformModule, NzAddOnModule, NzPipesModule]; }, exports: function () { return [NzStatisticComponent,
        NzCountdownComponent,
        NzStatisticNumberComponent]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzStatisticModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, PlatformModule, NzAddOnModule, NzPipesModule],
                declarations: [NzStatisticComponent, NzCountdownComponent, NzStatisticNumberComponent],
                exports: [NzStatisticComponent, NzCountdownComponent, NzStatisticNumberComponent]
            }]
    }], function () { return []; }, null); })();
    return NzStatisticModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { NzCountdownComponent, NzStatisticComponent, NzStatisticModule, NzStatisticNumberComponent };


//# sourceMappingURL=ng-zorro-antd-statistic.js.map