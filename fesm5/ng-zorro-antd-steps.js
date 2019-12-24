import { __decorate, __metadata, __spread } from 'tslib';
import { ɵɵelement, ɵɵelementStart, ɵɵelementEnd, ɵɵtext, ɵɵnextContext, ɵɵadvance, ɵɵtextInterpolate, ɵɵelementContainerStart, ɵɵelementContainerEnd, ɵɵproperty, ɵɵtemplate, ɵɵtemplateRefExtractor, ɵɵreference, ɵɵpureFunction3, TemplateRef, ɵɵdirectiveInject, ChangeDetectorRef, Renderer2, ElementRef, ɵɵdefineComponent, ɵɵviewQuery, ɵɵqueryRefresh, ɵɵloadQuery, ɵɵallocHostVars, ɵɵclassProp, ɵɵlistener, ɵɵattribute, ɵsetClassMetadata, Component, ChangeDetectionStrategy, ViewEncapsulation, ViewChild, Input, EventEmitter, ɵɵcontentQuery, ɵɵNgOnChangesFeature, ɵɵprojectionDef, ɵɵprojection, ContentChildren, Output, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { Subject, merge } from 'rxjs';
import { startWith, takeUntil } from 'rxjs/operators';
import { NzStringTemplateOutletDirective, InputBoolean, toBoolean, NzAddOnModule } from 'ng-zorro-antd/core';
import { NgIf, NgClass, NgTemplateOutlet, CommonModule } from '@angular/common';
import { NzIconDirective, NzIconModule } from 'ng-zorro-antd/icon';

var _c0 = ["processDotTemplate"];
function NzStepComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "div", 9);
} }
function NzStepComponent_ng_template_3_span_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span", 11);
    ɵɵelement(1, "i", 12);
    ɵɵelementEnd();
} }
function NzStepComponent_ng_template_3_span_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span", 11);
    ɵɵelement(1, "i", 13);
    ɵɵelementEnd();
} }
function NzStepComponent_ng_template_3_span_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span", 11);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r788 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r788.index + 1);
} }
function NzStepComponent_ng_template_3_span_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "i", 16);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r790 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵproperty("nzType", !ctx_r790.oldAPIIcon && ctx_r790.nzIcon)("ngClass", ctx_r790.oldAPIIcon && ctx_r790.nzIcon);
} }
function NzStepComponent_ng_template_3_span_3_ng_template_2_ng_template_0_Template(rf, ctx) { }
function NzStepComponent_ng_template_3_span_3_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵtemplate(0, NzStepComponent_ng_template_3_span_3_ng_template_2_ng_template_0_Template, 0, 0, "ng-template", 17);
} if (rf & 2) {
    var ctx_r792 = ɵɵnextContext(3);
    ɵɵproperty("ngTemplateOutlet", ctx_r792.nzIcon);
} }
function NzStepComponent_ng_template_3_span_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span", 11);
    ɵɵtemplate(1, NzStepComponent_ng_template_3_span_3_ng_container_1_Template, 2, 2, "ng-container", 14);
    ɵɵtemplate(2, NzStepComponent_ng_template_3_span_3_ng_template_2_Template, 1, 1, "ng-template", null, 15, ɵɵtemplateRefExtractor);
    ɵɵelementEnd();
} if (rf & 2) {
    var _r791 = ɵɵreference(3);
    var ctx_r789 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r789.isIconString)("ngIfElse", _r791);
} }
function NzStepComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵtemplate(0, NzStepComponent_ng_template_3_span_0_Template, 2, 0, "span", 10);
    ɵɵtemplate(1, NzStepComponent_ng_template_3_span_1_Template, 2, 0, "span", 10);
    ɵɵtemplate(2, NzStepComponent_ng_template_3_span_2_Template, 2, 1, "span", 10);
    ɵɵtemplate(3, NzStepComponent_ng_template_3_span_3_Template, 4, 2, "span", 10);
} if (rf & 2) {
    var ctx_r781 = ɵɵnextContext();
    ɵɵproperty("ngIf", ctx_r781.nzStatus === "finish" && !ctx_r781.nzIcon);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r781.nzStatus === "error");
    ɵɵadvance(1);
    ɵɵproperty("ngIf", (ctx_r781.nzStatus === "process" || ctx_r781.nzStatus === "wait") && !ctx_r781.nzIcon);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r781.nzIcon);
} }
function NzStepComponent_ng_template_4_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "span", 20);
} }
function NzStepComponent_ng_template_4_ng_template_3_Template(rf, ctx) { }
var _c1 = function (a0, a1, a2) { return { $implicit: a0, status: a1, index: a2 }; };
function NzStepComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span", 11);
    ɵɵtemplate(1, NzStepComponent_ng_template_4_ng_template_1_Template, 1, 0, "ng-template", null, 18, ɵɵtemplateRefExtractor);
    ɵɵtemplate(3, NzStepComponent_ng_template_4_ng_template_3_Template, 0, 0, "ng-template", 19);
    ɵɵelementEnd();
} if (rf & 2) {
    var _r794 = ɵɵreference(2);
    var ctx_r782 = ɵɵnextContext();
    ɵɵadvance(3);
    ɵɵproperty("ngTemplateOutlet", ctx_r782.customProcessTemplate || _r794)("ngTemplateOutletContext", ɵɵpureFunction3(2, _c1, _r794, ctx_r782.nzStatus, ctx_r782.index));
} }
function NzStepComponent_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r783 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r783.nzTitle);
} }
function NzStepComponent_div_8_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r797 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r797.nzSubtitle);
} }
function NzStepComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 21);
    ɵɵtemplate(1, NzStepComponent_div_8_ng_container_1_Template, 2, 1, "ng-container", 6);
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r784 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("nzStringTemplateOutlet", ctx_r784.nzSubtitle);
} }
function NzStepComponent_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r785 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r785.nzDescription);
} }
var NzStepComponent = /** @class */ (function () {
    function NzStepComponent(cdr, renderer, elementRef) {
        this.cdr = cdr;
        this.nzDisabled = false;
        this.isCustomStatus = false;
        this._status = 'wait';
        this.oldAPIIcon = true;
        this.isIconString = true;
        this.direction = 'horizontal';
        this.index = 0;
        this.last = false;
        this.outStatus = 'process';
        this.showProcessDot = false;
        this.clickable = false;
        this.click$ = new Subject();
        this._currentIndex = 0;
        renderer.addClass(elementRef.nativeElement, 'ant-steps-item');
    }
    Object.defineProperty(NzStepComponent.prototype, "nzStatus", {
        get: function () {
            return this._status;
        },
        set: function (status) {
            this._status = status;
            this.isCustomStatus = true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzStepComponent.prototype, "nzIcon", {
        get: function () {
            return this._icon;
        },
        set: function (value) {
            if (!(value instanceof TemplateRef)) {
                this.isIconString = true;
                this.oldAPIIcon = typeof value === 'string' && value.indexOf('anticon') > -1;
            }
            else {
                this.isIconString = false;
            }
            this._icon = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzStepComponent.prototype, "currentIndex", {
        get: function () {
            return this._currentIndex;
        },
        set: function (current) {
            this._currentIndex = current;
            if (!this.isCustomStatus) {
                this._status = current > this.index ? 'finish' : current === this.index ? this.outStatus || '' : 'wait';
            }
        },
        enumerable: true,
        configurable: true
    });
    NzStepComponent.prototype.onClick = function () {
        if (this.clickable && this.currentIndex !== this.index && !this.nzDisabled) {
            this.click$.next(this.index);
        }
    };
    NzStepComponent.prototype.markForCheck = function () {
        this.cdr.markForCheck();
    };
    NzStepComponent.prototype.ngOnDestroy = function () {
        this.click$.complete();
    };
    /** @nocollapse */ NzStepComponent.ɵfac = function NzStepComponent_Factory(t) { return new (t || NzStepComponent)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef)); };
    /** @nocollapse */ NzStepComponent.ɵcmp = ɵɵdefineComponent({ type: NzStepComponent, selectors: [["nz-step"]], viewQuery: function NzStepComponent_Query(rf, ctx) { if (rf & 1) {
            ɵɵviewQuery(_c0, true);
        } if (rf & 2) {
            var _t;
            ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.processDotTemplate = _t.first);
        } }, hostBindings: function NzStepComponent_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
            ɵɵallocHostVars(8);
        } if (rf & 2) {
            ɵɵclassProp("ant-steps-item-wait", ctx.nzStatus === "wait")("ant-steps-item-process", ctx.nzStatus === "process")("ant-steps-item-finish", ctx.nzStatus === "finish")("ant-steps-item-error", ctx.nzStatus === "error")("ant-steps-item-active", ctx.currentIndex === ctx.index)("ant-steps-item-disabled", ctx.nzDisabled)("ant-steps-item-custom", !!ctx.nzIcon)("ant-steps-next-error", ctx.outStatus === "error" && ctx.currentIndex === ctx.index + 1);
        } }, inputs: { nzTitle: "nzTitle", nzSubtitle: "nzSubtitle", nzDescription: "nzDescription", nzDisabled: "nzDisabled", nzStatus: "nzStatus", nzIcon: "nzIcon" }, exportAs: ["nzStep"], decls: 11, vars: 8, consts: [[1, "ant-steps-item-container", 3, "tabindex", "click"], ["class", "ant-steps-item-tail", 4, "ngIf"], [1, "ant-steps-item-icon"], [3, "ngIf"], [1, "ant-steps-item-content"], [1, "ant-steps-item-title"], [4, "nzStringTemplateOutlet"], ["class", "ant-steps-item-subtitle", 4, "ngIf"], [1, "ant-steps-item-description"], [1, "ant-steps-item-tail"], ["class", "ant-steps-icon", 4, "ngIf"], [1, "ant-steps-icon"], ["nz-icon", "", "nzType", "check"], ["nz-icon", "", "nzType", "close"], [4, "ngIf", "ngIfElse"], ["iconTemplate", ""], ["nz-icon", "", 3, "nzType", "ngClass"], [3, "ngTemplateOutlet"], ["processDotTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "ant-steps-icon-dot"], [1, "ant-steps-item-subtitle"]], template: function NzStepComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "div", 0);
            ɵɵlistener("click", function NzStepComponent_Template_div_click_0_listener($event) { return ctx.onClick(); });
            ɵɵtemplate(1, NzStepComponent_div_1_Template, 1, 0, "div", 1);
            ɵɵelementStart(2, "div", 2);
            ɵɵtemplate(3, NzStepComponent_ng_template_3_Template, 4, 4, "ng-template", 3);
            ɵɵtemplate(4, NzStepComponent_ng_template_4_Template, 4, 6, "ng-template", 3);
            ɵɵelementEnd();
            ɵɵelementStart(5, "div", 4);
            ɵɵelementStart(6, "div", 5);
            ɵɵtemplate(7, NzStepComponent_ng_container_7_Template, 2, 1, "ng-container", 6);
            ɵɵtemplate(8, NzStepComponent_div_8_Template, 2, 1, "div", 7);
            ɵɵelementEnd();
            ɵɵelementStart(9, "div", 8);
            ɵɵtemplate(10, NzStepComponent_ng_container_10_Template, 2, 1, "ng-container", 6);
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
        } if (rf & 2) {
            ɵɵproperty("tabindex", ctx.clickable && !ctx.nzDisabled ? 0 : null);
            ɵɵattribute("role", ctx.clickable && !ctx.nzDisabled ? "button" : null);
            ɵɵadvance(1);
            ɵɵproperty("ngIf", ctx.last !== true);
            ɵɵadvance(2);
            ɵɵproperty("ngIf", !ctx.showProcessDot);
            ɵɵadvance(1);
            ɵɵproperty("ngIf", ctx.showProcessDot);
            ɵɵadvance(3);
            ɵɵproperty("nzStringTemplateOutlet", ctx.nzTitle);
            ɵɵadvance(1);
            ɵɵproperty("ngIf", ctx.nzSubtitle);
            ɵɵadvance(2);
            ɵɵproperty("nzStringTemplateOutlet", ctx.nzDescription);
        } }, directives: [NgIf, NzStringTemplateOutletDirective, NzIconDirective, NgClass, NgTemplateOutlet], encapsulation: 2, changeDetection: 0 });
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzStepComponent.prototype, "nzDisabled", void 0);
    return NzStepComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzStepComponent, [{
        type: Component,
        args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                selector: 'nz-step',
                exportAs: 'nzStep',
                preserveWhitespaces: false,
                templateUrl: './nz-step.component.html',
                host: {
                    '[class.ant-steps-item-wait]': 'nzStatus === "wait"',
                    '[class.ant-steps-item-process]': 'nzStatus === "process"',
                    '[class.ant-steps-item-finish]': 'nzStatus === "finish"',
                    '[class.ant-steps-item-error]': 'nzStatus === "error"',
                    '[class.ant-steps-item-active]': 'currentIndex === index',
                    '[class.ant-steps-item-disabled]': 'nzDisabled',
                    '[class.ant-steps-item-custom]': '!!nzIcon',
                    '[class.ant-steps-next-error]': '(outStatus === "error") && (currentIndex === index + 1)'
                }
            }]
    }], function () { return [{ type: ChangeDetectorRef }, { type: Renderer2 }, { type: ElementRef }]; }, { processDotTemplate: [{
            type: ViewChild,
            args: ['processDotTemplate', { static: false }]
        }], nzTitle: [{
            type: Input
        }], nzSubtitle: [{
            type: Input
        }], nzDescription: [{
            type: Input
        }], nzDisabled: [{
            type: Input
        }], nzStatus: [{
            type: Input
        }], nzIcon: [{
            type: Input
        }] }); })();

var _c0$1 = ["*"];
var NzStepsComponent = /** @class */ (function () {
    function NzStepsComponent() {
        this.nzCurrent = 0;
        this.nzDirection = 'horizontal';
        this.nzLabelPlacement = 'horizontal';
        this.nzType = 'default';
        this.nzSize = 'default';
        this.nzStartIndex = 0;
        this.nzStatus = 'process';
        this.nzIndexChange = new EventEmitter();
        this.destroy$ = new Subject();
        this.showProcessDot = false;
    }
    Object.defineProperty(NzStepsComponent.prototype, "nzProgressDot", {
        set: function (value) {
            if (value instanceof TemplateRef) {
                this.showProcessDot = true;
                this.customProcessDotTemplate = value;
            }
            else {
                this.showProcessDot = toBoolean(value);
            }
            this.updateChildrenSteps();
        },
        enumerable: true,
        configurable: true
    });
    NzStepsComponent.prototype.ngOnChanges = function (changes) {
        if (changes.nzStartIndex || changes.nzDirection || changes.nzStatus || changes.nzCurrent) {
            this.updateChildrenSteps();
        }
        if (changes.nzDirection || changes.nzProgressDot || changes.nzLabelPlacement || changes.nzSize) {
            this.setClassMap();
        }
    };
    NzStepsComponent.prototype.ngOnInit = function () {
        this.setClassMap();
        this.updateChildrenSteps();
    };
    NzStepsComponent.prototype.ngOnDestroy = function () {
        this.destroy$.next();
        this.destroy$.complete();
        if (this.indexChangeSubscription) {
            this.indexChangeSubscription.unsubscribe();
        }
    };
    NzStepsComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        if (this.steps) {
            this.steps.changes.pipe(startWith(null), takeUntil(this.destroy$)).subscribe(function () {
                _this.updateChildrenSteps();
            });
        }
    };
    NzStepsComponent.prototype.updateChildrenSteps = function () {
        var _this = this;
        if (this.steps) {
            var length_1 = this.steps.length;
            this.steps.toArray().forEach(function (step, index) {
                Promise.resolve().then(function () {
                    step.outStatus = _this.nzStatus;
                    step.showProcessDot = _this.showProcessDot;
                    if (_this.customProcessDotTemplate) {
                        step.customProcessTemplate = _this.customProcessDotTemplate;
                    }
                    step.clickable = _this.nzIndexChange.observers.length > 0;
                    step.direction = _this.nzDirection;
                    step.index = index + _this.nzStartIndex;
                    step.currentIndex = _this.nzCurrent;
                    step.last = length_1 === index + 1;
                    step.markForCheck();
                });
            });
            if (this.indexChangeSubscription) {
                this.indexChangeSubscription.unsubscribe();
            }
            this.indexChangeSubscription = merge.apply(void 0, __spread(this.steps.map(function (step) { return step.click$; }))).subscribe(function (index) { return _this.nzIndexChange.emit(index); });
        }
    };
    NzStepsComponent.prototype.setClassMap = function () {
        var _a;
        this.classMap = (_a = {},
            _a["ant-steps-" + this.nzDirection] = true,
            _a["ant-steps-label-horizontal"] = this.nzDirection === 'horizontal',
            _a["ant-steps-label-vertical"] = (this.showProcessDot || this.nzLabelPlacement === 'vertical') && this.nzDirection === 'horizontal',
            _a["ant-steps-dot"] = this.showProcessDot,
            _a['ant-steps-small'] = this.nzSize === 'small',
            _a['ant-steps-navigation'] = this.nzType === 'navigation',
            _a);
    };
    /** @nocollapse */ NzStepsComponent.ɵfac = function NzStepsComponent_Factory(t) { return new (t || NzStepsComponent)(); };
    /** @nocollapse */ NzStepsComponent.ɵcmp = ɵɵdefineComponent({ type: NzStepsComponent, selectors: [["nz-steps"]], contentQueries: function NzStepsComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            ɵɵcontentQuery(dirIndex, NzStepComponent, false);
        } if (rf & 2) {
            var _t;
            ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.steps = _t);
        } }, inputs: { nzCurrent: "nzCurrent", nzDirection: "nzDirection", nzLabelPlacement: "nzLabelPlacement", nzType: "nzType", nzSize: "nzSize", nzStartIndex: "nzStartIndex", nzStatus: "nzStatus", nzProgressDot: "nzProgressDot" }, outputs: { nzIndexChange: "nzIndexChange" }, exportAs: ["nzSteps"], features: [ɵɵNgOnChangesFeature()], ngContentSelectors: _c0$1, decls: 2, vars: 1, consts: [[1, "ant-steps", 3, "ngClass"]], template: function NzStepsComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵprojectionDef();
            ɵɵelementStart(0, "div", 0);
            ɵɵprojection(1);
            ɵɵelementEnd();
        } if (rf & 2) {
            ɵɵproperty("ngClass", ctx.classMap);
        } }, directives: [NgClass], encapsulation: 2, changeDetection: 0 });
    return NzStepsComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzStepsComponent, [{
        type: Component,
        args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                preserveWhitespaces: false,
                selector: 'nz-steps',
                exportAs: 'nzSteps',
                templateUrl: './nz-steps.component.html'
            }]
    }], null, { steps: [{
            type: ContentChildren,
            args: [NzStepComponent]
        }], nzCurrent: [{
            type: Input
        }], nzDirection: [{
            type: Input
        }], nzLabelPlacement: [{
            type: Input
        }], nzType: [{
            type: Input
        }], nzSize: [{
            type: Input
        }], nzStartIndex: [{
            type: Input
        }], nzStatus: [{
            type: Input
        }], nzProgressDot: [{
            type: Input
        }], nzIndexChange: [{
            type: Output
        }] }); })();

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
var NzStepsModule = /** @class */ (function () {
    function NzStepsModule() {
    }
    /** @nocollapse */ NzStepsModule.ɵmod = ɵɵdefineNgModule({ type: NzStepsModule });
    /** @nocollapse */ NzStepsModule.ɵinj = ɵɵdefineInjector({ factory: function NzStepsModule_Factory(t) { return new (t || NzStepsModule)(); }, imports: [[CommonModule, NzIconModule, NzAddOnModule]] });
    return NzStepsModule;
}());
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(NzStepsModule, { declarations: [NzStepsComponent, NzStepComponent], imports: [CommonModule, NzIconModule, NzAddOnModule], exports: [NzStepsComponent, NzStepComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzStepsModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, NzIconModule, NzAddOnModule],
                exports: [NzStepsComponent, NzStepComponent],
                declarations: [NzStepsComponent, NzStepComponent]
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

export { NzStepComponent, NzStepsComponent, NzStepsModule };
//# sourceMappingURL=ng-zorro-antd-steps.js.map
