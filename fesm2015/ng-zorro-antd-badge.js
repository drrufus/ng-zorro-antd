import { __decorate, __metadata } from 'tslib';
import { ContentObserver, ObserversModule } from '@angular/cdk/observers';
import { ɵɵelement, ɵɵnextContext, ɵɵstyleSanitizer, ɵɵdefaultStyleSanitizer, ɵɵclassMapInterpolate1, ɵɵstyleProp, ɵɵproperty, ɵɵelementStart, ɵɵtext, ɵɵelementEnd, ɵɵadvance, ɵɵtextInterpolate, ɵɵclassProp, ɵɵelementContainerStart, ɵɵtemplate, ɵɵelementContainerEnd, ɵɵtextInterpolate1, ɵɵattribute, TemplateRef, ɵɵdirectiveInject, Renderer2, ElementRef, ChangeDetectorRef, NgZone, ɵɵdefineComponent, ɵɵviewQuery, ɵɵqueryRefresh, ɵɵloadQuery, ɵɵallocHostVars, ɵɵNgOnChangesFeature, ɵɵprojectionDef, ɵɵprojection, ɵsetClassMetadata, Component, ViewEncapsulation, ChangeDetectionStrategy, ViewChild, Input, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { isEmpty, NzConfigService, NzStringTemplateOutletDirective, zoomBadgeMotion, InputBoolean, WithConfig, NzAddOnModule } from 'ng-zorro-antd/core';
import { Subject } from 'rxjs';
import { take, startWith, takeUntil } from 'rxjs/operators';
import { NgIf, NgStyle, NgForOf, CommonModule } from '@angular/common';

const _c0 = ["contentElement"];
function NzBadgeComponent_span_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "span", 4);
} if (rf & 2) {
    const ctx_r37 = ɵɵnextContext();
    ɵɵstyleSanitizer(ɵɵdefaultStyleSanitizer);
    ɵɵclassMapInterpolate1("ant-badge-status-dot ant-badge-status-", ctx_r37.nzStatus || ctx_r37.presetColor, "");
    ɵɵstyleProp("background", !ctx_r37.presetColor && ctx_r37.nzColor);
    ɵɵproperty("ngStyle", ctx_r37.nzStyle);
} }
function NzBadgeComponent_span_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span", 5);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r38 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r38.nzText);
} }
function NzBadgeComponent_ng_container_5_sup_1_ng_container_1_span_1_ng_container_1_p_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "p");
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const p_r48 = ctx.$implicit;
    const i_r44 = ɵɵnextContext(3).index;
    const ctx_r47 = ɵɵnextContext(3);
    ɵɵclassProp("current", p_r48 === ctx_r47.countArray[i_r44]);
    ɵɵadvance(1);
    ɵɵtextInterpolate(p_r48);
} }
function NzBadgeComponent_ng_container_5_sup_1_ng_container_1_span_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, NzBadgeComponent_ng_container_5_sup_1_ng_container_1_span_1_ng_container_1_p_1_Template, 2, 2, "p", 12);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r46 = ɵɵnextContext(5);
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r46.countSingleArray);
} }
function NzBadgeComponent_ng_container_5_sup_1_ng_container_1_span_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span", 11);
    ɵɵtemplate(1, NzBadgeComponent_ng_container_5_sup_1_ng_container_1_span_1_ng_container_1_Template, 2, 1, "ng-container", 9);
    ɵɵelementEnd();
} if (rf & 2) {
    const i_r44 = ɵɵnextContext().index;
    const ctx_r45 = ɵɵnextContext(3);
    ɵɵstyleProp("transform", "translateY(" + (0 - ctx_r45.countArray[i_r44]) * 100 + "%)");
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r45.nzDot && ctx_r45.countArray[i_r44] !== undefined);
} }
function NzBadgeComponent_ng_container_5_sup_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, NzBadgeComponent_ng_container_5_sup_1_ng_container_1_span_1_Template, 2, 2, "span", 10);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r41 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r41.count <= ctx_r41.nzOverflowCount);
} }
function NzBadgeComponent_ng_container_5_sup_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r42 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵtextInterpolate1("", ctx_r42.nzOverflowCount, "+");
} }
function NzBadgeComponent_ng_container_5_sup_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "sup", 7);
    ɵɵtemplate(1, NzBadgeComponent_ng_container_5_sup_1_ng_container_1_Template, 2, 1, "ng-container", 8);
    ɵɵtemplate(2, NzBadgeComponent_ng_container_5_sup_1_ng_container_2_Template, 2, 1, "ng-container", 9);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r40 = ɵɵnextContext(2);
    ɵɵstyleProp("right", ctx_r40.nzOffset && ctx_r40.nzOffset[0] ? 0 - ctx_r40.nzOffset[0] : null, "px")("margin-top", ctx_r40.nzOffset && ctx_r40.nzOffset[1] ? ctx_r40.nzOffset[1] : null, "px");
    ɵɵclassProp("ant-badge-count", !ctx_r40.nzDot)("ant-badge-dot", ctx_r40.nzDot)("ant-badge-multiple-words", ctx_r40.countArray.length >= 2);
    ɵɵproperty("@.disabled", ctx_r40.notWrapper)("@zoomBadgeMotion", undefined)("ngStyle", ctx_r40.nzStyle);
    ɵɵattribute("title", ctx_r40.nzTitle || ctx_r40.nzCount);
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r40.maxNumberArray);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r40.count > ctx_r40.nzOverflowCount);
} }
function NzBadgeComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, NzBadgeComponent_ng_container_5_sup_1_Template, 3, 11, "sup", 6);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r39 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r39.showSup && ctx_r39.viewInit);
} }
const _c1 = ["*"];
const NZ_CONFIG_COMPONENT_NAME = 'backTop';
class NzBadgeComponent {
    constructor(nzConfigService, renderer, elementRef, contentObserver, cdr, ngZone) {
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
    checkContent() {
        this.notWrapper = isEmpty(this.contentElement.nativeElement);
        if (this.notWrapper) {
            this.renderer.addClass(this.elementRef.nativeElement, 'ant-badge-not-a-wrapper');
        }
        else {
            this.renderer.removeClass(this.elementRef.nativeElement, 'ant-badge-not-a-wrapper');
        }
    }
    get showSup() {
        return (this.nzShowDot && this.nzDot) || this.count > 0 || (this.count === 0 && this.nzShowZero);
    }
    generateMaxNumberArray() {
        this.maxNumberArray = this.nzOverflowCount.toString().split('');
    }
    ngOnInit() {
        this.generateMaxNumberArray();
    }
    ngAfterViewInit() {
        this.ngZone.onStable.pipe(take(1)).subscribe(() => {
            this.viewInit = true;
            this.cdr.markForCheck();
        });
        this.contentObserver
            .observe(this.contentElement)
            .pipe(startWith(true), takeUntil(this.destroy$))
            .subscribe(() => {
            this.checkContent();
        });
    }
    ngOnChanges(changes) {
        const { nzOverflowCount, nzCount, nzColor } = changes;
        if (nzCount && !(nzCount.currentValue instanceof TemplateRef)) {
            this.count = Math.max(0, nzCount.currentValue);
            this.countArray = this.count
                .toString()
                .split('')
                .map(item => +item);
        }
        if (nzOverflowCount) {
            this.generateMaxNumberArray();
        }
        if (nzColor) {
            this.presetColor = this.colorArray.indexOf(this.nzColor) !== -1 ? this.nzColor : null;
        }
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
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
class NzBadgeModule {
}
/** @nocollapse */ NzBadgeModule.ɵmod = ɵɵdefineNgModule({ type: NzBadgeModule });
/** @nocollapse */ NzBadgeModule.ɵinj = ɵɵdefineInjector({ factory: function NzBadgeModule_Factory(t) { return new (t || NzBadgeModule)(); }, imports: [[CommonModule, ObserversModule, NzAddOnModule]] });
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
