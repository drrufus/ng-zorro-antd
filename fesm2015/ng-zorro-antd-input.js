import { __decorate, __metadata } from 'tslib';
import { ɵɵdirectiveInject, Renderer2, ElementRef, ɵɵdefineDirective, ɵɵallocHostVars, ɵɵclassProp, ɵsetClassMetadata, Directive, Input, ɵɵelement, ɵɵnextContext, ɵɵproperty, ɵɵelementContainerStart, ɵɵtext, ɵɵelementContainerEnd, ɵɵadvance, ɵɵtextInterpolate, ɵɵelementStart, ɵɵtemplate, ɵɵelementEnd, ɵɵreference, ɵɵprojection, ɵɵdefineComponent, ɵɵcontentQuery, ɵɵqueryRefresh, ɵɵloadQuery, ɵɵprojectionDef, ɵɵtemplateRefExtractor, Component, ViewEncapsulation, ChangeDetectionStrategy, ContentChildren, NgZone, ɵɵlistener, ɵɵelementHostAttrs, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { InputBoolean, NzStringTemplateOutletDirective, NzDomEventService, NzAddOnModule } from 'ng-zorro-antd/core';
import { NgIf, NgTemplateOutlet, CommonModule } from '@angular/common';
import { NzIconDirective, NzIconModule } from 'ng-zorro-antd/icon';
import { Platform, PlatformModule } from '@angular/cdk/platform';
import { Subject } from 'rxjs';
import { takeUntil, finalize } from 'rxjs/operators';

class NzInputDirective {
    constructor(renderer, elementRef) {
        this.nzSize = 'default';
        this.disabled = false;
        renderer.addClass(elementRef.nativeElement, 'ant-input');
    }
}
/** @nocollapse */ NzInputDirective.ɵfac = function NzInputDirective_Factory(t) { return new (t || NzInputDirective)(ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef)); };
/** @nocollapse */ NzInputDirective.ɵdir = ɵɵdefineDirective({ type: NzInputDirective, selectors: [["", "nz-input", ""]], hostBindings: function NzInputDirective_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
        ɵɵallocHostVars(3);
    } if (rf & 2) {
        ɵɵclassProp("ant-input-disabled", ctx.disabled)("ant-input-lg", ctx.nzSize === "large")("ant-input-sm", ctx.nzSize === "small");
    } }, inputs: { nzSize: "nzSize", disabled: "disabled" }, exportAs: ["nzInput"] });
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzInputDirective.prototype, "disabled", void 0);
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzInputDirective, [{
        type: Directive,
        args: [{
                selector: '[nz-input]',
                exportAs: 'nzInput',
                host: {
                    '[class.ant-input-disabled]': 'disabled',
                    '[class.ant-input-lg]': `nzSize === 'large'`,
                    '[class.ant-input-sm]': `nzSize === 'small'`
                }
            }]
    }], function () { return [{ type: Renderer2 }, { type: ElementRef }]; }, { nzSize: [{
            type: Input
        }], disabled: [{
            type: Input
        }] }); })();

function NzInputGroupComponent_span_0_span_1_i_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "i", 10);
} if (rf & 2) {
    const ctx_r485 = ɵɵnextContext(3);
    ɵɵproperty("nzType", ctx_r485.nzAddOnBeforeIcon);
} }
function NzInputGroupComponent_span_0_span_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r486 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r486.nzAddOnBefore);
} }
function NzInputGroupComponent_span_0_span_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span", 7);
    ɵɵtemplate(1, NzInputGroupComponent_span_0_span_1_i_1_Template, 1, 1, "i", 8);
    ɵɵtemplate(2, NzInputGroupComponent_span_0_span_1_ng_container_2_Template, 2, 1, "ng-container", 9);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r481 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r481.nzAddOnBeforeIcon);
    ɵɵadvance(1);
    ɵɵproperty("nzStringTemplateOutlet", ctx_r481.nzAddOnBefore);
} }
function NzInputGroupComponent_span_0_ng_container_2_1_ng_template_0_Template(rf, ctx) { }
function NzInputGroupComponent_span_0_ng_container_2_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵtemplate(0, NzInputGroupComponent_span_0_ng_container_2_1_ng_template_0_Template, 0, 0, "ng-template");
} }
function NzInputGroupComponent_span_0_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, NzInputGroupComponent_span_0_ng_container_2_1_Template, 1, 0, undefined, 11);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    ɵɵnextContext(2);
    const _r479 = ɵɵreference(6);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", _r479);
} }
function NzInputGroupComponent_span_0_span_3_1_ng_template_0_Template(rf, ctx) { }
function NzInputGroupComponent_span_0_span_3_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵtemplate(0, NzInputGroupComponent_span_0_span_3_1_ng_template_0_Template, 0, 0, "ng-template");
} }
function NzInputGroupComponent_span_0_span_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span", 12);
    ɵɵtemplate(1, NzInputGroupComponent_span_0_span_3_1_Template, 1, 0, undefined, 11);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r483 = ɵɵnextContext(2);
    const _r476 = ɵɵreference(3);
    ɵɵclassProp("ant-input-affix-wrapper-sm", ctx_r483.isSmall)("ant-input-affix-wrapper-lg", ctx_r483.isLarge);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", _r476);
} }
function NzInputGroupComponent_span_0_span_4_i_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "i", 10);
} if (rf & 2) {
    const ctx_r491 = ɵɵnextContext(3);
    ɵɵproperty("nzType", ctx_r491.nzAddOnAfterIcon);
} }
function NzInputGroupComponent_span_0_span_4_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r492 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r492.nzAddOnAfter);
} }
function NzInputGroupComponent_span_0_span_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span", 7);
    ɵɵtemplate(1, NzInputGroupComponent_span_0_span_4_i_1_Template, 1, 1, "i", 8);
    ɵɵtemplate(2, NzInputGroupComponent_span_0_span_4_ng_container_2_Template, 2, 1, "ng-container", 9);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r484 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r484.nzAddOnAfterIcon);
    ɵɵadvance(1);
    ɵɵproperty("nzStringTemplateOutlet", ctx_r484.nzAddOnAfter);
} }
function NzInputGroupComponent_span_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span", 4);
    ɵɵtemplate(1, NzInputGroupComponent_span_0_span_1_Template, 3, 2, "span", 5);
    ɵɵtemplate(2, NzInputGroupComponent_span_0_ng_container_2_Template, 2, 1, "ng-container", 1);
    ɵɵtemplate(3, NzInputGroupComponent_span_0_span_3_Template, 2, 3, "span", 6);
    ɵɵtemplate(4, NzInputGroupComponent_span_0_span_4_Template, 3, 2, "span", 5);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r474 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r474.nzAddOnBefore || ctx_r474.nzAddOnBeforeIcon);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r474.isAffix);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r474.isAffix);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r474.nzAddOnAfter || ctx_r474.nzAddOnAfterIcon);
} }
function NzInputGroupComponent_ng_container_1_1_ng_template_0_Template(rf, ctx) { }
function NzInputGroupComponent_ng_container_1_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵtemplate(0, NzInputGroupComponent_ng_container_1_1_ng_template_0_Template, 0, 0, "ng-template");
} }
function NzInputGroupComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, NzInputGroupComponent_ng_container_1_1_Template, 1, 0, undefined, 11);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    ɵɵnextContext();
    const _r476 = ɵɵreference(3);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", _r476);
} }
function NzInputGroupComponent_ng_template_2_span_0_i_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "i", 17);
} if (rf & 2) {
    const ctx_r498 = ɵɵnextContext(3);
    ɵɵproperty("nzType", ctx_r498.nzPrefixIcon);
} }
function NzInputGroupComponent_ng_template_2_span_0_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r499 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r499.nzPrefix);
} }
function NzInputGroupComponent_ng_template_2_span_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span", 15);
    ɵɵtemplate(1, NzInputGroupComponent_ng_template_2_span_0_i_1_Template, 1, 1, "i", 16);
    ɵɵtemplate(2, NzInputGroupComponent_ng_template_2_span_0_ng_container_2_Template, 2, 1, "ng-container", 9);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r495 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r495.nzPrefixIcon);
    ɵɵadvance(1);
    ɵɵproperty("nzStringTemplateOutlet", ctx_r495.nzPrefix);
} }
function NzInputGroupComponent_ng_template_2_1_ng_template_0_Template(rf, ctx) { }
function NzInputGroupComponent_ng_template_2_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵtemplate(0, NzInputGroupComponent_ng_template_2_1_ng_template_0_Template, 0, 0, "ng-template");
} }
function NzInputGroupComponent_ng_template_2_span_2_i_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "i", 10);
} if (rf & 2) {
    const ctx_r501 = ɵɵnextContext(3);
    ɵɵproperty("nzType", ctx_r501.nzSuffixIcon);
} }
function NzInputGroupComponent_ng_template_2_span_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r502 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r502.nzSuffix);
} }
function NzInputGroupComponent_ng_template_2_span_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span", 18);
    ɵɵtemplate(1, NzInputGroupComponent_ng_template_2_span_2_i_1_Template, 1, 1, "i", 8);
    ɵɵtemplate(2, NzInputGroupComponent_ng_template_2_span_2_ng_container_2_Template, 2, 1, "ng-container", 9);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r497 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r497.nzSuffixIcon);
    ɵɵadvance(1);
    ɵɵproperty("nzStringTemplateOutlet", ctx_r497.nzSuffix);
} }
function NzInputGroupComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵtemplate(0, NzInputGroupComponent_ng_template_2_span_0_Template, 3, 2, "span", 13);
    ɵɵtemplate(1, NzInputGroupComponent_ng_template_2_1_Template, 1, 0, undefined, 11);
    ɵɵtemplate(2, NzInputGroupComponent_ng_template_2_span_2_Template, 3, 2, "span", 14);
} if (rf & 2) {
    const ctx_r477 = ɵɵnextContext();
    const _r479 = ɵɵreference(6);
    ɵɵproperty("ngIf", ctx_r477.nzPrefix || ctx_r477.nzPrefixIcon);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", _r479);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r477.nzSuffix || ctx_r477.nzSuffixIcon);
} }
function NzInputGroupComponent_ng_container_4_1_ng_template_0_Template(rf, ctx) { }
function NzInputGroupComponent_ng_container_4_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵtemplate(0, NzInputGroupComponent_ng_container_4_1_ng_template_0_Template, 0, 0, "ng-template");
} }
function NzInputGroupComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, NzInputGroupComponent_ng_container_4_1_Template, 1, 0, undefined, 11);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    ɵɵnextContext();
    const _r479 = ɵɵreference(6);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", _r479);
} }
function NzInputGroupComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵprojection(0);
} }
const _c0 = ["*"];
class NzInputGroupComponent {
    constructor() {
        this._size = 'default';
        this.nzSearch = false;
        this.nzCompact = false;
    }
    set nzSize(value) {
        this._size = value;
        this.updateChildrenInputSize();
    }
    get nzSize() {
        return this._size;
    }
    get isLarge() {
        return this.nzSize === 'large';
    }
    get isSmall() {
        return this.nzSize === 'small';
    }
    get isAffix() {
        return !!(this.nzSuffix || this.nzPrefix || this.nzPrefixIcon || this.nzSuffixIcon);
    }
    get isAddOn() {
        return !!(this.nzAddOnAfter || this.nzAddOnBefore || this.nzAddOnAfterIcon || this.nzAddOnBeforeIcon);
    }
    get isAffixWrapper() {
        return this.isAffix && !this.isAddOn;
    }
    get isGroup() {
        return !this.isAffix && !this.isAddOn;
    }
    get isLargeGroup() {
        return this.isGroup && this.isLarge;
    }
    get isLargeGroupWrapper() {
        return this.isAddOn && this.isLarge;
    }
    get isLargeAffix() {
        return this.isAffixWrapper && this.isLarge;
    }
    get isLargeSearch() {
        return this.nzSearch && this.isLarge;
    }
    get isSmallGroup() {
        return this.isGroup && this.isSmall;
    }
    get isSmallAffix() {
        return this.isAffixWrapper && this.isSmall;
    }
    get isSmallGroupWrapper() {
        return this.isAddOn && this.isSmall;
    }
    get isSmallSearch() {
        return this.nzSearch && this.isSmall;
    }
    updateChildrenInputSize() {
        if (this.listOfNzInputDirective) {
            this.listOfNzInputDirective.forEach(item => (item.nzSize = this.nzSize));
        }
    }
    ngAfterContentInit() {
        this.updateChildrenInputSize();
    }
}
/** @nocollapse */ NzInputGroupComponent.ɵfac = function NzInputGroupComponent_Factory(t) { return new (t || NzInputGroupComponent)(); };
/** @nocollapse */ NzInputGroupComponent.ɵcmp = ɵɵdefineComponent({ type: NzInputGroupComponent, selectors: [["nz-input-group"]], contentQueries: function NzInputGroupComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵɵcontentQuery(dirIndex, NzInputDirective, false);
    } if (rf & 2) {
        var _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.listOfNzInputDirective = _t);
    } }, hostBindings: function NzInputGroupComponent_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
        ɵɵallocHostVars(14);
    } if (rf & 2) {
        ɵɵclassProp("ant-input-group-compact", ctx.nzCompact)("ant-input-search-enter-button", ctx.nzSearch)("ant-input-search", ctx.nzSearch)("ant-input-search-sm", ctx.isSmallSearch)("ant-input-affix-wrapper", ctx.isAffixWrapper)("ant-input-group-wrapper", ctx.isAddOn)("ant-input-group", ctx.isGroup)("ant-input-group-lg", ctx.isLargeGroup)("ant-input-group-wrapper-lg", ctx.isLargeGroupWrapper)("ant-input-affix-wrapper-lg", ctx.isLargeAffix)("ant-input-search-lg", ctx.isLargeSearch)("ant-input-group-sm", ctx.isSmallGroup)("ant-input-affix-wrapper-sm", ctx.isSmallAffix)("ant-input-group-wrapper-sm", ctx.isSmallGroupWrapper);
    } }, inputs: { nzAddOnBeforeIcon: "nzAddOnBeforeIcon", nzAddOnAfterIcon: "nzAddOnAfterIcon", nzPrefixIcon: "nzPrefixIcon", nzSuffixIcon: "nzSuffixIcon", nzAddOnBefore: "nzAddOnBefore", nzAddOnAfter: "nzAddOnAfter", nzPrefix: "nzPrefix", nzSuffix: "nzSuffix", nzSearch: "nzSearch", nzCompact: "nzCompact", nzSize: "nzSize" }, exportAs: ["nzInputGroup"], ngContentSelectors: _c0, decls: 7, vars: 3, consts: [["class", "ant-input-wrapper ant-input-group", 4, "ngIf"], [4, "ngIf"], ["affixTemplate", ""], ["contentTemplate", ""], [1, "ant-input-wrapper", "ant-input-group"], ["class", "ant-input-group-addon", 4, "ngIf"], ["class", "ant-input-affix-wrapper", 3, "ant-input-affix-wrapper-sm", "ant-input-affix-wrapper-lg", 4, "ngIf"], [1, "ant-input-group-addon"], ["nz-icon", "", 3, "nzType", 4, "ngIf"], [4, "nzStringTemplateOutlet"], ["nz-icon", "", 3, "nzType"], [4, "ngTemplateOutlet"], [1, "ant-input-affix-wrapper"], ["class", "ant-input-prefix", 4, "ngIf"], ["class", "ant-input-suffix", 4, "ngIf"], [1, "ant-input-prefix"], ["nz-icon", "", "style", "color: rgba(0, 0, 0, 0.25)", 3, "nzType", 4, "ngIf"], ["nz-icon", "", 2, "color", "rgba(0, 0, 0, 0.25)", 3, "nzType"], [1, "ant-input-suffix"]], template: function NzInputGroupComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵtemplate(0, NzInputGroupComponent_span_0_Template, 5, 4, "span", 0);
        ɵɵtemplate(1, NzInputGroupComponent_ng_container_1_Template, 2, 1, "ng-container", 1);
        ɵɵtemplate(2, NzInputGroupComponent_ng_template_2_Template, 3, 3, "ng-template", null, 2, ɵɵtemplateRefExtractor);
        ɵɵtemplate(4, NzInputGroupComponent_ng_container_4_Template, 2, 1, "ng-container", 1);
        ɵɵtemplate(5, NzInputGroupComponent_ng_template_5_Template, 1, 0, "ng-template", null, 3, ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        ɵɵproperty("ngIf", ctx.isAddOn);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.isAffix && !ctx.isAddOn);
        ɵɵadvance(3);
        ɵɵproperty("ngIf", ctx.isGroup);
    } }, directives: [NgIf, NzStringTemplateOutletDirective, NzIconDirective, NgTemplateOutlet], encapsulation: 2, changeDetection: 0 });
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzInputGroupComponent.prototype, "nzSearch", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzInputGroupComponent.prototype, "nzCompact", void 0);
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzInputGroupComponent, [{
        type: Component,
        args: [{
                selector: 'nz-input-group',
                exportAs: 'nzInputGroup',
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                templateUrl: './nz-input-group.component.html',
                host: {
                    '[class.ant-input-group-compact]': 'nzCompact',
                    '[class.ant-input-search-enter-button]': 'nzSearch',
                    '[class.ant-input-search]': 'nzSearch',
                    '[class.ant-input-search-sm]': 'isSmallSearch',
                    '[class.ant-input-affix-wrapper]': 'isAffixWrapper',
                    '[class.ant-input-group-wrapper]': 'isAddOn',
                    '[class.ant-input-group]': 'isGroup',
                    '[class.ant-input-group-lg]': 'isLargeGroup',
                    '[class.ant-input-group-wrapper-lg]': 'isLargeGroupWrapper',
                    '[class.ant-input-affix-wrapper-lg]': 'isLargeAffix',
                    '[class.ant-input-search-lg]': 'isLargeSearch',
                    '[class.ant-input-group-sm]': 'isSmallGroup',
                    '[class.ant-input-affix-wrapper-sm]': 'isSmallAffix',
                    '[class.ant-input-group-wrapper-sm]': 'isSmallGroupWrapper'
                }
            }]
    }], null, { listOfNzInputDirective: [{
            type: ContentChildren,
            args: [NzInputDirective]
        }], nzAddOnBeforeIcon: [{
            type: Input
        }], nzAddOnAfterIcon: [{
            type: Input
        }], nzPrefixIcon: [{
            type: Input
        }], nzSuffixIcon: [{
            type: Input
        }], nzAddOnBefore: [{
            type: Input
        }], nzAddOnAfter: [{
            type: Input
        }], nzPrefix: [{
            type: Input
        }], nzSuffix: [{
            type: Input
        }], nzSearch: [{
            type: Input
        }], nzCompact: [{
            type: Input
        }], nzSize: [{
            type: Input
        }] }); })();

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
const _c0$1 = ["rows", "1"];
function isAutoSizeType(value) {
    return typeof value !== 'string' && typeof value !== 'boolean' && (!!value.maxRows || !!value.minRows);
}
class NzAutosizeDirective {
    constructor(elementRef, ngZone, platform, nzDomEventService) {
        this.elementRef = elementRef;
        this.ngZone = ngZone;
        this.platform = platform;
        this.nzDomEventService = nzDomEventService;
        this.autosize = false;
        this.el = this.elementRef.nativeElement;
        this.destroy$ = new Subject();
        this.inputGap = 10;
    }
    set nzAutosize(value) {
        if (typeof value === 'string') {
            this.autosize = true;
        }
        else if (isAutoSizeType(value)) {
            this.autosize = value;
            this.minRows = value.minRows;
            this.maxRows = value.maxRows;
            this.setMaxHeight();
            this.setMinHeight();
        }
    }
    get nzAutosize() {
        return this.autosize;
    }
    resizeToFitContent(force = false) {
        this.cacheTextareaLineHeight();
        // If we haven't determined the line-height yet, we know we're still hidden and there's no point
        // in checking the height of the textarea.
        if (!this.cachedLineHeight) {
            return;
        }
        const textarea = this.el;
        const value = textarea.value;
        // Only resize if the value or minRows have changed since these calculations can be expensive.
        if (!force && this.minRows === this.previousMinRows && value === this.previousValue) {
            return;
        }
        const placeholderText = textarea.placeholder;
        // Reset the textarea height to auto in order to shrink back to its default size.
        // Also temporarily force overflow:hidden, so scroll bars do not interfere with calculations.
        // Long placeholders that are wider than the textarea width may lead to a bigger scrollHeight
        // value. To ensure that the scrollHeight is not bigger than the content, the placeholders
        // need to be removed temporarily.
        textarea.classList.add('cdk-textarea-autosize-measuring');
        textarea.placeholder = '';
        const height = Math.round((textarea.scrollHeight - this.inputGap) / this.cachedLineHeight) * this.cachedLineHeight + this.inputGap;
        // Use the scrollHeight to know how large the textarea *would* be if fit its entire value.
        textarea.style.height = `${height}px`;
        textarea.classList.remove('cdk-textarea-autosize-measuring');
        textarea.placeholder = placeholderText;
        // On Firefox resizing the textarea will prevent it from scrolling to the caret position.
        // We need to re-set the selection in order for it to scroll to the proper position.
        if (typeof requestAnimationFrame !== 'undefined') {
            this.ngZone.runOutsideAngular(() => requestAnimationFrame(() => {
                const { selectionStart, selectionEnd } = textarea;
                // IE will throw an "Unspecified error" if we try to set the selection range after the
                // element has been removed from the DOM. Assert that the directive hasn't been destroyed
                // between the time we requested the animation frame and when it was executed.
                // Also note that we have to assert that the textarea is focused before we set the
                // selection range. Setting the selection range on a non-focused textarea will cause
                // it to receive focus on IE and Edge.
                if (!this.destroy$.isStopped && document.activeElement === textarea) {
                    textarea.setSelectionRange(selectionStart, selectionEnd);
                }
            }));
        }
        this.previousValue = value;
        this.previousMinRows = this.minRows;
    }
    cacheTextareaLineHeight() {
        if (this.cachedLineHeight >= 0 || !this.el.parentNode) {
            return;
        }
        // Use a clone element because we have to override some styles.
        const textareaClone = this.el.cloneNode(false);
        textareaClone.rows = 1;
        // Use `position: absolute` so that this doesn't cause a browser layout and use
        // `visibility: hidden` so that nothing is rendered. Clear any other styles that
        // would affect the height.
        textareaClone.style.position = 'absolute';
        textareaClone.style.visibility = 'hidden';
        textareaClone.style.border = 'none';
        textareaClone.style.padding = '0';
        textareaClone.style.height = '';
        textareaClone.style.minHeight = '';
        textareaClone.style.maxHeight = '';
        // In Firefox it happens that textarea elements are always bigger than the specified amount
        // of rows. This is because Firefox tries to add extra space for the horizontal scrollbar.
        // As a workaround that removes the extra space for the scrollbar, we can just set overflow
        // to hidden. This ensures that there is no invalid calculation of the line height.
        // See Firefox bug report: https://bugzilla.mozilla.org/show_bug.cgi?id=33654
        textareaClone.style.overflow = 'hidden';
        this.el.parentNode.appendChild(textareaClone);
        this.cachedLineHeight = textareaClone.clientHeight - this.inputGap - 1;
        this.el.parentNode.removeChild(textareaClone);
        // Min and max heights have to be re-calculated if the cached line height changes
        this.setMinHeight();
        this.setMaxHeight();
    }
    setMinHeight() {
        const minHeight = this.minRows && this.cachedLineHeight ? `${this.minRows * this.cachedLineHeight + this.inputGap}px` : null;
        if (minHeight) {
            this.el.style.minHeight = minHeight;
        }
    }
    setMaxHeight() {
        const maxHeight = this.maxRows && this.cachedLineHeight ? `${this.maxRows * this.cachedLineHeight + this.inputGap}px` : null;
        if (maxHeight) {
            this.el.style.maxHeight = maxHeight;
        }
    }
    noopInputHandler() {
        // no-op handler that ensures we're running change detection on input events.
    }
    ngAfterViewInit() {
        if (this.nzAutosize && this.platform.isBrowser) {
            this.resizeToFitContent();
            this.nzDomEventService
                .registerResizeListener()
                .pipe(takeUntil(this.destroy$), finalize(() => this.nzDomEventService.unregisterResizeListener()))
                .subscribe(() => this.resizeToFitContent(true));
        }
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    ngDoCheck() {
        if (this.nzAutosize && this.platform.isBrowser) {
            this.resizeToFitContent();
        }
    }
}
/** @nocollapse */ NzAutosizeDirective.ɵfac = function NzAutosizeDirective_Factory(t) { return new (t || NzAutosizeDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(Platform), ɵɵdirectiveInject(NzDomEventService)); };
/** @nocollapse */ NzAutosizeDirective.ɵdir = ɵɵdefineDirective({ type: NzAutosizeDirective, selectors: [["textarea", "nzAutosize", ""]], hostBindings: function NzAutosizeDirective_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
        ɵɵlistener("input", function NzAutosizeDirective_input_HostBindingHandler($event) { return ctx.noopInputHandler(); });
        ɵɵelementHostAttrs(_c0$1);
    } }, inputs: { nzAutosize: "nzAutosize" }, exportAs: ["nzAutosize"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzAutosizeDirective, [{
        type: Directive,
        args: [{
                selector: 'textarea[nzAutosize]',
                exportAs: 'nzAutosize',
                host: {
                    // Textarea elements that have the directive applied should have a single row by default.
                    // Browsers normally show two rows by default and therefore this limits the minRows binding.
                    rows: '1',
                    '(input)': 'noopInputHandler()'
                }
            }]
    }], function () { return [{ type: ElementRef }, { type: NgZone }, { type: Platform }, { type: NzDomEventService }]; }, { nzAutosize: [{
            type: Input
        }] }); })();

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzInputModule {
}
/** @nocollapse */ NzInputModule.ɵmod = ɵɵdefineNgModule({ type: NzInputModule });
/** @nocollapse */ NzInputModule.ɵinj = ɵɵdefineInjector({ factory: function NzInputModule_Factory(t) { return new (t || NzInputModule)(); }, imports: [[CommonModule, NzIconModule, PlatformModule, NzAddOnModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(NzInputModule, { declarations: [NzInputDirective, NzInputGroupComponent, NzAutosizeDirective], imports: [CommonModule, NzIconModule, PlatformModule, NzAddOnModule], exports: [NzInputDirective, NzInputGroupComponent, NzAutosizeDirective] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzInputModule, [{
        type: NgModule,
        args: [{
                declarations: [NzInputDirective, NzInputGroupComponent, NzAutosizeDirective],
                exports: [NzInputDirective, NzInputGroupComponent, NzAutosizeDirective],
                imports: [CommonModule, NzIconModule, PlatformModule, NzAddOnModule]
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

export { NzAutosizeDirective, NzInputDirective, NzInputGroupComponent, NzInputModule, isAutoSizeType };
//# sourceMappingURL=ng-zorro-antd-input.js.map
