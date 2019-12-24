import { __decorate, __metadata } from 'tslib';
import { FocusMonitor } from '@angular/cdk/a11y';
import { LEFT_ARROW, RIGHT_ARROW, SPACE, ENTER } from '@angular/cdk/keycodes';
import { ɵɵelement, ɵɵelementContainerStart, ɵɵtext, ɵɵelementContainerEnd, ɵɵnextContext, ɵɵadvance, ɵɵtextInterpolate, ɵɵtemplate, ɵɵproperty, ɵɵdirectiveInject, ChangeDetectorRef, ɵɵdefineComponent, ɵɵstaticViewQuery, ɵɵqueryRefresh, ɵɵloadQuery, ɵɵlistener, ɵɵProvidersFeature, forwardRef, ɵɵelementStart, ɵɵelementEnd, ɵɵclassProp, ɵsetClassMetadata, Component, ChangeDetectionStrategy, ViewEncapsulation, ViewChild, Input, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { NzConfigService, NzWaveDirective, NzStringTemplateOutletDirective, InputBoolean, WithConfig, NzWaveModule, NzAddOnModule } from 'ng-zorro-antd/core';
import { NgIf, CommonModule } from '@angular/common';
import { NzIconDirective, NzIconModule } from 'ng-zorro-antd/icon';

var _c0 = ["switchElement"];
function NzSwitchComponent_i_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "i", 5);
} }
function NzSwitchComponent_ng_container_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r808 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r808.nzCheckedChildren);
} }
function NzSwitchComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, NzSwitchComponent_ng_container_5_ng_container_1_Template, 2, 1, "ng-container", 6);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r806 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("nzStringTemplateOutlet", ctx_r806.nzCheckedChildren);
} }
function NzSwitchComponent_ng_container_6_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r809 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r809.nzUnCheckedChildren);
} }
function NzSwitchComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, NzSwitchComponent_ng_container_6_ng_container_1_Template, 2, 1, "ng-container", 6);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r807 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("nzStringTemplateOutlet", ctx_r807.nzUnCheckedChildren);
} }
var NZ_CONFIG_COMPONENT_NAME = 'switch';
var NzSwitchComponent = /** @class */ (function () {
    function NzSwitchComponent(nzConfigService, cdr, focusMonitor) {
        this.nzConfigService = nzConfigService;
        this.cdr = cdr;
        this.focusMonitor = focusMonitor;
        this.checked = false;
        this.onChange = function () { return null; };
        this.onTouched = function () { return null; };
        this.nzLoading = false;
        this.nzDisabled = false;
        this.nzControl = false;
    }
    NzSwitchComponent.prototype.hostClick = function (e) {
        e.preventDefault();
        if (!this.nzDisabled && !this.nzLoading && !this.nzControl) {
            this.updateValue(!this.checked);
        }
    };
    NzSwitchComponent.prototype.updateValue = function (value) {
        if (this.checked !== value) {
            this.checked = value;
            this.onChange(this.checked);
        }
    };
    NzSwitchComponent.prototype.onKeyDown = function (e) {
        if (!this.nzControl && !this.nzDisabled && !this.nzLoading) {
            if (e.keyCode === LEFT_ARROW) {
                this.updateValue(false);
                e.preventDefault();
            }
            else if (e.keyCode === RIGHT_ARROW) {
                this.updateValue(true);
                e.preventDefault();
            }
            else if (e.keyCode === SPACE || e.keyCode === ENTER) {
                this.updateValue(!this.checked);
                e.preventDefault();
            }
        }
    };
    NzSwitchComponent.prototype.focus = function () {
        this.focusMonitor.focusVia(this.switchElement.nativeElement, 'keyboard');
    };
    NzSwitchComponent.prototype.blur = function () {
        this.switchElement.nativeElement.blur();
    };
    NzSwitchComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.focusMonitor.monitor(this.switchElement.nativeElement, true).subscribe(function (focusOrigin) {
            if (!focusOrigin) {
                // When a focused element becomes disabled, the browser *immediately* fires a blur event.
                // Angular does not expect events to be raised during change detection, so any state change
                // (such as a form control's 'ng-touched') will cause a changed-after-checked error.
                // See https://github.com/angular/angular/issues/17793. To work around this, we defer
                // telling the form control it has been touched until the next tick.
                Promise.resolve().then(function () { return _this.onTouched(); });
            }
        });
    };
    NzSwitchComponent.prototype.ngOnDestroy = function () {
        this.focusMonitor.stopMonitoring(this.switchElement.nativeElement);
    };
    NzSwitchComponent.prototype.writeValue = function (value) {
        this.checked = value;
        this.cdr.markForCheck();
    };
    NzSwitchComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    NzSwitchComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    NzSwitchComponent.prototype.setDisabledState = function (isDisabled) {
        this.nzDisabled = isDisabled;
        this.cdr.markForCheck();
    };
    /** @nocollapse */ NzSwitchComponent.ɵfac = function NzSwitchComponent_Factory(t) { return new (t || NzSwitchComponent)(ɵɵdirectiveInject(NzConfigService), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(FocusMonitor)); };
    /** @nocollapse */ NzSwitchComponent.ɵcmp = ɵɵdefineComponent({ type: NzSwitchComponent, selectors: [["nz-switch"]], viewQuery: function NzSwitchComponent_Query(rf, ctx) { if (rf & 1) {
            ɵɵstaticViewQuery(_c0, true);
        } if (rf & 2) {
            var _t;
            ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.switchElement = _t.first);
        } }, hostBindings: function NzSwitchComponent_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
            ɵɵlistener("click", function NzSwitchComponent_click_HostBindingHandler($event) { return ctx.hostClick($event); });
        } }, inputs: { nzLoading: "nzLoading", nzDisabled: "nzDisabled", nzControl: "nzControl", nzCheckedChildren: "nzCheckedChildren", nzUnCheckedChildren: "nzUnCheckedChildren", nzSize: "nzSize" }, exportAs: ["nzSwitch"], features: [ɵɵProvidersFeature([
                {
                    provide: NG_VALUE_ACCESSOR,
                    useExisting: forwardRef((function () { return NzSwitchComponent; })),
                    multi: true
                }
            ])], decls: 7, vars: 9, consts: [["type", "button", "nz-wave", "", 1, "ant-switch", 3, "disabled", "nzWaveExtraNode", "keydown"], ["switchElement", ""], ["nz-icon", "", "nzType", "loading", "class", "ant-switch-loading-icon", 4, "ngIf"], [1, "ant-switch-inner"], [4, "ngIf"], ["nz-icon", "", "nzType", "loading", 1, "ant-switch-loading-icon"], [4, "nzStringTemplateOutlet"]], template: function NzSwitchComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "button", 0, 1);
            ɵɵlistener("keydown", function NzSwitchComponent_Template_button_keydown_0_listener($event) { return ctx.onKeyDown($event); });
            ɵɵtemplate(2, NzSwitchComponent_i_2_Template, 1, 0, "i", 2);
            ɵɵelementStart(3, "span", 3);
            ɵɵelementStart(4, "span");
            ɵɵtemplate(5, NzSwitchComponent_ng_container_5_Template, 2, 1, "ng-container", 4);
            ɵɵtemplate(6, NzSwitchComponent_ng_container_6_Template, 2, 1, "ng-container", 4);
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
        } if (rf & 2) {
            ɵɵclassProp("ant-switch-checked", ctx.checked)("ant-switch-loading", ctx.nzLoading)("ant-switch-disabled", ctx.nzDisabled)("ant-switch-small", ctx.nzSize === "small");
            ɵɵproperty("disabled", ctx.nzDisabled)("nzWaveExtraNode", true);
            ɵɵadvance(2);
            ɵɵproperty("ngIf", ctx.nzLoading);
            ɵɵadvance(3);
            ɵɵproperty("ngIf", ctx.checked);
            ɵɵadvance(1);
            ɵɵproperty("ngIf", !ctx.checked);
        } }, directives: [NzWaveDirective, NgIf, NzIconDirective, NzStringTemplateOutletDirective], styles: ["\n      nz-switch {\n        display: inline-block;\n      }\n    "], encapsulation: 2, changeDetection: 0 });
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzSwitchComponent.prototype, "nzLoading", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzSwitchComponent.prototype, "nzDisabled", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzSwitchComponent.prototype, "nzControl", void 0);
    __decorate([
        WithConfig(NZ_CONFIG_COMPONENT_NAME, 'default'),
        __metadata("design:type", String)
    ], NzSwitchComponent.prototype, "nzSize", void 0);
    return NzSwitchComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzSwitchComponent, [{
        type: Component,
        args: [{
                selector: 'nz-switch',
                exportAs: 'nzSwitch',
                preserveWhitespaces: false,
                templateUrl: './nz-switch.component.html',
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef((function () { return NzSwitchComponent; })),
                        multi: true
                    }
                ],
                host: {
                    '(click)': 'hostClick($event)'
                },
                styles: [
                    "\n      nz-switch {\n        display: inline-block;\n      }\n    "
                ]
            }]
    }], function () { return [{ type: NzConfigService }, { type: ChangeDetectorRef }, { type: FocusMonitor }]; }, { switchElement: [{
            type: ViewChild,
            args: ['switchElement', { static: true }]
        }], nzLoading: [{
            type: Input
        }], nzDisabled: [{
            type: Input
        }], nzControl: [{
            type: Input
        }], nzCheckedChildren: [{
            type: Input
        }], nzUnCheckedChildren: [{
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
var NzSwitchModule = /** @class */ (function () {
    function NzSwitchModule() {
    }
    /** @nocollapse */ NzSwitchModule.ɵmod = ɵɵdefineNgModule({ type: NzSwitchModule });
    /** @nocollapse */ NzSwitchModule.ɵinj = ɵɵdefineInjector({ factory: function NzSwitchModule_Factory(t) { return new (t || NzSwitchModule)(); }, imports: [[CommonModule, NzWaveModule, NzIconModule, NzAddOnModule]] });
    return NzSwitchModule;
}());
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(NzSwitchModule, { declarations: [NzSwitchComponent], imports: [CommonModule, NzWaveModule, NzIconModule, NzAddOnModule], exports: [NzSwitchComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(NzSwitchModule, [{
        type: NgModule,
        args: [{
                exports: [NzSwitchComponent],
                declarations: [NzSwitchComponent],
                imports: [CommonModule, NzWaveModule, NzIconModule, NzAddOnModule]
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

export { NzSwitchComponent, NzSwitchModule };
//# sourceMappingURL=ng-zorro-antd-switch.js.map
