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
    const ctx_r485 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("nzType", ctx_r485.nzAddOnBeforeIcon);
} }
function NzInputGroupComponent_span_0_span_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r486 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r486.nzAddOnBefore);
} }
function NzInputGroupComponent_span_0_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 7);
    i0.ɵɵtemplate(1, NzInputGroupComponent_span_0_span_1_i_1_Template, 1, 1, "i", 8);
    i0.ɵɵtemplate(2, NzInputGroupComponent_span_0_span_1_ng_container_2_Template, 2, 1, "ng-container", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r481 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r481.nzAddOnBeforeIcon);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzStringTemplateOutlet", ctx_r481.nzAddOnBefore);
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
    const _r479 = i0.ɵɵreference(6);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r479);
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
    const ctx_r483 = i0.ɵɵnextContext(2);
    const _r476 = i0.ɵɵreference(3);
    i0.ɵɵclassProp("ant-input-affix-wrapper-sm", ctx_r483.isSmall)("ant-input-affix-wrapper-lg", ctx_r483.isLarge);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r476);
} }
function NzInputGroupComponent_span_0_span_4_i_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 10);
} if (rf & 2) {
    const ctx_r491 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("nzType", ctx_r491.nzAddOnAfterIcon);
} }
function NzInputGroupComponent_span_0_span_4_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r492 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r492.nzAddOnAfter);
} }
function NzInputGroupComponent_span_0_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 7);
    i0.ɵɵtemplate(1, NzInputGroupComponent_span_0_span_4_i_1_Template, 1, 1, "i", 8);
    i0.ɵɵtemplate(2, NzInputGroupComponent_span_0_span_4_ng_container_2_Template, 2, 1, "ng-container", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r484 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r484.nzAddOnAfterIcon);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzStringTemplateOutlet", ctx_r484.nzAddOnAfter);
} }
function NzInputGroupComponent_span_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 4);
    i0.ɵɵtemplate(1, NzInputGroupComponent_span_0_span_1_Template, 3, 2, "span", 5);
    i0.ɵɵtemplate(2, NzInputGroupComponent_span_0_ng_container_2_Template, 2, 1, "ng-container", 1);
    i0.ɵɵtemplate(3, NzInputGroupComponent_span_0_span_3_Template, 2, 3, "span", 6);
    i0.ɵɵtemplate(4, NzInputGroupComponent_span_0_span_4_Template, 3, 2, "span", 5);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r474 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r474.nzAddOnBefore || ctx_r474.nzAddOnBeforeIcon);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r474.isAffix);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r474.isAffix);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r474.nzAddOnAfter || ctx_r474.nzAddOnAfterIcon);
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
    const _r476 = i0.ɵɵreference(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r476);
} }
function NzInputGroupComponent_ng_template_2_span_0_i_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 17);
} if (rf & 2) {
    const ctx_r498 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("nzType", ctx_r498.nzPrefixIcon);
} }
function NzInputGroupComponent_ng_template_2_span_0_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r499 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r499.nzPrefix);
} }
function NzInputGroupComponent_ng_template_2_span_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 15);
    i0.ɵɵtemplate(1, NzInputGroupComponent_ng_template_2_span_0_i_1_Template, 1, 1, "i", 16);
    i0.ɵɵtemplate(2, NzInputGroupComponent_ng_template_2_span_0_ng_container_2_Template, 2, 1, "ng-container", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r495 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r495.nzPrefixIcon);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzStringTemplateOutlet", ctx_r495.nzPrefix);
} }
function NzInputGroupComponent_ng_template_2_1_ng_template_0_Template(rf, ctx) { }
function NzInputGroupComponent_ng_template_2_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, NzInputGroupComponent_ng_template_2_1_ng_template_0_Template, 0, 0, "ng-template");
} }
function NzInputGroupComponent_ng_template_2_span_2_i_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 10);
} if (rf & 2) {
    const ctx_r501 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("nzType", ctx_r501.nzSuffixIcon);
} }
function NzInputGroupComponent_ng_template_2_span_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r502 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r502.nzSuffix);
} }
function NzInputGroupComponent_ng_template_2_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 18);
    i0.ɵɵtemplate(1, NzInputGroupComponent_ng_template_2_span_2_i_1_Template, 1, 1, "i", 8);
    i0.ɵɵtemplate(2, NzInputGroupComponent_ng_template_2_span_2_ng_container_2_Template, 2, 1, "ng-container", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r497 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r497.nzSuffixIcon);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzStringTemplateOutlet", ctx_r497.nzSuffix);
} }
function NzInputGroupComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, NzInputGroupComponent_ng_template_2_span_0_Template, 3, 2, "span", 13);
    i0.ɵɵtemplate(1, NzInputGroupComponent_ng_template_2_1_Template, 1, 0, undefined, 11);
    i0.ɵɵtemplate(2, NzInputGroupComponent_ng_template_2_span_2_Template, 3, 2, "span", 14);
} if (rf & 2) {
    const ctx_r477 = i0.ɵɵnextContext();
    const _r479 = i0.ɵɵreference(6);
    i0.ɵɵproperty("ngIf", ctx_r477.nzPrefix || ctx_r477.nzPrefixIcon);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r479);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r477.nzSuffix || ctx_r477.nzSuffixIcon);
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
    const _r479 = i0.ɵɵreference(6);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r479);
} }
function NzInputGroupComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵprojection(0);
} }
const _c0 = ["*"];
export class NzInputGroupComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotaW5wdXQtZ3JvdXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9pbnB1dC8iLCJzb3VyY2VzIjpbIm56LWlucHV0LWdyb3VwLmNvbXBvbmVudC50cyIsIm56LWlucHV0LWdyb3VwLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBRUwsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxlQUFlLEVBQ2YsS0FBSyxFQUNMLFNBQVMsRUFFVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFlBQVksRUFBOEIsTUFBTSxvQkFBb0IsQ0FBQztBQUM5RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7Ozs7O0lDakJwRCx3QkFBc0U7OztJQUEzRCxtREFBNEI7OztJQUN2Qyw2QkFBc0Q7SUFBQSxZQUFtQjtJQUFBLDBCQUFlOzs7SUFBbEMsZUFBbUI7SUFBbkIsNENBQW1COzs7SUFGM0UsK0JBQ0U7SUFBQSxnRkFBa0U7SUFDbEUsc0dBQXNEO0lBQ3hELGlCQUFPOzs7SUFGbUMsZUFBeUI7SUFBekIsaURBQXlCO0lBQ25ELGVBQXVDO0lBQXZDLCtEQUF1Qzs7OztJQUdyRCwyR0FBaUQ7OztJQURuRCw2QkFDRTtJQUFBLDZGQUFpRDtJQUNuRCwwQkFBZTs7OztJQURBLGVBQW1DO0lBQW5DLHdDQUFtQzs7OztJQVFoRCxtR0FBK0M7OztJQU5qRCxnQ0FNRTtJQUFBLHFGQUErQztJQUNqRCxpQkFBTzs7OztJQUxMLDhEQUE0QyxnREFBQTtJQUkvQixlQUFpQztJQUFqQyx3Q0FBaUM7OztJQUc5Qyx3QkFBb0U7OztJQUF6RCxrREFBMkI7OztJQUN0Qyw2QkFBcUQ7SUFBQSxZQUFrQjtJQUFBLDBCQUFlOzs7SUFBakMsZUFBa0I7SUFBbEIsMkNBQWtCOzs7SUFGekUsK0JBQ0U7SUFBQSxnRkFBZ0U7SUFDaEUsc0dB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QGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7XHJcbiAgQWZ0ZXJDb250ZW50SW5pdCxcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDb21wb25lbnQsXHJcbiAgQ29udGVudENoaWxkcmVuLFxyXG4gIElucHV0LFxyXG4gIFF1ZXJ5TGlzdCxcclxuICBUZW1wbGF0ZVJlZixcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4sIE5nQ2xhc3NUeXBlLCBOelNpemVMRFNUeXBlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuaW1wb3J0IHsgTnpJbnB1dERpcmVjdGl2ZSB9IGZyb20gJy4vbnotaW5wdXQuZGlyZWN0aXZlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbnotaW5wdXQtZ3JvdXAnLFxyXG4gIGV4cG9ydEFzOiAnbnpJbnB1dEdyb3VwJyxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9uei1pbnB1dC1ncm91cC5jb21wb25lbnQuaHRtbCcsXHJcbiAgaG9zdDoge1xyXG4gICAgJ1tjbGFzcy5hbnQtaW5wdXQtZ3JvdXAtY29tcGFjdF0nOiAnbnpDb21wYWN0JyxcclxuICAgICdbY2xhc3MuYW50LWlucHV0LXNlYXJjaC1lbnRlci1idXR0b25dJzogJ256U2VhcmNoJyxcclxuICAgICdbY2xhc3MuYW50LWlucHV0LXNlYXJjaF0nOiAnbnpTZWFyY2gnLFxyXG4gICAgJ1tjbGFzcy5hbnQtaW5wdXQtc2VhcmNoLXNtXSc6ICdpc1NtYWxsU2VhcmNoJyxcclxuICAgICdbY2xhc3MuYW50LWlucHV0LWFmZml4LXdyYXBwZXJdJzogJ2lzQWZmaXhXcmFwcGVyJyxcclxuICAgICdbY2xhc3MuYW50LWlucHV0LWdyb3VwLXdyYXBwZXJdJzogJ2lzQWRkT24nLFxyXG4gICAgJ1tjbGFzcy5hbnQtaW5wdXQtZ3JvdXBdJzogJ2lzR3JvdXAnLFxyXG4gICAgJ1tjbGFzcy5hbnQtaW5wdXQtZ3JvdXAtbGddJzogJ2lzTGFyZ2VHcm91cCcsXHJcbiAgICAnW2NsYXNzLmFudC1pbnB1dC1ncm91cC13cmFwcGVyLWxnXSc6ICdpc0xhcmdlR3JvdXBXcmFwcGVyJyxcclxuICAgICdbY2xhc3MuYW50LWlucHV0LWFmZml4LXdyYXBwZXItbGddJzogJ2lzTGFyZ2VBZmZpeCcsXHJcbiAgICAnW2NsYXNzLmFudC1pbnB1dC1zZWFyY2gtbGddJzogJ2lzTGFyZ2VTZWFyY2gnLFxyXG4gICAgJ1tjbGFzcy5hbnQtaW5wdXQtZ3JvdXAtc21dJzogJ2lzU21hbGxHcm91cCcsXHJcbiAgICAnW2NsYXNzLmFudC1pbnB1dC1hZmZpeC13cmFwcGVyLXNtXSc6ICdpc1NtYWxsQWZmaXgnLFxyXG4gICAgJ1tjbGFzcy5hbnQtaW5wdXQtZ3JvdXAtd3JhcHBlci1zbV0nOiAnaXNTbWFsbEdyb3VwV3JhcHBlcidcclxuICB9XHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOeklucHV0R3JvdXBDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0IHtcclxuICBAQ29udGVudENoaWxkcmVuKE56SW5wdXREaXJlY3RpdmUpIGxpc3RPZk56SW5wdXREaXJlY3RpdmU6IFF1ZXJ5TGlzdDxOeklucHV0RGlyZWN0aXZlPjtcclxuICBwcml2YXRlIF9zaXplOiBOelNpemVMRFNUeXBlID0gJ2RlZmF1bHQnO1xyXG4gIEBJbnB1dCgpIG56QWRkT25CZWZvcmVJY29uOiBOZ0NsYXNzVHlwZTtcclxuICBASW5wdXQoKSBuekFkZE9uQWZ0ZXJJY29uOiBOZ0NsYXNzVHlwZTtcclxuICBASW5wdXQoKSBuelByZWZpeEljb246IE5nQ2xhc3NUeXBlO1xyXG4gIEBJbnB1dCgpIG56U3VmZml4SWNvbjogTmdDbGFzc1R5cGU7XHJcbiAgQElucHV0KCkgbnpBZGRPbkJlZm9yZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgQElucHV0KCkgbnpBZGRPbkFmdGVyOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBASW5wdXQoKSBuelByZWZpeDogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgQElucHV0KCkgbnpTdWZmaXg6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuelNlYXJjaCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekNvbXBhY3QgPSBmYWxzZTtcclxuXHJcbiAgQElucHV0KCkgc2V0IG56U2l6ZSh2YWx1ZTogTnpTaXplTERTVHlwZSkge1xyXG4gICAgdGhpcy5fc2l6ZSA9IHZhbHVlO1xyXG4gICAgdGhpcy51cGRhdGVDaGlsZHJlbklucHV0U2l6ZSgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IG56U2l6ZSgpOiBOelNpemVMRFNUeXBlIHtcclxuICAgIHJldHVybiB0aGlzLl9zaXplO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGlzTGFyZ2UoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5uelNpemUgPT09ICdsYXJnZSc7XHJcbiAgfVxyXG5cclxuICBnZXQgaXNTbWFsbCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLm56U2l6ZSA9PT0gJ3NtYWxsJztcclxuICB9XHJcblxyXG4gIGdldCBpc0FmZml4KCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuICEhKHRoaXMubnpTdWZmaXggfHwgdGhpcy5uelByZWZpeCB8fCB0aGlzLm56UHJlZml4SWNvbiB8fCB0aGlzLm56U3VmZml4SWNvbik7XHJcbiAgfVxyXG5cclxuICBnZXQgaXNBZGRPbigpOiBib29sZWFuIHtcclxuICAgIHJldHVybiAhISh0aGlzLm56QWRkT25BZnRlciB8fCB0aGlzLm56QWRkT25CZWZvcmUgfHwgdGhpcy5uekFkZE9uQWZ0ZXJJY29uIHx8IHRoaXMubnpBZGRPbkJlZm9yZUljb24pO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGlzQWZmaXhXcmFwcGVyKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaXNBZmZpeCAmJiAhdGhpcy5pc0FkZE9uO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGlzR3JvdXAoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gIXRoaXMuaXNBZmZpeCAmJiAhdGhpcy5pc0FkZE9uO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGlzTGFyZ2VHcm91cCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLmlzR3JvdXAgJiYgdGhpcy5pc0xhcmdlO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGlzTGFyZ2VHcm91cFdyYXBwZXIoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5pc0FkZE9uICYmIHRoaXMuaXNMYXJnZTtcclxuICB9XHJcblxyXG4gIGdldCBpc0xhcmdlQWZmaXgoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5pc0FmZml4V3JhcHBlciAmJiB0aGlzLmlzTGFyZ2U7XHJcbiAgfVxyXG5cclxuICBnZXQgaXNMYXJnZVNlYXJjaCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLm56U2VhcmNoICYmIHRoaXMuaXNMYXJnZTtcclxuICB9XHJcblxyXG4gIGdldCBpc1NtYWxsR3JvdXAoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5pc0dyb3VwICYmIHRoaXMuaXNTbWFsbDtcclxuICB9XHJcblxyXG4gIGdldCBpc1NtYWxsQWZmaXgoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5pc0FmZml4V3JhcHBlciAmJiB0aGlzLmlzU21hbGw7XHJcbiAgfVxyXG5cclxuICBnZXQgaXNTbWFsbEdyb3VwV3JhcHBlcigpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLmlzQWRkT24gJiYgdGhpcy5pc1NtYWxsO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGlzU21hbGxTZWFyY2goKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5uelNlYXJjaCAmJiB0aGlzLmlzU21hbGw7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVDaGlsZHJlbklucHV0U2l6ZSgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmxpc3RPZk56SW5wdXREaXJlY3RpdmUpIHtcclxuICAgICAgdGhpcy5saXN0T2ZOeklucHV0RGlyZWN0aXZlLmZvckVhY2goaXRlbSA9PiAoaXRlbS5uelNpemUgPSB0aGlzLm56U2l6ZSkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy51cGRhdGVDaGlsZHJlbklucHV0U2l6ZSgpO1xyXG4gIH1cclxufVxyXG4iLCI8c3BhbiBjbGFzcz1cImFudC1pbnB1dC13cmFwcGVyIGFudC1pbnB1dC1ncm91cFwiICpuZ0lmPVwiaXNBZGRPblwiPlxyXG4gIDxzcGFuIGNsYXNzPVwiYW50LWlucHV0LWdyb3VwLWFkZG9uXCIgKm5nSWY9XCJuekFkZE9uQmVmb3JlIHx8IG56QWRkT25CZWZvcmVJY29uXCI+XHJcbiAgICA8aSBuei1pY29uIFtuelR5cGVdPVwibnpBZGRPbkJlZm9yZUljb25cIiAqbmdJZj1cIm56QWRkT25CZWZvcmVJY29uXCI+PC9pPlxyXG4gICAgPG5nLWNvbnRhaW5lciAqbnpTdHJpbmdUZW1wbGF0ZU91dGxldD1cIm56QWRkT25CZWZvcmVcIj57eyBuekFkZE9uQmVmb3JlIH19PC9uZy1jb250YWluZXI+XHJcbiAgPC9zcGFuPlxyXG4gIDxuZy1jb250YWluZXIgKm5nSWY9XCIhaXNBZmZpeFwiPlxyXG4gICAgPG5nLXRlbXBsYXRlICpuZ1RlbXBsYXRlT3V0bGV0PVwiY29udGVudFRlbXBsYXRlXCI+PC9uZy10ZW1wbGF0ZT5cclxuICA8L25nLWNvbnRhaW5lcj5cclxuICA8c3BhblxyXG4gICAgY2xhc3M9XCJhbnQtaW5wdXQtYWZmaXgtd3JhcHBlclwiXHJcbiAgICBbY2xhc3MuYW50LWlucHV0LWFmZml4LXdyYXBwZXItc21dPVwiaXNTbWFsbFwiXHJcbiAgICBbY2xhc3MuYW50LWlucHV0LWFmZml4LXdyYXBwZXItbGddPVwiaXNMYXJnZVwiXHJcbiAgICAqbmdJZj1cImlzQWZmaXhcIlxyXG4gID5cclxuICAgIDxuZy10ZW1wbGF0ZSAqbmdUZW1wbGF0ZU91dGxldD1cImFmZml4VGVtcGxhdGVcIj48L25nLXRlbXBsYXRlPlxyXG4gIDwvc3Bhbj5cclxuICA8c3BhbiBjbGFzcz1cImFudC1pbnB1dC1ncm91cC1hZGRvblwiICpuZ0lmPVwibnpBZGRPbkFmdGVyIHx8IG56QWRkT25BZnRlckljb25cIj5cclxuICAgIDxpIG56LWljb24gW256VHlwZV09XCJuekFkZE9uQWZ0ZXJJY29uXCIgKm5nSWY9XCJuekFkZE9uQWZ0ZXJJY29uXCI+PC9pPlxyXG4gICAgPG5nLWNvbnRhaW5lciAqbnpTdHJpbmdUZW1wbGF0ZU91dGxldD1cIm56QWRkT25BZnRlclwiPnt7IG56QWRkT25BZnRlciB9fTwvbmctY29udGFpbmVyPlxyXG4gIDwvc3Bhbj5cclxuPC9zcGFuPlxyXG48bmctY29udGFpbmVyICpuZ0lmPVwiaXNBZmZpeCAmJiAhaXNBZGRPblwiPlxyXG4gIDxuZy10ZW1wbGF0ZSAqbmdUZW1wbGF0ZU91dGxldD1cImFmZml4VGVtcGxhdGVcIj48L25nLXRlbXBsYXRlPlxyXG48L25nLWNvbnRhaW5lcj5cclxuPG5nLXRlbXBsYXRlICNhZmZpeFRlbXBsYXRlPlxyXG4gIDxzcGFuIGNsYXNzPVwiYW50LWlucHV0LXByZWZpeFwiICpuZ0lmPVwibnpQcmVmaXggfHwgbnpQcmVmaXhJY29uXCI+XHJcbiAgICA8IS0tIFRPRE86IHNob3VsZCBoYXZlIGEgY2xhc3MgdG8gc2V0IGl0cyBjb2xvciwgY2M6IGFudGQtLT5cclxuICAgIDxpIG56LWljb24gW256VHlwZV09XCJuelByZWZpeEljb25cIiAqbmdJZj1cIm56UHJlZml4SWNvblwiIHN0eWxlPVwiY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yNSlcIj48L2k+XHJcbiAgICA8bmctY29udGFpbmVyICpuelN0cmluZ1RlbXBsYXRlT3V0bGV0PVwibnpQcmVmaXhcIj57eyBuelByZWZpeCB9fTwvbmctY29udGFpbmVyPlxyXG4gIDwvc3Bhbj5cclxuICA8bmctdGVtcGxhdGUgKm5nVGVtcGxhdGVPdXRsZXQ9XCJjb250ZW50VGVtcGxhdGVcIj48L25nLXRlbXBsYXRlPlxyXG4gIDxzcGFuIGNsYXNzPVwiYW50LWlucHV0LXN1ZmZpeFwiICpuZ0lmPVwibnpTdWZmaXggfHwgbnpTdWZmaXhJY29uXCI+XHJcbiAgICA8aSBuei1pY29uIFtuelR5cGVdPVwibnpTdWZmaXhJY29uXCIgKm5nSWY9XCJuelN1ZmZpeEljb25cIj48L2k+XHJcbiAgICA8bmctY29udGFpbmVyICpuelN0cmluZ1RlbXBsYXRlT3V0bGV0PVwibnpTdWZmaXhcIj57eyBuelN1ZmZpeCB9fTwvbmctY29udGFpbmVyPlxyXG4gIDwvc3Bhbj5cclxuPC9uZy10ZW1wbGF0ZT5cclxuPG5nLWNvbnRhaW5lciAqbmdJZj1cImlzR3JvdXBcIj5cclxuICA8bmctdGVtcGxhdGUgKm5nVGVtcGxhdGVPdXRsZXQ9XCJjb250ZW50VGVtcGxhdGVcIj48L25nLXRlbXBsYXRlPlxyXG48L25nLWNvbnRhaW5lcj5cclxuPG5nLXRlbXBsYXRlICNjb250ZW50VGVtcGxhdGU+XHJcbiAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG48L25nLXRlbXBsYXRlPlxyXG4iXX0=