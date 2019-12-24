(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs'), require('rxjs/operators'), require('ng-zorro-antd/core'), require('@angular/common'), require('ng-zorro-antd/icon')) :
    typeof define === 'function' && define.amd ? define('ng-zorro-antd/steps', ['exports', '@angular/core', 'rxjs', 'rxjs/operators', 'ng-zorro-antd/core', '@angular/common', 'ng-zorro-antd/icon'], factory) :
    (global = global || self, factory((global['ng-zorro-antd'] = global['ng-zorro-antd'] || {}, global['ng-zorro-antd'].steps = {}), global.ng.core, global.rxjs, global.rxjs.operators, global['ng-zorro-antd'].core, global.ng.common, global['ng-zorro-antd'].icon));
}(this, (function (exports, core, rxjs, operators, core$1, common, icon) { 'use strict';

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

    var _c0 = ["processDotTemplate"];
    function NzStepComponent_div_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelement(0, "div", 9);
    } }
    function NzStepComponent_ng_template_3_span_0_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "span", 11);
        core.ɵɵelement(1, "i", 12);
        core.ɵɵelementEnd();
    } }
    function NzStepComponent_ng_template_3_span_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "span", 11);
        core.ɵɵelement(1, "i", 13);
        core.ɵɵelementEnd();
    } }
    function NzStepComponent_ng_template_3_span_2_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "span", 11);
        core.ɵɵtext(1);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r788 = core.ɵɵnextContext(2);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate(ctx_r788.index + 1);
    } }
    function NzStepComponent_ng_template_3_span_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵelement(1, "i", 16);
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var ctx_r790 = core.ɵɵnextContext(3);
        core.ɵɵadvance(1);
        core.ɵɵproperty("nzType", !ctx_r790.oldAPIIcon && ctx_r790.nzIcon)("ngClass", ctx_r790.oldAPIIcon && ctx_r790.nzIcon);
    } }
    function NzStepComponent_ng_template_3_span_3_ng_template_2_ng_template_0_Template(rf, ctx) { }
    function NzStepComponent_ng_template_3_span_3_ng_template_2_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵtemplate(0, NzStepComponent_ng_template_3_span_3_ng_template_2_ng_template_0_Template, 0, 0, "ng-template", 17);
    } if (rf & 2) {
        var ctx_r792 = core.ɵɵnextContext(3);
        core.ɵɵproperty("ngTemplateOutlet", ctx_r792.nzIcon);
    } }
    function NzStepComponent_ng_template_3_span_3_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "span", 11);
        core.ɵɵtemplate(1, NzStepComponent_ng_template_3_span_3_ng_container_1_Template, 2, 2, "ng-container", 14);
        core.ɵɵtemplate(2, NzStepComponent_ng_template_3_span_3_ng_template_2_Template, 1, 1, "ng-template", null, 15, core.ɵɵtemplateRefExtractor);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var _r791 = core.ɵɵreference(3);
        var ctx_r789 = core.ɵɵnextContext(2);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", ctx_r789.isIconString)("ngIfElse", _r791);
    } }
    function NzStepComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵtemplate(0, NzStepComponent_ng_template_3_span_0_Template, 2, 0, "span", 10);
        core.ɵɵtemplate(1, NzStepComponent_ng_template_3_span_1_Template, 2, 0, "span", 10);
        core.ɵɵtemplate(2, NzStepComponent_ng_template_3_span_2_Template, 2, 1, "span", 10);
        core.ɵɵtemplate(3, NzStepComponent_ng_template_3_span_3_Template, 4, 2, "span", 10);
    } if (rf & 2) {
        var ctx_r781 = core.ɵɵnextContext();
        core.ɵɵproperty("ngIf", ctx_r781.nzStatus === "finish" && !ctx_r781.nzIcon);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", ctx_r781.nzStatus === "error");
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", (ctx_r781.nzStatus === "process" || ctx_r781.nzStatus === "wait") && !ctx_r781.nzIcon);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", ctx_r781.nzIcon);
    } }
    function NzStepComponent_ng_template_4_ng_template_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelement(0, "span", 20);
    } }
    function NzStepComponent_ng_template_4_ng_template_3_Template(rf, ctx) { }
    var _c1 = function (a0, a1, a2) { return { $implicit: a0, status: a1, index: a2 }; };
    function NzStepComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "span", 11);
        core.ɵɵtemplate(1, NzStepComponent_ng_template_4_ng_template_1_Template, 1, 0, "ng-template", null, 18, core.ɵɵtemplateRefExtractor);
        core.ɵɵtemplate(3, NzStepComponent_ng_template_4_ng_template_3_Template, 0, 0, "ng-template", 19);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var _r794 = core.ɵɵreference(2);
        var ctx_r782 = core.ɵɵnextContext();
        core.ɵɵadvance(3);
        core.ɵɵproperty("ngTemplateOutlet", ctx_r782.customProcessTemplate || _r794)("ngTemplateOutletContext", core.ɵɵpureFunction3(2, _c1, _r794, ctx_r782.nzStatus, ctx_r782.index));
    } }
    function NzStepComponent_ng_container_7_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵtext(1);
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var ctx_r783 = core.ɵɵnextContext();
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate(ctx_r783.nzTitle);
    } }
    function NzStepComponent_div_8_ng_container_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵtext(1);
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var ctx_r797 = core.ɵɵnextContext(2);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate(ctx_r797.nzSubtitle);
    } }
    function NzStepComponent_div_8_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div", 21);
        core.ɵɵtemplate(1, NzStepComponent_div_8_ng_container_1_Template, 2, 1, "ng-container", 6);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r784 = core.ɵɵnextContext();
        core.ɵɵadvance(1);
        core.ɵɵproperty("nzStringTemplateOutlet", ctx_r784.nzSubtitle);
    } }
    function NzStepComponent_ng_container_10_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵtext(1);
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var ctx_r785 = core.ɵɵnextContext();
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate(ctx_r785.nzDescription);
    } }
    var NzStepComponent = /** @class */ (function () {
        function NzStepComponent(cdr, renderer, elementRef) {
            this.cdr = cdr;
            this.nzDisabled = false;
            this.isCustomStatus = false;
            this._status = 'wait';
            this.oldAPIIcon = true;
            this.isIconString = true;
            this.direction = 'horizontal';
            this.index = 0;
            this.last = false;
            this.outStatus = 'process';
            this.showProcessDot = false;
            this.clickable = false;
            this.click$ = new rxjs.Subject();
            this._currentIndex = 0;
            renderer.addClass(elementRef.nativeElement, 'ant-steps-item');
        }
        Object.defineProperty(NzStepComponent.prototype, "nzStatus", {
            get: function () {
                return this._status;
            },
            set: function (status) {
                this._status = status;
                this.isCustomStatus = true;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzStepComponent.prototype, "nzIcon", {
            get: function () {
                return this._icon;
            },
            set: function (value) {
                if (!(value instanceof core.TemplateRef)) {
                    this.isIconString = true;
                    this.oldAPIIcon = typeof value === 'string' && value.indexOf('anticon') > -1;
                }
                else {
                    this.isIconString = false;
                }
                this._icon = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzStepComponent.prototype, "currentIndex", {
            get: function () {
                return this._currentIndex;
            },
            set: function (current) {
                this._currentIndex = current;
                if (!this.isCustomStatus) {
                    this._status = current > this.index ? 'finish' : current === this.index ? this.outStatus || '' : 'wait';
                }
            },
            enumerable: true,
            configurable: true
        });
        NzStepComponent.prototype.onClick = function () {
            if (this.clickable && this.currentIndex !== this.index && !this.nzDisabled) {
                this.click$.next(this.index);
            }
        };
        NzStepComponent.prototype.markForCheck = function () {
            this.cdr.markForCheck();
        };
        NzStepComponent.prototype.ngOnDestroy = function () {
            this.click$.complete();
        };
        /** @nocollapse */ NzStepComponent.ɵfac = function NzStepComponent_Factory(t) { return new (t || NzStepComponent)(core.ɵɵdirectiveInject(core.ChangeDetectorRef), core.ɵɵdirectiveInject(core.Renderer2), core.ɵɵdirectiveInject(core.ElementRef)); };
        /** @nocollapse */ NzStepComponent.ɵcmp = core.ɵɵdefineComponent({ type: NzStepComponent, selectors: [["nz-step"]], viewQuery: function NzStepComponent_Query(rf, ctx) { if (rf & 1) {
                core.ɵɵviewQuery(_c0, true);
            } if (rf & 2) {
                var _t;
                core.ɵɵqueryRefresh(_t = core.ɵɵloadQuery()) && (ctx.processDotTemplate = _t.first);
            } }, hostBindings: function NzStepComponent_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
                core.ɵɵallocHostVars(8);
            } if (rf & 2) {
                core.ɵɵclassProp("ant-steps-item-wait", ctx.nzStatus === "wait")("ant-steps-item-process", ctx.nzStatus === "process")("ant-steps-item-finish", ctx.nzStatus === "finish")("ant-steps-item-error", ctx.nzStatus === "error")("ant-steps-item-active", ctx.currentIndex === ctx.index)("ant-steps-item-disabled", ctx.nzDisabled)("ant-steps-item-custom", !!ctx.nzIcon)("ant-steps-next-error", ctx.outStatus === "error" && ctx.currentIndex === ctx.index + 1);
            } }, inputs: { nzTitle: "nzTitle", nzSubtitle: "nzSubtitle", nzDescription: "nzDescription", nzDisabled: "nzDisabled", nzStatus: "nzStatus", nzIcon: "nzIcon" }, exportAs: ["nzStep"], decls: 11, vars: 8, consts: [[1, "ant-steps-item-container", 3, "tabindex", "click"], ["class", "ant-steps-item-tail", 4, "ngIf"], [1, "ant-steps-item-icon"], [3, "ngIf"], [1, "ant-steps-item-content"], [1, "ant-steps-item-title"], [4, "nzStringTemplateOutlet"], ["class", "ant-steps-item-subtitle", 4, "ngIf"], [1, "ant-steps-item-description"], [1, "ant-steps-item-tail"], ["class", "ant-steps-icon", 4, "ngIf"], [1, "ant-steps-icon"], ["nz-icon", "", "nzType", "check"], ["nz-icon", "", "nzType", "close"], [4, "ngIf", "ngIfElse"], ["iconTemplate", ""], ["nz-icon", "", 3, "nzType", "ngClass"], [3, "ngTemplateOutlet"], ["processDotTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "ant-steps-icon-dot"], [1, "ant-steps-item-subtitle"]], template: function NzStepComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵelementStart(0, "div", 0);
                core.ɵɵlistener("click", function NzStepComponent_Template_div_click_0_listener($event) { return ctx.onClick(); });
                core.ɵɵtemplate(1, NzStepComponent_div_1_Template, 1, 0, "div", 1);
                core.ɵɵelementStart(2, "div", 2);
                core.ɵɵtemplate(3, NzStepComponent_ng_template_3_Template, 4, 4, "ng-template", 3);
                core.ɵɵtemplate(4, NzStepComponent_ng_template_4_Template, 4, 6, "ng-template", 3);
                core.ɵɵelementEnd();
                core.ɵɵelementStart(5, "div", 4);
                core.ɵɵelementStart(6, "div", 5);
                core.ɵɵtemplate(7, NzStepComponent_ng_container_7_Template, 2, 1, "ng-container", 6);
                core.ɵɵtemplate(8, NzStepComponent_div_8_Template, 2, 1, "div", 7);
                core.ɵɵelementEnd();
                core.ɵɵelementStart(9, "div", 8);
                core.ɵɵtemplate(10, NzStepComponent_ng_container_10_Template, 2, 1, "ng-container", 6);
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
            } if (rf & 2) {
                core.ɵɵproperty("tabindex", ctx.clickable && !ctx.nzDisabled ? 0 : null);
                core.ɵɵattribute("role", ctx.clickable && !ctx.nzDisabled ? "button" : null);
                core.ɵɵadvance(1);
                core.ɵɵproperty("ngIf", ctx.last !== true);
                core.ɵɵadvance(2);
                core.ɵɵproperty("ngIf", !ctx.showProcessDot);
                core.ɵɵadvance(1);
                core.ɵɵproperty("ngIf", ctx.showProcessDot);
                core.ɵɵadvance(3);
                core.ɵɵproperty("nzStringTemplateOutlet", ctx.nzTitle);
                core.ɵɵadvance(1);
                core.ɵɵproperty("ngIf", ctx.nzSubtitle);
                core.ɵɵadvance(2);
                core.ɵɵproperty("nzStringTemplateOutlet", ctx.nzDescription);
            } }, directives: [common.NgIf, core$1.NzStringTemplateOutletDirective, icon.NzIconDirective, common.NgClass, common.NgTemplateOutlet], encapsulation: 2, changeDetection: 0 });
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzStepComponent.prototype, "nzDisabled", void 0);
        return NzStepComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NzStepComponent, [{
            type: core.Component,
            args: [{
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    encapsulation: core.ViewEncapsulation.None,
                    selector: 'nz-step',
                    exportAs: 'nzStep',
                    preserveWhitespaces: false,
                    templateUrl: './nz-step.component.html',
                    host: {
                        '[class.ant-steps-item-wait]': 'nzStatus === "wait"',
                        '[class.ant-steps-item-process]': 'nzStatus === "process"',
                        '[class.ant-steps-item-finish]': 'nzStatus === "finish"',
                        '[class.ant-steps-item-error]': 'nzStatus === "error"',
                        '[class.ant-steps-item-active]': 'currentIndex === index',
                        '[class.ant-steps-item-disabled]': 'nzDisabled',
                        '[class.ant-steps-item-custom]': '!!nzIcon',
                        '[class.ant-steps-next-error]': '(outStatus === "error") && (currentIndex === index + 1)'
                    }
                }]
        }], function () { return [{ type: core.ChangeDetectorRef }, { type: core.Renderer2 }, { type: core.ElementRef }]; }, { processDotTemplate: [{
                type: core.ViewChild,
                args: ['processDotTemplate', { static: false }]
            }], nzTitle: [{
                type: core.Input
            }], nzSubtitle: [{
                type: core.Input
            }], nzDescription: [{
                type: core.Input
            }], nzDisabled: [{
                type: core.Input
            }], nzStatus: [{
                type: core.Input
            }], nzIcon: [{
                type: core.Input
            }] }); })();

    var _c0$1 = ["*"];
    var NzStepsComponent = /** @class */ (function () {
        function NzStepsComponent() {
            this.nzCurrent = 0;
            this.nzDirection = 'horizontal';
            this.nzLabelPlacement = 'horizontal';
            this.nzType = 'default';
            this.nzSize = 'default';
            this.nzStartIndex = 0;
            this.nzStatus = 'process';
            this.nzIndexChange = new core.EventEmitter();
            this.destroy$ = new rxjs.Subject();
            this.showProcessDot = false;
        }
        Object.defineProperty(NzStepsComponent.prototype, "nzProgressDot", {
            set: function (value) {
                if (value instanceof core.TemplateRef) {
                    this.showProcessDot = true;
                    this.customProcessDotTemplate = value;
                }
                else {
                    this.showProcessDot = core$1.toBoolean(value);
                }
                this.updateChildrenSteps();
            },
            enumerable: true,
            configurable: true
        });
        NzStepsComponent.prototype.ngOnChanges = function (changes) {
            if (changes.nzStartIndex || changes.nzDirection || changes.nzStatus || changes.nzCurrent) {
                this.updateChildrenSteps();
            }
            if (changes.nzDirection || changes.nzProgressDot || changes.nzLabelPlacement || changes.nzSize) {
                this.setClassMap();
            }
        };
        NzStepsComponent.prototype.ngOnInit = function () {
            this.setClassMap();
            this.updateChildrenSteps();
        };
        NzStepsComponent.prototype.ngOnDestroy = function () {
            this.destroy$.next();
            this.destroy$.complete();
            if (this.indexChangeSubscription) {
                this.indexChangeSubscription.unsubscribe();
            }
        };
        NzStepsComponent.prototype.ngAfterContentInit = function () {
            var _this = this;
            if (this.steps) {
                this.steps.changes.pipe(operators.startWith(null), operators.takeUntil(this.destroy$)).subscribe(function () {
                    _this.updateChildrenSteps();
                });
            }
        };
        NzStepsComponent.prototype.updateChildrenSteps = function () {
            var _this = this;
            if (this.steps) {
                var length_1 = this.steps.length;
                this.steps.toArray().forEach(function (step, index) {
                    Promise.resolve().then(function () {
                        step.outStatus = _this.nzStatus;
                        step.showProcessDot = _this.showProcessDot;
                        if (_this.customProcessDotTemplate) {
                            step.customProcessTemplate = _this.customProcessDotTemplate;
                        }
                        step.clickable = _this.nzIndexChange.observers.length > 0;
                        step.direction = _this.nzDirection;
                        step.index = index + _this.nzStartIndex;
                        step.currentIndex = _this.nzCurrent;
                        step.last = length_1 === index + 1;
                        step.markForCheck();
                    });
                });
                if (this.indexChangeSubscription) {
                    this.indexChangeSubscription.unsubscribe();
                }
                this.indexChangeSubscription = rxjs.merge.apply(void 0, __spread(this.steps.map(function (step) { return step.click$; }))).subscribe(function (index) { return _this.nzIndexChange.emit(index); });
            }
        };
        NzStepsComponent.prototype.setClassMap = function () {
            var _a;
            this.classMap = (_a = {},
                _a["ant-steps-" + this.nzDirection] = true,
                _a["ant-steps-label-horizontal"] = this.nzDirection === 'horizontal',
                _a["ant-steps-label-vertical"] = (this.showProcessDot || this.nzLabelPlacement === 'vertical') && this.nzDirection === 'horizontal',
                _a["ant-steps-dot"] = this.showProcessDot,
                _a['ant-steps-small'] = this.nzSize === 'small',
                _a['ant-steps-navigation'] = this.nzType === 'navigation',
                _a);
        };
        /** @nocollapse */ NzStepsComponent.ɵfac = function NzStepsComponent_Factory(t) { return new (t || NzStepsComponent)(); };
        /** @nocollapse */ NzStepsComponent.ɵcmp = core.ɵɵdefineComponent({ type: NzStepsComponent, selectors: [["nz-steps"]], contentQueries: function NzStepsComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
                core.ɵɵcontentQuery(dirIndex, NzStepComponent, false);
            } if (rf & 2) {
                var _t;
                core.ɵɵqueryRefresh(_t = core.ɵɵloadQuery()) && (ctx.steps = _t);
            } }, inputs: { nzCurrent: "nzCurrent", nzDirection: "nzDirection", nzLabelPlacement: "nzLabelPlacement", nzType: "nzType", nzSize: "nzSize", nzStartIndex: "nzStartIndex", nzStatus: "nzStatus", nzProgressDot: "nzProgressDot" }, outputs: { nzIndexChange: "nzIndexChange" }, exportAs: ["nzSteps"], features: [core.ɵɵNgOnChangesFeature()], ngContentSelectors: _c0$1, decls: 2, vars: 1, consts: [[1, "ant-steps", 3, "ngClass"]], template: function NzStepsComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵprojectionDef();
                core.ɵɵelementStart(0, "div", 0);
                core.ɵɵprojection(1);
                core.ɵɵelementEnd();
            } if (rf & 2) {
                core.ɵɵproperty("ngClass", ctx.classMap);
            } }, directives: [common.NgClass], encapsulation: 2, changeDetection: 0 });
        return NzStepsComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NzStepsComponent, [{
            type: core.Component,
            args: [{
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    encapsulation: core.ViewEncapsulation.None,
                    preserveWhitespaces: false,
                    selector: 'nz-steps',
                    exportAs: 'nzSteps',
                    templateUrl: './nz-steps.component.html'
                }]
        }], null, { steps: [{
                type: core.ContentChildren,
                args: [NzStepComponent]
            }], nzCurrent: [{
                type: core.Input
            }], nzDirection: [{
                type: core.Input
            }], nzLabelPlacement: [{
                type: core.Input
            }], nzType: [{
                type: core.Input
            }], nzSize: [{
                type: core.Input
            }], nzStartIndex: [{
                type: core.Input
            }], nzStatus: [{
                type: core.Input
            }], nzProgressDot: [{
                type: core.Input
            }], nzIndexChange: [{
                type: core.Output
            }] }); })();

    /**
     * @license
     * Copyright Alibaba.com All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    var NzStepsModule = /** @class */ (function () {
        function NzStepsModule() {
        }
        /** @nocollapse */ NzStepsModule.ɵmod = core.ɵɵdefineNgModule({ type: NzStepsModule });
        /** @nocollapse */ NzStepsModule.ɵinj = core.ɵɵdefineInjector({ factory: function NzStepsModule_Factory(t) { return new (t || NzStepsModule)(); }, imports: [[common.CommonModule, icon.NzIconModule, core$1.NzAddOnModule]] });
        return NzStepsModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && core.ɵɵsetNgModuleScope(NzStepsModule, { declarations: [NzStepsComponent, NzStepComponent], imports: [common.CommonModule, icon.NzIconModule, core$1.NzAddOnModule], exports: [NzStepsComponent, NzStepComponent] }); })();
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NzStepsModule, [{
            type: core.NgModule,
            args: [{
                    imports: [common.CommonModule, icon.NzIconModule, core$1.NzAddOnModule],
                    exports: [NzStepsComponent, NzStepComponent],
                    declarations: [NzStepsComponent, NzStepComponent]
                }]
        }], null, null); })();

    exports.NzStepComponent = NzStepComponent;
    exports.NzStepsComponent = NzStepsComponent;
    exports.NzStepsModule = NzStepsModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ng-zorro-antd-steps.umd.js.map
