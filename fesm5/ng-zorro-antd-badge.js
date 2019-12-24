import { __decorate, __metadata } from 'tslib';
import { ContentObserver, ObserversModule } from '@angular/cdk/observers';
import { ɵɵelement, ɵɵnextContext, ɵɵstyleSanitizer, ɵɵdefaultStyleSanitizer, ɵɵclassMapInterpolate1, ɵɵstyleProp, ɵɵproperty, ɵɵelementStart, ɵɵtext, ɵɵelementEnd, ɵɵadvance, ɵɵtextInterpolate, ɵɵclassProp, ɵɵelementContainerStart, ɵɵtemplate, ɵɵelementContainerEnd, ɵɵtextInterpolate1, ɵɵattribute, TemplateRef, ɵɵdirectiveInject, Renderer2, ElementRef, ChangeDetectorRef, NgZone, ɵɵdefineComponent, ɵɵviewQuery, ɵɵqueryRefresh, ɵɵloadQuery, ɵɵallocHostVars, ɵɵNgOnChangesFeature, ɵɵprojectionDef, ɵɵprojection, ɵsetClassMetadata, Component, ViewEncapsulation, ChangeDetectionStrategy, ViewChild, Input, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { isEmpty, NzConfigService, NzStringTemplateOutletDirective, zoomBadgeMotion, InputBoolean, WithConfig, NzAddOnModule } from 'ng-zorro-antd/core';
import { Subject } from 'rxjs';
import { take, startWith, takeUntil } from 'rxjs/operators';
import { NgIf, NgStyle, NgForOf, CommonModule } from '@angular/common';

var _c0 = ["contentElement"];
function NzBadgeComponent_span_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "span", 4);
} if (rf & 2) {
    var ctx_r52 = ɵɵnextContext();
    ɵɵstyleSanitizer(ɵɵdefaultStyleSanitizer);
    ɵɵclassMapInterpolate1("ant-badge-status-dot ant-badge-status-", ctx_r52.nzStatus || ctx_r52.presetColor, "");
    ɵɵstyleProp("background", !ctx_r52.presetColor && ctx_r52.nzColor);
    ɵɵproperty("ngStyle", ctx_r52.nzStyle);
} }
function NzBadgeComponent_span_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span", 5);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r53 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r53.nzText);
} }
function NzBadgeComponent_ng_container_5_sup_1_ng_container_1_span_1_ng_container_1_p_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "p");
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    var p_r63 = ctx.$implicit;
    var i_r59 = ɵɵnextContext(3).index;
    var ctx_r62 = ɵɵnextContext(3);
    ɵɵclassProp("current", p_r63 === ctx_r62.countArray[i_r59]);
    ɵɵadvance(1);
    ɵɵtextInterpolate(p_r63);
} }
function NzBadgeComponent_ng_container_5_sup_1_ng_container_1_span_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, NzBadgeComponent_ng_container_5_sup_1_ng_container_1_span_1_ng_container_1_p_1_Template, 2, 2, "p", 12);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r61 = ɵɵnextContext(5);
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r61.countSingleArray);
} }
function NzBadgeComponent_ng_container_5_sup_1_ng_container_1_span_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span", 11);
    ɵɵtemplate(1, NzBadgeComponent_ng_container_5_sup_1_ng_container_1_span_1_ng_container_1_Template, 2, 1, "ng-container", 9);
    ɵɵelementEnd();
} if (rf & 2) {
    var i_r59 = ɵɵnextContext().index;
    var ctx_r60 = ɵɵnextContext(3);
    ɵɵstyleProp("transform", "translateY(" + (0 - ctx_r60.countArray[i_r59]) * 100 + "%)");
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r60.nzDot && ctx_r60.countArray[i_r59] !== undefined);
} }
function NzBadgeComponent_ng_container_5_sup_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, NzBadgeComponent_ng_container_5_sup_1_ng_container_1_span_1_Template, 2, 2, "span", 10);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r56 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r56.count <= ctx_r56.nzOverflowCount);
} }
function NzBadgeComponent_ng_container_5_sup_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r57 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵtextInterpolate1("", ctx_r57.nzOverflowCount, "+");
} }
function NzBadgeComponent_ng_container_5_sup_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "sup", 7);
    ɵɵtemplate(1, NzBadgeComponent_ng_container_5_sup_1_ng_container_1_Template, 2, 1, "ng-container", 8);
    ɵɵtemplate(2, NzBadgeComponent_ng_container_5_sup_1_ng_container_2_Template, 2, 1, "ng-container", 9);
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r55 = ɵɵnextContext(2);
    ɵɵstyleProp("right", ctx_r55.nzOffset && ctx_r55.nzOffset[0] ? 0 - ctx_r55.nzOffset[0] : null, "px")("margin-top", ctx_r55.nzOffset && ctx_r55.nzOffset[1] ? ctx_r55.nzOffset[1] : null, "px");
    ɵɵclassProp("ant-badge-count", !ctx_r55.nzDot)("ant-badge-dot", ctx_r55.nzDot)("ant-badge-multiple-words", ctx_r55.countArray.length >= 2);
    ɵɵproperty("@.disabled", ctx_r55.notWrapper)("@zoomBadgeMotion", undefined)("ngStyle", ctx_r55.nzStyle);
    ɵɵattribute("title", ctx_r55.nzTitle || ctx_r55.nzCount);
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r55.maxNumberArray);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r55.count > ctx_r55.nzOverflowCount);
} }
function NzBadgeComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, NzBadgeComponent_ng_container_5_sup_1_Template, 3, 11, "sup", 6);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r54 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r54.showSup && ctx_r54.viewInit);
} }
var _c1 = ["*"];
var NZ_CONFIG_COMPONENT_NAME = 'backTop';
var NzBadgeComponent = /** @class */ (function () {
    function NzBadgeComponent(nzConfigService, renderer, elementRef, contentObserver, cdr, ngZone) {
        this.nzConfigService = nzConfigService;
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.contentObserver = contentObserver;
        this.cdr = cdr;
        this.ngZone = ngZone;
        this.destroy$ = new Subject();
        this.notWrapper = true;
        this.viewInit = false;
        this.maxNumberArray = [];
        this.countArray = [];
        this.countSingleArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        this.colorArray = ['pink', 'red', 'yellow', 'orange', 'cyan', 'green', 'blue', 'purple', 'geekblue', 'magenta', 'volcano', 'gold', 'lime'];
        this.presetColor = null;
        this.nzShowZero = false;
        this.nzShowDot = true;
        this.nzDot = false;
        renderer.addClass(elementRef.nativeElement, 'ant-badge');
    }
    NzBadgeComponent.prototype.checkContent = function () {
        this.notWrapper = isEmpty(this.contentElement.nativeElement);
        if (this.notWrapper) {
            this.renderer.addClass(this.elementRef.nativeElement, 'ant-badge-not-a-wrapper');
        }
        else {
            this.renderer.removeClass(this.elementRef.nativeElement, 'ant-badge-not-a-wrapper');
        }
    };
    Object.defineProperty(NzBadgeComponent.prototype, "showSup", {
        get: function () {
            return (this.nzShowDot && this.nzDot) || this.count > 0 || (this.count === 0 && this.nzShowZero);
        },
        enumerable: true,
        configurable: true
    });
    NzBadgeComponent.prototype.generateMaxNumberArray = function () {
        this.maxNumberArray = this.nzOverflowCount.toString().split('');
    };
    NzBadgeComponent.prototype.ngOnInit = function () {
        this.generateMaxNumberArray();
    };
    NzBadgeComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.ngZone.onStable.pipe(take(1)).subscribe(function () {
            _this.viewInit = true;
            _this.cdr.markForCheck();
        });
        this.contentObserver
            .observe(this.contentElement)
            .pipe(startWith(true), takeUntil(this.destroy$))
            .subscribe(function () {
            _this.checkContent();
        });
    };
    NzBadgeComponent.prototype.ngOnChanges = function (changes) {
        var nzOverflowCount = changes.nzOverflowCount, nzCount = changes.nzCount, nzColor = changes.nzColor;
        if (nzCount && !(nzCount.currentValue instanceof TemplateRef)) {
            this.count = Math.max(0, nzCount.currentValue);
            this.countArray = this.count
                .toString()
                .split('')
                .map(function (item) { return +item; });
        }
        if (nzOverflowCount) {
            this.generateMaxNumberArray();
        }
        if (nzColor) {
            this.presetColor = this.colorArray.indexOf(this.nzColor) !== -1 ? this.nzColor : null;
        }
    };
    NzBadgeComponent.prototype.ngOnDestroy = function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    /** @nocollapse */ NzBadgeComponent.ɵfac = function NzBadgeComponent_Factory(t) { return new (t || NzBadgeComponent)(ɵɵdirectiveInject(NzConfigService), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ContentObserver), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(NgZone)); };
    /** @nocollapse */ NzBadgeComponent.ɵcmp = ɵɵdefineComponent({ type: NzBadgeComponent, selectors: [["nz-badge"]], viewQuery: function NzBadgeComponent_Query(rf, ctx) { if (rf & 1) {
            ɵɵviewQuery(_c0, true);
        } if (rf & 2) {
            var _t;
            ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.contentElement = _t.first);
        } }, hostBindings: function NzBadgeComponent_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
            ɵɵallocHostVars(1);
        } if (rf & 2) {
            ɵɵclassProp("ant-badge-status", ctx.nzStatus);
        } }, inputs: { nzShowZero: "nzShowZero", nzShowDot: "nzShowDot", nzDot: "nzDot", nzOverflowCount: "nzOverflowCount", nzText: "nzText", nzColor: "nzColor", nzTitle: "nzTitle", nzStyle: "nzStyle", nzStatus: "nzStatus", nzCount: "nzCount", nzOffset: "nzOffset" }, exportAs: ["nzBadge"], features: [ɵɵNgOnChangesFeature()], ngContentSelectors: _c1, decls: 6, vars: 3, consts: [["contentElement", ""], [3, "class", "background", "ngStyle", 4, "ngIf"], ["class", "ant-badge-status-text", 4, "ngIf"], [4, "nzStringTemplateOutlet"], [3, "ngStyle"], [1, "ant-badge-status-text"], ["class", "ant-scroll-number", 3, "ngStyle", "right", "marginTop", "ant-badge-count", "ant-badge-dot", "ant-badge-multiple-words", 4, "ngIf"], [1, "ant-scroll-number", 3, "ngStyle"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["class", "ant-scroll-number-only", 3, "transform", 4, "ngIf"], [1, "ant-scroll-number-only"], [3, "current", 4, "ngFor", "ngForOf"]], template: function NzBadgeComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵprojectionDef();
            ɵɵelementStart(0, "span", null, 0);
            ɵɵprojection(2);
            ɵɵelementEnd();
            ɵɵtemplate(3, NzBadgeComponent_span_3_Template, 1, 5, "span", 1);
            ɵɵtemplate(4, NzBadgeComponent_span_4_Template, 2, 1, "span", 2);
            ɵɵtemplate(5, NzBadgeComponent_ng_container_5_Template, 2, 1, "ng-container", 3);
        } if (rf & 2) {
            ɵɵadvance(3);
            ɵɵproperty("ngIf", ctx.nzStatus || ctx.nzColor);
            ɵɵadvance(1);
            ɵɵproperty("ngIf", ctx.nzStatus || ctx.nzColor);
            ɵɵadvance(1);
            ɵɵproperty("nzStringTemplateOutlet", ctx.nzCount);
        } }, directives: [NgIf, NzStringTemplateOutletDirective, NgStyle, NgForOf], encapsulation: 2, data: { animation: [zoomBadgeMotion] }, changeDetection: 0 });
    __decorate([
        InputBoolean(),
        __metadata("design:type", Boolean)
    ], NzBadgeComponent.prototype, "nzShowZero", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzBadgeComponent.prototype, "nzShowDot", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzBadgeComponent.prototype, "nzDot", void 0);
    __decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME, 99),
        __metadata("design:type", Number)
    ], NzBadgeComponent.prototype, "nzOverflowCount", void 0);
    __decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME),
        __metadata("design:type", String)
    ], NzBadgeComponent.prototype, "nzColor", void 0);
    return NzBadgeComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzBadgeComponent, [{
        type: Component,
        args: [{
                selector: 'nz-badge',
                exportAs: 'nzBadge',
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                animations: [zoomBadgeMotion],
                templateUrl: './nz-badge.component.html',
                host: {
                    '[class.ant-badge-status]': 'nzStatus'
                }
            }]
    }], function () { return [{ type: NzConfigService }, { type: Renderer2 }, { type: ElementRef }, { type: ContentObserver }, { type: ChangeDetectorRef }, { type: NgZone }]; }, { contentElement: [{
            type: ViewChild,
            args: ['contentElement', { static: false }]
        }], nzShowZero: [{
            type: Input
        }], nzShowDot: [{
            type: Input
        }], nzDot: [{
            type: Input
        }], nzOverflowCount: [{
            type: Input
        }], nzText: [{
            type: Input
        }], nzColor: [{
            type: Input
        }], nzTitle: [{
            type: Input
        }], nzStyle: [{
            type: Input
        }], nzStatus: [{
            type: Input
        }], nzCount: [{
            type: Input
        }], nzOffset: [{
            type: Input
        }] }); })();

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
var NzBadgeModule = /** @class */ (function () {
    function NzBadgeModule() {
    }
    /** @nocollapse */ NzBadgeModule.ɵmod = ɵɵdefineNgModule({ type: NzBadgeModule });
    /** @nocollapse */ NzBadgeModule.ɵinj = ɵɵdefineInjector({ factory: function NzBadgeModule_Factory(t) { return new (t || NzBadgeModule)(); }, imports: [[CommonModule, ObserversModule, NzAddOnModule]] });
    return NzBadgeModule;
}());
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(NzBadgeModule, { declarations: [NzBadgeComponent], imports: [CommonModule, ObserversModule, NzAddOnModule], exports: [NzBadgeComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzBadgeModule, [{
        type: NgModule,
        args: [{
                declarations: [NzBadgeComponent],
                exports: [NzBadgeComponent],
                imports: [CommonModule, ObserversModule, NzAddOnModule]
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

export { NzBadgeComponent, NzBadgeModule };
//# sourceMappingURL=ng-zorro-antd-badge.js.map
