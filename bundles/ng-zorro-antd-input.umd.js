(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('ng-zorro-antd/core'), require('@angular/common'), require('ng-zorro-antd/icon'), require('@angular/cdk/platform'), require('rxjs'), require('rxjs/operators')) :
    typeof define === 'function' && define.amd ? define('ng-zorro-antd/input', ['exports', '@angular/core', 'ng-zorro-antd/core', '@angular/common', 'ng-zorro-antd/icon', '@angular/cdk/platform', 'rxjs', 'rxjs/operators'], factory) :
    (global = global || self, factory((global['ng-zorro-antd'] = global['ng-zorro-antd'] || {}, global['ng-zorro-antd'].input = {}), global.ng.core, global['ng-zorro-antd'].core, global.ng.common, global['ng-zorro-antd'].icon, global.ng.cdk.platform, global.rxjs, global.rxjs.operators));
}(this, (function (exports, core, core$1, common, icon, platform, rxjs, operators) { 'use strict';

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

    var NzInputDirective = /** @class */ (function () {
        function NzInputDirective(renderer, elementRef) {
            this.nzSize = 'default';
            this.disabled = false;
            renderer.addClass(elementRef.nativeElement, 'ant-input');
        }
        /** @nocollapse */ NzInputDirective.ɵfac = function NzInputDirective_Factory(t) { return new (t || NzInputDirective)(core.ɵɵdirectiveInject(core.Renderer2), core.ɵɵdirectiveInject(core.ElementRef)); };
        /** @nocollapse */ NzInputDirective.ɵdir = core.ɵɵdefineDirective({ type: NzInputDirective, selectors: [["", "nz-input", ""]], hostBindings: function NzInputDirective_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
                core.ɵɵallocHostVars(3);
            } if (rf & 2) {
                core.ɵɵclassProp("ant-input-disabled", ctx.disabled)("ant-input-lg", ctx.nzSize === "large")("ant-input-sm", ctx.nzSize === "small");
            } }, inputs: { nzSize: "nzSize", disabled: "disabled" }, exportAs: ["nzInput"] });
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzInputDirective.prototype, "disabled", void 0);
        return NzInputDirective;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NzInputDirective, [{
            type: core.Directive,
            args: [{
                    selector: '[nz-input]',
                    exportAs: 'nzInput',
                    host: {
                        '[class.ant-input-disabled]': 'disabled',
                        '[class.ant-input-lg]': "nzSize === 'large'",
                        '[class.ant-input-sm]': "nzSize === 'small'"
                    }
                }]
        }], function () { return [{ type: core.Renderer2 }, { type: core.ElementRef }]; }, { nzSize: [{
                type: core.Input
            }], disabled: [{
                type: core.Input
            }] }); })();

    function NzInputGroupComponent_span_0_span_1_i_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelement(0, "i", 10);
    } if (rf & 2) {
        var ctx_r516 = core.ɵɵnextContext(3);
        core.ɵɵproperty("nzType", ctx_r516.nzAddOnBeforeIcon);
    } }
    function NzInputGroupComponent_span_0_span_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵtext(1);
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var ctx_r517 = core.ɵɵnextContext(3);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate(ctx_r517.nzAddOnBefore);
    } }
    function NzInputGroupComponent_span_0_span_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "span", 7);
        core.ɵɵtemplate(1, NzInputGroupComponent_span_0_span_1_i_1_Template, 1, 1, "i", 8);
        core.ɵɵtemplate(2, NzInputGroupComponent_span_0_span_1_ng_container_2_Template, 2, 1, "ng-container", 9);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r512 = core.ɵɵnextContext(2);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", ctx_r512.nzAddOnBeforeIcon);
        core.ɵɵadvance(1);
        core.ɵɵproperty("nzStringTemplateOutlet", ctx_r512.nzAddOnBefore);
    } }
    function NzInputGroupComponent_span_0_ng_container_2_1_ng_template_0_Template(rf, ctx) { }
    function NzInputGroupComponent_span_0_ng_container_2_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵtemplate(0, NzInputGroupComponent_span_0_ng_container_2_1_ng_template_0_Template, 0, 0, "ng-template");
    } }
    function NzInputGroupComponent_span_0_ng_container_2_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵtemplate(1, NzInputGroupComponent_span_0_ng_container_2_1_Template, 1, 0, undefined, 11);
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        core.ɵɵnextContext(2);
        var _r510 = core.ɵɵreference(6);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngTemplateOutlet", _r510);
    } }
    function NzInputGroupComponent_span_0_span_3_1_ng_template_0_Template(rf, ctx) { }
    function NzInputGroupComponent_span_0_span_3_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵtemplate(0, NzInputGroupComponent_span_0_span_3_1_ng_template_0_Template, 0, 0, "ng-template");
    } }
    function NzInputGroupComponent_span_0_span_3_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "span", 12);
        core.ɵɵtemplate(1, NzInputGroupComponent_span_0_span_3_1_Template, 1, 0, undefined, 11);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r514 = core.ɵɵnextContext(2);
        var _r507 = core.ɵɵreference(3);
        core.ɵɵclassProp("ant-input-affix-wrapper-sm", ctx_r514.isSmall)("ant-input-affix-wrapper-lg", ctx_r514.isLarge);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngTemplateOutlet", _r507);
    } }
    function NzInputGroupComponent_span_0_span_4_i_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelement(0, "i", 10);
    } if (rf & 2) {
        var ctx_r522 = core.ɵɵnextContext(3);
        core.ɵɵproperty("nzType", ctx_r522.nzAddOnAfterIcon);
    } }
    function NzInputGroupComponent_span_0_span_4_ng_container_2_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵtext(1);
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var ctx_r523 = core.ɵɵnextContext(3);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate(ctx_r523.nzAddOnAfter);
    } }
    function NzInputGroupComponent_span_0_span_4_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "span", 7);
        core.ɵɵtemplate(1, NzInputGroupComponent_span_0_span_4_i_1_Template, 1, 1, "i", 8);
        core.ɵɵtemplate(2, NzInputGroupComponent_span_0_span_4_ng_container_2_Template, 2, 1, "ng-container", 9);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r515 = core.ɵɵnextContext(2);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", ctx_r515.nzAddOnAfterIcon);
        core.ɵɵadvance(1);
        core.ɵɵproperty("nzStringTemplateOutlet", ctx_r515.nzAddOnAfter);
    } }
    function NzInputGroupComponent_span_0_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "span", 4);
        core.ɵɵtemplate(1, NzInputGroupComponent_span_0_span_1_Template, 3, 2, "span", 5);
        core.ɵɵtemplate(2, NzInputGroupComponent_span_0_ng_container_2_Template, 2, 1, "ng-container", 1);
        core.ɵɵtemplate(3, NzInputGroupComponent_span_0_span_3_Template, 2, 3, "span", 6);
        core.ɵɵtemplate(4, NzInputGroupComponent_span_0_span_4_Template, 3, 2, "span", 5);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r505 = core.ɵɵnextContext();
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", ctx_r505.nzAddOnBefore || ctx_r505.nzAddOnBeforeIcon);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", !ctx_r505.isAffix);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", ctx_r505.isAffix);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", ctx_r505.nzAddOnAfter || ctx_r505.nzAddOnAfterIcon);
    } }
    function NzInputGroupComponent_ng_container_1_1_ng_template_0_Template(rf, ctx) { }
    function NzInputGroupComponent_ng_container_1_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵtemplate(0, NzInputGroupComponent_ng_container_1_1_ng_template_0_Template, 0, 0, "ng-template");
    } }
    function NzInputGroupComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵtemplate(1, NzInputGroupComponent_ng_container_1_1_Template, 1, 0, undefined, 11);
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        core.ɵɵnextContext();
        var _r507 = core.ɵɵreference(3);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngTemplateOutlet", _r507);
    } }
    function NzInputGroupComponent_ng_template_2_span_0_i_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelement(0, "i", 17);
    } if (rf & 2) {
        var ctx_r529 = core.ɵɵnextContext(3);
        core.ɵɵproperty("nzType", ctx_r529.nzPrefixIcon);
    } }
    function NzInputGroupComponent_ng_template_2_span_0_ng_container_2_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵtext(1);
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var ctx_r530 = core.ɵɵnextContext(3);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate(ctx_r530.nzPrefix);
    } }
    function NzInputGroupComponent_ng_template_2_span_0_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "span", 15);
        core.ɵɵtemplate(1, NzInputGroupComponent_ng_template_2_span_0_i_1_Template, 1, 1, "i", 16);
        core.ɵɵtemplate(2, NzInputGroupComponent_ng_template_2_span_0_ng_container_2_Template, 2, 1, "ng-container", 9);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r526 = core.ɵɵnextContext(2);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", ctx_r526.nzPrefixIcon);
        core.ɵɵadvance(1);
        core.ɵɵproperty("nzStringTemplateOutlet", ctx_r526.nzPrefix);
    } }
    function NzInputGroupComponent_ng_template_2_1_ng_template_0_Template(rf, ctx) { }
    function NzInputGroupComponent_ng_template_2_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵtemplate(0, NzInputGroupComponent_ng_template_2_1_ng_template_0_Template, 0, 0, "ng-template");
    } }
    function NzInputGroupComponent_ng_template_2_span_2_i_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelement(0, "i", 10);
    } if (rf & 2) {
        var ctx_r532 = core.ɵɵnextContext(3);
        core.ɵɵproperty("nzType", ctx_r532.nzSuffixIcon);
    } }
    function NzInputGroupComponent_ng_template_2_span_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵtext(1);
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var ctx_r533 = core.ɵɵnextContext(3);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate(ctx_r533.nzSuffix);
    } }
    function NzInputGroupComponent_ng_template_2_span_2_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "span", 18);
        core.ɵɵtemplate(1, NzInputGroupComponent_ng_template_2_span_2_i_1_Template, 1, 1, "i", 8);
        core.ɵɵtemplate(2, NzInputGroupComponent_ng_template_2_span_2_ng_container_2_Template, 2, 1, "ng-container", 9);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r528 = core.ɵɵnextContext(2);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", ctx_r528.nzSuffixIcon);
        core.ɵɵadvance(1);
        core.ɵɵproperty("nzStringTemplateOutlet", ctx_r528.nzSuffix);
    } }
    function NzInputGroupComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵtemplate(0, NzInputGroupComponent_ng_template_2_span_0_Template, 3, 2, "span", 13);
        core.ɵɵtemplate(1, NzInputGroupComponent_ng_template_2_1_Template, 1, 0, undefined, 11);
        core.ɵɵtemplate(2, NzInputGroupComponent_ng_template_2_span_2_Template, 3, 2, "span", 14);
    } if (rf & 2) {
        var ctx_r508 = core.ɵɵnextContext();
        var _r510 = core.ɵɵreference(6);
        core.ɵɵproperty("ngIf", ctx_r508.nzPrefix || ctx_r508.nzPrefixIcon);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngTemplateOutlet", _r510);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", ctx_r508.nzSuffix || ctx_r508.nzSuffixIcon);
    } }
    function NzInputGroupComponent_ng_container_4_1_ng_template_0_Template(rf, ctx) { }
    function NzInputGroupComponent_ng_container_4_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵtemplate(0, NzInputGroupComponent_ng_container_4_1_ng_template_0_Template, 0, 0, "ng-template");
    } }
    function NzInputGroupComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵtemplate(1, NzInputGroupComponent_ng_container_4_1_Template, 1, 0, undefined, 11);
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        core.ɵɵnextContext();
        var _r510 = core.ɵɵreference(6);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngTemplateOutlet", _r510);
    } }
    function NzInputGroupComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵprojection(0);
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
        /** @nocollapse */ NzInputGroupComponent.ɵcmp = core.ɵɵdefineComponent({ type: NzInputGroupComponent, selectors: [["nz-input-group"]], contentQueries: function NzInputGroupComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
                core.ɵɵcontentQuery(dirIndex, NzInputDirective, false);
            } if (rf & 2) {
                var _t;
                core.ɵɵqueryRefresh(_t = core.ɵɵloadQuery()) && (ctx.listOfNzInputDirective = _t);
            } }, hostBindings: function NzInputGroupComponent_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
                core.ɵɵallocHostVars(14);
            } if (rf & 2) {
                core.ɵɵclassProp("ant-input-group-compact", ctx.nzCompact)("ant-input-search-enter-button", ctx.nzSearch)("ant-input-search", ctx.nzSearch)("ant-input-search-sm", ctx.isSmallSearch)("ant-input-affix-wrapper", ctx.isAffixWrapper)("ant-input-group-wrapper", ctx.isAddOn)("ant-input-group", ctx.isGroup)("ant-input-group-lg", ctx.isLargeGroup)("ant-input-group-wrapper-lg", ctx.isLargeGroupWrapper)("ant-input-affix-wrapper-lg", ctx.isLargeAffix)("ant-input-search-lg", ctx.isLargeSearch)("ant-input-group-sm", ctx.isSmallGroup)("ant-input-affix-wrapper-sm", ctx.isSmallAffix)("ant-input-group-wrapper-sm", ctx.isSmallGroupWrapper);
            } }, inputs: { nzAddOnBeforeIcon: "nzAddOnBeforeIcon", nzAddOnAfterIcon: "nzAddOnAfterIcon", nzPrefixIcon: "nzPrefixIcon", nzSuffixIcon: "nzSuffixIcon", nzAddOnBefore: "nzAddOnBefore", nzAddOnAfter: "nzAddOnAfter", nzPrefix: "nzPrefix", nzSuffix: "nzSuffix", nzSearch: "nzSearch", nzCompact: "nzCompact", nzSize: "nzSize" }, exportAs: ["nzInputGroup"], ngContentSelectors: _c0, decls: 7, vars: 3, consts: [["class", "ant-input-wrapper ant-input-group", 4, "ngIf"], [4, "ngIf"], ["affixTemplate", ""], ["contentTemplate", ""], [1, "ant-input-wrapper", "ant-input-group"], ["class", "ant-input-group-addon", 4, "ngIf"], ["class", "ant-input-affix-wrapper", 3, "ant-input-affix-wrapper-sm", "ant-input-affix-wrapper-lg", 4, "ngIf"], [1, "ant-input-group-addon"], ["nz-icon", "", 3, "nzType", 4, "ngIf"], [4, "nzStringTemplateOutlet"], ["nz-icon", "", 3, "nzType"], [4, "ngTemplateOutlet"], [1, "ant-input-affix-wrapper"], ["class", "ant-input-prefix", 4, "ngIf"], ["class", "ant-input-suffix", 4, "ngIf"], [1, "ant-input-prefix"], ["nz-icon", "", "style", "color: rgba(0, 0, 0, 0.25)", 3, "nzType", 4, "ngIf"], ["nz-icon", "", 2, "color", "rgba(0, 0, 0, 0.25)", 3, "nzType"], [1, "ant-input-suffix"]], template: function NzInputGroupComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵprojectionDef();
                core.ɵɵtemplate(0, NzInputGroupComponent_span_0_Template, 5, 4, "span", 0);
                core.ɵɵtemplate(1, NzInputGroupComponent_ng_container_1_Template, 2, 1, "ng-container", 1);
                core.ɵɵtemplate(2, NzInputGroupComponent_ng_template_2_Template, 3, 3, "ng-template", null, 2, core.ɵɵtemplateRefExtractor);
                core.ɵɵtemplate(4, NzInputGroupComponent_ng_container_4_Template, 2, 1, "ng-container", 1);
                core.ɵɵtemplate(5, NzInputGroupComponent_ng_template_5_Template, 1, 0, "ng-template", null, 3, core.ɵɵtemplateRefExtractor);
            } if (rf & 2) {
                core.ɵɵproperty("ngIf", ctx.isAddOn);
                core.ɵɵadvance(1);
                core.ɵɵproperty("ngIf", ctx.isAffix && !ctx.isAddOn);
                core.ɵɵadvance(3);
                core.ɵɵproperty("ngIf", ctx.isGroup);
            } }, directives: [common.NgIf, core$1.NzStringTemplateOutletDirective, icon.NzIconDirective, common.NgTemplateOutlet], encapsulation: 2, changeDetection: 0 });
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzInputGroupComponent.prototype, "nzSearch", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzInputGroupComponent.prototype, "nzCompact", void 0);
        return NzInputGroupComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NzInputGroupComponent, [{
            type: core.Component,
            args: [{
                    selector: 'nz-input-group',
                    exportAs: 'nzInputGroup',
                    preserveWhitespaces: false,
                    encapsulation: core.ViewEncapsulation.None,
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
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
                type: core.ContentChildren,
                args: [NzInputDirective]
            }], nzAddOnBeforeIcon: [{
                type: core.Input
            }], nzAddOnAfterIcon: [{
                type: core.Input
            }], nzPrefixIcon: [{
                type: core.Input
            }], nzSuffixIcon: [{
                type: core.Input
            }], nzAddOnBefore: [{
                type: core.Input
            }], nzAddOnAfter: [{
                type: core.Input
            }], nzPrefix: [{
                type: core.Input
            }], nzSuffix: [{
                type: core.Input
            }], nzSearch: [{
                type: core.Input
            }], nzCompact: [{
                type: core.Input
            }], nzSize: [{
                type: core.Input
            }] }); })();

    /**
     * @license
     * Copyright Alibaba.com All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    var _c0$1 = ["rows", "1"];
    function isAutoSizeType(value) {
        return typeof value !== 'string' && typeof value !== 'boolean' && (!!value.maxRows || !!value.minRows);
    }
    var NzAutosizeDirective = /** @class */ (function () {
        function NzAutosizeDirective(elementRef, ngZone, platform, nzDomEventService) {
            this.elementRef = elementRef;
            this.ngZone = ngZone;
            this.platform = platform;
            this.nzDomEventService = nzDomEventService;
            this.autosize = false;
            this.el = this.elementRef.nativeElement;
            this.destroy$ = new rxjs.Subject();
            this.inputGap = 10;
        }
        Object.defineProperty(NzAutosizeDirective.prototype, "nzAutosize", {
            get: function () {
                return this.autosize;
            },
            set: function (value) {
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
            },
            enumerable: true,
            configurable: true
        });
        NzAutosizeDirective.prototype.resizeToFitContent = function (force) {
            var _this = this;
            if (force === void 0) { force = false; }
            this.cacheTextareaLineHeight();
            // If we haven't determined the line-height yet, we know we're still hidden and there's no point
            // in checking the height of the textarea.
            if (!this.cachedLineHeight) {
                return;
            }
            var textarea = this.el;
            var value = textarea.value;
            // Only resize if the value or minRows have changed since these calculations can be expensive.
            if (!force && this.minRows === this.previousMinRows && value === this.previousValue) {
                return;
            }
            var placeholderText = textarea.placeholder;
            // Reset the textarea height to auto in order to shrink back to its default size.
            // Also temporarily force overflow:hidden, so scroll bars do not interfere with calculations.
            // Long placeholders that are wider than the textarea width may lead to a bigger scrollHeight
            // value. To ensure that the scrollHeight is not bigger than the content, the placeholders
            // need to be removed temporarily.
            textarea.classList.add('cdk-textarea-autosize-measuring');
            textarea.placeholder = '';
            var height = Math.round((textarea.scrollHeight - this.inputGap) / this.cachedLineHeight) * this.cachedLineHeight + this.inputGap;
            // Use the scrollHeight to know how large the textarea *would* be if fit its entire value.
            textarea.style.height = height + "px";
            textarea.classList.remove('cdk-textarea-autosize-measuring');
            textarea.placeholder = placeholderText;
            // On Firefox resizing the textarea will prevent it from scrolling to the caret position.
            // We need to re-set the selection in order for it to scroll to the proper position.
            if (typeof requestAnimationFrame !== 'undefined') {
                this.ngZone.runOutsideAngular(function () {
                    return requestAnimationFrame(function () {
                        var selectionStart = textarea.selectionStart, selectionEnd = textarea.selectionEnd;
                        // IE will throw an "Unspecified error" if we try to set the selection range after the
                        // element has been removed from the DOM. Assert that the directive hasn't been destroyed
                        // between the time we requested the animation frame and when it was executed.
                        // Also note that we have to assert that the textarea is focused before we set the
                        // selection range. Setting the selection range on a non-focused textarea will cause
                        // it to receive focus on IE and Edge.
                        if (!_this.destroy$.isStopped && document.activeElement === textarea) {
                            textarea.setSelectionRange(selectionStart, selectionEnd);
                        }
                    });
                });
            }
            this.previousValue = value;
            this.previousMinRows = this.minRows;
        };
        NzAutosizeDirective.prototype.cacheTextareaLineHeight = function () {
            if (this.cachedLineHeight >= 0 || !this.el.parentNode) {
                return;
            }
            // Use a clone element because we have to override some styles.
            var textareaClone = this.el.cloneNode(false);
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
        };
        NzAutosizeDirective.prototype.setMinHeight = function () {
            var minHeight = this.minRows && this.cachedLineHeight ? this.minRows * this.cachedLineHeight + this.inputGap + "px" : null;
            if (minHeight) {
                this.el.style.minHeight = minHeight;
            }
        };
        NzAutosizeDirective.prototype.setMaxHeight = function () {
            var maxHeight = this.maxRows && this.cachedLineHeight ? this.maxRows * this.cachedLineHeight + this.inputGap + "px" : null;
            if (maxHeight) {
                this.el.style.maxHeight = maxHeight;
            }
        };
        NzAutosizeDirective.prototype.noopInputHandler = function () {
            // no-op handler that ensures we're running change detection on input events.
        };
        NzAutosizeDirective.prototype.ngAfterViewInit = function () {
            var _this = this;
            if (this.nzAutosize && this.platform.isBrowser) {
                this.resizeToFitContent();
                this.nzDomEventService
                    .registerResizeListener()
                    .pipe(operators.takeUntil(this.destroy$), operators.finalize(function () { return _this.nzDomEventService.unregisterResizeListener(); }))
                    .subscribe(function () { return _this.resizeToFitContent(true); });
            }
        };
        NzAutosizeDirective.prototype.ngOnDestroy = function () {
            this.destroy$.next();
            this.destroy$.complete();
        };
        NzAutosizeDirective.prototype.ngDoCheck = function () {
            if (this.nzAutosize && this.platform.isBrowser) {
                this.resizeToFitContent();
            }
        };
        /** @nocollapse */ NzAutosizeDirective.ɵfac = function NzAutosizeDirective_Factory(t) { return new (t || NzAutosizeDirective)(core.ɵɵdirectiveInject(core.ElementRef), core.ɵɵdirectiveInject(core.NgZone), core.ɵɵdirectiveInject(platform.Platform), core.ɵɵdirectiveInject(core$1.NzDomEventService)); };
        /** @nocollapse */ NzAutosizeDirective.ɵdir = core.ɵɵdefineDirective({ type: NzAutosizeDirective, selectors: [["textarea", "nzAutosize", ""]], hostBindings: function NzAutosizeDirective_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
                core.ɵɵlistener("input", function NzAutosizeDirective_input_HostBindingHandler($event) { return ctx.noopInputHandler(); });
                core.ɵɵelementHostAttrs(_c0$1);
            } }, inputs: { nzAutosize: "nzAutosize" }, exportAs: ["nzAutosize"] });
        return NzAutosizeDirective;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NzAutosizeDirective, [{
            type: core.Directive,
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
        }], function () { return [{ type: core.ElementRef }, { type: core.NgZone }, { type: platform.Platform }, { type: core$1.NzDomEventService }]; }, { nzAutosize: [{
                type: core.Input
            }] }); })();

    /**
     * @license
     * Copyright Alibaba.com All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    var NzInputModule = /** @class */ (function () {
        function NzInputModule() {
        }
        /** @nocollapse */ NzInputModule.ɵmod = core.ɵɵdefineNgModule({ type: NzInputModule });
        /** @nocollapse */ NzInputModule.ɵinj = core.ɵɵdefineInjector({ factory: function NzInputModule_Factory(t) { return new (t || NzInputModule)(); }, imports: [[common.CommonModule, icon.NzIconModule, platform.PlatformModule, core$1.NzAddOnModule]] });
        return NzInputModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && core.ɵɵsetNgModuleScope(NzInputModule, { declarations: [NzInputDirective, NzInputGroupComponent, NzAutosizeDirective], imports: [common.CommonModule, icon.NzIconModule, platform.PlatformModule, core$1.NzAddOnModule], exports: [NzInputDirective, NzInputGroupComponent, NzAutosizeDirective] }); })();
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NzInputModule, [{
            type: core.NgModule,
            args: [{
                    declarations: [NzInputDirective, NzInputGroupComponent, NzAutosizeDirective],
                    exports: [NzInputDirective, NzInputGroupComponent, NzAutosizeDirective],
                    imports: [common.CommonModule, icon.NzIconModule, platform.PlatformModule, core$1.NzAddOnModule]
                }]
        }], null, null); })();

    exports.NzAutosizeDirective = NzAutosizeDirective;
    exports.NzInputDirective = NzInputDirective;
    exports.NzInputGroupComponent = NzInputGroupComponent;
    exports.NzInputModule = NzInputModule;
    exports.isAutoSizeType = isAutoSizeType;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ng-zorro-antd-input.umd.js.map
