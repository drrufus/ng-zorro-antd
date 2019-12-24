(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs'), require('rxjs/operators'), require('ng-zorro-antd/core'), require('ng-zorro-antd/i18n'), require('@angular/common'), require('ng-zorro-antd/icon'), require('ng-zorro-antd/select'), require('@angular/forms')) :
    typeof define === 'function' && define.amd ? define('ng-zorro-antd/pagination', ['exports', '@angular/core', 'rxjs', 'rxjs/operators', 'ng-zorro-antd/core', 'ng-zorro-antd/i18n', '@angular/common', 'ng-zorro-antd/icon', 'ng-zorro-antd/select', '@angular/forms'], factory) :
    (global = global || self, factory((global['ng-zorro-antd'] = global['ng-zorro-antd'] || {}, global['ng-zorro-antd'].pagination = {}), global.ng.core, global.rxjs, global.rxjs.operators, global['ng-zorro-antd'].core, global['ng-zorro-antd'].i18n, global.ng.common, global['ng-zorro-antd'].icon, global['ng-zorro-antd'].select, global.ng.forms));
}(this, (function (exports, core, rxjs, operators, core$1, i18n, common, icon, select, forms) { 'use strict';

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

    var _c0 = ["renderItemTemplate"];
    function NzPaginationComponent_ng_template_0_a_0_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "a", 3);
        core.ɵɵelement(1, "i", 4);
        core.ɵɵelementEnd();
    } }
    function NzPaginationComponent_ng_template_0_a_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "a", 3);
        core.ɵɵelement(1, "i", 5);
        core.ɵɵelementEnd();
    } }
    function NzPaginationComponent_ng_template_0_a_2_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "a");
        core.ɵɵtext(1);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var page_r2134 = core.ɵɵnextContext().page;
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate(page_r2134);
    } }
    function NzPaginationComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵtemplate(0, NzPaginationComponent_ng_template_0_a_0_Template, 2, 0, "a", 2);
        core.ɵɵtemplate(1, NzPaginationComponent_ng_template_0_a_1_Template, 2, 0, "a", 2);
        core.ɵɵtemplate(2, NzPaginationComponent_ng_template_0_a_2_Template, 2, 1, "a", 1);
    } if (rf & 2) {
        var type_r2133 = ctx.$implicit;
        core.ɵɵproperty("ngIf", type_r2133 === "pre");
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", type_r2133 === "next");
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", type_r2133 == "page");
    } }
    function NzPaginationComponent_ng_container_2_ng_container_2_ng_template_2_Template(rf, ctx) { }
    function NzPaginationComponent_ng_container_2_ng_container_2_ng_template_10_Template(rf, ctx) { }
    var _c1 = function () { return { $implicit: "pre" }; };
    var _c2 = function () { return { $implicit: "next" }; };
    function NzPaginationComponent_ng_container_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
        var _r2146 = core.ɵɵgetCurrentView();
        core.ɵɵelementContainerStart(0);
        core.ɵɵelementStart(1, "li", 9);
        core.ɵɵlistener("click", function NzPaginationComponent_ng_container_2_ng_container_2_Template_li_click_1_listener($event) { core.ɵɵrestoreView(_r2146); var ctx_r2145 = core.ɵɵnextContext(2); return ctx_r2145.jumpDiff(0 - 1); });
        core.ɵɵtemplate(2, NzPaginationComponent_ng_container_2_ng_container_2_ng_template_2_Template, 0, 0, "ng-template", 10);
        core.ɵɵelementEnd();
        core.ɵɵelementStart(3, "li", 11);
        core.ɵɵelementStart(4, "input", 12, 13);
        core.ɵɵlistener("keydown.enter", function NzPaginationComponent_ng_container_2_ng_container_2_Template_input_keydown_enter_4_listener($event) { core.ɵɵrestoreView(_r2146); var _r2143 = core.ɵɵreference(5); var ctx_r2147 = core.ɵɵnextContext(2); return ctx_r2147.handleKeyDown($event, _r2143, false); });
        core.ɵɵelementEnd();
        core.ɵɵelementStart(6, "span", 14);
        core.ɵɵtext(7, "/");
        core.ɵɵelementEnd();
        core.ɵɵtext(8);
        core.ɵɵelementEnd();
        core.ɵɵelementStart(9, "li", 15);
        core.ɵɵlistener("click", function NzPaginationComponent_ng_container_2_ng_container_2_Template_li_click_9_listener($event) { core.ɵɵrestoreView(_r2146); var ctx_r2148 = core.ɵɵnextContext(2); return ctx_r2148.jumpDiff(1); });
        core.ɵɵtemplate(10, NzPaginationComponent_ng_container_2_ng_container_2_ng_template_10_Template, 0, 0, "ng-template", 10);
        core.ɵɵelementEnd();
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var ctx_r2139 = core.ɵɵnextContext(2);
        core.ɵɵadvance(1);
        core.ɵɵclassProp("ant-pagination-disabled", ctx_r2139.isFirstIndex);
        core.ɵɵattribute("title", ctx_r2139.locale.prev_page);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngTemplateOutlet", ctx_r2139.itemRender)("ngTemplateOutletContext", core.ɵɵpureFunction0(12, _c1));
        core.ɵɵadvance(1);
        core.ɵɵattribute("title", ctx_r2139.nzPageIndex + "/" + ctx_r2139.lastIndex);
        core.ɵɵadvance(1);
        core.ɵɵproperty("disabled", ctx_r2139.nzDisabled)("value", ctx_r2139.nzPageIndex);
        core.ɵɵadvance(4);
        core.ɵɵtextInterpolate1(" ", ctx_r2139.lastIndex, " ");
        core.ɵɵadvance(1);
        core.ɵɵclassProp("ant-pagination-disabled", ctx_r2139.isLastIndex);
        core.ɵɵattribute("title", ctx_r2139.locale.next_page);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngTemplateOutlet", ctx_r2139.itemRender)("ngTemplateOutletContext", core.ɵɵpureFunction0(13, _c2));
    } }
    function NzPaginationComponent_ng_container_2_ng_template_3_li_0_ng_template_1_Template(rf, ctx) { }
    var _c3 = function (a0, a1) { return { $implicit: a0, range: a1 }; };
    function NzPaginationComponent_ng_container_2_ng_template_3_li_0_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "li", 24);
        core.ɵɵtemplate(1, NzPaginationComponent_ng_container_2_ng_template_3_li_0_ng_template_1_Template, 0, 0, "ng-template", 10);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r2149 = core.ɵɵnextContext(3);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngTemplateOutlet", ctx_r2149.nzShowTotal)("ngTemplateOutletContext", core.ɵɵpureFunction2(2, _c3, ctx_r2149.nzTotal, ctx_r2149.ranges));
    } }
    function NzPaginationComponent_ng_container_2_ng_template_3_ng_template_2_Template(rf, ctx) { }
    function NzPaginationComponent_ng_container_2_ng_template_3_ng_template_4_Template(rf, ctx) { }
    function NzPaginationComponent_ng_container_2_ng_template_3_li_5_Template(rf, ctx) { if (rf & 1) {
        var _r2160 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "li", 25);
        core.ɵɵlistener("click", function NzPaginationComponent_ng_container_2_ng_template_3_li_5_Template_li_click_0_listener($event) { core.ɵɵrestoreView(_r2160); var ctx_r2159 = core.ɵɵnextContext(3); return ctx_r2159.jumpDiff(0 - 5); });
        core.ɵɵelementStart(1, "a", 3);
        core.ɵɵelementStart(2, "div", 26);
        core.ɵɵelement(3, "i", 27);
        core.ɵɵelementStart(4, "span", 28);
        core.ɵɵtext(5, "\u2022\u2022\u2022");
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r2152 = core.ɵɵnextContext(3);
        core.ɵɵattribute("title", ctx_r2152.locale.prev_5);
    } }
    function NzPaginationComponent_ng_container_2_ng_template_3_li_6_ng_template_1_Template(rf, ctx) { }
    var _c4 = function (a1) { return { $implicit: "page", page: a1 }; };
    function NzPaginationComponent_ng_container_2_ng_template_3_li_6_Template(rf, ctx) { if (rf & 1) {
        var _r2164 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "li", 17);
        core.ɵɵlistener("click", function NzPaginationComponent_ng_container_2_ng_template_3_li_6_Template_li_click_0_listener($event) { core.ɵɵrestoreView(_r2164); var page_r2161 = ctx.$implicit; var ctx_r2163 = core.ɵɵnextContext(3); return ctx_r2163.jumpPage(page_r2161); });
        core.ɵɵtemplate(1, NzPaginationComponent_ng_container_2_ng_template_3_li_6_ng_template_1_Template, 0, 0, "ng-template", 10);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var page_r2161 = ctx.$implicit;
        var ctx_r2153 = core.ɵɵnextContext(3);
        core.ɵɵclassProp("ant-pagination-item-active", ctx_r2153.nzPageIndex === page_r2161);
        core.ɵɵattribute("title", page_r2161);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngTemplateOutlet", ctx_r2153.itemRender)("ngTemplateOutletContext", core.ɵɵpureFunction1(4, _c4, page_r2161));
    } }
    function NzPaginationComponent_ng_container_2_ng_template_3_li_7_Template(rf, ctx) { if (rf & 1) {
        var _r2166 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "li", 29);
        core.ɵɵlistener("click", function NzPaginationComponent_ng_container_2_ng_template_3_li_7_Template_li_click_0_listener($event) { core.ɵɵrestoreView(_r2166); var ctx_r2165 = core.ɵɵnextContext(3); return ctx_r2165.jumpDiff(5); });
        core.ɵɵelementStart(1, "a", 3);
        core.ɵɵelementStart(2, "div", 26);
        core.ɵɵelement(3, "i", 30);
        core.ɵɵelementStart(4, "span", 28);
        core.ɵɵtext(5, "\u2022\u2022\u2022");
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r2154 = core.ɵɵnextContext(3);
        core.ɵɵattribute("title", ctx_r2154.locale.next_5);
    } }
    function NzPaginationComponent_ng_container_2_ng_template_3_li_8_ng_template_1_Template(rf, ctx) { }
    function NzPaginationComponent_ng_container_2_ng_template_3_li_8_Template(rf, ctx) { if (rf & 1) {
        var _r2169 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "li", 17);
        core.ɵɵlistener("click", function NzPaginationComponent_ng_container_2_ng_template_3_li_8_Template_li_click_0_listener($event) { core.ɵɵrestoreView(_r2169); var ctx_r2168 = core.ɵɵnextContext(3); return ctx_r2168.jumpPage(ctx_r2168.lastIndex); });
        core.ɵɵtemplate(1, NzPaginationComponent_ng_container_2_ng_template_3_li_8_ng_template_1_Template, 0, 0, "ng-template", 10);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r2155 = core.ɵɵnextContext(3);
        core.ɵɵclassProp("ant-pagination-item-active", ctx_r2155.isLastIndex);
        core.ɵɵattribute("title", ctx_r2155.lastIndex);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngTemplateOutlet", ctx_r2155.itemRender)("ngTemplateOutletContext", core.ɵɵpureFunction1(4, _c4, ctx_r2155.lastIndex));
    } }
    function NzPaginationComponent_ng_container_2_ng_template_3_ng_template_10_Template(rf, ctx) { }
    function NzPaginationComponent_ng_container_2_ng_template_3_div_11_nz_select_1_nz_option_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelement(0, "nz-option", 37);
    } if (rf & 2) {
        var option_r2174 = ctx.$implicit;
        var ctx_r2172 = core.ɵɵnextContext(5);
        core.ɵɵproperty("nzLabel", option_r2174 + " " + ctx_r2172.locale.items_per_page)("nzValue", option_r2174);
    } }
    function NzPaginationComponent_ng_container_2_ng_template_3_div_11_nz_select_1_nz_option_2_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelement(0, "nz-option", 37);
    } if (rf & 2) {
        var ctx_r2173 = core.ɵɵnextContext(5);
        core.ɵɵproperty("nzLabel", ctx_r2173.nzPageSize + " " + ctx_r2173.locale.items_per_page)("nzValue", ctx_r2173.nzPageSize);
    } }
    function NzPaginationComponent_ng_container_2_ng_template_3_div_11_nz_select_1_Template(rf, ctx) { if (rf & 1) {
        var _r2176 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "nz-select", 34);
        core.ɵɵlistener("ngModelChange", function NzPaginationComponent_ng_container_2_ng_template_3_div_11_nz_select_1_Template_nz_select_ngModelChange_0_listener($event) { core.ɵɵrestoreView(_r2176); var ctx_r2175 = core.ɵɵnextContext(4); return ctx_r2175.onPageSizeChange($event); });
        core.ɵɵtemplate(1, NzPaginationComponent_ng_container_2_ng_template_3_div_11_nz_select_1_nz_option_1_Template, 1, 2, "nz-option", 35);
        core.ɵɵtemplate(2, NzPaginationComponent_ng_container_2_ng_template_3_div_11_nz_select_1_nz_option_2_Template, 1, 2, "nz-option", 36);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r2170 = core.ɵɵnextContext(4);
        core.ɵɵproperty("nzDisabled", ctx_r2170.nzDisabled)("nzSize", ctx_r2170.nzSize)("ngModel", ctx_r2170.nzPageSize);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngForOf", ctx_r2170.nzPageSizeOptions);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", ctx_r2170.showAddOption);
    } }
    function NzPaginationComponent_ng_container_2_ng_template_3_div_11_div_2_Template(rf, ctx) { if (rf & 1) {
        var _r2179 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "div", 38);
        core.ɵɵtext(1);
        core.ɵɵelementStart(2, "input", 39, 40);
        core.ɵɵlistener("keydown.enter", function NzPaginationComponent_ng_container_2_ng_template_3_div_11_div_2_Template_input_keydown_enter_2_listener($event) { core.ɵɵrestoreView(_r2179); var _r2177 = core.ɵɵreference(3); var ctx_r2178 = core.ɵɵnextContext(4); return ctx_r2178.handleKeyDown($event, _r2177, true); });
        core.ɵɵelementEnd();
        core.ɵɵtext(4);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r2171 = core.ɵɵnextContext(4);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1(" ", ctx_r2171.locale.jump_to, " ");
        core.ɵɵadvance(1);
        core.ɵɵproperty("disabled", ctx_r2171.nzDisabled);
        core.ɵɵadvance(2);
        core.ɵɵtextInterpolate1(" ", ctx_r2171.locale.page, " ");
    } }
    function NzPaginationComponent_ng_container_2_ng_template_3_div_11_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div", 31);
        core.ɵɵtemplate(1, NzPaginationComponent_ng_container_2_ng_template_3_div_11_nz_select_1_Template, 3, 5, "nz-select", 32);
        core.ɵɵtemplate(2, NzPaginationComponent_ng_container_2_ng_template_3_div_11_div_2_Template, 5, 3, "div", 33);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r2157 = core.ɵɵnextContext(3);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", ctx_r2157.nzShowSizeChanger);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", ctx_r2157.nzShowQuickJumper);
    } }
    function NzPaginationComponent_ng_container_2_ng_template_3_Template(rf, ctx) { if (rf & 1) {
        var _r2181 = core.ɵɵgetCurrentView();
        core.ɵɵtemplate(0, NzPaginationComponent_ng_container_2_ng_template_3_li_0_Template, 2, 5, "li", 16);
        core.ɵɵelementStart(1, "li", 9);
        core.ɵɵlistener("click", function NzPaginationComponent_ng_container_2_ng_template_3_Template_li_click_1_listener($event) { core.ɵɵrestoreView(_r2181); var ctx_r2180 = core.ɵɵnextContext(2); return ctx_r2180.jumpDiff(0 - 1); });
        core.ɵɵtemplate(2, NzPaginationComponent_ng_container_2_ng_template_3_ng_template_2_Template, 0, 0, "ng-template", 10);
        core.ɵɵelementEnd();
        core.ɵɵelementStart(3, "li", 17);
        core.ɵɵlistener("click", function NzPaginationComponent_ng_container_2_ng_template_3_Template_li_click_3_listener($event) { core.ɵɵrestoreView(_r2181); var ctx_r2182 = core.ɵɵnextContext(2); return ctx_r2182.jumpPage(ctx_r2182.firstIndex); });
        core.ɵɵtemplate(4, NzPaginationComponent_ng_container_2_ng_template_3_ng_template_4_Template, 0, 0, "ng-template", 10);
        core.ɵɵelementEnd();
        core.ɵɵtemplate(5, NzPaginationComponent_ng_container_2_ng_template_3_li_5_Template, 6, 1, "li", 18);
        core.ɵɵtemplate(6, NzPaginationComponent_ng_container_2_ng_template_3_li_6_Template, 2, 6, "li", 19);
        core.ɵɵtemplate(7, NzPaginationComponent_ng_container_2_ng_template_3_li_7_Template, 6, 1, "li", 20);
        core.ɵɵtemplate(8, NzPaginationComponent_ng_container_2_ng_template_3_li_8_Template, 2, 6, "li", 21);
        core.ɵɵelementStart(9, "li", 22);
        core.ɵɵlistener("click", function NzPaginationComponent_ng_container_2_ng_template_3_Template_li_click_9_listener($event) { core.ɵɵrestoreView(_r2181); var ctx_r2183 = core.ɵɵnextContext(2); return ctx_r2183.jumpDiff(1); });
        core.ɵɵtemplate(10, NzPaginationComponent_ng_container_2_ng_template_3_ng_template_10_Template, 0, 0, "ng-template", 10);
        core.ɵɵelementEnd();
        core.ɵɵtemplate(11, NzPaginationComponent_ng_container_2_ng_template_3_div_11_Template, 3, 2, "div", 23);
    } if (rf & 2) {
        var ctx_r2141 = core.ɵɵnextContext(2);
        core.ɵɵproperty("ngIf", ctx_r2141.nzShowTotal);
        core.ɵɵadvance(1);
        core.ɵɵclassProp("ant-pagination-disabled", ctx_r2141.isFirstIndex);
        core.ɵɵattribute("title", ctx_r2141.locale.prev_page);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngTemplateOutlet", ctx_r2141.itemRender)("ngTemplateOutletContext", core.ɵɵpureFunction0(18, _c1));
        core.ɵɵadvance(1);
        core.ɵɵclassProp("ant-pagination-item-active", ctx_r2141.isFirstIndex);
        core.ɵɵattribute("title", ctx_r2141.firstIndex);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngTemplateOutlet", ctx_r2141.itemRender)("ngTemplateOutletContext", core.ɵɵpureFunction1(19, _c4, ctx_r2141.firstIndex));
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", ctx_r2141.lastIndex > 9 && ctx_r2141.nzPageIndex - 3 > ctx_r2141.firstIndex);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngForOf", ctx_r2141.pages);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", ctx_r2141.lastIndex > 9 && ctx_r2141.nzPageIndex + 3 < ctx_r2141.lastIndex);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", ctx_r2141.lastIndex > 0 && ctx_r2141.lastIndex !== ctx_r2141.firstIndex);
        core.ɵɵadvance(1);
        core.ɵɵclassProp("ant-pagination-disabled", ctx_r2141.isLastIndex);
        core.ɵɵproperty("title", ctx_r2141.locale.next_page);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngTemplateOutlet", ctx_r2141.itemRender)("ngTemplateOutletContext", core.ɵɵpureFunction0(21, _c2));
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", ctx_r2141.nzShowQuickJumper || ctx_r2141.nzShowSizeChanger);
    } }
    function NzPaginationComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵelementStart(1, "ul", 6);
        core.ɵɵtemplate(2, NzPaginationComponent_ng_container_2_ng_container_2_Template, 11, 14, "ng-container", 7);
        core.ɵɵtemplate(3, NzPaginationComponent_ng_container_2_ng_template_3_Template, 12, 22, "ng-template", null, 8, core.ɵɵtemplateRefExtractor);
        core.ɵɵelementEnd();
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var _r2140 = core.ɵɵreference(4);
        var ctx_r2132 = core.ɵɵnextContext();
        core.ɵɵadvance(1);
        core.ɵɵclassProp("ant-table-pagination", ctx_r2132.nzInTable)("ant-pagination-simple", ctx_r2132.nzSimple)("ant-pagination-disabled", ctx_r2132.nzDisabled)("mini", ctx_r2132.nzSize === "small" && !ctx_r2132.nzSimple);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", ctx_r2132.nzSimple)("ngIfElse", _r2140);
    } }
    var NzPaginationComponent = /** @class */ (function () {
        function NzPaginationComponent(i18n, cdr) {
            this.i18n = i18n;
            this.cdr = cdr;
            // tslint:disable-next-line:no-any
            this.locale = {};
            this.firstIndex = 1;
            this.pages = [];
            this.$destroy = new rxjs.Subject();
            this.nzPageSizeChange = new core.EventEmitter();
            this.nzPageIndexChange = new core.EventEmitter();
            this.nzInTable = false;
            this.nzSize = 'default';
            this.nzPageSizeOptions = [10, 20, 30, 40];
            this.nzDisabled = false;
            this.nzShowSizeChanger = false;
            this.nzHideOnSinglePage = false;
            this.nzShowQuickJumper = false;
            this.nzSimple = false;
            this.nzTotal = 0;
            this.nzPageIndex = 1;
            this.nzPageSize = 10;
        }
        Object.defineProperty(NzPaginationComponent.prototype, "itemRender", {
            get: function () {
                return this.nzItemRender || this.nzItemRenderChild;
            },
            enumerable: true,
            configurable: true
        });
        NzPaginationComponent.prototype.validatePageIndex = function (value) {
            if (value > this.lastIndex) {
                return this.lastIndex;
            }
            else if (value < this.firstIndex) {
                return this.firstIndex;
            }
            else {
                return value;
            }
        };
        NzPaginationComponent.prototype.updatePageIndexValue = function (page) {
            this.nzPageIndex = page;
            this.nzPageIndexChange.emit(this.nzPageIndex);
            this.buildIndexes();
        };
        NzPaginationComponent.prototype.isPageIndexValid = function (value) {
            return this.validatePageIndex(value) === value;
        };
        NzPaginationComponent.prototype.jumpPage = function (index) {
            if (index !== this.nzPageIndex && !this.nzDisabled) {
                var pageIndex = this.validatePageIndex(index);
                if (pageIndex !== this.nzPageIndex) {
                    this.updatePageIndexValue(pageIndex);
                }
            }
        };
        NzPaginationComponent.prototype.jumpDiff = function (diff) {
            this.jumpPage(this.nzPageIndex + diff);
        };
        NzPaginationComponent.prototype.onPageSizeChange = function ($event) {
            this.nzPageSize = $event;
            this.nzPageSizeChange.emit($event);
            this.buildIndexes();
            if (this.nzPageIndex > this.lastIndex) {
                this.updatePageIndexValue(this.lastIndex);
            }
        };
        NzPaginationComponent.prototype.handleKeyDown = function (_, input, clearInputValue) {
            var target = input;
            var page = core$1.toNumber(target.value, this.nzPageIndex);
            if (core$1.isInteger(page) && this.isPageIndexValid(page) && page !== this.nzPageIndex) {
                this.updatePageIndexValue(page);
            }
            if (clearInputValue) {
                target.value = '';
            }
            else {
                target.value = "" + this.nzPageIndex;
            }
        };
        /** generate indexes list */
        NzPaginationComponent.prototype.buildIndexes = function () {
            var pages = [];
            if (this.lastIndex <= 9) {
                for (var i = 2; i <= this.lastIndex - 1; i++) {
                    pages.push(i);
                }
            }
            else {
                var current = +this.nzPageIndex;
                var left = Math.max(2, current - 2);
                var right = Math.min(current + 2, this.lastIndex - 1);
                if (current - 1 <= 2) {
                    right = 5;
                }
                if (this.lastIndex - current <= 2) {
                    left = this.lastIndex - 4;
                }
                for (var i = left; i <= right; i++) {
                    pages.push(i);
                }
            }
            this.pages = pages;
            this.cdr.markForCheck();
        };
        Object.defineProperty(NzPaginationComponent.prototype, "lastIndex", {
            get: function () {
                return Math.ceil(this.nzTotal / this.nzPageSize);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzPaginationComponent.prototype, "isLastIndex", {
            get: function () {
                return this.nzPageIndex === this.lastIndex;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzPaginationComponent.prototype, "isFirstIndex", {
            get: function () {
                return this.nzPageIndex === this.firstIndex;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzPaginationComponent.prototype, "ranges", {
            get: function () {
                return [(this.nzPageIndex - 1) * this.nzPageSize + 1, Math.min(this.nzPageIndex * this.nzPageSize, this.nzTotal)];
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzPaginationComponent.prototype, "showAddOption", {
            get: function () {
                return this.nzPageSizeOptions.indexOf(this.nzPageSize) === -1;
            },
            enumerable: true,
            configurable: true
        });
        NzPaginationComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.i18n.localeChange.pipe(operators.takeUntil(this.$destroy)).subscribe(function () {
                _this.locale = _this.i18n.getLocaleData('Pagination');
                _this.cdr.markForCheck();
            });
        };
        NzPaginationComponent.prototype.ngOnDestroy = function () {
            this.$destroy.next();
            this.$destroy.complete();
        };
        NzPaginationComponent.prototype.ngOnChanges = function (changes) {
            if (changes.nzTotal || changes.nzPageSize || changes.nzPageIndex) {
                this.buildIndexes();
            }
        };
        /** @nocollapse */ NzPaginationComponent.ɵfac = function NzPaginationComponent_Factory(t) { return new (t || NzPaginationComponent)(core.ɵɵdirectiveInject(i18n.NzI18nService), core.ɵɵdirectiveInject(core.ChangeDetectorRef)); };
        /** @nocollapse */ NzPaginationComponent.ɵcmp = core.ɵɵdefineComponent({ type: NzPaginationComponent, selectors: [["nz-pagination"]], viewQuery: function NzPaginationComponent_Query(rf, ctx) { if (rf & 1) {
                core.ɵɵstaticViewQuery(_c0, true);
            } if (rf & 2) {
                var _t;
                core.ɵɵqueryRefresh(_t = core.ɵɵloadQuery()) && (ctx.nzItemRenderChild = _t.first);
            } }, inputs: { nzShowTotal: "nzShowTotal", nzInTable: "nzInTable", nzSize: "nzSize", nzPageSizeOptions: "nzPageSizeOptions", nzItemRender: "nzItemRender", nzDisabled: "nzDisabled", nzShowSizeChanger: "nzShowSizeChanger", nzHideOnSinglePage: "nzHideOnSinglePage", nzShowQuickJumper: "nzShowQuickJumper", nzSimple: "nzSimple", nzTotal: "nzTotal", nzPageIndex: "nzPageIndex", nzPageSize: "nzPageSize" }, outputs: { nzPageSizeChange: "nzPageSizeChange", nzPageIndexChange: "nzPageIndexChange" }, exportAs: ["nzPagination"], features: [core.ɵɵNgOnChangesFeature()], decls: 3, vars: 1, consts: [["renderItemTemplate", ""], [4, "ngIf"], ["class", "ant-pagination-item-link", 4, "ngIf"], [1, "ant-pagination-item-link"], ["nz-icon", "", "nzType", "left"], ["nz-icon", "", "nzType", "right"], [1, "ant-pagination"], [4, "ngIf", "ngIfElse"], ["normalTemplate", ""], [1, "ant-pagination-prev", 3, "click"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "ant-pagination-simple-pager"], ["size", "3", 3, "disabled", "value", "keydown.enter"], ["simplePagerInput", ""], [1, "ant-pagination-slash"], [1, "ant-pagination-next", 3, "click"], ["class", "ant-pagination-total-text", 4, "ngIf"], [1, "ant-pagination-item", 3, "click"], ["class", "ant-pagination-jump-prev", 3, "click", 4, "ngIf"], ["class", "ant-pagination-item", 3, "ant-pagination-item-active", "click", 4, "ngFor", "ngForOf"], ["class", "ant-pagination-jump-next ant-pagination-item-link-icon", 3, "click", 4, "ngIf"], ["class", "ant-pagination-item", 3, "ant-pagination-item-active", "click", 4, "ngIf"], [1, "ant-pagination-next", 3, "title", "click"], ["class", "ant-pagination-options", 4, "ngIf"], [1, "ant-pagination-total-text"], [1, "ant-pagination-jump-prev", 3, "click"], [1, "ant-pagination-item-container"], ["nz-icon", "", "nzType", "double-left", 1, "ant-pagination-item-link-icon"], [1, "ant-pagination-item-ellipsis"], [1, "ant-pagination-jump-next", "ant-pagination-item-link-icon", 3, "click"], ["nz-icon", "", "nzType", "double-right", 1, "ant-pagination-item-link-icon"], [1, "ant-pagination-options"], ["class", "ant-pagination-options-size-changer", 3, "nzDisabled", "nzSize", "ngModel", "ngModelChange", 4, "ngIf"], ["class", "ant-pagination-options-quick-jumper", 4, "ngIf"], [1, "ant-pagination-options-size-changer", 3, "nzDisabled", "nzSize", "ngModel", "ngModelChange"], [3, "nzLabel", "nzValue", 4, "ngFor", "ngForOf"], [3, "nzLabel", "nzValue", 4, "ngIf"], [3, "nzLabel", "nzValue"], [1, "ant-pagination-options-quick-jumper"], [3, "disabled", "keydown.enter"], ["quickJumperInput", ""]], template: function NzPaginationComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵtemplate(0, NzPaginationComponent_ng_template_0_Template, 3, 3, "ng-template", null, 0, core.ɵɵtemplateRefExtractor);
                core.ɵɵtemplate(2, NzPaginationComponent_ng_container_2_Template, 5, 6, "ng-container", 1);
            } if (rf & 2) {
                core.ɵɵadvance(2);
                core.ɵɵproperty("ngIf", ctx.nzHideOnSinglePage && ctx.nzTotal > ctx.nzPageSize || ctx.nzTotal && !ctx.nzHideOnSinglePage);
            } }, directives: [common.NgIf, icon.NzIconDirective, common.NgTemplateOutlet, common.NgForOf, select.NzSelectComponent, forms.NgControlStatus, forms.NgModel, select.NzOptionComponent], encapsulation: 2, changeDetection: 0 });
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzPaginationComponent.prototype, "nzDisabled", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzPaginationComponent.prototype, "nzShowSizeChanger", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzPaginationComponent.prototype, "nzHideOnSinglePage", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzPaginationComponent.prototype, "nzShowQuickJumper", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzPaginationComponent.prototype, "nzSimple", void 0);
        __decorate([
            core$1.InputNumber(),
            __metadata("design:type", Object)
        ], NzPaginationComponent.prototype, "nzTotal", void 0);
        __decorate([
            core$1.InputNumber(),
            __metadata("design:type", Object)
        ], NzPaginationComponent.prototype, "nzPageIndex", void 0);
        __decorate([
            core$1.InputNumber(),
            __metadata("design:type", Object)
        ], NzPaginationComponent.prototype, "nzPageSize", void 0);
        return NzPaginationComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NzPaginationComponent, [{
            type: core.Component,
            args: [{
                    selector: 'nz-pagination',
                    exportAs: 'nzPagination',
                    preserveWhitespaces: false,
                    encapsulation: core.ViewEncapsulation.None,
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    templateUrl: './nz-pagination.component.html'
                }]
        }], function () { return [{ type: i18n.NzI18nService }, { type: core.ChangeDetectorRef }]; }, { nzPageSizeChange: [{
                type: core.Output
            }], nzPageIndexChange: [{
                type: core.Output
            }], nzShowTotal: [{
                type: core.Input
            }], nzInTable: [{
                type: core.Input
            }], nzSize: [{
                type: core.Input
            }], nzPageSizeOptions: [{
                type: core.Input
            }], nzItemRender: [{
                type: core.Input
            }], nzItemRenderChild: [{
                type: core.ViewChild,
                args: ['renderItemTemplate', { static: true }]
            }], nzDisabled: [{
                type: core.Input
            }], nzShowSizeChanger: [{
                type: core.Input
            }], nzHideOnSinglePage: [{
                type: core.Input
            }], nzShowQuickJumper: [{
                type: core.Input
            }], nzSimple: [{
                type: core.Input
            }], nzTotal: [{
                type: core.Input
            }], nzPageIndex: [{
                type: core.Input
            }], nzPageSize: [{
                type: core.Input
            }] }); })();

    /**
     * @license
     * Copyright Alibaba.com All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    var NzPaginationModule = /** @class */ (function () {
        function NzPaginationModule() {
        }
        /** @nocollapse */ NzPaginationModule.ɵmod = core.ɵɵdefineNgModule({ type: NzPaginationModule });
        /** @nocollapse */ NzPaginationModule.ɵinj = core.ɵɵdefineInjector({ factory: function NzPaginationModule_Factory(t) { return new (t || NzPaginationModule)(); }, imports: [[common.CommonModule, forms.FormsModule, select.NzSelectModule, i18n.NzI18nModule, icon.NzIconModule]] });
        return NzPaginationModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && core.ɵɵsetNgModuleScope(NzPaginationModule, { declarations: [NzPaginationComponent], imports: [common.CommonModule, forms.FormsModule, select.NzSelectModule, i18n.NzI18nModule, icon.NzIconModule], exports: [NzPaginationComponent] }); })();
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NzPaginationModule, [{
            type: core.NgModule,
            args: [{
                    declarations: [NzPaginationComponent],
                    exports: [NzPaginationComponent],
                    imports: [common.CommonModule, forms.FormsModule, select.NzSelectModule, i18n.NzI18nModule, icon.NzIconModule]
                }]
        }], null, null); })();

    exports.NzPaginationComponent = NzPaginationComponent;
    exports.NzPaginationModule = NzPaginationModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ng-zorro-antd-pagination.umd.js.map
