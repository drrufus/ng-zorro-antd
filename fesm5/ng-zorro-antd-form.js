import { MediaMatcher, LayoutModule } from '@angular/cdk/layout';
import { Platform, PlatformModule } from '@angular/cdk/platform';
import { NgClass, NgIf, CommonModule } from '@angular/common';
import { ɵɵdirectiveInject, ElementRef, Renderer2, ɵɵdefineComponent, ɵɵprojectionDef, ɵɵelementStart, ɵɵprojection, ɵɵelementEnd, ɵɵproperty, ɵsetClassMetadata, Component, ViewEncapsulation, ChangeDetectionStrategy, NgZone, ChangeDetectorRef, ɵɵcontentQuery, ɵɵqueryRefresh, ɵɵloadQuery, ɵɵallocHostVars, ɵɵclassProp, ɵɵProvidersFeature, ɵɵInheritDefinitionFeature, ɵɵNgOnChangesFeature, Input, ContentChildren, ɵɵelement, ɵɵnextContext, ɵɵelementContainerStart, ɵɵtext, ɵɵelementContainerEnd, ɵɵadvance, ɵɵtextInterpolate, ɵɵtemplate, ɵɵpureFunction1, Optional, Host, ContentChild, ɵɵattribute, ɵɵdefineDirective, Directive, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { NzRowDirective, NzColDirective, NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconDirective, NzIconModule } from 'ng-zorro-antd/icon';
import { warnDeprecation, helpMotion, NzUpdateHostClassService, NzDomEventService, InputBoolean, toBoolean, NzStringTemplateOutletDirective, NzConfigService, WithConfig, NzAddOnModule } from 'ng-zorro-antd/core';
import { __extends, __decorate, __metadata } from 'tslib';
import { FormControl, NgModel, FormControlName, FormControlDirective, NgControl } from '@angular/forms';
import { Subscription, Subject } from 'rxjs';
import { startWith, takeUntil } from 'rxjs/operators';

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
var _c0 = ["*"];
var NzFormExplainComponent = /** @class */ (function () {
    function NzFormExplainComponent(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.renderer.addClass(this.elementRef.nativeElement, 'ant-form-explain');
        warnDeprecation("'nz-form-explain' is going to be removed in 9.0.0. Use [nzSuccessTip] | [nzWarningTip] | [nzErrorTip] | [nzValidatingTip] in nz-form-control instead. Read https://ng.ant.design/components/form/en");
    }
    /** @nocollapse */ NzFormExplainComponent.ɵfac = function NzFormExplainComponent_Factory(t) { return new (t || NzFormExplainComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2)); };
    /** @nocollapse */ NzFormExplainComponent.ɵcmp = ɵɵdefineComponent({ type: NzFormExplainComponent, selectors: [["nz-form-explain"]], exportAs: ["nzFormExplain"], ngContentSelectors: _c0, decls: 2, vars: 1, template: function NzFormExplainComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵprojectionDef();
            ɵɵelementStart(0, "div");
            ɵɵprojection(1);
            ɵɵelementEnd();
        } if (rf & 2) {
            ɵɵproperty("@helpMotion", undefined);
        } }, styles: ["\n      nz-form-explain {\n        display: block;\n      }\n    "], encapsulation: 2, data: { animation: [helpMotion] }, changeDetection: 0 });
    return NzFormExplainComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzFormExplainComponent, [{
        type: Component,
        args: [{
                selector: 'nz-form-explain',
                exportAs: 'nzFormExplain',
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                animations: [helpMotion],
                templateUrl: './nz-form-explain.component.html',
                styles: [
                    "\n      nz-form-explain {\n        display: block;\n      }\n    "
                ]
            }]
    }], function () { return [{ type: ElementRef }, { type: Renderer2 }]; }, null); })();

var _c0$1 = ["*"];
/** should add nz-row directive to host, track https://github.com/angular/angular/issues/8785 **/
var NzFormItemComponent = /** @class */ (function (_super) {
    __extends(NzFormItemComponent, _super);
    function NzFormItemComponent(elementRef, renderer, nzUpdateHostClassService, mediaMatcher, ngZone, platform, nzDomEventService, cdr) {
        var _this = _super.call(this, elementRef, renderer, nzUpdateHostClassService, mediaMatcher, ngZone, platform, nzDomEventService) || this;
        _this.cdr = cdr;
        _this.nzFlex = false;
        _this.withHelpClass = false;
        _this.tipsMode = false;
        renderer.addClass(elementRef.nativeElement, 'ant-form-item');
        return _this;
    }
    NzFormItemComponent.prototype.updateFlexStyle = function () {
        if (this.nzFlex) {
            this.renderer.setStyle(this.elementRef.nativeElement, 'display', 'flex');
        }
        else {
            this.renderer.removeStyle(this.elementRef.nativeElement, 'display');
        }
    };
    NzFormItemComponent.prototype.setWithHelpViaTips = function (value) {
        this.tipsMode = true;
        this.withHelpClass = value;
        this.cdr.markForCheck();
    };
    NzFormItemComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        if (!this.tipsMode) {
            this.listOfNzFormExplainComponent.changes.pipe(startWith(true), takeUntil(this.destroy$)).subscribe(function () {
                _this.withHelpClass = _this.listOfNzFormExplainComponent && _this.listOfNzFormExplainComponent.length > 0;
                _this.cdr.markForCheck();
            });
        }
    };
    NzFormItemComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
        this.updateFlexStyle();
    };
    NzFormItemComponent.prototype.ngOnDestroy = function () {
        _super.prototype.ngOnDestroy.call(this);
    };
    NzFormItemComponent.prototype.ngOnChanges = function (changes) {
        _super.prototype.ngOnChanges.call(this, changes);
        if (changes.hasOwnProperty('nzFlex')) {
            this.updateFlexStyle();
        }
    };
    /** @nocollapse */ NzFormItemComponent.ɵfac = function NzFormItemComponent_Factory(t) { return new (t || NzFormItemComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(NzUpdateHostClassService), ɵɵdirectiveInject(MediaMatcher), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(Platform), ɵɵdirectiveInject(NzDomEventService), ɵɵdirectiveInject(ChangeDetectorRef)); };
    /** @nocollapse */ NzFormItemComponent.ɵcmp = ɵɵdefineComponent({ type: NzFormItemComponent, selectors: [["nz-form-item"]], contentQueries: function NzFormItemComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            ɵɵcontentQuery(dirIndex, NzFormExplainComponent, true);
        } if (rf & 2) {
            var _t;
            ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.listOfNzFormExplainComponent = _t);
        } }, hostBindings: function NzFormItemComponent_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
            ɵɵallocHostVars(1);
        } if (rf & 2) {
            ɵɵclassProp("ant-form-item-with-help", ctx.withHelpClass);
        } }, inputs: { nzFlex: "nzFlex" }, exportAs: ["nzFormItem"], features: [ɵɵProvidersFeature([NzUpdateHostClassService]), ɵɵInheritDefinitionFeature, ɵɵNgOnChangesFeature()], ngContentSelectors: _c0$1, decls: 1, vars: 0, template: function NzFormItemComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵprojectionDef();
            ɵɵprojection(0);
        } }, styles: ["\n      nz-form-item {\n        display: block;\n      }\n    "], encapsulation: 2, changeDetection: 0 });
    __decorate([
        InputBoolean(),
        __metadata("design:type", Boolean)
    ], NzFormItemComponent.prototype, "nzFlex", void 0);
    return NzFormItemComponent;
}(NzRowDirective));
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzFormItemComponent, [{
        type: Component,
        args: [{
                selector: 'nz-form-item',
                exportAs: 'nzFormItem',
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                providers: [NzUpdateHostClassService],
                templateUrl: './nz-form-item.component.html',
                host: {
                    '[class.ant-form-item-with-help]': 'withHelpClass'
                },
                styles: [
                    "\n      nz-form-item {\n        display: block;\n      }\n    "
                ]
            }]
    }], function () { return [{ type: ElementRef }, { type: Renderer2 }, { type: NzUpdateHostClassService }, { type: MediaMatcher }, { type: NgZone }, { type: Platform }, { type: NzDomEventService }, { type: ChangeDetectorRef }]; }, { nzFlex: [{
            type: Input
        }], listOfNzFormExplainComponent: [{
            type: ContentChildren,
            args: [NzFormExplainComponent, { descendants: true }]
        }] }); })();

function NzFormControlComponent_i_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "i", 7);
} if (rf & 2) {
    var ctx_r460 = ɵɵnextContext();
    ɵɵproperty("nzType", ctx_r460.iconType);
} }
function NzFormControlComponent_div_5_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r469 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r469.nzSuccessTip);
} }
var _c0$2 = function (a0) { return { $implicit: a0 }; };
function NzFormControlComponent_div_5_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, NzFormControlComponent_div_5_ng_container_2_ng_container_1_Template, 2, 1, "ng-container", 9);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r465 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("nzStringTemplateOutlet", ctx_r465.nzSuccessTip)("nzStringTemplateOutletContext", ɵɵpureFunction1(2, _c0$2, ctx_r465.validateControl));
} }
function NzFormControlComponent_div_5_ng_container_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r470 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r470.nzWarningTip);
} }
function NzFormControlComponent_div_5_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, NzFormControlComponent_div_5_ng_container_3_ng_container_1_Template, 2, 1, "ng-container", 9);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r466 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("nzStringTemplateOutlet", ctx_r466.nzWarningTip)("nzStringTemplateOutletContext", ɵɵpureFunction1(2, _c0$2, ctx_r466.validateControl));
} }
function NzFormControlComponent_div_5_ng_container_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r471 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r471.nzErrorTip);
} }
function NzFormControlComponent_div_5_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, NzFormControlComponent_div_5_ng_container_4_ng_container_1_Template, 2, 1, "ng-container", 9);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r467 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("nzStringTemplateOutlet", ctx_r467.nzErrorTip)("nzStringTemplateOutletContext", ɵɵpureFunction1(2, _c0$2, ctx_r467.validateControl));
} }
function NzFormControlComponent_div_5_ng_container_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r472 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r472.nzValidatingTip);
} }
function NzFormControlComponent_div_5_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, NzFormControlComponent_div_5_ng_container_5_ng_container_1_Template, 2, 1, "ng-container", 9);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r468 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("nzStringTemplateOutlet", ctx_r468.nzValidatingTip)("nzStringTemplateOutletContext", ɵɵpureFunction1(2, _c0$2, ctx_r468.validateControl));
} }
function NzFormControlComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 8);
    ɵɵelementStart(1, "div");
    ɵɵtemplate(2, NzFormControlComponent_div_5_ng_container_2_Template, 2, 4, "ng-container", 5);
    ɵɵtemplate(3, NzFormControlComponent_div_5_ng_container_3_Template, 2, 4, "ng-container", 5);
    ɵɵtemplate(4, NzFormControlComponent_div_5_ng_container_4_Template, 2, 4, "ng-container", 5);
    ɵɵtemplate(5, NzFormControlComponent_div_5_ng_container_5_Template, 2, 4, "ng-container", 5);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r461 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("@helpMotion", undefined);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r461.showSuccessTip);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r461.showWarningTip);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r461.showErrorTip);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r461.showValidatingTip);
} }
function NzFormControlComponent_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵprojection(0, 1, ["*ngIf", "!hasTips"]);
} }
function NzFormControlComponent_7_Template(rf, ctx) { if (rf & 1) {
    ɵɵprojection(0, 2, ["*ngIf", "!nzExtra"]);
} }
function NzFormControlComponent_div_8_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r473 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r473.nzExtra);
} }
function NzFormControlComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 10);
    ɵɵtemplate(1, NzFormControlComponent_div_8_ng_container_1_Template, 2, 1, "ng-container", 11);
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r464 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("nzStringTemplateOutlet", ctx_r464.nzExtra);
} }
var _c1 = ["*", [["nz-form-explain"]], [["nz-form-extra"]]];
var _c2 = ["*", "nz-form-explain", "nz-form-extra"];
var NzFormControlComponent = /** @class */ (function (_super) {
    __extends(NzFormControlComponent, _super);
    function NzFormControlComponent(nzUpdateHostClassService, elementRef, nzFormItemComponent, nzRowDirective, cdr, renderer) {
        var _this = _super.call(this, nzUpdateHostClassService, elementRef, nzFormItemComponent || nzRowDirective, renderer) || this;
        _this.nzFormItemComponent = nzFormItemComponent;
        _this.cdr = cdr;
        _this._hasFeedback = false;
        _this.validateChanges = Subscription.EMPTY;
        _this.status = null;
        _this.controlClassMap = {};
        renderer.addClass(elementRef.nativeElement, 'ant-form-item-control-wrapper');
        return _this;
    }
    Object.defineProperty(NzFormControlComponent.prototype, "nzHasFeedback", {
        get: function () {
            return this._hasFeedback;
        },
        set: function (value) {
            this._hasFeedback = toBoolean(value);
            this.setControlClassMap();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzFormControlComponent.prototype, "nzValidateStatus", {
        set: function (value) {
            if (value instanceof FormControl || value instanceof NgModel) {
                this.validateControl = value;
                this.validateString = null;
                this.watchControl();
            }
            else if (value instanceof FormControlName) {
                this.validateControl = value.control;
                this.validateString = null;
                this.watchControl();
            }
            else {
                this.validateString = value;
                this.validateControl = null;
                this.setControlClassMap();
            }
        },
        enumerable: true,
        configurable: true
    });
    NzFormControlComponent.prototype.removeSubscribe = function () {
        this.validateChanges.unsubscribe();
    };
    NzFormControlComponent.prototype.watchControl = function () {
        var _this = this;
        this.removeSubscribe();
        /** miss detect https://github.com/angular/angular/issues/10887 **/
        if (this.validateControl && this.validateControl.statusChanges) {
            this.validateChanges = this.validateControl.statusChanges.pipe(startWith(null)).subscribe(function () {
                _this.setControlClassMap();
                _this.cdr.markForCheck();
            });
        }
    };
    NzFormControlComponent.prototype.validateControlStatus = function (status) {
        return (!!this.validateControl &&
            (this.validateControl.dirty || this.validateControl.touched) &&
            this.validateControl.status === status);
    };
    NzFormControlComponent.prototype.setControlClassMap = function () {
        var _a;
        if (this.validateString === 'warning') {
            this.status = 'warning';
            this.iconType = 'exclamation-circle-fill';
        }
        else if (this.validateString === 'validating' || this.validateString === 'pending' || this.validateControlStatus('PENDING')) {
            this.status = 'validating';
            this.iconType = 'loading';
        }
        else if (this.validateString === 'error' || this.validateControlStatus('INVALID')) {
            this.status = 'error';
            this.iconType = 'close-circle-fill';
        }
        else if (this.validateString === 'success' || this.validateControlStatus('VALID')) {
            this.status = 'success';
            this.iconType = 'check-circle-fill';
        }
        else {
            this.status = null;
            this.iconType = '';
        }
        if (this.hasTips) {
            this.nzFormItemComponent.setWithHelpViaTips(this.showErrorTip);
        }
        this.controlClassMap = (_a = {},
            _a["has-warning"] = this.status === 'warning',
            _a["is-validating"] = this.status === 'validating',
            _a["has-error"] = this.status === 'error',
            _a["has-success"] = this.status === 'success',
            _a["has-feedback"] = this.nzHasFeedback && this.status,
            _a);
    };
    Object.defineProperty(NzFormControlComponent.prototype, "hasTips", {
        get: function () {
            return !!(this.nzSuccessTip || this.nzWarningTip || this.nzErrorTip || this.nzValidatingTip);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzFormControlComponent.prototype, "showSuccessTip", {
        get: function () {
            return this.status === 'success' && !!this.nzSuccessTip;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzFormControlComponent.prototype, "showWarningTip", {
        get: function () {
            return this.status === 'warning' && !!this.nzWarningTip;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzFormControlComponent.prototype, "showErrorTip", {
        get: function () {
            return this.status === 'error' && !!this.nzErrorTip;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzFormControlComponent.prototype, "showValidatingTip", {
        get: function () {
            return this.status === 'validating' && !!this.nzValidatingTip;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzFormControlComponent.prototype, "showInnerTip", {
        get: function () {
            return this.showSuccessTip || this.showWarningTip || this.showErrorTip || this.showValidatingTip;
        },
        enumerable: true,
        configurable: true
    });
    NzFormControlComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
        this.setControlClassMap();
    };
    NzFormControlComponent.prototype.ngOnDestroy = function () {
        this.removeSubscribe();
        _super.prototype.ngOnDestroy.call(this);
    };
    NzFormControlComponent.prototype.ngAfterContentInit = function () {
        if (!this.validateControl && !this.validateString) {
            if (this.defaultValidateControl instanceof FormControlDirective) {
                this.nzValidateStatus = this.defaultValidateControl.control;
            }
            else {
                this.nzValidateStatus = this.defaultValidateControl;
            }
        }
    };
    NzFormControlComponent.prototype.ngAfterViewInit = function () {
        _super.prototype.ngAfterViewInit.call(this);
    };
    /** @nocollapse */ NzFormControlComponent.ɵfac = function NzFormControlComponent_Factory(t) { return new (t || NzFormControlComponent)(ɵɵdirectiveInject(NzUpdateHostClassService), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NzFormItemComponent, 9), ɵɵdirectiveInject(NzRowDirective, 9), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(Renderer2)); };
    /** @nocollapse */ NzFormControlComponent.ɵcmp = ɵɵdefineComponent({ type: NzFormControlComponent, selectors: [["nz-form-control"]], contentQueries: function NzFormControlComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            ɵɵcontentQuery(dirIndex, NgControl, true);
        } if (rf & 2) {
            var _t;
            ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.defaultValidateControl = _t.first);
        } }, inputs: { nzSuccessTip: "nzSuccessTip", nzWarningTip: "nzWarningTip", nzErrorTip: "nzErrorTip", nzValidatingTip: "nzValidatingTip", nzExtra: "nzExtra", nzHasFeedback: "nzHasFeedback", nzValidateStatus: "nzValidateStatus" }, exportAs: ["nzFormControl"], features: [ɵɵProvidersFeature([NzUpdateHostClassService]), ɵɵInheritDefinitionFeature], ngContentSelectors: _c2, decls: 9, vars: 6, consts: [[1, "ant-form-item-control", 3, "ngClass"], [1, "ant-form-item-children"], [1, "ant-form-item-children-icon"], ["nz-icon", "", 3, "nzType", 4, "ngIf"], ["class", "ant-form-explain", 4, "ngIf"], [4, "ngIf"], ["class", "ant-form-extra", 4, "ngIf"], ["nz-icon", "", 3, "nzType"], [1, "ant-form-explain"], [4, "nzStringTemplateOutlet", "nzStringTemplateOutletContext"], [1, "ant-form-extra"], [4, "nzStringTemplateOutlet"]], template: function NzFormControlComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵprojectionDef(_c1);
            ɵɵelementStart(0, "div", 0);
            ɵɵelementStart(1, "span", 1);
            ɵɵprojection(2);
            ɵɵelementStart(3, "span", 2);
            ɵɵtemplate(4, NzFormControlComponent_i_4_Template, 1, 1, "i", 3);
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵtemplate(5, NzFormControlComponent_div_5_Template, 6, 5, "div", 4);
            ɵɵtemplate(6, NzFormControlComponent_6_Template, 1, 0, undefined, 5);
            ɵɵtemplate(7, NzFormControlComponent_7_Template, 1, 0, undefined, 5);
            ɵɵtemplate(8, NzFormControlComponent_div_8_Template, 2, 1, "div", 6);
            ɵɵelementEnd();
        } if (rf & 2) {
            ɵɵproperty("ngClass", ctx.controlClassMap);
            ɵɵadvance(4);
            ɵɵproperty("ngIf", ctx.nzHasFeedback && ctx.iconType);
            ɵɵadvance(1);
            ɵɵproperty("ngIf", ctx.showSuccessTip || ctx.showWarningTip || ctx.showErrorTip || ctx.showValidatingTip);
            ɵɵadvance(1);
            ɵɵproperty("ngIf", !ctx.hasTips);
            ɵɵadvance(1);
            ɵɵproperty("ngIf", !ctx.nzExtra);
            ɵɵadvance(1);
            ɵɵproperty("ngIf", ctx.nzExtra);
        } }, directives: [NgClass, NgIf, NzIconDirective, NzStringTemplateOutletDirective], styles: ["\n      nz-form-control {\n        display: block;\n      }\n      form .has-feedback .ant-input-suffix i {\n        margin-right: 18px;\n      }\n    "], encapsulation: 2, data: { animation: [helpMotion] }, changeDetection: 0 });
    return NzFormControlComponent;
}(NzColDirective));
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzFormControlComponent, [{
        type: Component,
        args: [{
                selector: 'nz-form-control',
                exportAs: 'nzFormControl',
                preserveWhitespaces: false,
                animations: [helpMotion],
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [NzUpdateHostClassService],
                templateUrl: './nz-form-control.component.html',
                styles: [
                    "\n      nz-form-control {\n        display: block;\n      }\n      form .has-feedback .ant-input-suffix i {\n        margin-right: 18px;\n      }\n    "
                ]
            }]
    }], function () { return [{ type: NzUpdateHostClassService }, { type: ElementRef }, { type: NzFormItemComponent, decorators: [{
                type: Optional
            }, {
                type: Host
            }] }, { type: NzRowDirective, decorators: [{
                type: Optional
            }, {
                type: Host
            }] }, { type: ChangeDetectorRef }, { type: Renderer2 }]; }, { defaultValidateControl: [{
            type: ContentChild,
            args: [NgControl, { static: false }]
        }], nzSuccessTip: [{
            type: Input
        }], nzWarningTip: [{
            type: Input
        }], nzErrorTip: [{
            type: Input
        }], nzValidatingTip: [{
            type: Input
        }], nzExtra: [{
            type: Input
        }], nzHasFeedback: [{
            type: Input
        }], nzValidateStatus: [{
            type: Input
        }] }); })();

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
var _c0$3 = ["*"];
var NzFormExtraComponent = /** @class */ (function () {
    function NzFormExtraComponent(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.renderer.addClass(this.elementRef.nativeElement, 'ant-form-extra');
        warnDeprecation("'nz-form-extra' is going to be removed in 9.0.0. Use [nzExtra] in nz-form-control instead. Read https://ng.ant.design/components/form/en");
    }
    /** @nocollapse */ NzFormExtraComponent.ɵfac = function NzFormExtraComponent_Factory(t) { return new (t || NzFormExtraComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2)); };
    /** @nocollapse */ NzFormExtraComponent.ɵcmp = ɵɵdefineComponent({ type: NzFormExtraComponent, selectors: [["nz-form-extra"]], exportAs: ["nzFormExtra"], ngContentSelectors: _c0$3, decls: 1, vars: 0, template: function NzFormExtraComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵprojectionDef();
            ɵɵprojection(0);
        } }, styles: ["\n      nz-form-extra {\n        display: block;\n      }\n    "], encapsulation: 2, changeDetection: 0 });
    return NzFormExtraComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzFormExtraComponent, [{
        type: Component,
        args: [{
                selector: 'nz-form-extra',
                exportAs: 'nzFormExtra',
                templateUrl: './nz-form-extra.component.html',
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [
                    "\n      nz-form-extra {\n        display: block;\n      }\n    "
                ]
            }]
    }], function () { return [{ type: ElementRef }, { type: Renderer2 }]; }, null); })();

var _c0$4 = ["*"];
var NzFormLabelComponent = /** @class */ (function (_super) {
    __extends(NzFormLabelComponent, _super);
    function NzFormLabelComponent(nzUpdateHostClassService, elementRef, nzFormItemComponent, nzRowDirective, renderer, cdr) {
        var _this = _super.call(this, nzUpdateHostClassService, elementRef, nzFormItemComponent || nzRowDirective, renderer) || this;
        _this.cdr = cdr;
        _this.nzRequired = false;
        _this.defaultNoColon = false;
        _this.noColon = 'default';
        renderer.addClass(elementRef.nativeElement, 'ant-form-item-label');
        return _this;
    }
    Object.defineProperty(NzFormLabelComponent.prototype, "nzNoColon", {
        get: function () {
            return !!this.noColon;
        },
        set: function (value) {
            this.noColon = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    NzFormLabelComponent.prototype.setDefaultNoColon = function (value) {
        this.defaultNoColon = toBoolean(value);
        this.cdr.markForCheck();
    };
    NzFormLabelComponent.prototype.ngOnDestroy = function () {
        _super.prototype.ngOnDestroy.call(this);
    };
    NzFormLabelComponent.prototype.ngAfterViewInit = function () {
        _super.prototype.ngAfterViewInit.call(this);
    };
    /** @nocollapse */ NzFormLabelComponent.ɵfac = function NzFormLabelComponent_Factory(t) { return new (t || NzFormLabelComponent)(ɵɵdirectiveInject(NzUpdateHostClassService), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NzFormItemComponent, 9), ɵɵdirectiveInject(NzRowDirective, 9), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ChangeDetectorRef)); };
    /** @nocollapse */ NzFormLabelComponent.ɵcmp = ɵɵdefineComponent({ type: NzFormLabelComponent, selectors: [["nz-form-label"]], inputs: { nzFor: "nzFor", nzRequired: "nzRequired", nzNoColon: "nzNoColon" }, exportAs: ["nzFormLabel"], features: [ɵɵProvidersFeature([NzUpdateHostClassService]), ɵɵInheritDefinitionFeature], ngContentSelectors: _c0$4, decls: 2, vars: 3, template: function NzFormLabelComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵprojectionDef();
            ɵɵelementStart(0, "label");
            ɵɵprojection(1);
            ɵɵelementEnd();
        } if (rf & 2) {
            ɵɵclassProp("ant-form-item-no-colon", ctx.noColon === "default" ? ctx.defaultNoColon : ctx.nzNoColon)("ant-form-item-required", ctx.nzRequired);
            ɵɵattribute("for", ctx.nzFor);
        } }, encapsulation: 2, changeDetection: 0 });
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzFormLabelComponent.prototype, "nzRequired", void 0);
    return NzFormLabelComponent;
}(NzColDirective));
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzFormLabelComponent, [{
        type: Component,
        args: [{
                selector: 'nz-form-label',
                exportAs: 'nzFormLabel',
                providers: [NzUpdateHostClassService],
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                templateUrl: './nz-form-label.component.html'
            }]
    }], function () { return [{ type: NzUpdateHostClassService }, { type: ElementRef }, { type: NzFormItemComponent, decorators: [{
                type: Optional
            }, {
                type: Host
            }] }, { type: NzRowDirective, decorators: [{
                type: Optional
            }, {
                type: Host
            }] }, { type: Renderer2 }, { type: ChangeDetectorRef }]; }, { nzFor: [{
            type: Input
        }], nzRequired: [{
            type: Input
        }], nzNoColon: [{
            type: Input
        }] }); })();

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
var _c0$5 = ["*"];
var NzFormSplitComponent = /** @class */ (function () {
    function NzFormSplitComponent(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.renderer.addClass(this.elementRef.nativeElement, 'ant-form-split');
    }
    /** @nocollapse */ NzFormSplitComponent.ɵfac = function NzFormSplitComponent_Factory(t) { return new (t || NzFormSplitComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2)); };
    /** @nocollapse */ NzFormSplitComponent.ɵcmp = ɵɵdefineComponent({ type: NzFormSplitComponent, selectors: [["nz-form-split"]], exportAs: ["nzFormSplit"], ngContentSelectors: _c0$5, decls: 1, vars: 0, template: function NzFormSplitComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵprojectionDef();
            ɵɵprojection(0);
        } }, encapsulation: 2, changeDetection: 0 });
    return NzFormSplitComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzFormSplitComponent, [{
        type: Component,
        args: [{
                selector: 'nz-form-split',
                exportAs: 'nzFormSplit',
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                templateUrl: './nz-form-split.component.html'
            }]
    }], function () { return [{ type: ElementRef }, { type: Renderer2 }]; }, null); })();

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
var _c0$6 = ["*"];
var NzFormTextComponent = /** @class */ (function () {
    function NzFormTextComponent(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.renderer.addClass(this.elementRef.nativeElement, 'ant-form-text');
    }
    /** @nocollapse */ NzFormTextComponent.ɵfac = function NzFormTextComponent_Factory(t) { return new (t || NzFormTextComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2)); };
    /** @nocollapse */ NzFormTextComponent.ɵcmp = ɵɵdefineComponent({ type: NzFormTextComponent, selectors: [["nz-form-text"]], exportAs: ["nzFormText"], ngContentSelectors: _c0$6, decls: 1, vars: 0, template: function NzFormTextComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵprojectionDef();
            ɵɵprojection(0);
        } }, encapsulation: 2, changeDetection: 0 });
    return NzFormTextComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzFormTextComponent, [{
        type: Component,
        args: [{
                selector: 'nz-form-text',
                exportAs: 'nzFormText',
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                templateUrl: './nz-form-text.component.html'
            }]
    }], function () { return [{ type: ElementRef }, { type: Renderer2 }]; }, null); })();

var NZ_CONFIG_COMPONENT_NAME = 'form';
var NzFormDirective = /** @class */ (function () {
    function NzFormDirective(nzConfigService, elementRef, renderer, nzUpdateHostClassService) {
        this.nzConfigService = nzConfigService;
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.nzUpdateHostClassService = nzUpdateHostClassService;
        this.nzLayout = 'horizontal';
        this.destroy$ = new Subject();
        this.renderer.addClass(elementRef.nativeElement, 'ant-form');
    }
    NzFormDirective.prototype.setClassMap = function () {
        var _a;
        this.nzUpdateHostClassService.updateHostClass(this.elementRef.nativeElement, (_a = {},
            _a["ant-form-" + this.nzLayout] = this.nzLayout,
            _a));
    };
    NzFormDirective.prototype.updateItemsDefaultColon = function () {
        var _this = this;
        if (this.nzFormLabelComponent) {
            this.nzFormLabelComponent.forEach(function (item) { return item.setDefaultNoColon(_this.nzNoColon); });
        }
    };
    NzFormDirective.prototype.ngOnInit = function () {
        this.setClassMap();
    };
    NzFormDirective.prototype.ngOnChanges = function (changes) {
        this.setClassMap();
        if (changes.hasOwnProperty('nzNoColon')) {
            this.updateItemsDefaultColon();
        }
    };
    NzFormDirective.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.nzFormLabelComponent.changes.pipe(startWith(null), takeUntil(this.destroy$)).subscribe(function () {
            _this.updateItemsDefaultColon();
        });
    };
    NzFormDirective.prototype.ngOnDestroy = function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    /** @nocollapse */ NzFormDirective.ɵfac = function NzFormDirective_Factory(t) { return new (t || NzFormDirective)(ɵɵdirectiveInject(NzConfigService), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(NzUpdateHostClassService)); };
    /** @nocollapse */ NzFormDirective.ɵdir = ɵɵdefineDirective({ type: NzFormDirective, selectors: [["", "nz-form", ""]], contentQueries: function NzFormDirective_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            ɵɵcontentQuery(dirIndex, NzFormLabelComponent, true);
        } if (rf & 2) {
            var _t;
            ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.nzFormLabelComponent = _t);
        } }, inputs: { nzLayout: "nzLayout", nzNoColon: "nzNoColon" }, exportAs: ["nzForm"], features: [ɵɵProvidersFeature([NzUpdateHostClassService]), ɵɵNgOnChangesFeature()] });
    __decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME, false), InputBoolean(),
        __metadata("design:type", Boolean)
    ], NzFormDirective.prototype, "nzNoColon", void 0);
    return NzFormDirective;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzFormDirective, [{
        type: Directive,
        args: [{
                selector: '[nz-form]',
                exportAs: 'nzForm',
                providers: [NzUpdateHostClassService]
            }]
    }], function () { return [{ type: NzConfigService }, { type: ElementRef }, { type: Renderer2 }, { type: NzUpdateHostClassService }]; }, { nzLayout: [{
            type: Input
        }], nzNoColon: [{
            type: Input
        }], nzFormLabelComponent: [{
            type: ContentChildren,
            args: [NzFormLabelComponent, { descendants: true }]
        }] }); })();

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
var NzFormModule = /** @class */ (function () {
    function NzFormModule() {
    }
    /** @nocollapse */ NzFormModule.ɵmod = ɵɵdefineNgModule({ type: NzFormModule });
    /** @nocollapse */ NzFormModule.ɵinj = ɵɵdefineInjector({ factory: function NzFormModule_Factory(t) { return new (t || NzFormModule)(); }, imports: [[CommonModule, NzGridModule, NzIconModule, LayoutModule, PlatformModule, NzAddOnModule]] });
    return NzFormModule;
}());
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(NzFormModule, { declarations: [NzFormExtraComponent,
        NzFormLabelComponent,
        NzFormDirective,
        NzFormItemComponent,
        NzFormControlComponent,
        NzFormExplainComponent,
        NzFormTextComponent,
        NzFormSplitComponent], imports: [CommonModule, NzGridModule, NzIconModule, LayoutModule, PlatformModule, NzAddOnModule], exports: [NzFormExtraComponent,
        NzFormLabelComponent,
        NzFormDirective,
        NzFormItemComponent,
        NzFormControlComponent,
        NzFormExplainComponent,
        NzFormTextComponent,
        NzFormSplitComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzFormModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    NzFormExtraComponent,
                    NzFormLabelComponent,
                    NzFormDirective,
                    NzFormItemComponent,
                    NzFormControlComponent,
                    NzFormExplainComponent,
                    NzFormTextComponent,
                    NzFormSplitComponent
                ],
                exports: [
                    NzFormExtraComponent,
                    NzFormLabelComponent,
                    NzFormDirective,
                    NzFormItemComponent,
                    NzFormControlComponent,
                    NzFormExplainComponent,
                    NzFormTextComponent,
                    NzFormSplitComponent
                ],
                imports: [CommonModule, NzGridModule, NzIconModule, LayoutModule, PlatformModule, NzAddOnModule]
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

export { NzFormControlComponent, NzFormDirective, NzFormExplainComponent, NzFormExtraComponent, NzFormItemComponent, NzFormLabelComponent, NzFormModule, NzFormSplitComponent, NzFormTextComponent };
//# sourceMappingURL=ng-zorro-antd-form.js.map
