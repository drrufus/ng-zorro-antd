(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('ng-zorro-antd/core'), require('@angular/common'), require('ng-zorro-antd/icon')) :
    typeof define === 'function' && define.amd ? define('ng-zorro-antd/collapse', ['exports', '@angular/core', 'ng-zorro-antd/core', '@angular/common', 'ng-zorro-antd/icon'], factory) :
    (global = global || self, factory((global['ng-zorro-antd'] = global['ng-zorro-antd'] || {}, global['ng-zorro-antd'].collapse = {}), global.ng.core, global['ng-zorro-antd'].core, global.ng.common, global['ng-zorro-antd'].icon));
}(this, (function (exports, core, core$1, common, icon) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m) return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    var _c0 = ["*"];
    var NZ_CONFIG_COMPONENT_NAME = 'collapse';
    var NzCollapseComponent = /** @class */ (function () {
        function NzCollapseComponent(nzConfigService) {
            this.nzConfigService = nzConfigService;
            this.listOfNzCollapsePanelComponent = [];
        }
        NzCollapseComponent.prototype.addPanel = function (value) {
            this.listOfNzCollapsePanelComponent.push(value);
        };
        NzCollapseComponent.prototype.removePanel = function (value) {
            this.listOfNzCollapsePanelComponent.splice(this.listOfNzCollapsePanelComponent.indexOf(value), 1);
        };
        NzCollapseComponent.prototype.click = function (collapse) {
            if (this.nzAccordion && !collapse.nzActive) {
                this.listOfNzCollapsePanelComponent
                    .filter(function (item) { return item !== collapse; })
                    .forEach(function (item) {
                    if (item.nzActive) {
                        item.nzActive = false;
                        item.nzActiveChange.emit(item.nzActive);
                        item.markForCheck();
                    }
                });
            }
            collapse.nzActive = !collapse.nzActive;
            collapse.nzActiveChange.emit(collapse.nzActive);
        };
        /** @nocollapse */ NzCollapseComponent.ɵfac = function NzCollapseComponent_Factory(t) { return new (t || NzCollapseComponent)(core.ɵɵdirectiveInject(core$1.NzConfigService)); };
        /** @nocollapse */ NzCollapseComponent.ɵcmp = core.ɵɵdefineComponent({ type: NzCollapseComponent, selectors: [["nz-collapse"]], inputs: { nzAccordion: "nzAccordion", nzBordered: "nzBordered" }, exportAs: ["nzCollapse"], ngContentSelectors: _c0, decls: 2, vars: 1, consts: [[1, "ant-collapse"]], template: function NzCollapseComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵprojectionDef();
                core.ɵɵelementStart(0, "div", 0);
                core.ɵɵprojection(1);
                core.ɵɵelementEnd();
            } if (rf & 2) {
                core.ɵɵclassProp("ant-collapse-borderless", !ctx.nzBordered);
            } }, styles: ["\n      nz-collapse {\n        display: block;\n      }\n    "], encapsulation: 2, changeDetection: 0 });
        __decorate([
            core$1.WithConfig(NZ_CONFIG_COMPONENT_NAME, false), core$1.InputBoolean(),
            __metadata("design:type", Boolean)
        ], NzCollapseComponent.prototype, "nzAccordion", void 0);
        __decorate([
            core$1.WithConfig(NZ_CONFIG_COMPONENT_NAME, true), core$1.InputBoolean(),
            __metadata("design:type", Boolean)
        ], NzCollapseComponent.prototype, "nzBordered", void 0);
        return NzCollapseComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NzCollapseComponent, [{
            type: core.Component,
            args: [{
                    selector: 'nz-collapse',
                    exportAs: 'nzCollapse',
                    templateUrl: './nz-collapse.component.html',
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    encapsulation: core.ViewEncapsulation.None,
                    styles: [
                        "\n      nz-collapse {\n        display: block;\n      }\n    "
                    ]
                }]
        }], function () { return [{ type: core$1.NzConfigService }]; }, { nzAccordion: [{
                type: core.Input
            }], nzBordered: [{
                type: core.Input
            }] }); })();

    function NzCollapsePanelComponent_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵelement(1, "i", 6);
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var ctx_r390 = core.ɵɵnextContext(2);
        core.ɵɵadvance(1);
        core.ɵɵproperty("nzType", ctx_r390.nzExpandedIcon || "right")("nzRotate", ctx_r390.nzActive ? 90 : 0);
    } }
    function NzCollapsePanelComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵtemplate(1, NzCollapsePanelComponent_ng_container_1_ng_container_1_Template, 2, 2, "ng-container", 2);
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var ctx_r387 = core.ɵɵnextContext();
        core.ɵɵadvance(1);
        core.ɵɵproperty("nzStringTemplateOutlet", ctx_r387.nzExpandedIcon);
    } }
    function NzCollapsePanelComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵtext(1);
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var ctx_r388 = core.ɵɵnextContext();
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate(ctx_r388.nzHeader);
    } }
    function NzCollapsePanelComponent_div_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵtext(1);
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var ctx_r391 = core.ɵɵnextContext(2);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate(ctx_r391.nzExtra);
    } }
    function NzCollapsePanelComponent_div_3_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div", 7);
        core.ɵɵtemplate(1, NzCollapsePanelComponent_div_3_ng_container_1_Template, 2, 1, "ng-container", 2);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r389 = core.ɵɵnextContext();
        core.ɵɵadvance(1);
        core.ɵɵproperty("nzStringTemplateOutlet", ctx_r389.nzExtra);
    } }
    var _c0$1 = ["*"];
    var NZ_CONFIG_COMPONENT_NAME$1 = 'collapsePanel';
    var NzCollapsePanelComponent = /** @class */ (function () {
        function NzCollapsePanelComponent(nzConfigService, cdr, nzCollapseComponent, elementRef, renderer) {
            this.nzConfigService = nzConfigService;
            this.cdr = cdr;
            this.nzCollapseComponent = nzCollapseComponent;
            this.nzActive = false;
            this.nzDisabled = false;
            this.nzActiveChange = new core.EventEmitter();
            this.nzRole = "tab";
            renderer.addClass(elementRef.nativeElement, 'ant-collapse-item');
        }
        NzCollapsePanelComponent.prototype.clickHeader = function () {
            if (!this.nzDisabled) {
                this.nzCollapseComponent.click(this);
            }
        };
        NzCollapsePanelComponent.prototype.markForCheck = function () {
            this.cdr.markForCheck();
        };
        NzCollapsePanelComponent.prototype.ngOnInit = function () {
            this.nzCollapseComponent.addPanel(this);
        };
        NzCollapsePanelComponent.prototype.ngOnDestroy = function () {
            this.nzCollapseComponent.removePanel(this);
        };
        /** @nocollapse */ NzCollapsePanelComponent.ɵfac = function NzCollapsePanelComponent_Factory(t) { return new (t || NzCollapsePanelComponent)(core.ɵɵdirectiveInject(core$1.NzConfigService), core.ɵɵdirectiveInject(core.ChangeDetectorRef), core.ɵɵdirectiveInject(NzCollapseComponent, 1), core.ɵɵdirectiveInject(core.ElementRef), core.ɵɵdirectiveInject(core.Renderer2)); };
        /** @nocollapse */ NzCollapsePanelComponent.ɵcmp = core.ɵɵdefineComponent({ type: NzCollapsePanelComponent, selectors: [["nz-collapse-panel"]], hostBindings: function NzCollapsePanelComponent_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
                core.ɵɵallocHostVars(3);
            } if (rf & 2) {
                core.ɵɵclassProp("ant-collapse-no-arrow", !ctx.nzShowArrow)("ant-collapse-item-active", ctx.nzActive)("ant-collapse-item-disabled", ctx.nzDisabled);
            } }, inputs: { nzActive: "nzActive", nzDisabled: "nzDisabled", nzShowArrow: "nzShowArrow", nzExtra: "nzExtra", nzHeader: "nzHeader", nzExpandedIcon: "nzExpandedIcon", nzRole: "nzRole" }, outputs: { nzActiveChange: "nzActiveChange" }, exportAs: ["nzCollapsePanel"], ngContentSelectors: _c0$1, decls: 7, vars: 7, consts: [[1, "ant-collapse-header", 3, "click"], [4, "ngIf"], [4, "nzStringTemplateOutlet"], ["class", "ant-collapse-extra", 4, "ngIf"], [1, "ant-collapse-content"], [1, "ant-collapse-content-box"], ["nz-icon", "", 1, "ant-collapse-arrow", 3, "nzType", "nzRotate"], [1, "ant-collapse-extra"]], template: function NzCollapsePanelComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵprojectionDef();
                core.ɵɵelementStart(0, "div", 0);
                core.ɵɵlistener("click", function NzCollapsePanelComponent_Template_div_click_0_listener($event) { return ctx.clickHeader(); });
                core.ɵɵtemplate(1, NzCollapsePanelComponent_ng_container_1_Template, 2, 1, "ng-container", 1);
                core.ɵɵtemplate(2, NzCollapsePanelComponent_ng_container_2_Template, 2, 1, "ng-container", 2);
                core.ɵɵtemplate(3, NzCollapsePanelComponent_div_3_Template, 2, 1, "div", 3);
                core.ɵɵelementEnd();
                core.ɵɵelementStart(4, "div", 4);
                core.ɵɵelementStart(5, "div", 5);
                core.ɵɵprojection(6);
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
            } if (rf & 2) {
                core.ɵɵattribute("role", ctx.nzRole)("aria-expanded", ctx.nzActive);
                core.ɵɵadvance(1);
                core.ɵɵproperty("ngIf", ctx.nzShowArrow);
                core.ɵɵadvance(1);
                core.ɵɵproperty("nzStringTemplateOutlet", ctx.nzHeader);
                core.ɵɵadvance(1);
                core.ɵɵproperty("ngIf", ctx.nzExtra);
                core.ɵɵadvance(1);
                core.ɵɵclassProp("ant-collapse-content-active", ctx.nzActive);
                core.ɵɵproperty("@collapseMotion", ctx.nzActive ? "expanded" : "hidden");
            } }, directives: [common.NgIf, core$1.NzStringTemplateOutletDirective, icon.NzIconDirective], styles: ["\n      nz-collapse-panel {\n        display: block;\n      }\n    "], encapsulation: 2, data: { animation: [core$1.collapseMotion] }, changeDetection: 0 });
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzCollapsePanelComponent.prototype, "nzActive", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzCollapsePanelComponent.prototype, "nzDisabled", void 0);
        __decorate([
            core$1.WithConfig(NZ_CONFIG_COMPONENT_NAME$1, true), core$1.InputBoolean(),
            __metadata("design:type", Boolean)
        ], NzCollapsePanelComponent.prototype, "nzShowArrow", void 0);
        return NzCollapsePanelComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NzCollapsePanelComponent, [{
            type: core.Component,
            args: [{
                    selector: 'nz-collapse-panel',
                    exportAs: 'nzCollapsePanel',
                    templateUrl: './nz-collapse-panel.component.html',
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    encapsulation: core.ViewEncapsulation.None,
                    animations: [core$1.collapseMotion],
                    styles: [
                        "\n      nz-collapse-panel {\n        display: block;\n      }\n    "
                    ],
                    host: {
                        '[class.ant-collapse-no-arrow]': '!nzShowArrow',
                        '[class.ant-collapse-item-active]': 'nzActive',
                        '[class.ant-collapse-item-disabled]': 'nzDisabled'
                    }
                }]
        }], function () { return [{ type: core$1.NzConfigService }, { type: core.ChangeDetectorRef }, { type: NzCollapseComponent, decorators: [{
                    type: core.Host
                }] }, { type: core.ElementRef }, { type: core.Renderer2 }]; }, { nzActive: [{
                type: core.Input
            }], nzDisabled: [{
                type: core.Input
            }], nzShowArrow: [{
                type: core.Input
            }], nzExtra: [{
                type: core.Input
            }], nzHeader: [{
                type: core.Input
            }], nzExpandedIcon: [{
                type: core.Input
            }], nzActiveChange: [{
                type: core.Output
            }], nzRole: [{
                type: core.Input
            }] }); })();

    /**
     * @license
     * Copyright Alibaba.com All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    var NzCollapseModule = /** @class */ (function () {
        function NzCollapseModule() {
        }
        /** @nocollapse */ NzCollapseModule.ɵmod = core.ɵɵdefineNgModule({ type: NzCollapseModule });
        /** @nocollapse */ NzCollapseModule.ɵinj = core.ɵɵdefineInjector({ factory: function NzCollapseModule_Factory(t) { return new (t || NzCollapseModule)(); }, imports: [[common.CommonModule, icon.NzIconModule, core$1.NzAddOnModule]] });
        return NzCollapseModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && core.ɵɵsetNgModuleScope(NzCollapseModule, { declarations: [NzCollapsePanelComponent, NzCollapseComponent], imports: [common.CommonModule, icon.NzIconModule, core$1.NzAddOnModule], exports: [NzCollapsePanelComponent, NzCollapseComponent] }); })();
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NzCollapseModule, [{
            type: core.NgModule,
            args: [{
                    declarations: [NzCollapsePanelComponent, NzCollapseComponent],
                    exports: [NzCollapsePanelComponent, NzCollapseComponent],
                    imports: [common.CommonModule, icon.NzIconModule, core$1.NzAddOnModule]
                }]
        }], null, null); })();

    exports.NzCollapseComponent = NzCollapseComponent;
    exports.NzCollapseModule = NzCollapseModule;
    exports.NzCollapsePanelComponent = NzCollapsePanelComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ng-zorro-antd-collapse.umd.js.map
