import { __decorate, __metadata } from "tslib";
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, Component, ContentChildren, Input, QueryList, ViewEncapsulation } from '@angular/core';
import { InputBoolean } from 'ng-zorro-antd/core';
import { NzInputDirective } from './nz-input.directive';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "ng-zorro-antd/core";
import * as i3 from "ng-zorro-antd/icon";
function NzInputGroupComponent_span_0_span_1_i_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 10);
} if (rf & 2) {
    var ctx_r516 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("nzType", ctx_r516.nzAddOnBeforeIcon);
} }
function NzInputGroupComponent_span_0_span_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r517 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r517.nzAddOnBefore);
} }
function NzInputGroupComponent_span_0_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 7);
    i0.ɵɵtemplate(1, NzInputGroupComponent_span_0_span_1_i_1_Template, 1, 1, "i", 8);
    i0.ɵɵtemplate(2, NzInputGroupComponent_span_0_span_1_ng_container_2_Template, 2, 1, "ng-container", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r512 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r512.nzAddOnBeforeIcon);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzStringTemplateOutlet", ctx_r512.nzAddOnBefore);
} }
function NzInputGroupComponent_span_0_ng_container_2_1_ng_template_0_Template(rf, ctx) { }
function NzInputGroupComponent_span_0_ng_container_2_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, NzInputGroupComponent_span_0_ng_container_2_1_ng_template_0_Template, 0, 0, "ng-template");
} }
function NzInputGroupComponent_span_0_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, NzInputGroupComponent_span_0_ng_container_2_1_Template, 1, 0, undefined, 11);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    i0.ɵɵnextContext(2);
    var _r510 = i0.ɵɵreference(6);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r510);
} }
function NzInputGroupComponent_span_0_span_3_1_ng_template_0_Template(rf, ctx) { }
function NzInputGroupComponent_span_0_span_3_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, NzInputGroupComponent_span_0_span_3_1_ng_template_0_Template, 0, 0, "ng-template");
} }
function NzInputGroupComponent_span_0_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 12);
    i0.ɵɵtemplate(1, NzInputGroupComponent_span_0_span_3_1_Template, 1, 0, undefined, 11);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r514 = i0.ɵɵnextContext(2);
    var _r507 = i0.ɵɵreference(3);
    i0.ɵɵclassProp("ant-input-affix-wrapper-sm", ctx_r514.isSmall)("ant-input-affix-wrapper-lg", ctx_r514.isLarge);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r507);
} }
function NzInputGroupComponent_span_0_span_4_i_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 10);
} if (rf & 2) {
    var ctx_r522 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("nzType", ctx_r522.nzAddOnAfterIcon);
} }
function NzInputGroupComponent_span_0_span_4_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r523 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r523.nzAddOnAfter);
} }
function NzInputGroupComponent_span_0_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 7);
    i0.ɵɵtemplate(1, NzInputGroupComponent_span_0_span_4_i_1_Template, 1, 1, "i", 8);
    i0.ɵɵtemplate(2, NzInputGroupComponent_span_0_span_4_ng_container_2_Template, 2, 1, "ng-container", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r515 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r515.nzAddOnAfterIcon);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzStringTemplateOutlet", ctx_r515.nzAddOnAfter);
} }
function NzInputGroupComponent_span_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 4);
    i0.ɵɵtemplate(1, NzInputGroupComponent_span_0_span_1_Template, 3, 2, "span", 5);
    i0.ɵɵtemplate(2, NzInputGroupComponent_span_0_ng_container_2_Template, 2, 1, "ng-container", 1);
    i0.ɵɵtemplate(3, NzInputGroupComponent_span_0_span_3_Template, 2, 3, "span", 6);
    i0.ɵɵtemplate(4, NzInputGroupComponent_span_0_span_4_Template, 3, 2, "span", 5);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r505 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r505.nzAddOnBefore || ctx_r505.nzAddOnBeforeIcon);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r505.isAffix);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r505.isAffix);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r505.nzAddOnAfter || ctx_r505.nzAddOnAfterIcon);
} }
function NzInputGroupComponent_ng_container_1_1_ng_template_0_Template(rf, ctx) { }
function NzInputGroupComponent_ng_container_1_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, NzInputGroupComponent_ng_container_1_1_ng_template_0_Template, 0, 0, "ng-template");
} }
function NzInputGroupComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, NzInputGroupComponent_ng_container_1_1_Template, 1, 0, undefined, 11);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    i0.ɵɵnextContext();
    var _r507 = i0.ɵɵreference(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r507);
} }
function NzInputGroupComponent_ng_template_2_span_0_i_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 17);
} if (rf & 2) {
    var ctx_r529 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("nzType", ctx_r529.nzPrefixIcon);
} }
function NzInputGroupComponent_ng_template_2_span_0_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r530 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r530.nzPrefix);
} }
function NzInputGroupComponent_ng_template_2_span_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 15);
    i0.ɵɵtemplate(1, NzInputGroupComponent_ng_template_2_span_0_i_1_Template, 1, 1, "i", 16);
    i0.ɵɵtemplate(2, NzInputGroupComponent_ng_template_2_span_0_ng_container_2_Template, 2, 1, "ng-container", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r526 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r526.nzPrefixIcon);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzStringTemplateOutlet", ctx_r526.nzPrefix);
} }
function NzInputGroupComponent_ng_template_2_1_ng_template_0_Template(rf, ctx) { }
function NzInputGroupComponent_ng_template_2_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, NzInputGroupComponent_ng_template_2_1_ng_template_0_Template, 0, 0, "ng-template");
} }
function NzInputGroupComponent_ng_template_2_span_2_i_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 10);
} if (rf & 2) {
    var ctx_r532 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("nzType", ctx_r532.nzSuffixIcon);
} }
function NzInputGroupComponent_ng_template_2_span_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r533 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r533.nzSuffix);
} }
function NzInputGroupComponent_ng_template_2_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 18);
    i0.ɵɵtemplate(1, NzInputGroupComponent_ng_template_2_span_2_i_1_Template, 1, 1, "i", 8);
    i0.ɵɵtemplate(2, NzInputGroupComponent_ng_template_2_span_2_ng_container_2_Template, 2, 1, "ng-container", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r528 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r528.nzSuffixIcon);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzStringTemplateOutlet", ctx_r528.nzSuffix);
} }
function NzInputGroupComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, NzInputGroupComponent_ng_template_2_span_0_Template, 3, 2, "span", 13);
    i0.ɵɵtemplate(1, NzInputGroupComponent_ng_template_2_1_Template, 1, 0, undefined, 11);
    i0.ɵɵtemplate(2, NzInputGroupComponent_ng_template_2_span_2_Template, 3, 2, "span", 14);
} if (rf & 2) {
    var ctx_r508 = i0.ɵɵnextContext();
    var _r510 = i0.ɵɵreference(6);
    i0.ɵɵproperty("ngIf", ctx_r508.nzPrefix || ctx_r508.nzPrefixIcon);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r510);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r508.nzSuffix || ctx_r508.nzSuffixIcon);
} }
function NzInputGroupComponent_ng_container_4_1_ng_template_0_Template(rf, ctx) { }
function NzInputGroupComponent_ng_container_4_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, NzInputGroupComponent_ng_container_4_1_ng_template_0_Template, 0, 0, "ng-template");
} }
function NzInputGroupComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, NzInputGroupComponent_ng_container_4_1_Template, 1, 0, undefined, 11);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    i0.ɵɵnextContext();
    var _r510 = i0.ɵɵreference(6);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r510);
} }
function NzInputGroupComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵprojection(0);
} }
var _c0 = ["*"];
var NzInputGroupComponent = /** @class */ (function () {
    function NzInputGroupComponent() {
        this._size = 'default';
        this.nzSearch = false;
        this.nzCompact = false;
    }
    Object.defineProperty(NzInputGroupComponent.prototype, "nzSize", {
        get: function () {
            return this._size;
        },
        set: function (value) {
            this._size = value;
            this.updateChildrenInputSize();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzInputGroupComponent.prototype, "isLarge", {
        get: function () {
            return this.nzSize === 'large';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzInputGroupComponent.prototype, "isSmall", {
        get: function () {
            return this.nzSize === 'small';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzInputGroupComponent.prototype, "isAffix", {
        get: function () {
            return !!(this.nzSuffix || this.nzPrefix || this.nzPrefixIcon || this.nzSuffixIcon);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzInputGroupComponent.prototype, "isAddOn", {
        get: function () {
            return !!(this.nzAddOnAfter || this.nzAddOnBefore || this.nzAddOnAfterIcon || this.nzAddOnBeforeIcon);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzInputGroupComponent.prototype, "isAffixWrapper", {
        get: function () {
            return this.isAffix && !this.isAddOn;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzInputGroupComponent.prototype, "isGroup", {
        get: function () {
            return !this.isAffix && !this.isAddOn;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzInputGroupComponent.prototype, "isLargeGroup", {
        get: function () {
            return this.isGroup && this.isLarge;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzInputGroupComponent.prototype, "isLargeGroupWrapper", {
        get: function () {
            return this.isAddOn && this.isLarge;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzInputGroupComponent.prototype, "isLargeAffix", {
        get: function () {
            return this.isAffixWrapper && this.isLarge;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzInputGroupComponent.prototype, "isLargeSearch", {
        get: function () {
            return this.nzSearch && this.isLarge;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzInputGroupComponent.prototype, "isSmallGroup", {
        get: function () {
            return this.isGroup && this.isSmall;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzInputGroupComponent.prototype, "isSmallAffix", {
        get: function () {
            return this.isAffixWrapper && this.isSmall;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzInputGroupComponent.prototype, "isSmallGroupWrapper", {
        get: function () {
            return this.isAddOn && this.isSmall;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzInputGroupComponent.prototype, "isSmallSearch", {
        get: function () {
            return this.nzSearch && this.isSmall;
        },
        enumerable: true,
        configurable: true
    });
    NzInputGroupComponent.prototype.updateChildrenInputSize = function () {
        var _this = this;
        if (this.listOfNzInputDirective) {
            this.listOfNzInputDirective.forEach(function (item) { return (item.nzSize = _this.nzSize); });
        }
    };
    NzInputGroupComponent.prototype.ngAfterContentInit = function () {
        this.updateChildrenInputSize();
    };
    /** @nocollapse */ NzInputGroupComponent.ɵfac = function NzInputGroupComponent_Factory(t) { return new (t || NzInputGroupComponent)(); };
    /** @nocollapse */ NzInputGroupComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NzInputGroupComponent, selectors: [["nz-input-group"]], contentQueries: function NzInputGroupComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            i0.ɵɵcontentQuery(dirIndex, NzInputDirective, false);
        } if (rf & 2) {
            var _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.listOfNzInputDirective = _t);
        } }, hostBindings: function NzInputGroupComponent_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
            i0.ɵɵallocHostVars(14);
        } if (rf & 2) {
            i0.ɵɵclassProp("ant-input-group-compact", ctx.nzCompact)("ant-input-search-enter-button", ctx.nzSearch)("ant-input-search", ctx.nzSearch)("ant-input-search-sm", ctx.isSmallSearch)("ant-input-affix-wrapper", ctx.isAffixWrapper)("ant-input-group-wrapper", ctx.isAddOn)("ant-input-group", ctx.isGroup)("ant-input-group-lg", ctx.isLargeGroup)("ant-input-group-wrapper-lg", ctx.isLargeGroupWrapper)("ant-input-affix-wrapper-lg", ctx.isLargeAffix)("ant-input-search-lg", ctx.isLargeSearch)("ant-input-group-sm", ctx.isSmallGroup)("ant-input-affix-wrapper-sm", ctx.isSmallAffix)("ant-input-group-wrapper-sm", ctx.isSmallGroupWrapper);
        } }, inputs: { nzAddOnBeforeIcon: "nzAddOnBeforeIcon", nzAddOnAfterIcon: "nzAddOnAfterIcon", nzPrefixIcon: "nzPrefixIcon", nzSuffixIcon: "nzSuffixIcon", nzAddOnBefore: "nzAddOnBefore", nzAddOnAfter: "nzAddOnAfter", nzPrefix: "nzPrefix", nzSuffix: "nzSuffix", nzSearch: "nzSearch", nzCompact: "nzCompact", nzSize: "nzSize" }, exportAs: ["nzInputGroup"], ngContentSelectors: _c0, decls: 7, vars: 3, consts: [["class", "ant-input-wrapper ant-input-group", 4, "ngIf"], [4, "ngIf"], ["affixTemplate", ""], ["contentTemplate", ""], [1, "ant-input-wrapper", "ant-input-group"], ["class", "ant-input-group-addon", 4, "ngIf"], ["class", "ant-input-affix-wrapper", 3, "ant-input-affix-wrapper-sm", "ant-input-affix-wrapper-lg", 4, "ngIf"], [1, "ant-input-group-addon"], ["nz-icon", "", 3, "nzType", 4, "ngIf"], [4, "nzStringTemplateOutlet"], ["nz-icon", "", 3, "nzType"], [4, "ngTemplateOutlet"], [1, "ant-input-affix-wrapper"], ["class", "ant-input-prefix", 4, "ngIf"], ["class", "ant-input-suffix", 4, "ngIf"], [1, "ant-input-prefix"], ["nz-icon", "", "style", "color: rgba(0, 0, 0, 0.25)", 3, "nzType", 4, "ngIf"], ["nz-icon", "", 2, "color", "rgba(0, 0, 0, 0.25)", 3, "nzType"], [1, "ant-input-suffix"]], template: function NzInputGroupComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵtemplate(0, NzInputGroupComponent_span_0_Template, 5, 4, "span", 0);
            i0.ɵɵtemplate(1, NzInputGroupComponent_ng_container_1_Template, 2, 1, "ng-container", 1);
            i0.ɵɵtemplate(2, NzInputGroupComponent_ng_template_2_Template, 3, 3, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵtemplate(4, NzInputGroupComponent_ng_container_4_Template, 2, 1, "ng-container", 1);
            i0.ɵɵtemplate(5, NzInputGroupComponent_ng_template_5_Template, 1, 0, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.isAddOn);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.isAffix && !ctx.isAddOn);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngIf", ctx.isGroup);
        } }, directives: [i1.NgIf, i2.NzStringTemplateOutletDirective, i3.NzIconDirective, i1.NgTemplateOutlet], encapsulation: 2, changeDetection: 0 });
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzInputGroupComponent.prototype, "nzSearch", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzInputGroupComponent.prototype, "nzCompact", void 0);
    return NzInputGroupComponent;
}());
export { NzInputGroupComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NzInputGroupComponent, [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotaW5wdXQtZ3JvdXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9pbnB1dC8iLCJzb3VyY2VzIjpbIm56LWlucHV0LWdyb3VwLmNvbXBvbmVudC50cyIsIm56LWlucHV0LWdyb3VwLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBRUwsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxlQUFlLEVBQ2YsS0FBSyxFQUNMLFNBQVMsRUFFVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFlBQVksRUFBOEIsTUFBTSxvQkFBb0IsQ0FBQztBQUM5RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7Ozs7O0lDakJwRCx3QkFBc0U7OztJQUEzRCxtREFBNEI7OztJQUN2Qyw2QkFBc0Q7SUFBQSxZQUFtQjtJQUFBLDBCQUFlOzs7SUFBbEMsZUFBbUI7SUFBbkIsNENBQW1COzs7SUFGM0UsK0JBQ0U7SUFBQSxnRkFBa0U7SUFDbEUsc0dBQXNEO0lBQ3hELGlCQUFPOzs7SUFGbUMsZUFBeUI7SUFBekIsaURBQXlCO0lBQ25ELGVBQXVDO0lBQXZDLCtEQUF1Qzs7OztJQUdyRCwyR0FBaUQ7OztJQURuRCw2QkFDRTtJQUFBLDZGQUFpRDtJQUNuRCwwQkFBZTs7OztJQURBLGVBQW1DO0lBQW5DLHdDQUFtQzs7OztJQVFoRCxtR0FBK0M7OztJQU5qRCxnQ0FNRTtJQUFBLHFGQUErQztJQUNqRCxpQkFBTzs7OztJQUxMLDhEQUE0QyxnREFBQTtJQUkvQixlQUFpQztJQUFqQyx3Q0FBaUM7OztJQUc5Qyx3QkFBb0U7OztJQUF6RCxrREFBMkI7OztJQUN0Qyw2QkFBcUQ7SUFBQSxZQUFrQjtJQUFBLDBCQUFlOzs7SUFBakMsZUFBa0I7SUFBbEIsMkNBQWtCOzs7SUFGekUsK0JBQ0U7SUFBQSxnRkFBZ0U7SUFDaEUsc0dB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QUFFLGNBQWM7b0JBQzVDLG9DQUFvQyxFQUFFLGNBQWM7b0JBQ3BELG9DQUFvQyxFQUFFLHFCQUFxQjtpQkFDNUQ7YUFDRjs7a0JBRUUsZUFBZTttQkFBQyxnQkFBZ0I7O2tCQUVoQyxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFFTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQge1xyXG4gIEFmdGVyQ29udGVudEluaXQsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ29tcG9uZW50LFxyXG4gIENvbnRlbnRDaGlsZHJlbixcclxuICBJbnB1dCxcclxuICBRdWVyeUxpc3QsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSW5wdXRCb29sZWFuLCBOZ0NsYXNzVHlwZSwgTnpTaXplTERTVHlwZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcbmltcG9ydCB7IE56SW5wdXREaXJlY3RpdmUgfSBmcm9tICcuL256LWlucHV0LmRpcmVjdGl2ZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ256LWlucHV0LWdyb3VwJyxcclxuICBleHBvcnRBczogJ256SW5wdXRHcm91cCcsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICB0ZW1wbGF0ZVVybDogJy4vbnotaW5wdXQtZ3JvdXAuY29tcG9uZW50Lmh0bWwnLFxyXG4gIGhvc3Q6IHtcclxuICAgICdbY2xhc3MuYW50LWlucHV0LWdyb3VwLWNvbXBhY3RdJzogJ256Q29tcGFjdCcsXHJcbiAgICAnW2NsYXNzLmFudC1pbnB1dC1zZWFyY2gtZW50ZXItYnV0dG9uXSc6ICduelNlYXJjaCcsXHJcbiAgICAnW2NsYXNzLmFudC1pbnB1dC1zZWFyY2hdJzogJ256U2VhcmNoJyxcclxuICAgICdbY2xhc3MuYW50LWlucHV0LXNlYXJjaC1zbV0nOiAnaXNTbWFsbFNlYXJjaCcsXHJcbiAgICAnW2NsYXNzLmFudC1pbnB1dC1hZmZpeC13cmFwcGVyXSc6ICdpc0FmZml4V3JhcHBlcicsXHJcbiAgICAnW2NsYXNzLmFudC1pbnB1dC1ncm91cC13cmFwcGVyXSc6ICdpc0FkZE9uJyxcclxuICAgICdbY2xhc3MuYW50LWlucHV0LWdyb3VwXSc6ICdpc0dyb3VwJyxcclxuICAgICdbY2xhc3MuYW50LWlucHV0LWdyb3VwLWxnXSc6ICdpc0xhcmdlR3JvdXAnLFxyXG4gICAgJ1tjbGFzcy5hbnQtaW5wdXQtZ3JvdXAtd3JhcHBlci1sZ10nOiAnaXNMYXJnZUdyb3VwV3JhcHBlcicsXHJcbiAgICAnW2NsYXNzLmFudC1pbnB1dC1hZmZpeC13cmFwcGVyLWxnXSc6ICdpc0xhcmdlQWZmaXgnLFxyXG4gICAgJ1tjbGFzcy5hbnQtaW5wdXQtc2VhcmNoLWxnXSc6ICdpc0xhcmdlU2VhcmNoJyxcclxuICAgICdbY2xhc3MuYW50LWlucHV0LWdyb3VwLXNtXSc6ICdpc1NtYWxsR3JvdXAnLFxyXG4gICAgJ1tjbGFzcy5hbnQtaW5wdXQtYWZmaXgtd3JhcHBlci1zbV0nOiAnaXNTbWFsbEFmZml4JyxcclxuICAgICdbY2xhc3MuYW50LWlucHV0LWdyb3VwLXdyYXBwZXItc21dJzogJ2lzU21hbGxHcm91cFdyYXBwZXInXHJcbiAgfVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpJbnB1dEdyb3VwQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCB7XHJcbiAgQENvbnRlbnRDaGlsZHJlbihOeklucHV0RGlyZWN0aXZlKSBsaXN0T2ZOeklucHV0RGlyZWN0aXZlOiBRdWVyeUxpc3Q8TnpJbnB1dERpcmVjdGl2ZT47XHJcbiAgcHJpdmF0ZSBfc2l6ZTogTnpTaXplTERTVHlwZSA9ICdkZWZhdWx0JztcclxuICBASW5wdXQoKSBuekFkZE9uQmVmb3JlSWNvbjogTmdDbGFzc1R5cGU7XHJcbiAgQElucHV0KCkgbnpBZGRPbkFmdGVySWNvbjogTmdDbGFzc1R5cGU7XHJcbiAgQElucHV0KCkgbnpQcmVmaXhJY29uOiBOZ0NsYXNzVHlwZTtcclxuICBASW5wdXQoKSBuelN1ZmZpeEljb246IE5nQ2xhc3NUeXBlO1xyXG4gIEBJbnB1dCgpIG56QWRkT25CZWZvcmU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIEBJbnB1dCgpIG56QWRkT25BZnRlcjogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgQElucHV0KCkgbnpQcmVmaXg6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIEBJbnB1dCgpIG56U3VmZml4OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpTZWFyY2ggPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpDb21wYWN0ID0gZmFsc2U7XHJcblxyXG4gIEBJbnB1dCgpIHNldCBuelNpemUodmFsdWU6IE56U2l6ZUxEU1R5cGUpIHtcclxuICAgIHRoaXMuX3NpemUgPSB2YWx1ZTtcclxuICAgIHRoaXMudXBkYXRlQ2hpbGRyZW5JbnB1dFNpemUoKTtcclxuICB9XHJcblxyXG4gIGdldCBuelNpemUoKTogTnpTaXplTERTVHlwZSB7XHJcbiAgICByZXR1cm4gdGhpcy5fc2l6ZTtcclxuICB9XHJcblxyXG4gIGdldCBpc0xhcmdlKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMubnpTaXplID09PSAnbGFyZ2UnO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGlzU21hbGwoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5uelNpemUgPT09ICdzbWFsbCc7XHJcbiAgfVxyXG5cclxuICBnZXQgaXNBZmZpeCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiAhISh0aGlzLm56U3VmZml4IHx8IHRoaXMubnpQcmVmaXggfHwgdGhpcy5uelByZWZpeEljb24gfHwgdGhpcy5uelN1ZmZpeEljb24pO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGlzQWRkT24oKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gISEodGhpcy5uekFkZE9uQWZ0ZXIgfHwgdGhpcy5uekFkZE9uQmVmb3JlIHx8IHRoaXMubnpBZGRPbkFmdGVySWNvbiB8fCB0aGlzLm56QWRkT25CZWZvcmVJY29uKTtcclxuICB9XHJcblxyXG4gIGdldCBpc0FmZml4V3JhcHBlcigpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLmlzQWZmaXggJiYgIXRoaXMuaXNBZGRPbjtcclxuICB9XHJcblxyXG4gIGdldCBpc0dyb3VwKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuICF0aGlzLmlzQWZmaXggJiYgIXRoaXMuaXNBZGRPbjtcclxuICB9XHJcblxyXG4gIGdldCBpc0xhcmdlR3JvdXAoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5pc0dyb3VwICYmIHRoaXMuaXNMYXJnZTtcclxuICB9XHJcblxyXG4gIGdldCBpc0xhcmdlR3JvdXBXcmFwcGVyKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaXNBZGRPbiAmJiB0aGlzLmlzTGFyZ2U7XHJcbiAgfVxyXG5cclxuICBnZXQgaXNMYXJnZUFmZml4KCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaXNBZmZpeFdyYXBwZXIgJiYgdGhpcy5pc0xhcmdlO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGlzTGFyZ2VTZWFyY2goKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5uelNlYXJjaCAmJiB0aGlzLmlzTGFyZ2U7XHJcbiAgfVxyXG5cclxuICBnZXQgaXNTbWFsbEdyb3VwKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaXNHcm91cCAmJiB0aGlzLmlzU21hbGw7XHJcbiAgfVxyXG5cclxuICBnZXQgaXNTbWFsbEFmZml4KCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaXNBZmZpeFdyYXBwZXIgJiYgdGhpcy5pc1NtYWxsO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGlzU21hbGxHcm91cFdyYXBwZXIoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5pc0FkZE9uICYmIHRoaXMuaXNTbWFsbDtcclxuICB9XHJcblxyXG4gIGdldCBpc1NtYWxsU2VhcmNoKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMubnpTZWFyY2ggJiYgdGhpcy5pc1NtYWxsO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlQ2hpbGRyZW5JbnB1dFNpemUoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5saXN0T2ZOeklucHV0RGlyZWN0aXZlKSB7XHJcbiAgICAgIHRoaXMubGlzdE9mTnpJbnB1dERpcmVjdGl2ZS5mb3JFYWNoKGl0ZW0gPT4gKGl0ZW0ubnpTaXplID0gdGhpcy5uelNpemUpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMudXBkYXRlQ2hpbGRyZW5JbnB1dFNpemUoKTtcclxuICB9XHJcbn1cclxuIiwiPHNwYW4gY2xhc3M9XCJhbnQtaW5wdXQtd3JhcHBlciBhbnQtaW5wdXQtZ3JvdXBcIiAqbmdJZj1cImlzQWRkT25cIj5cclxuICA8c3BhbiBjbGFzcz1cImFudC1pbnB1dC1ncm91cC1hZGRvblwiICpuZ0lmPVwibnpBZGRPbkJlZm9yZSB8fCBuekFkZE9uQmVmb3JlSWNvblwiPlxyXG4gICAgPGkgbnotaWNvbiBbbnpUeXBlXT1cIm56QWRkT25CZWZvcmVJY29uXCIgKm5nSWY9XCJuekFkZE9uQmVmb3JlSWNvblwiPjwvaT5cclxuICAgIDxuZy1jb250YWluZXIgKm56U3RyaW5nVGVtcGxhdGVPdXRsZXQ9XCJuekFkZE9uQmVmb3JlXCI+e3sgbnpBZGRPbkJlZm9yZSB9fTwvbmctY29udGFpbmVyPlxyXG4gIDwvc3Bhbj5cclxuICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWlzQWZmaXhcIj5cclxuICAgIDxuZy10ZW1wbGF0ZSAqbmdUZW1wbGF0ZU91dGxldD1cImNvbnRlbnRUZW1wbGF0ZVwiPjwvbmctdGVtcGxhdGU+XHJcbiAgPC9uZy1jb250YWluZXI+XHJcbiAgPHNwYW5cclxuICAgIGNsYXNzPVwiYW50LWlucHV0LWFmZml4LXdyYXBwZXJcIlxyXG4gICAgW2NsYXNzLmFudC1pbnB1dC1hZmZpeC13cmFwcGVyLXNtXT1cImlzU21hbGxcIlxyXG4gICAgW2NsYXNzLmFudC1pbnB1dC1hZmZpeC13cmFwcGVyLWxnXT1cImlzTGFyZ2VcIlxyXG4gICAgKm5nSWY9XCJpc0FmZml4XCJcclxuICA+XHJcbiAgICA8bmctdGVtcGxhdGUgKm5nVGVtcGxhdGVPdXRsZXQ9XCJhZmZpeFRlbXBsYXRlXCI+PC9uZy10ZW1wbGF0ZT5cclxuICA8L3NwYW4+XHJcbiAgPHNwYW4gY2xhc3M9XCJhbnQtaW5wdXQtZ3JvdXAtYWRkb25cIiAqbmdJZj1cIm56QWRkT25BZnRlciB8fCBuekFkZE9uQWZ0ZXJJY29uXCI+XHJcbiAgICA8aSBuei1pY29uIFtuelR5cGVdPVwibnpBZGRPbkFmdGVySWNvblwiICpuZ0lmPVwibnpBZGRPbkFmdGVySWNvblwiPjwvaT5cclxuICAgIDxuZy1jb250YWluZXIgKm56U3RyaW5nVGVtcGxhdGVPdXRsZXQ9XCJuekFkZE9uQWZ0ZXJcIj57eyBuekFkZE9uQWZ0ZXIgfX08L25nLWNvbnRhaW5lcj5cclxuICA8L3NwYW4+XHJcbjwvc3Bhbj5cclxuPG5nLWNvbnRhaW5lciAqbmdJZj1cImlzQWZmaXggJiYgIWlzQWRkT25cIj5cclxuICA8bmctdGVtcGxhdGUgKm5nVGVtcGxhdGVPdXRsZXQ9XCJhZmZpeFRlbXBsYXRlXCI+PC9uZy10ZW1wbGF0ZT5cclxuPC9uZy1jb250YWluZXI+XHJcbjxuZy10ZW1wbGF0ZSAjYWZmaXhUZW1wbGF0ZT5cclxuICA8c3BhbiBjbGFzcz1cImFudC1pbnB1dC1wcmVmaXhcIiAqbmdJZj1cIm56UHJlZml4IHx8IG56UHJlZml4SWNvblwiPlxyXG4gICAgPCEtLSBUT0RPOiBzaG91bGQgaGF2ZSBhIGNsYXNzIHRvIHNldCBpdHMgY29sb3IsIGNjOiBhbnRkLS0+XHJcbiAgICA8aSBuei1pY29uIFtuelR5cGVdPVwibnpQcmVmaXhJY29uXCIgKm5nSWY9XCJuelByZWZpeEljb25cIiBzdHlsZT1cImNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMjUpXCI+PC9pPlxyXG4gICAgPG5nLWNvbnRhaW5lciAqbnpTdHJpbmdUZW1wbGF0ZU91dGxldD1cIm56UHJlZml4XCI+e3sgbnpQcmVmaXggfX08L25nLWNvbnRhaW5lcj5cclxuICA8L3NwYW4+XHJcbiAgPG5nLXRlbXBsYXRlICpuZ1RlbXBsYXRlT3V0bGV0PVwiY29udGVudFRlbXBsYXRlXCI+PC9uZy10ZW1wbGF0ZT5cclxuICA8c3BhbiBjbGFzcz1cImFudC1pbnB1dC1zdWZmaXhcIiAqbmdJZj1cIm56U3VmZml4IHx8IG56U3VmZml4SWNvblwiPlxyXG4gICAgPGkgbnotaWNvbiBbbnpUeXBlXT1cIm56U3VmZml4SWNvblwiICpuZ0lmPVwibnpTdWZmaXhJY29uXCI+PC9pPlxyXG4gICAgPG5nLWNvbnRhaW5lciAqbnpTdHJpbmdUZW1wbGF0ZU91dGxldD1cIm56U3VmZml4XCI+e3sgbnpTdWZmaXggfX08L25nLWNvbnRhaW5lcj5cclxuICA8L3NwYW4+XHJcbjwvbmctdGVtcGxhdGU+XHJcbjxuZy1jb250YWluZXIgKm5nSWY9XCJpc0dyb3VwXCI+XHJcbiAgPG5nLXRlbXBsYXRlICpuZ1RlbXBsYXRlT3V0bGV0PVwiY29udGVudFRlbXBsYXRlXCI+PC9uZy10ZW1wbGF0ZT5cclxuPC9uZy1jb250YWluZXI+XHJcbjxuZy10ZW1wbGF0ZSAjY29udGVudFRlbXBsYXRlPlxyXG4gIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuPC9uZy10ZW1wbGF0ZT5cclxuIl19