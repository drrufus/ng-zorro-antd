(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs'), require('rxjs/operators'), require('ng-zorro-antd/core'), require('@angular/common'), require('@angular/cdk/observers')) :
    typeof define === 'function' && define.amd ? define('ng-zorro-antd/spin', ['exports', '@angular/core', 'rxjs', 'rxjs/operators', 'ng-zorro-antd/core', '@angular/common', '@angular/cdk/observers'], factory) :
    (global = global || self, factory((global['ng-zorro-antd'] = global['ng-zorro-antd'] || {}, global['ng-zorro-antd'].spin = {}), global.ng.core, global.rxjs, global.rxjs.operators, global['ng-zorro-antd'].core, global.ng.common, global.ng.cdk.observers));
}(this, (function (exports, core, rxjs, operators, core$1, common, observers) { 'use strict';

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

    function NzSpinComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "span", 3);
        core.ɵɵelement(1, "i", 4);
        core.ɵɵelement(2, "i", 4);
        core.ɵɵelement(3, "i", 4);
        core.ɵɵelement(4, "i", 4);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r281 = core.ɵɵnextContext();
        core.ɵɵclassProp("ant-spin-dot-spin", ctx_r281.loading);
    } }
    function NzSpinComponent_div_2_ng_template_2_Template(rf, ctx) { }
    function NzSpinComponent_div_2_div_3_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div", 8);
        core.ɵɵtext(1);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r285 = core.ɵɵnextContext(2);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate(ctx_r285.nzTip);
    } }
    function NzSpinComponent_div_2_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div");
        core.ɵɵelementStart(1, "div", 5);
        core.ɵɵtemplate(2, NzSpinComponent_div_2_ng_template_2_Template, 0, 0, "ng-template", 6);
        core.ɵɵtemplate(3, NzSpinComponent_div_2_div_3_Template, 2, 1, "div", 7);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r282 = core.ɵɵnextContext();
        var _r280 = core.ɵɵreference(1);
        core.ɵɵadvance(1);
        core.ɵɵclassProp("ant-spin-spinning", ctx_r282.loading)("ant-spin-lg", ctx_r282.nzSize === "large")("ant-spin-sm", ctx_r282.nzSize === "small")("ant-spin-show-text", ctx_r282.nzTip);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngTemplateOutlet", ctx_r282.nzIndicator || _r280);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", ctx_r282.nzTip);
    } }
    function NzSpinComponent_div_3_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div", 9);
        core.ɵɵprojection(1);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r283 = core.ɵɵnextContext();
        core.ɵɵclassProp("ant-spin-blur", ctx_r283.loading);
    } }
    var _c0 = ["*"];
    var NZ_CONFIG_COMPONENT_NAME = 'spin';
    var NzSpinComponent = /** @class */ (function () {
        function NzSpinComponent(nzConfigService, cdr) {
            this.nzConfigService = nzConfigService;
            this.cdr = cdr;
            this.nzSize = 'default';
            this.nzDelay = 0;
            this.nzSimple = false;
            this.nzSpinning = true;
            this.loading = true;
            this.destroy$ = new rxjs.Subject();
            this.spinning$ = new rxjs.BehaviorSubject(this.nzSpinning);
            this.loading$ = this.spinning$.pipe(operators.debounceTime(this.nzDelay));
        }
        NzSpinComponent.prototype.subscribeLoading = function () {
            var _this = this;
            this.unsubscribeLoading();
            this.loading_ = this.loading$.subscribe(function (data) {
                _this.loading = data;
                _this.cdr.markForCheck();
            });
        };
        NzSpinComponent.prototype.unsubscribeLoading = function () {
            if (this.loading_) {
                this.loading_.unsubscribe();
                this.loading_ = null;
            }
        };
        NzSpinComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.subscribeLoading();
            this.nzConfigService
                .getConfigChangeEventForComponent(NZ_CONFIG_COMPONENT_NAME)
                .pipe(operators.takeUntil(this.destroy$))
                .subscribe(function () { return _this.cdr.markForCheck(); });
        };
        NzSpinComponent.prototype.ngOnChanges = function (changes) {
            if (changes.nzSpinning) {
                if (changes.nzSpinning.isFirstChange()) {
                    this.loading = this.nzSpinning;
                }
                this.spinning$.next(this.nzSpinning);
            }
            if (changes.nzDelay) {
                this.loading$ = this.spinning$.pipe(operators.debounceTime(this.nzDelay));
                this.subscribeLoading();
            }
        };
        NzSpinComponent.prototype.ngOnDestroy = function () {
            this.destroy$.next();
            this.destroy$.complete();
            this.unsubscribeLoading();
        };
        /** @nocollapse */ NzSpinComponent.ɵfac = function NzSpinComponent_Factory(t) { return new (t || NzSpinComponent)(core.ɵɵdirectiveInject(core$1.NzConfigService), core.ɵɵdirectiveInject(core.ChangeDetectorRef)); };
        /** @nocollapse */ NzSpinComponent.ɵcmp = core.ɵɵdefineComponent({ type: NzSpinComponent, selectors: [["nz-spin"]], hostBindings: function NzSpinComponent_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
                core.ɵɵallocHostVars(1);
            } if (rf & 2) {
                core.ɵɵclassProp("ant-spin-nested-loading", !ctx.nzSimple);
            } }, inputs: { nzIndicator: "nzIndicator", nzSize: "nzSize", nzTip: "nzTip", nzDelay: "nzDelay", nzSimple: "nzSimple", nzSpinning: "nzSpinning" }, exportAs: ["nzSpin"], features: [core.ɵɵNgOnChangesFeature()], ngContentSelectors: _c0, decls: 4, vars: 2, consts: [["defaultIndicatorTemplate", ""], [4, "ngIf"], ["class", "ant-spin-container", 3, "ant-spin-blur", 4, "ngIf"], [1, "ant-spin-dot"], [1, "ant-spin-dot-item"], [1, "ant-spin"], [3, "ngTemplateOutlet"], ["class", "ant-spin-text", 4, "ngIf"], [1, "ant-spin-text"], [1, "ant-spin-container"]], template: function NzSpinComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵprojectionDef();
                core.ɵɵtemplate(0, NzSpinComponent_ng_template_0_Template, 5, 1, "ng-template", null, 0, core.ɵɵtemplateRefExtractor);
                core.ɵɵtemplate(2, NzSpinComponent_div_2_Template, 4, 6, "div", 1);
                core.ɵɵtemplate(3, NzSpinComponent_div_3_Template, 2, 1, "div", 2);
            } if (rf & 2) {
                core.ɵɵadvance(2);
                core.ɵɵproperty("ngIf", ctx.loading);
                core.ɵɵadvance(1);
                core.ɵɵproperty("ngIf", !ctx.nzSimple);
            } }, directives: [common.NgIf, common.NgTemplateOutlet], styles: ["\n      nz-spin {\n        display: block;\n      }\n    "], encapsulation: 2, changeDetection: 0 });
        __decorate([
            core$1.WithConfig(NZ_CONFIG_COMPONENT_NAME),
            __metadata("design:type", core.TemplateRef)
        ], NzSpinComponent.prototype, "nzIndicator", void 0);
        __decorate([
            core$1.InputNumber(),
            __metadata("design:type", Object)
        ], NzSpinComponent.prototype, "nzDelay", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzSpinComponent.prototype, "nzSimple", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzSpinComponent.prototype, "nzSpinning", void 0);
        return NzSpinComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NzSpinComponent, [{
            type: core.Component,
            args: [{
                    selector: 'nz-spin',
                    exportAs: 'nzSpin',
                    preserveWhitespaces: false,
                    encapsulation: core.ViewEncapsulation.None,
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    templateUrl: './nz-spin.component.html',
                    host: {
                        '[class.ant-spin-nested-loading]': '!nzSimple'
                    },
                    styles: [
                        "\n      nz-spin {\n        display: block;\n      }\n    "
                    ]
                }]
        }], function () { return [{ type: core$1.NzConfigService }, { type: core.ChangeDetectorRef }]; }, { nzIndicator: [{
                type: core.Input
            }], nzSize: [{
                type: core.Input
            }], nzTip: [{
                type: core.Input
            }], nzDelay: [{
                type: core.Input
            }], nzSimple: [{
                type: core.Input
            }], nzSpinning: [{
                type: core.Input
            }] }); })();

    /**
     * @license
     * Copyright Alibaba.com All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    var NzSpinModule = /** @class */ (function () {
        function NzSpinModule() {
        }
        /** @nocollapse */ NzSpinModule.ɵmod = core.ɵɵdefineNgModule({ type: NzSpinModule });
        /** @nocollapse */ NzSpinModule.ɵinj = core.ɵɵdefineInjector({ factory: function NzSpinModule_Factory(t) { return new (t || NzSpinModule)(); }, imports: [[common.CommonModule, observers.ObserversModule]] });
        return NzSpinModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && core.ɵɵsetNgModuleScope(NzSpinModule, { declarations: [NzSpinComponent], imports: [common.CommonModule, observers.ObserversModule], exports: [NzSpinComponent] }); })();
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NzSpinModule, [{
            type: core.NgModule,
            args: [{
                    exports: [NzSpinComponent],
                    declarations: [NzSpinComponent],
                    imports: [common.CommonModule, observers.ObserversModule]
                }]
        }], null, null); })();

    exports.NzSpinComponent = NzSpinComponent;
    exports.NzSpinModule = NzSpinModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ng-zorro-antd-spin.umd.js.map
