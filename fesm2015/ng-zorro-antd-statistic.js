import { Platform, PlatformModule } from '@angular/cdk/platform';
import { ɵɵelementContainer, ɵɵnextContext, ɵɵproperty, ɵɵpureFunction1, ɵɵelementStart, ɵɵtext, ɵɵelementEnd, ɵɵadvance, ɵɵtextInterpolate, ɵɵelementContainerStart, ɵɵtemplate, ɵɵelementContainerEnd, ɵɵdirectiveInject, LOCALE_ID, ɵɵdefineComponent, ɵɵelementHostAttrs, ɵɵNgOnChangesFeature, ɵsetClassMetadata, Component, ChangeDetectionStrategy, ViewEncapsulation, Inject, Input, ɵɵelement, ɵɵpipe, ɵɵpipeBind2, EventEmitter, ChangeDetectorRef, NgZone, ɵɵInheritDefinitionFeature, ɵɵtemplateRefExtractor, ɵɵreference, Output, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { interval } from 'rxjs';
import { NzStringTemplateOutletDirective, NzTimeRangePipe, NzAddOnModule, NzPipesModule } from 'ng-zorro-antd/core';
import { getLocaleNumberSymbol, NumberSymbol, NgIf, NgTemplateOutlet, NgStyle, CommonModule } from '@angular/common';

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
const REFRESH_INTERVAL = 1000 / 30;

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
const _c0 = [1, "ant-statistic-content-value"];
const _c1 = function (a0) { return { $implicit: a0 }; };
function NzStatisticNumberComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0, 2);
} if (rf & 2) {
    const ctx_r293 = ɵɵnextContext();
    ɵɵproperty("ngTemplateOutlet", ctx_r293.nzValueTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c1, ctx_r293.nzValue));
} }
function NzStatisticNumberComponent_ng_container_1_span_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span", 5);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r295 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r295.displayInt);
} }
function NzStatisticNumberComponent_ng_container_1_span_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span", 6);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r296 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r296.displayDecimal);
} }
function NzStatisticNumberComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, NzStatisticNumberComponent_ng_container_1_span_1_Template, 2, 1, "span", 3);
    ɵɵtemplate(2, NzStatisticNumberComponent_ng_container_1_span_2_Template, 2, 1, "span", 4);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r294 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r294.displayInt);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r294.displayDecimal);
} }
class NzStatisticNumberComponent {
    constructor(locale_id) {
        this.locale_id = locale_id;
        this.displayInt = '';
        this.displayDecimal = '';
    }
    ngOnChanges() {
        this.formatNumber();
    }
    formatNumber() {
        const decimalSeparator = typeof this.nzValue === 'number' ? '.' : getLocaleNumberSymbol(this.locale_id, NumberSymbol.Decimal);
        const value = String(this.nzValue);
        const [int, decimal] = value.split(decimalSeparator);
        this.displayInt = int;
        this.displayDecimal = decimal ? `${decimalSeparator}${decimal}` : '';
    }
}
/** @nocollapse */ NzStatisticNumberComponent.ɵfac = function NzStatisticNumberComponent_Factory(t) { return new (t || NzStatisticNumberComponent)(ɵɵdirectiveInject(LOCALE_ID)); };
/** @nocollapse */ NzStatisticNumberComponent.ɵcmp = ɵɵdefineComponent({ type: NzStatisticNumberComponent, selectors: [["nz-statistic-number"]], hostBindings: function NzStatisticNumberComponent_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
        ɵɵelementHostAttrs(_c0);
    } }, inputs: { nzValue: "nzValue", nzValueTemplate: "nzValueTemplate" }, exportAs: ["nzStatisticNumber"], features: [ɵɵNgOnChangesFeature()], decls: 2, vars: 2, consts: [[3, "ngTemplateOutlet", "ngTemplateOutletContext", 4, "ngIf"], [4, "ngIf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["class", "ant-statistic-content-value-int", 4, "ngIf"], ["class", "ant-statistic-content-value-decimal", 4, "ngIf"], [1, "ant-statistic-content-value-int"], [1, "ant-statistic-content-value-decimal"]], template: function NzStatisticNumberComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵtemplate(0, NzStatisticNumberComponent_ng_container_0_Template, 1, 4, "ng-container", 0);
        ɵɵtemplate(1, NzStatisticNumberComponent_ng_container_1_Template, 3, 2, "ng-container", 1);
    } if (rf & 2) {
        ɵɵproperty("ngIf", ctx.nzValueTemplate);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", !ctx.nzValueTemplate);
    } }, directives: [NgIf, NgTemplateOutlet], styles: ["nz-number { display: inline }"], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzStatisticNumberComponent, [{
        type: Component,
        args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                preserveWhitespaces: false,
                selector: 'nz-statistic-number',
                exportAs: 'nzStatisticNumber',
                templateUrl: './nz-statistic-number.component.html',
                host: {
                    class: 'ant-statistic-content-value'
                },
                styles: ['nz-number { display: inline }']
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [LOCALE_ID]
            }] }]; }, { nzValue: [{
            type: Input
        }], nzValueTemplate: [{
            type: Input
        }] }); })();

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
const _c0$1 = [1, "ant-statistic"];
function NzStatisticComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r286 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r286.nzTitle);
} }
function NzStatisticComponent_span_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r289 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r289.nzPrefix);
} }
function NzStatisticComponent_span_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span", 6);
    ɵɵtemplate(1, NzStatisticComponent_span_3_ng_container_1_Template, 2, 1, "ng-container", 1);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r287 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("nzStringTemplateOutlet", ctx_r287.nzPrefix);
} }
function NzStatisticComponent_span_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r290 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r290.nzSuffix);
} }
function NzStatisticComponent_span_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span", 7);
    ɵɵtemplate(1, NzStatisticComponent_span_5_ng_container_1_Template, 2, 1, "ng-container", 1);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r288 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("nzStringTemplateOutlet", ctx_r288.nzSuffix);
} }
class NzStatisticComponent {
    constructor() {
        this.nzValueStyle = {};
    }
}
/** @nocollapse */ NzStatisticComponent.ɵfac = function NzStatisticComponent_Factory(t) { return new (t || NzStatisticComponent)(); };
/** @nocollapse */ NzStatisticComponent.ɵcmp = ɵɵdefineComponent({ type: NzStatisticComponent, selectors: [["nz-statistic"]], hostBindings: function NzStatisticComponent_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
        ɵɵelementHostAttrs(_c0$1);
    } }, inputs: { nzPrefix: "nzPrefix", nzSuffix: "nzSuffix", nzTitle: "nzTitle", nzValue: "nzValue", nzValueStyle: "nzValueStyle", nzValueTemplate: "nzValueTemplate" }, exportAs: ["nzStatistic"], decls: 6, vars: 6, consts: [[1, "ant-statistic-title"], [4, "nzStringTemplateOutlet"], [1, "ant-statistic-content", 3, "ngStyle"], ["class", "ant-statistic-content-prefix", 4, "ngIf"], [3, "nzValue", "nzValueTemplate"], ["class", "ant-statistic-content-suffix", 4, "ngIf"], [1, "ant-statistic-content-prefix"], [1, "ant-statistic-content-suffix"]], template: function NzStatisticComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵtemplate(1, NzStatisticComponent_ng_container_1_Template, 2, 1, "ng-container", 1);
        ɵɵelementEnd();
        ɵɵelementStart(2, "div", 2);
        ɵɵtemplate(3, NzStatisticComponent_span_3_Template, 2, 1, "span", 3);
        ɵɵelement(4, "nz-statistic-number", 4);
        ɵɵtemplate(5, NzStatisticComponent_span_5_Template, 2, 1, "span", 5);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(1);
        ɵɵproperty("nzStringTemplateOutlet", ctx.nzTitle);
        ɵɵadvance(1);
        ɵɵproperty("ngStyle", ctx.nzValueStyle);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.nzPrefix);
        ɵɵadvance(1);
        ɵɵproperty("nzValue", ctx.nzValue)("nzValueTemplate", ctx.nzValueTemplate);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.nzSuffix);
    } }, directives: [NzStringTemplateOutletDirective, NgStyle, NgIf, NzStatisticNumberComponent], styles: ["nz-statistic { display: block; }"], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzStatisticComponent, [{
        type: Component,
        args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                selector: 'nz-statistic',
                exportAs: 'nzStatistic',
                templateUrl: './nz-statistic.component.html',
                host: {
                    class: 'ant-statistic'
                },
                styles: ['nz-statistic { display: block; }']
            }]
    }], null, { nzPrefix: [{
            type: Input
        }], nzSuffix: [{
            type: Input
        }], nzTitle: [{
            type: Input
        }], nzValue: [{
            type: Input
        }], nzValueStyle: [{
            type: Input
        }], nzValueTemplate: [{
            type: Input
        }] }); })();

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
function NzCountdownComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵtext(0);
    ɵɵpipe(1, "nzTimeRange");
} if (rf & 2) {
    const ctx_r292 = ɵɵnextContext();
    ɵɵtextInterpolate(ɵɵpipeBind2(1, 1, ctx_r292.diff, ctx_r292.nzFormat));
} }
class NzCountdownComponent extends NzStatisticComponent {
    constructor(cdr, ngZone, platform) {
        super();
        this.cdr = cdr;
        this.ngZone = ngZone;
        this.platform = platform;
        /** @override */
        this.nzFormat = 'HH:mm:ss';
        this.nzCountdownFinish = new EventEmitter();
    }
    /** @override */
    ngOnChanges(changes) {
        if (changes.nzValue) {
            this.target = Number(changes.nzValue.currentValue);
            if (!changes.nzValue.isFirstChange()) {
                this.syncTimer();
            }
        }
    }
    ngOnInit() {
        this.syncTimer();
    }
    ngOnDestroy() {
        this.stopTimer();
    }
    syncTimer() {
        if (this.target >= Date.now()) {
            this.startTimer();
        }
        else {
            this.stopTimer();
        }
    }
    startTimer() {
        if (this.platform.isBrowser) {
            this.ngZone.runOutsideAngular(() => {
                this.stopTimer();
                this.updater_ = interval(REFRESH_INTERVAL).subscribe(() => {
                    this.updateValue();
                    this.cdr.detectChanges();
                });
            });
        }
    }
    stopTimer() {
        if (this.updater_) {
            this.updater_.unsubscribe();
            this.updater_ = null;
        }
    }
    /**
     * Update time that should be displayed on the screen.
     */
    updateValue() {
        this.diff = Math.max(this.target - Date.now(), 0);
        if (this.diff === 0) {
            this.stopTimer();
            this.nzCountdownFinish.emit();
        }
    }
}
/** @nocollapse */ NzCountdownComponent.ɵfac = function NzCountdownComponent_Factory(t) { return new (t || NzCountdownComponent)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(Platform)); };
/** @nocollapse */ NzCountdownComponent.ɵcmp = ɵɵdefineComponent({ type: NzCountdownComponent, selectors: [["nz-countdown"]], inputs: { nzFormat: "nzFormat" }, outputs: { nzCountdownFinish: "nzCountdownFinish" }, exportAs: ["nzCountdown"], features: [ɵɵInheritDefinitionFeature, ɵɵNgOnChangesFeature()], decls: 3, vars: 6, consts: [[3, "nzValue", "nzValueStyle", "nzValueTemplate", "nzTitle", "nzPrefix", "nzSuffix"], ["countDownTpl", ""]], template: function NzCountdownComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelement(0, "nz-statistic", 0);
        ɵɵtemplate(1, NzCountdownComponent_ng_template_1_Template, 2, 4, "ng-template", null, 1, ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r291 = ɵɵreference(2);
        ɵɵproperty("nzValue", ctx.diff)("nzValueStyle", ctx.nzValueStyle)("nzValueTemplate", ctx.nzValueTemplate || _r291)("nzTitle", ctx.nzTitle)("nzPrefix", ctx.nzPrefix)("nzSuffix", ctx.nzSuffix);
    } }, directives: [NzStatisticComponent], pipes: [NzTimeRangePipe], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzCountdownComponent, [{
        type: Component,
        args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                selector: 'nz-countdown',
                exportAs: 'nzCountdown',
                templateUrl: './nz-countdown.component.html'
            }]
    }], function () { return [{ type: ChangeDetectorRef }, { type: NgZone }, { type: Platform }]; }, { nzFormat: [{
            type: Input
        }], nzCountdownFinish: [{
            type: Output
        }] }); })();

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzStatisticModule {
}
/** @nocollapse */ NzStatisticModule.ɵmod = ɵɵdefineNgModule({ type: NzStatisticModule });
/** @nocollapse */ NzStatisticModule.ɵinj = ɵɵdefineInjector({ factory: function NzStatisticModule_Factory(t) { return new (t || NzStatisticModule)(); }, imports: [[CommonModule, PlatformModule, NzAddOnModule, NzPipesModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(NzStatisticModule, { declarations: [NzStatisticComponent, NzCountdownComponent, NzStatisticNumberComponent], imports: [CommonModule, PlatformModule, NzAddOnModule, NzPipesModule], exports: [NzStatisticComponent, NzCountdownComponent, NzStatisticNumberComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzStatisticModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, PlatformModule, NzAddOnModule, NzPipesModule],
                declarations: [NzStatisticComponent, NzCountdownComponent, NzStatisticNumberComponent],
                exports: [NzStatisticComponent, NzCountdownComponent, NzStatisticNumberComponent]
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

export { NzCountdownComponent, NzStatisticComponent, NzStatisticModule, NzStatisticNumberComponent };
//# sourceMappingURL=ng-zorro-antd-statistic.js.map
