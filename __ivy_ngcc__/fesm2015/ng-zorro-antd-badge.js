import { __decorate, __metadata } from 'tslib';
import { ContentObserver, ObserversModule } from '@angular/cdk/observers';
import { TemplateRef, Component, ViewEncapsulation, ChangeDetectionStrategy, Renderer2, ElementRef, ChangeDetectorRef, NgZone, ViewChild, Input, NgModule } from '@angular/core';
import { isEmpty, zoomBadgeMotion, NzConfigService, InputBoolean, WithConfig, NzAddOnModule } from 'ng-zorro-antd/core';
import { Subject } from 'rxjs';
import { take, startWith, takeUntil } from 'rxjs/operators';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from 'ng-zorro-antd/core';
import * as ɵngcc2 from '@angular/cdk/observers';
import * as ɵngcc3 from '@angular/common';

const _c0 = ["contentElement"];
function NzBadgeComponent_span_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 4);
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassMapInterpolate1("ant-badge-status-dot ant-badge-status-", ctx_r1.nzStatus || ctx_r1.presetColor, "");
    ɵngcc0.ɵɵstyleProp("background", !ctx_r1.presetColor && ctx_r1.nzColor, ɵngcc0.ɵɵdefaultStyleSanitizer);
    ɵngcc0.ɵɵproperty("ngStyle", ctx_r1.nzStyle);
} }
function NzBadgeComponent_span_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span", 5);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r2.nzText);
} }
function NzBadgeComponent_ng_container_5_sup_1_ng_container_1_span_1_ng_container_1_p_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "p");
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const p_r12 = ctx.$implicit;
    const i_r8 = ɵngcc0.ɵɵnextContext(3).index;
    const ctx_r11 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵclassProp("current", p_r12 === ctx_r11.countArray[i_r8]);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(p_r12);
} }
function NzBadgeComponent_ng_container_5_sup_1_ng_container_1_span_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, NzBadgeComponent_ng_container_5_sup_1_ng_container_1_span_1_ng_container_1_p_1_Template, 2, 3, "p", 12);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r10 = ɵngcc0.ɵɵnextContext(5);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r10.countSingleArray);
} }
function NzBadgeComponent_ng_container_5_sup_1_ng_container_1_span_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span", 11);
    ɵngcc0.ɵɵtemplate(1, NzBadgeComponent_ng_container_5_sup_1_ng_container_1_span_1_ng_container_1_Template, 2, 1, "ng-container", 9);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const i_r8 = ɵngcc0.ɵɵnextContext().index;
    const ctx_r9 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵstyleProp("transform", "translateY(" + (0 - ctx_r9.countArray[i_r8]) * 100 + "%)");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r9.nzDot && ctx_r9.countArray[i_r8] !== undefined);
} }
function NzBadgeComponent_ng_container_5_sup_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, NzBadgeComponent_ng_container_5_sup_1_ng_container_1_span_1_Template, 2, 3, "span", 10);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r5 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r5.count <= ctx_r5.nzOverflowCount);
} }
function NzBadgeComponent_ng_container_5_sup_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r6 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1("", ctx_r6.nzOverflowCount, "+");
} }
function NzBadgeComponent_ng_container_5_sup_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "sup", 7);
    ɵngcc0.ɵɵtemplate(1, NzBadgeComponent_ng_container_5_sup_1_ng_container_1_Template, 2, 1, "ng-container", 8);
    ɵngcc0.ɵɵtemplate(2, NzBadgeComponent_ng_container_5_sup_1_ng_container_2_Template, 2, 1, "ng-container", 9);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵstyleProp("right", ctx_r4.nzOffset && ctx_r4.nzOffset[0] ? 0 - ctx_r4.nzOffset[0] : null, "px")("margin-top", ctx_r4.nzOffset && ctx_r4.nzOffset[1] ? ctx_r4.nzOffset[1] : null, "px");
    ɵngcc0.ɵɵclassProp("ant-badge-count", !ctx_r4.nzDot)("ant-badge-dot", ctx_r4.nzDot)("ant-badge-multiple-words", ctx_r4.countArray.length >= 2);
    ɵngcc0.ɵɵproperty("@.disabled", ctx_r4.notWrapper)("@zoomBadgeMotion", undefined)("ngStyle", ctx_r4.nzStyle);
    ɵngcc0.ɵɵattribute("title", ctx_r4.nzTitle || ctx_r4.nzCount)("aria-label", ctx_r4.nzTitle || ctx_r4.nzCount);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r4.maxNumberArray);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r4.count > ctx_r4.nzOverflowCount);
} }
function NzBadgeComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, NzBadgeComponent_ng_container_5_sup_1_Template, 3, 17, "sup", 6);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r3 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r3.showSup && ctx_r3.viewInit);
} }
const _c1 = ["*"];
const NZ_CONFIG_COMPONENT_NAME = 'backTop';
class NzBadgeComponent {
    /**
     * @param {?} nzConfigService
     * @param {?} renderer
     * @param {?} elementRef
     * @param {?} contentObserver
     * @param {?} cdr
     * @param {?} ngZone
     */
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
        this.colorArray = [
            'pink',
            'red',
            'yellow',
            'orange',
            'cyan',
            'green',
            'blue',
            'purple',
            'geekblue',
            'magenta',
            'volcano',
            'gold',
            'lime'
        ];
        this.presetColor = null;
        this.nzShowZero = false;
        this.nzShowDot = true;
        this.nzDot = false;
        renderer.addClass(elementRef.nativeElement, 'ant-badge');
    }
    /**
     * @return {?}
     */
    checkContent() {
        this.notWrapper = isEmpty(this.contentElement.nativeElement);
        if (this.notWrapper) {
            this.renderer.addClass(this.elementRef.nativeElement, 'ant-badge-not-a-wrapper');
        }
        else {
            this.renderer.removeClass(this.elementRef.nativeElement, 'ant-badge-not-a-wrapper');
        }
    }
    /**
     * @return {?}
     */
    get showSup() {
        return (this.nzShowDot && this.nzDot) || this.count > 0 || (this.count === 0 && this.nzShowZero);
    }
    /**
     * @return {?}
     */
    generateMaxNumberArray() {
        this.maxNumberArray = this.nzOverflowCount.toString().split('');
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.generateMaxNumberArray();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.ngZone.onStable.pipe(take(1)).subscribe((/**
         * @return {?}
         */
        () => {
            this.viewInit = true;
            this.cdr.markForCheck();
        }));
        this.contentObserver
            .observe(this.contentElement)
            .pipe(startWith(true), takeUntil(this.destroy$))
            .subscribe((/**
         * @return {?}
         */
        () => {
            this.checkContent();
        }));
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        const { nzOverflowCount, nzCount, nzColor } = changes;
        if (nzCount && !(nzCount.currentValue instanceof TemplateRef)) {
            this.count = Math.max(0, nzCount.currentValue);
            this.countArray = this.count
                .toString()
                .split('')
                .map((/**
             * @param {?} item
             * @return {?}
             */
            item => +item));
        }
        if (nzOverflowCount) {
            this.generateMaxNumberArray();
        }
        if (nzColor) {
            this.presetColor = this.colorArray.indexOf(this.nzColor) !== -1 ? this.nzColor : null;
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
NzBadgeComponent.ɵfac = function NzBadgeComponent_Factory(t) { return new (t || NzBadgeComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.NzConfigService), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.ContentObserver), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.NgZone)); };
NzBadgeComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzBadgeComponent, selectors: [["nz-badge"]], viewQuery: function NzBadgeComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c0, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.contentElement = _t.first);
    } }, hostVars: 2, hostBindings: function NzBadgeComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("ant-badge-status", ctx.nzStatus);
    } }, inputs: { nzShowZero: "nzShowZero", nzShowDot: "nzShowDot", nzDot: "nzDot", nzOverflowCount: "nzOverflowCount", nzText: "nzText", nzColor: "nzColor", nzTitle: "nzTitle", nzStyle: "nzStyle", nzStatus: "nzStatus", nzCount: "nzCount", nzOffset: "nzOffset" }, exportAs: ["nzBadge"], features: [ɵngcc0.ɵɵNgOnChangesFeature], ngContentSelectors: _c1, decls: 6, vars: 3, consts: [["contentElement", ""], [3, "class", "background", "ngStyle", 4, "ngIf"], ["class", "ant-badge-status-text", 4, "ngIf"], [4, "nzStringTemplateOutlet"], [3, "ngStyle"], [1, "ant-badge-status-text"], ["class", "ant-scroll-number", 3, "ngStyle", "right", "marginTop", "ant-badge-count", "ant-badge-dot", "ant-badge-multiple-words", 4, "ngIf"], [1, "ant-scroll-number", 3, "ngStyle"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["class", "ant-scroll-number-only", "aria-hidden", "true", 3, "transform", 4, "ngIf"], ["aria-hidden", "true", 1, "ant-scroll-number-only"], [3, "current", 4, "ngFor", "ngForOf"]], template: function NzBadgeComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "span", null, 0);
        ɵngcc0.ɵɵprojection(2);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(3, NzBadgeComponent_span_3_Template, 1, 6, "span", 1);
        ɵngcc0.ɵɵtemplate(4, NzBadgeComponent_span_4_Template, 2, 1, "span", 2);
        ɵngcc0.ɵɵtemplate(5, NzBadgeComponent_ng_container_5_Template, 2, 1, "ng-container", 3);
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵproperty("ngIf", ctx.nzStatus || ctx.nzColor);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.nzStatus || ctx.nzColor);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("nzStringTemplateOutlet", ctx.nzCount);
    } }, directives: [ɵngcc3.NgIf, ɵngcc1.NzStringTemplateOutletDirective, ɵngcc3.NgStyle, ɵngcc3.NgForOf], encapsulation: 2, data: { animation: [zoomBadgeMotion] }, changeDetection: 0 });
/** @nocollapse */
NzBadgeComponent.ctorParameters = () => [
    { type: NzConfigService },
    { type: Renderer2 },
    { type: ElementRef },
    { type: ContentObserver },
    { type: ChangeDetectorRef },
    { type: NgZone }
];
NzBadgeComponent.propDecorators = {
    contentElement: [{ type: ViewChild, args: ['contentElement', { static: false },] }],
    nzShowZero: [{ type: Input }],
    nzShowDot: [{ type: Input }],
    nzDot: [{ type: Input }],
    nzOverflowCount: [{ type: Input }],
    nzText: [{ type: Input }],
    nzColor: [{ type: Input }],
    nzTitle: [{ type: Input }],
    nzStyle: [{ type: Input }],
    nzStatus: [{ type: Input }],
    nzCount: [{ type: Input }],
    nzOffset: [{ type: Input }]
};
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
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzBadgeComponent, [{
        type: Component,
        args: [{
                selector: 'nz-badge',
                exportAs: 'nzBadge',
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                animations: [zoomBadgeMotion],
                template: "<span #contentElement><ng-content></ng-content></span>\r\n<span class=\"ant-badge-status-dot ant-badge-status-{{nzStatus || presetColor}}\"\r\n      [style.background]=\"!presetColor && nzColor\"\r\n      *ngIf=\"nzStatus || nzColor\"\r\n      [ngStyle]=\"nzStyle\"></span>\r\n<span class=\"ant-badge-status-text\" *ngIf=\"nzStatus || nzColor\">{{ nzText }}</span>\r\n<ng-container *nzStringTemplateOutlet=\"nzCount\">\r\n  <sup class=\"ant-scroll-number\"\r\n       *ngIf=\"showSup && viewInit\"\r\n       [@.disabled]=\"notWrapper\"\r\n       [@zoomBadgeMotion]\r\n       [ngStyle]=\"nzStyle\"\r\n       [attr.title]=\"nzTitle || nzCount\"\r\n       [style.right.px]=\"nzOffset && nzOffset[0] ? -nzOffset[0] : null\"\r\n       [style.marginTop.px]=\"nzOffset && nzOffset[1] ? nzOffset[1] : null\"\r\n       [class.ant-badge-count]=\"!nzDot\"\r\n       [class.ant-badge-dot]=\"nzDot\"\r\n       [class.ant-badge-multiple-words]=\"countArray.length>=2\"\r\n       [attr.aria-label]=\"nzTitle || nzCount\">\r\n    <ng-container *ngFor=\"let n of maxNumberArray;let i = index;\">\r\n      <span class=\"ant-scroll-number-only\"\r\n            *ngIf=\"count <= nzOverflowCount\"\r\n            [style.transform]=\"'translateY(' + (-countArray[i] * 100) + '%)'\"\r\n            aria-hidden=\"true\">\r\n          <ng-container *ngIf=\"!nzDot && countArray[i] !== undefined\">\r\n            <p *ngFor=\"let p of countSingleArray\" [class.current]=\"p === countArray[i]\">{{ p }}</p>\r\n          </ng-container>\r\n      </span>\r\n    </ng-container>\r\n    <ng-container *ngIf=\"count > nzOverflowCount\">{{ nzOverflowCount }}+</ng-container>\r\n  </sup>\r\n</ng-container>",
                host: {
                    '[class.ant-badge-status]': 'nzStatus'
                }
            }]
    }], function () { return [{ type: ɵngcc1.NzConfigService }, { type: ɵngcc0.Renderer2 }, { type: ɵngcc0.ElementRef }, { type: ɵngcc2.ContentObserver }, { type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc0.NgZone }]; }, { nzShowZero: [{
            type: Input
        }], nzShowDot: [{
            type: Input
        }], nzDot: [{
            type: Input
        }], contentElement: [{
            type: ViewChild,
            args: ['contentElement', { static: false }]
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
if (false) {
    /**
     * @type {?}
     * @private
     */
    NzBadgeComponent.prototype.destroy$;
    /** @type {?} */
    NzBadgeComponent.prototype.notWrapper;
    /** @type {?} */
    NzBadgeComponent.prototype.viewInit;
    /** @type {?} */
    NzBadgeComponent.prototype.maxNumberArray;
    /** @type {?} */
    NzBadgeComponent.prototype.countArray;
    /** @type {?} */
    NzBadgeComponent.prototype.countSingleArray;
    /** @type {?} */
    NzBadgeComponent.prototype.colorArray;
    /** @type {?} */
    NzBadgeComponent.prototype.presetColor;
    /** @type {?} */
    NzBadgeComponent.prototype.count;
    /** @type {?} */
    NzBadgeComponent.prototype.contentElement;
    /** @type {?} */
    NzBadgeComponent.prototype.nzShowZero;
    /** @type {?} */
    NzBadgeComponent.prototype.nzShowDot;
    /** @type {?} */
    NzBadgeComponent.prototype.nzDot;
    /** @type {?} */
    NzBadgeComponent.prototype.nzOverflowCount;
    /** @type {?} */
    NzBadgeComponent.prototype.nzText;
    /** @type {?} */
    NzBadgeComponent.prototype.nzColor;
    /** @type {?} */
    NzBadgeComponent.prototype.nzTitle;
    /** @type {?} */
    NzBadgeComponent.prototype.nzStyle;
    /** @type {?} */
    NzBadgeComponent.prototype.nzStatus;
    /** @type {?} */
    NzBadgeComponent.prototype.nzCount;
    /** @type {?} */
    NzBadgeComponent.prototype.nzOffset;
    /** @type {?} */
    NzBadgeComponent.prototype.nzConfigService;
    /**
     * @type {?}
     * @private
     */
    NzBadgeComponent.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    NzBadgeComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    NzBadgeComponent.prototype.contentObserver;
    /**
     * @type {?}
     * @private
     */
    NzBadgeComponent.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    NzBadgeComponent.prototype.ngZone;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzBadgeModule {
}
NzBadgeModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: NzBadgeModule });
NzBadgeModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function NzBadgeModule_Factory(t) { return new (t || NzBadgeModule)(); }, imports: [[CommonModule, ObserversModule, NzAddOnModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(NzBadgeModule, { declarations: function () { return [NzBadgeComponent]; }, imports: function () { return [CommonModule, ObserversModule, NzAddOnModule]; }, exports: function () { return [NzBadgeComponent]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzBadgeModule, [{
        type: NgModule,
        args: [{
                declarations: [NzBadgeComponent],
                exports: [NzBadgeComponent],
                imports: [CommonModule, ObserversModule, NzAddOnModule]
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { NzBadgeComponent, NzBadgeModule };

//# sourceMappingURL=ng-zorro-antd-badge.js.map