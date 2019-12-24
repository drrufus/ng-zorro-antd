import { __decorate, __metadata } from 'tslib';
import { ɵɵelementContainerStart, ɵɵtext, ɵɵelementContainerEnd, ɵɵnextContext, ɵɵadvance, ɵɵtextInterpolate, ɵɵelementStart, ɵɵtemplate, ɵɵelementEnd, ɵɵproperty, ɵɵdirectiveInject, ElementRef, ɵɵdefineComponent, ɵɵProvidersFeature, ɵɵNgOnChangesFeature, ɵsetClassMetadata, Component, ViewEncapsulation, ChangeDetectionStrategy, Input, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { NzUpdateHostClassService, NzStringTemplateOutletDirective, InputBoolean, NzAddOnModule } from 'ng-zorro-antd/core';
import { NgIf, CommonModule } from '@angular/common';

function NzDividerComponent_span_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r253 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r253.nzText);
} }
function NzDividerComponent_span_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span", 1);
    ɵɵtemplate(1, NzDividerComponent_span_0_ng_container_1_Template, 2, 1, "ng-container", 2);
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r252 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("nzStringTemplateOutlet", ctx_r252.nzText);
} }
var NzDividerComponent = /** @class */ (function () {
    function NzDividerComponent(elementRef, nzUpdateHostClassService) {
        this.elementRef = elementRef;
        this.nzUpdateHostClassService = nzUpdateHostClassService;
        this.nzType = 'horizontal';
        this.nzOrientation = 'center';
        this.nzDashed = false;
    }
    NzDividerComponent.prototype.setClass = function () {
        var _a;
        this.nzUpdateHostClassService.updateHostClass(this.elementRef.nativeElement, (_a = {},
            _a['ant-divider'] = true,
            _a["ant-divider-" + this.nzType] = true,
            _a["ant-divider-with-text-" + this.nzOrientation] = this.nzText,
            _a["ant-divider-dashed"] = this.nzDashed,
            _a));
    };
    NzDividerComponent.prototype.ngOnChanges = function () {
        this.setClass();
    };
    NzDividerComponent.prototype.ngOnInit = function () {
        this.setClass();
    };
    /** @nocollapse */ NzDividerComponent.ɵfac = function NzDividerComponent_Factory(t) { return new (t || NzDividerComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NzUpdateHostClassService)); };
    /** @nocollapse */ NzDividerComponent.ɵcmp = ɵɵdefineComponent({ type: NzDividerComponent, selectors: [["nz-divider"]], inputs: { nzText: "nzText", nzType: "nzType", nzOrientation: "nzOrientation", nzDashed: "nzDashed" }, exportAs: ["nzDivider"], features: [ɵɵProvidersFeature([NzUpdateHostClassService]), ɵɵNgOnChangesFeature()], decls: 1, vars: 1, consts: [["class", "ant-divider-inner-text", 4, "ngIf"], [1, "ant-divider-inner-text"], [4, "nzStringTemplateOutlet"]], template: function NzDividerComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵtemplate(0, NzDividerComponent_span_0_Template, 2, 1, "span", 0);
        } if (rf & 2) {
            ɵɵproperty("ngIf", ctx.nzText);
        } }, directives: [NgIf, NzStringTemplateOutletDirective], encapsulation: 2, changeDetection: 0 });
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzDividerComponent.prototype, "nzDashed", void 0);
    return NzDividerComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzDividerComponent, [{
        type: Component,
        args: [{
                selector: 'nz-divider',
                exportAs: 'nzDivider',
                templateUrl: './nz-divider.component.html',
                preserveWhitespaces: false,
                providers: [NzUpdateHostClassService],
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: ElementRef }, { type: NzUpdateHostClassService }]; }, { nzText: [{
            type: Input
        }], nzType: [{
            type: Input
        }], nzOrientation: [{
            type: Input
        }], nzDashed: [{
            type: Input
        }] }); })();

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
var NzDividerModule = /** @class */ (function () {
    function NzDividerModule() {
    }
    /** @nocollapse */ NzDividerModule.ɵmod = ɵɵdefineNgModule({ type: NzDividerModule });
    /** @nocollapse */ NzDividerModule.ɵinj = ɵɵdefineInjector({ factory: function NzDividerModule_Factory(t) { return new (t || NzDividerModule)(); }, imports: [[CommonModule, NzAddOnModule]] });
    return NzDividerModule;
}());
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(NzDividerModule, { declarations: [NzDividerComponent], imports: [CommonModule, NzAddOnModule], exports: [NzDividerComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzDividerModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, NzAddOnModule],
                declarations: [NzDividerComponent],
                exports: [NzDividerComponent]
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

export { NzDividerComponent, NzDividerModule };
//# sourceMappingURL=ng-zorro-antd-divider.js.map
