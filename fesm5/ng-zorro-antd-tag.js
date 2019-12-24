import { __decorate, __metadata } from 'tslib';
import { ɵɵgetCurrentView, ɵɵelementStart, ɵɵlistener, ɵɵrestoreView, ɵɵnextContext, ɵɵelementEnd, EventEmitter, ɵɵdirectiveInject, Renderer2, ElementRef, ɵɵdefineComponent, ɵɵallocHostVars, ɵɵcomponentHostSyntheticListener, ɵɵupdateSyntheticHostBinding, ɵɵstyleProp, ɵɵProvidersFeature, ɵɵNgOnChangesFeature, ɵɵprojectionDef, ɵɵprojection, ɵɵtemplate, ɵɵadvance, ɵɵproperty, ɵsetClassMetadata, Component, ChangeDetectionStrategy, ViewEncapsulation, Input, Output, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { warnDeprecation, NzUpdateHostClassService, fadeMotion, InputBoolean } from 'ng-zorro-antd/core';
import { NgIf, CommonModule } from '@angular/common';
import { NzIconDirective, NzIconModule } from 'ng-zorro-antd/icon';
import { FormsModule } from '@angular/forms';

function NzTagComponent_i_1_Template(rf, ctx) { if (rf & 1) {
    var _r867 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "i", 1);
    ɵɵlistener("click", function NzTagComponent_i_1_Template_i_click_0_listener($event) { ɵɵrestoreView(_r867); var ctx_r866 = ɵɵnextContext(); return ctx_r866.closeTag($event); });
    ɵɵelementEnd();
} }
var _c0 = ["*"];
var NzTagComponent = /** @class */ (function () {
    function NzTagComponent(renderer, elementRef, nzUpdateHostClassService) {
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.nzUpdateHostClassService = nzUpdateHostClassService;
        this.presetColor = false;
        this.nzMode = 'default';
        this.nzChecked = false;
        this.nzNoAnimation = false;
        this.nzAfterClose = new EventEmitter();
        this.nzOnClose = new EventEmitter();
        this.nzCheckedChange = new EventEmitter();
    }
    NzTagComponent.prototype.isPresetColor = function (color) {
        if (!color) {
            return false;
        }
        return /^(pink|red|yellow|orange|cyan|green|blue|purple|geekblue|magenta|volcano|gold|lime)(-inverse)?$/.test(color);
    };
    NzTagComponent.prototype.updateClassMap = function () {
        var _a;
        this.presetColor = this.isPresetColor(this.nzColor);
        var prefix = 'ant-tag';
        this.nzUpdateHostClassService.updateHostClass(this.elementRef.nativeElement, (_a = {},
            _a["" + prefix] = true,
            _a[prefix + "-has-color"] = this.nzColor && !this.presetColor,
            _a[prefix + "-" + this.nzColor] = this.presetColor,
            _a[prefix + "-checkable"] = this.nzMode === 'checkable',
            _a[prefix + "-checkable-checked"] = this.nzChecked,
            _a));
    };
    NzTagComponent.prototype.updateCheckedStatus = function () {
        if (this.nzMode === 'checkable') {
            this.nzChecked = !this.nzChecked;
            this.nzCheckedChange.emit(this.nzChecked);
            this.updateClassMap();
        }
    };
    NzTagComponent.prototype.closeTag = function (e) {
        this.nzOnClose.emit(e);
        if (!e.defaultPrevented) {
            this.renderer.removeChild(this.renderer.parentNode(this.elementRef.nativeElement), this.elementRef.nativeElement);
        }
    };
    NzTagComponent.prototype.afterAnimation = function (e) {
        if (e.toState === 'void') {
            this.nzAfterClose.emit();
            if (this.nzAfterClose.observers.length) {
                warnDeprecation("'(nzAfterClose)' Output is going to be removed in 9.0.0. Please use '(nzOnClose)' instead.");
            }
        }
    };
    NzTagComponent.prototype.ngOnInit = function () {
        this.updateClassMap();
    };
    NzTagComponent.prototype.ngOnChanges = function () {
        this.updateClassMap();
    };
    /** @nocollapse */ NzTagComponent.ɵfac = function NzTagComponent_Factory(t) { return new (t || NzTagComponent)(ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NzUpdateHostClassService)); };
    /** @nocollapse */ NzTagComponent.ɵcmp = ɵɵdefineComponent({ type: NzTagComponent, selectors: [["nz-tag"]], hostBindings: function NzTagComponent_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
            ɵɵallocHostVars(3);
            ɵɵcomponentHostSyntheticListener("@fadeMotion.done", function NzTagComponent_animation_fadeMotion_done_HostBindingHandler($event) { return ctx.afterAnimation($event); });
            ɵɵlistener("click", function NzTagComponent_click_HostBindingHandler($event) { return ctx.updateCheckedStatus(); });
        } if (rf & 2) {
            ɵɵupdateSyntheticHostBinding("@fadeMotion", undefined)("@.disabled", ctx.nzNoAnimation);
            ɵɵstyleProp("background-color", ctx.presetColor ? null : ctx.nzColor);
        } }, inputs: { nzMode: "nzMode", nzColor: "nzColor", nzChecked: "nzChecked", nzNoAnimation: "nzNoAnimation" }, outputs: { nzAfterClose: "nzAfterClose", nzOnClose: "nzOnClose", nzCheckedChange: "nzCheckedChange" }, exportAs: ["nzTag"], features: [ɵɵProvidersFeature([NzUpdateHostClassService]), ɵɵNgOnChangesFeature()], ngContentSelectors: _c0, decls: 2, vars: 1, consts: [["nz-icon", "", "nzType", "close", "tabindex", "-1", 3, "click", 4, "ngIf"], ["nz-icon", "", "nzType", "close", "tabindex", "-1", 3, "click"]], template: function NzTagComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵprojectionDef();
            ɵɵprojection(0);
            ɵɵtemplate(1, NzTagComponent_i_1_Template, 1, 0, "i", 0);
        } if (rf & 2) {
            ɵɵadvance(1);
            ɵɵproperty("ngIf", ctx.nzMode === "closeable");
        } }, directives: [NgIf, NzIconDirective], encapsulation: 2, data: { animation: [fadeMotion] }, changeDetection: 0 });
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzTagComponent.prototype, "nzChecked", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzTagComponent.prototype, "nzNoAnimation", void 0);
    return NzTagComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzTagComponent, [{
        type: Component,
        args: [{
                selector: 'nz-tag',
                exportAs: 'nzTag',
                preserveWhitespaces: false,
                providers: [NzUpdateHostClassService],
                animations: [fadeMotion],
                templateUrl: './nz-tag.component.html',
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                host: {
                    '[@fadeMotion]': '',
                    '[@.disabled]': 'nzNoAnimation',
                    '(@fadeMotion.done)': 'afterAnimation($event)',
                    '(click)': 'updateCheckedStatus()',
                    '[style.background-color]': 'presetColor? null : nzColor'
                }
            }]
    }], function () { return [{ type: Renderer2 }, { type: ElementRef }, { type: NzUpdateHostClassService }]; }, { nzMode: [{
            type: Input
        }], nzColor: [{
            type: Input
        }], nzChecked: [{
            type: Input
        }], nzNoAnimation: [{
            type: Input
        }], nzAfterClose: [{
            type: Output
        }], nzOnClose: [{
            type: Output
        }], nzCheckedChange: [{
            type: Output
        }] }); })();

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
var NzTagModule = /** @class */ (function () {
    function NzTagModule() {
    }
    /** @nocollapse */ NzTagModule.ɵmod = ɵɵdefineNgModule({ type: NzTagModule });
    /** @nocollapse */ NzTagModule.ɵinj = ɵɵdefineInjector({ factory: function NzTagModule_Factory(t) { return new (t || NzTagModule)(); }, imports: [[CommonModule, FormsModule, NzIconModule]] });
    return NzTagModule;
}());
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(NzTagModule, { declarations: [NzTagComponent], imports: [CommonModule, FormsModule, NzIconModule], exports: [NzTagComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzTagModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, FormsModule, NzIconModule],
                declarations: [NzTagComponent],
                exports: [NzTagComponent]
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

export { NzTagComponent, NzTagModule };
//# sourceMappingURL=ng-zorro-antd-tag.js.map
