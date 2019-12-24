(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/cdk/platform'), require('@angular/cdk/scrolling'), require('@angular/core'), require('rxjs'), require('rxjs/operators'), require('ng-zorro-antd/core'), require('ng-zorro-antd/i18n'), require('ng-zorro-antd/dropdown'), require('@angular/common'), require('ng-zorro-antd/checkbox'), require('@angular/forms'), require('ng-zorro-antd/icon'), require('ng-zorro-antd/menu'), require('ng-zorro-antd/radio'), require('ng-zorro-antd/empty'), require('ng-zorro-antd/pagination'), require('ng-zorro-antd/spin'), require('@angular/cdk/bidi')) :
    typeof define === 'function' && define.amd ? define('ng-zorro-antd/table', ['exports', '@angular/cdk/platform', '@angular/cdk/scrolling', '@angular/core', 'rxjs', 'rxjs/operators', 'ng-zorro-antd/core', 'ng-zorro-antd/i18n', 'ng-zorro-antd/dropdown', '@angular/common', 'ng-zorro-antd/checkbox', '@angular/forms', 'ng-zorro-antd/icon', 'ng-zorro-antd/menu', 'ng-zorro-antd/radio', 'ng-zorro-antd/empty', 'ng-zorro-antd/pagination', 'ng-zorro-antd/spin', '@angular/cdk/bidi'], factory) :
    (global = global || self, factory((global['ng-zorro-antd'] = global['ng-zorro-antd'] || {}, global['ng-zorro-antd'].table = {}), global.ng.cdk.platform, global.ng.cdk.scrolling, global.ng.core, global.rxjs, global.rxjs.operators, global['ng-zorro-antd'].core, global['ng-zorro-antd'].i18n, global['ng-zorro-antd'].dropdown, global.ng.common, global['ng-zorro-antd'].checkbox, global.ng.forms, global['ng-zorro-antd'].icon, global['ng-zorro-antd'].menu, global['ng-zorro-antd'].radio, global['ng-zorro-antd'].empty, global['ng-zorro-antd'].pagination, global['ng-zorro-antd'].spin, global.ng.cdk.bidi));
}(this, (function (exports, platform, scrolling, core, rxjs, operators, core$1, i18n, dropdown, common, checkbox, forms, icon, menu, radio, empty, pagination, spin, bidi) { 'use strict';

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

    function NzThComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
        var _r2632 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "label", 7);
        core.ɵɵlistener("ngModelChange", function NzThComponent_ng_template_0_Template_label_ngModelChange_0_listener($event) { core.ɵɵrestoreView(_r2632); var ctx_r2631 = core.ɵɵnextContext(); return ctx_r2631.nzChecked = $event; })("ngModelChange", function NzThComponent_ng_template_0_Template_label_ngModelChange_0_listener($event) { core.ɵɵrestoreView(_r2632); var ctx_r2633 = core.ɵɵnextContext(); return ctx_r2633.nzCheckedChange.emit($event); });
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r2626 = core.ɵɵnextContext();
        core.ɵɵclassProp("ant-table-selection-select-all-custom", ctx_r2626.nzShowRowSelection);
        core.ɵɵproperty("ngModel", ctx_r2626.nzChecked)("nzDisabled", ctx_r2626.nzDisabled)("nzIndeterminate", ctx_r2626.nzIndeterminate);
    } }
    function NzThComponent_ng_container_5_ng_template_1_Template(rf, ctx) { }
    function NzThComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵtemplate(1, NzThComponent_ng_container_5_ng_template_1_Template, 0, 0, "ng-template", 8);
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        core.ɵɵnextContext();
        var _r2625 = core.ɵɵreference(1);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngTemplateOutlet", _r2625);
    } }
    function NzThComponent_div_6_ng_container_1_ng_template_1_Template(rf, ctx) { }
    function NzThComponent_div_6_ng_container_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵtemplate(1, NzThComponent_div_6_ng_container_1_ng_template_1_Template, 0, 0, "ng-template", 8);
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        core.ɵɵnextContext(2);
        var _r2625 = core.ɵɵreference(1);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngTemplateOutlet", _r2625);
    } }
    function NzThComponent_div_6_li_7_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "li", 15);
        core.ɵɵlistener("click", function NzThComponent_div_6_li_7_Template_li_click_0_listener($event) { var selection_r2639 = ctx.$implicit; return selection_r2639.onSelect(); });
        core.ɵɵtext(1);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var selection_r2639 = ctx.$implicit;
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1(" ", selection_r2639.text, " ");
    } }
    function NzThComponent_div_6_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div", 9);
        core.ɵɵtemplate(1, NzThComponent_div_6_ng_container_1_Template, 2, 1, "ng-container", 4);
        core.ɵɵelementStart(2, "div", 10);
        core.ɵɵelement(3, "i", 11);
        core.ɵɵelementEnd();
        core.ɵɵelementStart(4, "nz-dropdown-menu", null, 12);
        core.ɵɵelementStart(6, "ul", 13);
        core.ɵɵtemplate(7, NzThComponent_div_6_li_7_Template, 2, 1, "li", 14);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var _r2636 = core.ɵɵreference(5);
        var ctx_r2628 = core.ɵɵnextContext();
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", ctx_r2628.nzShowCheckbox);
        core.ɵɵadvance(1);
        core.ɵɵproperty("nzDropdownMenu", _r2636);
        core.ɵɵadvance(5);
        core.ɵɵproperty("ngForOf", ctx_r2628.nzSelections);
    } }
    function NzThComponent_div_9_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div", 16);
        core.ɵɵelementStart(1, "div", 17);
        core.ɵɵelement(2, "i", 18);
        core.ɵɵelement(3, "i", 19);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r2629 = core.ɵɵnextContext();
        core.ɵɵadvance(2);
        core.ɵɵclassProp("on", ctx_r2629.nzSort == "ascend")("off", ctx_r2629.nzSort != "ascend");
        core.ɵɵadvance(1);
        core.ɵɵclassProp("on", ctx_r2629.nzSort == "descend")("off", ctx_r2629.nzSort != "descend");
    } }
    function NzThComponent_ng_container_12_ng_container_5_li_1_Template(rf, ctx) { if (rf & 1) {
        var _r2647 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "li", 15);
        core.ɵɵlistener("click", function NzThComponent_ng_container_12_ng_container_5_li_1_Template_li_click_0_listener($event) { core.ɵɵrestoreView(_r2647); var filter_r2645 = ctx.$implicit; var ctx_r2646 = core.ɵɵnextContext(3); return ctx_r2646.checkMultiple(filter_r2645); });
        core.ɵɵelementStart(1, "label", 26);
        core.ɵɵlistener("ngModelChange", function NzThComponent_ng_container_12_ng_container_5_li_1_Template_label_ngModelChange_1_listener($event) { core.ɵɵrestoreView(_r2647); var filter_r2645 = ctx.$implicit; var ctx_r2648 = core.ɵɵnextContext(3); return ctx_r2648.checkMultiple(filter_r2645); });
        core.ɵɵelementEnd();
        core.ɵɵelementStart(2, "span");
        core.ɵɵtext(3);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var filter_r2645 = ctx.$implicit;
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngModel", filter_r2645.checked);
        core.ɵɵadvance(2);
        core.ɵɵtextInterpolate(filter_r2645.text);
    } }
    function NzThComponent_ng_container_12_ng_container_5_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵtemplate(1, NzThComponent_ng_container_12_ng_container_5_li_1_Template, 4, 2, "li", 14);
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var ctx_r2642 = core.ɵɵnextContext(2);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngForOf", ctx_r2642.multipleFilterList);
    } }
    function NzThComponent_ng_container_12_ng_container_6_li_1_Template(rf, ctx) { if (rf & 1) {
        var _r2652 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "li", 15);
        core.ɵɵlistener("click", function NzThComponent_ng_container_12_ng_container_6_li_1_Template_li_click_0_listener($event) { core.ɵɵrestoreView(_r2652); var filter_r2650 = ctx.$implicit; var ctx_r2651 = core.ɵɵnextContext(3); return ctx_r2651.checkSingle(filter_r2650); });
        core.ɵɵelementStart(1, "label", 27);
        core.ɵɵlistener("ngModelChange", function NzThComponent_ng_container_12_ng_container_6_li_1_Template_label_ngModelChange_1_listener($event) { core.ɵɵrestoreView(_r2652); var filter_r2650 = ctx.$implicit; var ctx_r2653 = core.ɵɵnextContext(3); return ctx_r2653.checkSingle(filter_r2650); });
        core.ɵɵtext(2);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var filter_r2650 = ctx.$implicit;
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngModel", filter_r2650.checked);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate(filter_r2650.text);
    } }
    function NzThComponent_ng_container_12_ng_container_6_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵtemplate(1, NzThComponent_ng_container_12_ng_container_6_li_1_Template, 3, 2, "li", 14);
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var ctx_r2643 = core.ɵɵnextContext(2);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngForOf", ctx_r2643.singleFilterList);
    } }
    function NzThComponent_ng_container_12_Template(rf, ctx) { if (rf & 1) {
        var _r2655 = core.ɵɵgetCurrentView();
        core.ɵɵelementContainerStart(0);
        core.ɵɵelementStart(1, "i", 20);
        core.ɵɵlistener("nzVisibleChange", function NzThComponent_ng_container_12_Template_i_nzVisibleChange_1_listener($event) { core.ɵɵrestoreView(_r2655); var ctx_r2654 = core.ɵɵnextContext(); return ctx_r2654.dropDownVisibleChange($event); });
        core.ɵɵelementEnd();
        core.ɵɵelementStart(2, "nz-dropdown-menu", null, 21);
        core.ɵɵelementStart(4, "ul", 22);
        core.ɵɵtemplate(5, NzThComponent_ng_container_12_ng_container_5_Template, 2, 1, "ng-container", 4);
        core.ɵɵtemplate(6, NzThComponent_ng_container_12_ng_container_6_Template, 2, 1, "ng-container", 4);
        core.ɵɵelementEnd();
        core.ɵɵelementStart(7, "div", 23);
        core.ɵɵelementStart(8, "a", 24);
        core.ɵɵlistener("click", function NzThComponent_ng_container_12_Template_a_click_8_listener($event) { core.ɵɵrestoreView(_r2655); var ctx_r2656 = core.ɵɵnextContext(); return ctx_r2656.hideDropDown(); });
        core.ɵɵelementStart(9, "span");
        core.ɵɵtext(10);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementStart(11, "a", 25);
        core.ɵɵlistener("click", function NzThComponent_ng_container_12_Template_a_click_11_listener($event) { core.ɵɵrestoreView(_r2655); var ctx_r2657 = core.ɵɵnextContext(); ctx_r2657.reset(); return ctx_r2657.hideDropDown(); });
        core.ɵɵelementStart(12, "span");
        core.ɵɵtext(13);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var _r2641 = core.ɵɵreference(3);
        var ctx_r2630 = core.ɵɵnextContext();
        core.ɵɵadvance(1);
        core.ɵɵclassProp("ant-table-filter-selected", ctx_r2630.hasFilterValue)("ant-table-filter-open", ctx_r2630.filterVisible);
        core.ɵɵproperty("nzClickHide", false)("nzDropdownMenu", _r2641);
        core.ɵɵadvance(4);
        core.ɵɵproperty("ngIf", ctx_r2630.nzFilterMultiple);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", !ctx_r2630.nzFilterMultiple);
        core.ɵɵadvance(4);
        core.ɵɵtextInterpolate(ctx_r2630.locale.filterConfirm);
        core.ɵɵadvance(3);
        core.ɵɵtextInterpolate(ctx_r2630.locale.filterReset);
    } }
    var _c0 = ["*", [["nz-dropdown"]], [["", "nz-dropdown", ""]], [["", "nz-th-extra", ""]]];
    var _c1 = ["*", "nz-dropdown", "[nz-dropdown]", "[nz-th-extra]"];
    var NzThComponent = /** @class */ (function () {
        function NzThComponent(cdr, i18n) {
            this.cdr = cdr;
            this.i18n = i18n;
            this.hasFilterValue = false;
            this.filterVisible = false;
            this.multipleFilterList = [];
            this.singleFilterList = [];
            /* tslint:disable-next-line:no-any */
            this.locale = {};
            this.nzWidthChange$ = new rxjs.Subject();
            this.destroy$ = new rxjs.Subject();
            this.hasDefaultFilter = false;
            /* tslint:disable-next-line:no-any */
            this.nzSelections = [];
            this.nzChecked = false;
            this.nzDisabled = false;
            this.nzIndeterminate = false;
            this.nzFilterMultiple = true;
            this.nzSort = null;
            this.nzFilters = [];
            this.nzExpand = false;
            this.nzShowCheckbox = false;
            this.nzCustomFilter = false;
            this.nzShowSort = false;
            this.nzShowFilter = false;
            this.nzShowRowSelection = false;
            this.nzCheckedChange = new core.EventEmitter();
            this.nzSortChange = new core.EventEmitter();
            this.nzSortChangeWithKey = new core.EventEmitter();
            /* tslint:disable-next-line:no-any */
            this.nzFilterChange = new core.EventEmitter();
        }
        NzThComponent.prototype.updateSortValue = function () {
            if (this.nzShowSort) {
                if (this.nzSort === 'ascend') {
                    this.setSortValue('descend');
                }
                else if (this.nzSort === 'descend') {
                    this.setSortValue(null);
                }
                else {
                    this.setSortValue('ascend');
                }
            }
        };
        NzThComponent.prototype.setSortValue = function (value) {
            this.nzSort = value;
            this.nzSortChangeWithKey.emit({ key: this.nzSortKey, value: this.nzSort });
            this.nzSortChange.emit(this.nzSort);
        };
        Object.defineProperty(NzThComponent.prototype, "filterList", {
            get: function () {
                return this.multipleFilterList.filter(function (item) { return item.checked; }).map(function (item) { return item.value; });
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzThComponent.prototype, "filterValue", {
            /* tslint:disable-next-line:no-any */
            get: function () {
                var checkedFilter = this.singleFilterList.find(function (item) { return item.checked; });
                return checkedFilter ? checkedFilter.value : null;
            },
            enumerable: true,
            configurable: true
        });
        NzThComponent.prototype.updateFilterStatus = function () {
            if (this.nzFilterMultiple) {
                this.hasFilterValue = this.filterList.length > 0;
            }
            else {
                this.hasFilterValue = core$1.isNotNil(this.filterValue);
            }
        };
        NzThComponent.prototype.search = function () {
            this.updateFilterStatus();
            if (this.nzFilterMultiple) {
                this.nzFilterChange.emit(this.filterList);
            }
            else {
                this.nzFilterChange.emit(this.filterValue);
            }
        };
        NzThComponent.prototype.reset = function () {
            this.initMultipleFilterList(true);
            this.initSingleFilterList(true);
            this.hasFilterValue = false;
        };
        NzThComponent.prototype.checkMultiple = function (filter) {
            filter.checked = !filter.checked;
        };
        NzThComponent.prototype.checkSingle = function (filter) {
            this.singleFilterList.forEach(function (item) { return (item.checked = item === filter); });
        };
        NzThComponent.prototype.hideDropDown = function () {
            this.nzDropdownMenuComponent.setVisibleStateWhen(false);
            this.filterVisible = false;
        };
        NzThComponent.prototype.dropDownVisibleChange = function (value) {
            this.filterVisible = value;
            if (!value) {
                this.search();
            }
        };
        NzThComponent.prototype.initMultipleFilterList = function (force) {
            var _this = this;
            this.multipleFilterList = this.nzFilters.map(function (item) {
                var checked = force ? false : !!item.byDefault;
                if (checked) {
                    _this.hasDefaultFilter = true;
                }
                return { text: item.text, value: item.value, checked: checked };
            });
            this.checkDefaultFilters();
        };
        NzThComponent.prototype.initSingleFilterList = function (force) {
            var _this = this;
            this.singleFilterList = this.nzFilters.map(function (item) {
                var checked = force ? false : !!item.byDefault;
                if (checked) {
                    _this.hasDefaultFilter = true;
                }
                return { text: item.text, value: item.value, checked: checked };
            });
            this.checkDefaultFilters();
        };
        NzThComponent.prototype.checkDefaultFilters = function () {
            if (!this.nzFilters || this.nzFilters.length === 0 || !this.hasDefaultFilter) {
                return;
            }
            this.updateFilterStatus();
        };
        NzThComponent.prototype.marForCheck = function () {
            this.cdr.markForCheck();
        };
        NzThComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.i18n.localeChange.pipe(operators.takeUntil(this.destroy$)).subscribe(function () {
                _this.locale = _this.i18n.getLocaleData('Table');
                _this.cdr.markForCheck();
            });
        };
        NzThComponent.prototype.ngOnChanges = function (changes) {
            if (changes.nzFilters) {
                this.initMultipleFilterList();
                this.initSingleFilterList();
                this.updateFilterStatus();
            }
            if (changes.nzWidth) {
                this.nzWidthChange$.next(this.nzWidth);
            }
        };
        NzThComponent.prototype.ngOnDestroy = function () {
            this.destroy$.next();
            this.destroy$.complete();
        };
        /** @nocollapse */ NzThComponent.ɵfac = function NzThComponent_Factory(t) { return new (t || NzThComponent)(core.ɵɵdirectiveInject(core.ChangeDetectorRef), core.ɵɵdirectiveInject(i18n.NzI18nService)); };
        /** @nocollapse */ NzThComponent.ɵcmp = core.ɵɵdefineComponent({ type: NzThComponent, selectors: [["th", 9, "nz-disable-th", 3, "mat-sort-header", "", 3, "mat-header-cell", ""]], viewQuery: function NzThComponent_Query(rf, ctx) { if (rf & 1) {
                core.ɵɵviewQuery(dropdown.NzDropdownMenuComponent, true);
            } if (rf & 2) {
                var _t;
                core.ɵɵqueryRefresh(_t = core.ɵɵloadQuery()) && (ctx.nzDropdownMenuComponent = _t.first);
            } }, hostBindings: function NzThComponent_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
                core.ɵɵallocHostVars(12);
            } if (rf & 2) {
                core.ɵɵstyleProp("left", ctx.nzLeft)("right", ctx.nzRight)("text-align", ctx.nzAlign);
                core.ɵɵclassProp("ant-table-column-has-actions", ctx.nzShowFilter || ctx.nzShowSort || ctx.nzCustomFilter)("ant-table-column-has-filters", ctx.nzShowFilter || ctx.nzCustomFilter)("ant-table-column-has-sorters", ctx.nzShowSort)("ant-table-selection-column-custom", ctx.nzShowRowSelection)("ant-table-selection-column", ctx.nzShowCheckbox)("ant-table-expand-icon-th", ctx.nzExpand)("ant-table-th-left-sticky", ctx.nzLeft)("ant-table-th-right-sticky", ctx.nzRight)("ant-table-column-sort", ctx.nzSort === "descend" || ctx.nzSort === "ascend");
            } }, inputs: { nzSelections: "nzSelections", nzChecked: "nzChecked", nzDisabled: "nzDisabled", nzIndeterminate: "nzIndeterminate", nzSortKey: "nzSortKey", nzFilterMultiple: "nzFilterMultiple", nzWidth: "nzWidth", nzLeft: "nzLeft", nzRight: "nzRight", nzAlign: "nzAlign", nzSort: "nzSort", nzFilters: "nzFilters", nzExpand: "nzExpand", nzShowCheckbox: "nzShowCheckbox", nzCustomFilter: "nzCustomFilter", nzShowSort: "nzShowSort", nzShowFilter: "nzShowFilter", nzShowRowSelection: "nzShowRowSelection" }, outputs: { nzCheckedChange: "nzCheckedChange", nzSortChange: "nzSortChange", nzSortChangeWithKey: "nzSortChangeWithKey", nzFilterChange: "nzFilterChange" }, features: [core.ɵɵNgOnChangesFeature()], ngContentSelectors: _c1, decls: 13, vars: 5, consts: [["checkboxTemplate", ""], [1, "ant-table-header-column"], [3, "click"], [1, "ant-table-column-title"], [4, "ngIf"], ["class", "ant-table-selection", 4, "ngIf"], ["class", "ant-table-column-sorter", 4, "ngIf"], ["nz-checkbox", "", 3, "ngModel", "nzDisabled", "nzIndeterminate", "ngModelChange"], [3, "ngTemplateOutlet"], [1, "ant-table-selection"], ["nz-dropdown", "", "nzPlacement", "bottomLeft", 1, "ant-table-selection-down", 3, "nzDropdownMenu"], ["nz-icon", "", "nzType", "down"], ["selectionMenu", "nzDropdownMenu"], ["nz-menu", "", 1, "ant-table-selection-menu"], ["nz-menu-item", "", 3, "click", 4, "ngFor", "ngForOf"], ["nz-menu-item", "", 3, "click"], [1, "ant-table-column-sorter"], [1, "ant-table-column-sorter-inner", "ant-table-column-sorter-inner-full"], ["nz-icon", "", "nzType", "caret-up", 1, "ant-table-column-sorter-up"], ["nz-icon", "", "nzType", "caret-down", 1, "ant-table-column-sorter-down"], ["nz-icon", "", "nz-dropdown", "", "nzType", "filter", "nzTheme", "fill", "nzTrigger", "click", "nzTableFilter", "", 3, "nzClickHide", "nzDropdownMenu", "nzVisibleChange"], ["filterMenu", "nzDropdownMenu"], ["nz-menu", ""], [1, "ant-table-filter-dropdown-btns"], [1, "ant-table-filter-dropdown-link", "confirm", 3, "click"], [1, "ant-table-filter-dropdown-link", "clear", 3, "click"], ["nz-checkbox", "", 3, "ngModel", "ngModelChange"], ["nz-radio", "", 3, "ngModel", "ngModelChange"]], template: function NzThComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵprojectionDef(_c0);
                core.ɵɵtemplate(0, NzThComponent_ng_template_0_Template, 1, 4, "ng-template", null, 0, core.ɵɵtemplateRefExtractor);
                core.ɵɵelementStart(2, "span", 1);
                core.ɵɵelementStart(3, "div", 2);
                core.ɵɵlistener("click", function NzThComponent_Template_div_click_3_listener($event) { return ctx.updateSortValue(); });
                core.ɵɵelementStart(4, "span", 3);
                core.ɵɵtemplate(5, NzThComponent_ng_container_5_Template, 2, 1, "ng-container", 4);
                core.ɵɵtemplate(6, NzThComponent_div_6_Template, 8, 3, "div", 5);
                core.ɵɵprojection(7);
                core.ɵɵelementEnd();
                core.ɵɵprojection(8, 1);
                core.ɵɵtemplate(9, NzThComponent_div_9_Template, 4, 4, "div", 6);
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵprojection(10, 2);
                core.ɵɵprojection(11, 3);
                core.ɵɵtemplate(12, NzThComponent_ng_container_12_Template, 14, 8, "ng-container", 4);
            } if (rf & 2) {
                core.ɵɵadvance(3);
                core.ɵɵclassProp("ant-table-column-sorters", ctx.nzShowSort);
                core.ɵɵadvance(2);
                core.ɵɵproperty("ngIf", ctx.nzShowCheckbox && !ctx.nzShowRowSelection);
                core.ɵɵadvance(1);
                core.ɵɵproperty("ngIf", ctx.nzShowRowSelection);
                core.ɵɵadvance(3);
                core.ɵɵproperty("ngIf", ctx.nzShowSort);
                core.ɵɵadvance(3);
                core.ɵɵproperty("ngIf", ctx.nzShowFilter);
            } }, directives: [common.NgIf, checkbox.NzCheckboxComponent, forms.NgControlStatus, forms.NgModel, common.NgTemplateOutlet, dropdown.NzDropDownDirective, icon.NzIconDirective, dropdown.NzDropdownMenuComponent, menu.NzMenuDirective, common.NgForOf, menu.NzMenuItemDirective, radio.NzRadioComponent], encapsulation: 2, changeDetection: 0 });
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzThComponent.prototype, "nzExpand", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzThComponent.prototype, "nzShowCheckbox", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzThComponent.prototype, "nzCustomFilter", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzThComponent.prototype, "nzShowSort", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzThComponent.prototype, "nzShowFilter", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzThComponent.prototype, "nzShowRowSelection", void 0);
        return NzThComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NzThComponent, [{
            type: core.Component,
            args: [{
                    // tslint:disable-next-line:component-selector
                    selector: 'th:not(.nz-disable-th):not([mat-sort-header]):not([mat-header-cell])',
                    preserveWhitespaces: false,
                    encapsulation: core.ViewEncapsulation.None,
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    templateUrl: './nz-th.component.html',
                    host: {
                        '[class.ant-table-column-has-actions]': 'nzShowFilter || nzShowSort || nzCustomFilter',
                        '[class.ant-table-column-has-filters]': 'nzShowFilter || nzCustomFilter',
                        '[class.ant-table-column-has-sorters]': 'nzShowSort',
                        '[class.ant-table-selection-column-custom]': 'nzShowRowSelection',
                        '[class.ant-table-selection-column]': 'nzShowCheckbox',
                        '[class.ant-table-expand-icon-th]': 'nzExpand',
                        '[class.ant-table-th-left-sticky]': 'nzLeft',
                        '[class.ant-table-th-right-sticky]': 'nzRight',
                        '[class.ant-table-column-sort]': "nzSort === 'descend' || nzSort === 'ascend'",
                        '[style.left]': 'nzLeft',
                        '[style.right]': 'nzRight',
                        '[style.text-align]': 'nzAlign'
                    }
                }]
        }], function () { return [{ type: core.ChangeDetectorRef }, { type: i18n.NzI18nService }]; }, { nzDropdownMenuComponent: [{
                type: core.ViewChild,
                args: [dropdown.NzDropdownMenuComponent, { static: false }]
            }], nzSelections: [{
                type: core.Input
            }], nzChecked: [{
                type: core.Input
            }], nzDisabled: [{
                type: core.Input
            }], nzIndeterminate: [{
                type: core.Input
            }], nzSortKey: [{
                type: core.Input
            }], nzFilterMultiple: [{
                type: core.Input
            }], nzWidth: [{
                type: core.Input
            }], nzLeft: [{
                type: core.Input
            }], nzRight: [{
                type: core.Input
            }], nzAlign: [{
                type: core.Input
            }], nzSort: [{
                type: core.Input
            }], nzFilters: [{
                type: core.Input
            }], nzExpand: [{
                type: core.Input
            }], nzShowCheckbox: [{
                type: core.Input
            }], nzCustomFilter: [{
                type: core.Input
            }], nzShowSort: [{
                type: core.Input
            }], nzShowFilter: [{
                type: core.Input
            }], nzShowRowSelection: [{
                type: core.Input
            }], nzCheckedChange: [{
                type: core.Output
            }], nzSortChange: [{
                type: core.Output
            }], nzSortChangeWithKey: [{
                type: core.Output
            }], nzFilterChange: [{
                type: core.Output
            }] }); })();

    /**
     * @license
     * Copyright Alibaba.com All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    var NzVirtualScrollDirective = /** @class */ (function () {
        /* tslint:disable-next-line:no-any */
        function NzVirtualScrollDirective(templateRef) {
            this.templateRef = templateRef;
        }
        /** @nocollapse */ NzVirtualScrollDirective.ɵfac = function NzVirtualScrollDirective_Factory(t) { return new (t || NzVirtualScrollDirective)(core.ɵɵdirectiveInject(core.TemplateRef)); };
        /** @nocollapse */ NzVirtualScrollDirective.ɵdir = core.ɵɵdefineDirective({ type: NzVirtualScrollDirective, selectors: [["", "nz-virtual-scroll", ""]], exportAs: ["nzVirtualScroll"] });
        return NzVirtualScrollDirective;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NzVirtualScrollDirective, [{
            type: core.Directive,
            args: [{
                    selector: '[nz-virtual-scroll]',
                    exportAs: 'nzVirtualScroll'
                }]
        }], function () { return [{ type: core.TemplateRef }]; }, null); })();

    var _c0$1 = ["tableHeaderElement"];
    var _c1$1 = ["tableBodyElement"];
    var _c2 = ["tableMainElement"];
    var _c3 = ["renderItemTemplate"];
    function NzTableComponent_ng_template_0_a_0_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "a", 13);
        core.ɵɵelement(1, "i", 14);
        core.ɵɵelementEnd();
    } }
    function NzTableComponent_ng_template_0_a_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "a", 13);
        core.ɵɵelement(1, "i", 15);
        core.ɵɵelementEnd();
    } }
    function NzTableComponent_ng_template_0_a_2_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "a");
        core.ɵɵtext(1);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var page_r2678 = core.ɵɵnextContext().page;
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate(page_r2678);
    } }
    function NzTableComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵtemplate(0, NzTableComponent_ng_template_0_a_0_Template, 2, 0, "a", 12);
        core.ɵɵtemplate(1, NzTableComponent_ng_template_0_a_1_Template, 2, 0, "a", 12);
        core.ɵɵtemplate(2, NzTableComponent_ng_template_0_a_2_Template, 2, 1, "a", 6);
    } if (rf & 2) {
        var type_r2677 = ctx.$implicit;
        core.ɵɵproperty("ngIf", type_r2677 === "pre");
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", type_r2677 === "next");
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", type_r2677 == "page");
    } }
    function NzTableComponent_ng_template_2_col_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelement(0, "col");
    } if (rf & 2) {
        var width_r2685 = ctx.$implicit;
        core.ɵɵstyleProp("width", width_r2685)("min-width", width_r2685);
    } }
    function NzTableComponent_ng_template_2_ng_container_2_col_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelement(0, "col");
    } if (rf & 2) {
        var th_r2687 = ctx.$implicit;
        core.ɵɵstyleProp("width", th_r2687.nzWidth)("min-width", th_r2687.nzWidth);
    } }
    function NzTableComponent_ng_template_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵtemplate(1, NzTableComponent_ng_template_2_ng_container_2_col_1_Template, 1, 2, "col", 16);
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var ctx_r2684 = core.ɵɵnextContext(2);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngForOf", ctx_r2684.listOfNzThComponent);
    } }
    function NzTableComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "colgroup");
        core.ɵɵtemplate(1, NzTableComponent_ng_template_2_col_1_Template, 1, 2, "col", 16);
        core.ɵɵtemplate(2, NzTableComponent_ng_template_2_ng_container_2_Template, 2, 1, "ng-container", 6);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r2665 = core.ɵɵnextContext();
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngForOf", ctx_r2665.nzWidthConfig);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", ctx_r2665.nzWidthConfig && !ctx_r2665.nzWidthConfig.length || !ctx_r2665.nzWidthConfig);
    } }
    function NzTableComponent_ng_template_4_ng_template_0_Template(rf, ctx) { }
    function NzTableComponent_ng_template_4_thead_1_ng_template_1_Template(rf, ctx) { }
    function NzTableComponent_ng_template_4_thead_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "thead", 19);
        core.ɵɵtemplate(1, NzTableComponent_ng_template_4_thead_1_ng_template_1_Template, 0, 0, "ng-template", 17);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r2689 = core.ɵɵnextContext(2);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngTemplateOutlet", ctx_r2689.nzTheadComponent == null ? null : ctx_r2689.nzTheadComponent.templateRef);
    } }
    function NzTableComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵtemplate(0, NzTableComponent_ng_template_4_ng_template_0_Template, 0, 0, "ng-template", 17);
        core.ɵɵtemplate(1, NzTableComponent_ng_template_4_thead_1_Template, 2, 1, "thead", 18);
    } if (rf & 2) {
        var ctx_r2667 = core.ɵɵnextContext();
        var _r2664 = core.ɵɵreference(3);
        core.ɵɵproperty("ngTemplateOutlet", _r2664);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", !ctx_r2667.nzScroll.y);
    } }
    function NzTableComponent_ng_template_6_div_0_ng_template_3_Template(rf, ctx) { }
    function NzTableComponent_ng_template_6_div_0_thead_4_ng_template_1_Template(rf, ctx) { }
    function NzTableComponent_ng_template_6_div_0_thead_4_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "thead", 19);
        core.ɵɵtemplate(1, NzTableComponent_ng_template_6_div_0_thead_4_ng_template_1_Template, 0, 0, "ng-template", 17);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r2699 = core.ɵɵnextContext(3);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngTemplateOutlet", ctx_r2699.nzTheadComponent == null ? null : ctx_r2699.nzTheadComponent.templateRef);
    } }
    function NzTableComponent_ng_template_6_div_0_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div", 25, 26);
        core.ɵɵelementStart(2, "table");
        core.ɵɵtemplate(3, NzTableComponent_ng_template_6_div_0_ng_template_3_Template, 0, 0, "ng-template", 17);
        core.ɵɵtemplate(4, NzTableComponent_ng_template_6_div_0_thead_4_Template, 2, 1, "thead", 18);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r2691 = core.ɵɵnextContext(2);
        var _r2664 = core.ɵɵreference(3);
        core.ɵɵproperty("ngStyle", ctx_r2691.headerBottomStyle);
        core.ɵɵadvance(2);
        core.ɵɵstyleProp("width", ctx_r2691.nzScroll.x);
        core.ɵɵclassProp("ant-table-fixed", ctx_r2691.nzScroll.x);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngTemplateOutlet", _r2664);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", ctx_r2691.nzScroll.y);
    } }
    function NzTableComponent_ng_template_6_div_1_ng_template_3_Template(rf, ctx) { }
    function NzTableComponent_ng_template_6_div_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div", 27, 28);
        core.ɵɵelementStart(2, "table");
        core.ɵɵtemplate(3, NzTableComponent_ng_template_6_div_1_ng_template_3_Template, 0, 0, "ng-template", 29);
        core.ɵɵprojection(4);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r2692 = core.ɵɵnextContext(2);
        var _r2666 = core.ɵɵreference(5);
        core.ɵɵstyleProp("max-height", ctx_r2692.nzScroll.y)("overflow-y", ctx_r2692.nzScroll.y ? "scroll" : "")("overflow-x", ctx_r2692.nzScroll.x ? "auto" : "");
        core.ɵɵadvance(2);
        core.ɵɵstyleProp("width", ctx_r2692.nzScroll.x);
        core.ɵɵclassProp("ant-table-fixed", ctx_r2692.nzScroll.x);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", !ctx_r2692.nzVirtualScroll)("ngTemplateOutlet", _r2666);
    } }
    function NzTableComponent_ng_template_6_ng_template_2_ng_template_2_Template(rf, ctx) { }
    function NzTableComponent_ng_template_6_ng_template_2_ng_container_4_ng_template_1_Template(rf, ctx) { }
    var _c4 = function (a0, a1) { return { $implicit: a0, index: a1 }; };
    function NzTableComponent_ng_template_6_ng_template_2_ng_container_4_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵtemplate(1, NzTableComponent_ng_template_6_ng_template_2_ng_container_4_ng_template_1_Template, 0, 0, "ng-template", 32);
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var item_r2705 = ctx.$implicit;
        var i_r2706 = ctx.index;
        var ctx_r2704 = core.ɵɵnextContext(3);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngTemplateOutlet", ctx_r2704.nzVirtualScrollDirective == null ? null : ctx_r2704.nzVirtualScrollDirective.templateRef)("ngTemplateOutletContext", core.ɵɵpureFunction2(2, _c4, item_r2705, i_r2706));
    } }
    function NzTableComponent_ng_template_6_ng_template_2_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "cdk-virtual-scroll-viewport", 30);
        core.ɵɵelementStart(1, "table");
        core.ɵɵtemplate(2, NzTableComponent_ng_template_6_ng_template_2_ng_template_2_Template, 0, 0, "ng-template", 29);
        core.ɵɵelementStart(3, "tbody");
        core.ɵɵtemplate(4, NzTableComponent_ng_template_6_ng_template_2_ng_container_4_Template, 2, 5, "ng-container", 31);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r2694 = core.ɵɵnextContext(2);
        var _r2666 = core.ɵɵreference(5);
        core.ɵɵstyleProp("height", ctx_r2694.nzScroll.y);
        core.ɵɵproperty("hidden", !ctx_r2694.data.length)("itemSize", ctx_r2694.nzVirtualItemSize)("maxBufferPx", ctx_r2694.nzVirtualMaxBufferPx)("minBufferPx", ctx_r2694.nzVirtualMinBufferPx);
        core.ɵɵadvance(1);
        core.ɵɵstyleProp("width", ctx_r2694.nzScroll.x);
        core.ɵɵclassProp("ant-table-fixed", ctx_r2694.nzScroll.x);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", ctx_r2694.nzVirtualScroll)("ngTemplateOutlet", _r2666);
        core.ɵɵadvance(2);
        core.ɵɵproperty("cdkVirtualForOf", ctx_r2694.data)("cdkVirtualForTrackBy", ctx_r2694.nzVirtualForTrackBy);
    } }
    function NzTableComponent_ng_template_6_div_4_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div", 33);
        core.ɵɵelement(1, "nz-embed-empty", 34);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r2695 = core.ɵɵnextContext(2);
        core.ɵɵadvance(1);
        core.ɵɵproperty("nzComponentName", "table")("specificContent", ctx_r2695.nzNoResult);
    } }
    function NzTableComponent_ng_template_6_div_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵtext(1);
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var ctx_r2708 = core.ɵɵnextContext(3);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate(ctx_r2708.nzFooter);
    } }
    function NzTableComponent_ng_template_6_div_5_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div", 35);
        core.ɵɵtemplate(1, NzTableComponent_ng_template_6_div_5_ng_container_1_Template, 2, 1, "ng-container", 36);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r2696 = core.ɵɵnextContext(2);
        core.ɵɵadvance(1);
        core.ɵɵproperty("nzStringTemplateOutlet", ctx_r2696.nzFooter);
    } }
    function NzTableComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵtemplate(0, NzTableComponent_ng_template_6_div_0_Template, 5, 5, "div", 20);
        core.ɵɵtemplate(1, NzTableComponent_ng_template_6_div_1_Template, 5, 7, "div", 21);
        core.ɵɵtemplate(2, NzTableComponent_ng_template_6_ng_template_2_Template, 5, 11, "ng-template", null, 22, core.ɵɵtemplateRefExtractor);
        core.ɵɵtemplate(4, NzTableComponent_ng_template_6_div_4_Template, 2, 2, "div", 23);
        core.ɵɵtemplate(5, NzTableComponent_ng_template_6_div_5_Template, 2, 1, "div", 24);
    } if (rf & 2) {
        var _r2693 = core.ɵɵreference(3);
        var ctx_r2669 = core.ɵɵnextContext();
        core.ɵɵproperty("ngIf", ctx_r2669.nzScroll.y);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", !ctx_r2669.nzVirtualScroll)("ngIfElse", _r2693);
        core.ɵɵadvance(3);
        core.ɵɵproperty("ngIf", ctx_r2669.data.length === 0 && !ctx_r2669.nzLoading && !ctx_r2669.nzTemplateMode);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", ctx_r2669.nzFooter);
    } }
    function NzTableComponent_ng_template_8_nz_pagination_0_Template(rf, ctx) { if (rf & 1) {
        var _r2711 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "nz-pagination", 38);
        core.ɵɵlistener("nzPageSizeChange", function NzTableComponent_ng_template_8_nz_pagination_0_Template_nz_pagination_nzPageSizeChange_0_listener($event) { core.ɵɵrestoreView(_r2711); var ctx_r2710 = core.ɵɵnextContext(2); return ctx_r2710.emitPageSizeOrIndex($event, ctx_r2710.nzPageIndex); })("nzPageIndexChange", function NzTableComponent_ng_template_8_nz_pagination_0_Template_nz_pagination_nzPageIndexChange_0_listener($event) { core.ɵɵrestoreView(_r2711); var ctx_r2712 = core.ɵɵnextContext(2); return ctx_r2712.emitPageSizeOrIndex(ctx_r2712.nzPageSize, $event); });
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r2709 = core.ɵɵnextContext(2);
        core.ɵɵproperty("nzInTable", true)("nzShowSizeChanger", ctx_r2709.nzShowSizeChanger)("nzPageSizeOptions", ctx_r2709.nzPageSizeOptions)("nzItemRender", ctx_r2709.itemRender)("nzShowQuickJumper", ctx_r2709.nzShowQuickJumper)("nzHideOnSinglePage", ctx_r2709.nzHideOnSinglePage)("nzShowTotal", ctx_r2709.nzShowTotal)("nzSize", ctx_r2709.nzSize === "default" ? "default" : "small")("nzPageSize", ctx_r2709.nzPageSize)("nzTotal", ctx_r2709.nzTotal)("nzSimple", ctx_r2709.nzSimple)("nzPageIndex", ctx_r2709.nzPageIndex);
    } }
    function NzTableComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵtemplate(0, NzTableComponent_ng_template_8_nz_pagination_0_Template, 1, 12, "nz-pagination", 37);
    } if (rf & 2) {
        var ctx_r2671 = core.ɵɵnextContext();
        core.ɵɵproperty("ngIf", ctx_r2671.nzShowPagination && ctx_r2671.data.length);
    } }
    function NzTableComponent_ng_container_11_ng_template_1_Template(rf, ctx) { }
    function NzTableComponent_ng_container_11_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵtemplate(1, NzTableComponent_ng_container_11_ng_template_1_Template, 0, 0, "ng-template", 17);
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        core.ɵɵnextContext();
        var _r2670 = core.ɵɵreference(9);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngTemplateOutlet", _r2670);
    } }
    function NzTableComponent_div_14_ng_container_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵtext(1);
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var ctx_r2714 = core.ɵɵnextContext(2);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate(ctx_r2714.nzTitle);
    } }
    function NzTableComponent_div_14_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div", 39);
        core.ɵɵtemplate(1, NzTableComponent_div_14_ng_container_1_Template, 2, 1, "ng-container", 36);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r2674 = core.ɵɵnextContext();
        core.ɵɵadvance(1);
        core.ɵɵproperty("nzStringTemplateOutlet", ctx_r2674.nzTitle);
    } }
    function NzTableComponent_ng_container_16_ng_template_2_Template(rf, ctx) { }
    function NzTableComponent_ng_container_16_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵelementStart(1, "div", 40);
        core.ɵɵtemplate(2, NzTableComponent_ng_container_16_ng_template_2_Template, 0, 0, "ng-template", 17);
        core.ɵɵelementEnd();
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        core.ɵɵnextContext();
        var _r2668 = core.ɵɵreference(7);
        core.ɵɵadvance(2);
        core.ɵɵproperty("ngTemplateOutlet", _r2668);
    } }
    function NzTableComponent_ng_container_17_ng_template_1_Template(rf, ctx) { }
    function NzTableComponent_ng_container_17_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵtemplate(1, NzTableComponent_ng_container_17_ng_template_1_Template, 0, 0, "ng-template", 17);
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        core.ɵɵnextContext();
        var _r2670 = core.ɵɵreference(9);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngTemplateOutlet", _r2670);
    } }
    var _c5 = ["*"];
    var NZ_CONFIG_COMPONENT_NAME = 'table';
    var NzTableComponent = /** @class */ (function () {
        function NzTableComponent(nzConfigService, renderer, ngZone, cdr, i18n, platform, elementRef) {
            this.nzConfigService = nzConfigService;
            this.renderer = renderer;
            this.ngZone = ngZone;
            this.cdr = cdr;
            this.i18n = i18n;
            this.platform = platform;
            /** public data for ngFor tr */
            this.data = [];
            this.locale = {}; // tslint:disable-line:no-any
            this.lastScrollLeft = 0;
            this.headerBottomStyle = {};
            this.destroy$ = new rxjs.Subject();
            this.nzPageSizeOptions = [10, 20, 30, 40, 50];
            this.nzVirtualScroll = false;
            this.nzVirtualItemSize = 0;
            this.nzVirtualMaxBufferPx = 200;
            this.nzVirtualMinBufferPx = 100;
            this.nzLoadingDelay = 0;
            this.nzTotal = 0;
            this.nzWidthConfig = [];
            this.nzPageIndex = 1;
            this.nzPageSize = 10;
            this.nzData = [];
            this.nzPaginationPosition = 'bottom';
            this.nzScroll = { x: null, y: null };
            this.nzFrontPagination = true;
            this.nzTemplateMode = false;
            this.nzShowPagination = true;
            this.nzLoading = false;
            this.nzPageSizeChange = new core.EventEmitter();
            this.nzPageIndexChange = new core.EventEmitter();
            /* tslint:disable-next-line:no-any */
            this.nzCurrentPageDataChange = new core.EventEmitter();
            renderer.addClass(elementRef.nativeElement, 'ant-table-wrapper');
        }
        Object.defineProperty(NzTableComponent.prototype, "itemRender", {
            get: function () {
                return this.nzItemRender || this.itemRenderChild;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzTableComponent.prototype, "tableBodyNativeElement", {
            get: function () {
                return this.tableBodyElement && this.tableBodyElement.nativeElement;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzTableComponent.prototype, "tableHeaderNativeElement", {
            get: function () {
                return this.tableHeaderElement && this.tableHeaderElement.nativeElement;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzTableComponent.prototype, "cdkVirtualScrollNativeElement", {
            get: function () {
                return this.cdkVirtualScrollElement && this.cdkVirtualScrollElement.nativeElement;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzTableComponent.prototype, "mixTableBodyNativeElement", {
            get: function () {
                return this.tableBodyNativeElement || this.cdkVirtualScrollNativeElement;
            },
            enumerable: true,
            configurable: true
        });
        NzTableComponent.prototype.emitPageSizeOrIndex = function (size, index) {
            if (this.nzPageSize !== size || this.nzPageIndex !== index) {
                if (this.nzPageSize !== size) {
                    this.nzPageSize = size;
                    this.nzPageSizeChange.emit(this.nzPageSize);
                }
                if (this.nzPageIndex !== index) {
                    this.nzPageIndex = index;
                    this.nzPageIndexChange.emit(this.nzPageIndex);
                }
                this.updateFrontPaginationDataIfNeeded(this.nzPageSize !== size);
            }
        };
        NzTableComponent.prototype.syncScrollTable = function (e) {
            if (e.currentTarget === e.target) {
                var target = e.target;
                if (target.scrollLeft !== this.lastScrollLeft && this.nzScroll && this.nzScroll.x) {
                    if (target === this.mixTableBodyNativeElement && this.tableHeaderNativeElement) {
                        this.tableHeaderNativeElement.scrollLeft = target.scrollLeft;
                    }
                    else if (target === this.tableHeaderNativeElement && this.mixTableBodyNativeElement) {
                        this.mixTableBodyNativeElement.scrollLeft = target.scrollLeft;
                    }
                    this.setScrollPositionClassName();
                }
                this.lastScrollLeft = target.scrollLeft;
            }
        };
        NzTableComponent.prototype.setScrollPositionClassName = function () {
            if (this.mixTableBodyNativeElement && this.nzScroll && this.nzScroll.x) {
                if (this.mixTableBodyNativeElement.scrollWidth === this.mixTableBodyNativeElement.clientWidth &&
                    this.mixTableBodyNativeElement.scrollWidth !== 0) {
                    this.setScrollName();
                }
                else if (this.mixTableBodyNativeElement.scrollLeft === 0) {
                    this.setScrollName('left');
                }
                else if (this.mixTableBodyNativeElement.scrollWidth ===
                    this.mixTableBodyNativeElement.scrollLeft + this.mixTableBodyNativeElement.clientWidth) {
                    this.setScrollName('right');
                }
                else {
                    this.setScrollName('middle');
                }
            }
        };
        NzTableComponent.prototype.setScrollName = function (position) {
            var _this = this;
            var prefix = 'ant-table-scroll-position';
            var classList = ['left', 'right', 'middle'];
            classList.forEach(function (name) {
                _this.renderer.removeClass(_this.tableMainElement.nativeElement, prefix + "-" + name);
            });
            if (position) {
                this.renderer.addClass(this.tableMainElement.nativeElement, prefix + "-" + position);
            }
        };
        NzTableComponent.prototype.fitScrollBar = function () {
            if (this.nzScroll.y) {
                var scrollbarWidth = core$1.measureScrollbar('vertical');
                var scrollbarWidthOfHeader = core$1.measureScrollbar('horizontal', 'ant-table');
                // Add negative margin bottom for scroll bar overflow bug
                if (scrollbarWidthOfHeader > 0) {
                    this.headerBottomStyle = {
                        marginBottom: "-" + scrollbarWidthOfHeader + "px",
                        paddingBottom: '0px',
                        overflowX: 'scroll',
                        overflowY: "" + (scrollbarWidth === 0 ? 'hidden' : 'scroll')
                    };
                    this.cdr.markForCheck();
                }
            }
        };
        NzTableComponent.prototype.updateFrontPaginationDataIfNeeded = function (isPageSizeOrDataChange) {
            var _this = this;
            if (isPageSizeOrDataChange === void 0) { isPageSizeOrDataChange = false; }
            var data = this.nzData || [];
            if (this.nzFrontPagination) {
                this.nzTotal = data.length;
                if (isPageSizeOrDataChange) {
                    var maxPageIndex = Math.ceil(data.length / this.nzPageSize) || 1;
                    var pageIndex_1 = this.nzPageIndex > maxPageIndex ? maxPageIndex : this.nzPageIndex;
                    if (pageIndex_1 !== this.nzPageIndex) {
                        this.nzPageIndex = pageIndex_1;
                        Promise.resolve().then(function () { return _this.nzPageIndexChange.emit(pageIndex_1); });
                    }
                }
                data = data.slice((this.nzPageIndex - 1) * this.nzPageSize, this.nzPageIndex * this.nzPageSize);
            }
            this.data = __spread(data);
            this.nzCurrentPageDataChange.emit(this.data);
        };
        NzTableComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.i18n.localeChange.pipe(operators.takeUntil(this.destroy$)).subscribe(function () {
                _this.locale = _this.i18n.getLocaleData('Table');
                _this.cdr.markForCheck();
            });
        };
        NzTableComponent.prototype.ngOnChanges = function (changes) {
            var _this = this;
            if (changes.nzScroll) {
                if (changes.nzScroll.currentValue) {
                    this.nzScroll = changes.nzScroll.currentValue;
                }
                else {
                    this.nzScroll = { x: null, y: null };
                }
                this.fitScrollBar();
                this.setScrollPositionClassName();
            }
            if (changes.nzData) {
                if (this.platform.isBrowser) {
                    setTimeout(function () { return _this.setScrollPositionClassName(); });
                }
            }
            if (changes.nzPageIndex || changes.nzPageSize || changes.nzFrontPagination || changes.nzData) {
                this.updateFrontPaginationDataIfNeeded(!!(changes.nzPageSize || changes.nzData));
            }
        };
        NzTableComponent.prototype.ngAfterViewInit = function () {
            var _this = this;
            if (!this.platform.isBrowser) {
                return;
            }
            setTimeout(function () { return _this.setScrollPositionClassName(); });
            this.ngZone.runOutsideAngular(function () {
                rxjs.merge(_this.tableHeaderNativeElement ? rxjs.fromEvent(_this.tableHeaderNativeElement, 'scroll') : rxjs.EMPTY, _this.mixTableBodyNativeElement ? rxjs.fromEvent(_this.mixTableBodyNativeElement, 'scroll') : rxjs.EMPTY)
                    .pipe(operators.takeUntil(_this.destroy$))
                    .subscribe(function (data) {
                    _this.syncScrollTable(data);
                });
                rxjs.fromEvent(window, 'resize')
                    .pipe(operators.startWith(true), operators.takeUntil(_this.destroy$))
                    .subscribe(function () {
                    _this.fitScrollBar();
                    _this.setScrollPositionClassName();
                });
            });
        };
        NzTableComponent.prototype.ngAfterContentInit = function () {
            var _this = this;
            this.listOfNzThComponent.changes
                .pipe(operators.startWith(true), operators.flatMap(function () { return rxjs.merge.apply(void 0, __spread([_this.listOfNzThComponent.changes], _this.listOfNzThComponent.map(function (th) { return th.nzWidthChange$; }))); }), operators.takeUntil(this.destroy$))
                .subscribe(function () {
                _this.cdr.markForCheck();
            });
        };
        NzTableComponent.prototype.ngOnDestroy = function () {
            this.destroy$.next();
            this.destroy$.complete();
        };
        /** @nocollapse */ NzTableComponent.ɵfac = function NzTableComponent_Factory(t) { return new (t || NzTableComponent)(core.ɵɵdirectiveInject(core$1.NzConfigService), core.ɵɵdirectiveInject(core.Renderer2), core.ɵɵdirectiveInject(core.NgZone), core.ɵɵdirectiveInject(core.ChangeDetectorRef), core.ɵɵdirectiveInject(i18n.NzI18nService), core.ɵɵdirectiveInject(platform.Platform), core.ɵɵdirectiveInject(core.ElementRef)); };
        /** @nocollapse */ NzTableComponent.ɵcmp = core.ɵɵdefineComponent({ type: NzTableComponent, selectors: [["nz-table"]], contentQueries: function NzTableComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
                core.ɵɵcontentQuery(dirIndex, NzVirtualScrollDirective, true);
                core.ɵɵcontentQuery(dirIndex, NzThComponent, true);
            } if (rf & 2) {
                var _t;
                core.ɵɵqueryRefresh(_t = core.ɵɵloadQuery()) && (ctx.nzVirtualScrollDirective = _t.first);
                core.ɵɵqueryRefresh(_t = core.ɵɵloadQuery()) && (ctx.listOfNzThComponent = _t);
            } }, viewQuery: function NzTableComponent_Query(rf, ctx) { if (rf & 1) {
                core.ɵɵviewQuery(_c0$1, true, core.ElementRef);
                core.ɵɵviewQuery(_c1$1, true, core.ElementRef);
                core.ɵɵviewQuery(_c2, true, core.ElementRef);
                core.ɵɵviewQuery(scrolling.CdkVirtualScrollViewport, true, core.ElementRef);
                core.ɵɵviewQuery(scrolling.CdkVirtualScrollViewport, true, scrolling.CdkVirtualScrollViewport);
                core.ɵɵstaticViewQuery(_c3, true);
            } if (rf & 2) {
                var _t;
                core.ɵɵqueryRefresh(_t = core.ɵɵloadQuery()) && (ctx.tableHeaderElement = _t.first);
                core.ɵɵqueryRefresh(_t = core.ɵɵloadQuery()) && (ctx.tableBodyElement = _t.first);
                core.ɵɵqueryRefresh(_t = core.ɵɵloadQuery()) && (ctx.tableMainElement = _t.first);
                core.ɵɵqueryRefresh(_t = core.ɵɵloadQuery()) && (ctx.cdkVirtualScrollElement = _t.first);
                core.ɵɵqueryRefresh(_t = core.ɵɵloadQuery()) && (ctx.cdkVirtualScrollViewport = _t.first);
                core.ɵɵqueryRefresh(_t = core.ɵɵloadQuery()) && (ctx.itemRenderChild = _t.first);
            } }, hostBindings: function NzTableComponent_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
                core.ɵɵallocHostVars(1);
            } if (rf & 2) {
                core.ɵɵclassProp("ant-table-empty", ctx.data.length === 0 && !ctx.nzTemplateMode);
            } }, inputs: { nzSize: "nzSize", nzShowTotal: "nzShowTotal", nzPageSizeOptions: "nzPageSizeOptions", nzVirtualScroll: "nzVirtualScroll", nzVirtualItemSize: "nzVirtualItemSize", nzVirtualMaxBufferPx: "nzVirtualMaxBufferPx", nzVirtualMinBufferPx: "nzVirtualMinBufferPx", nzVirtualForTrackBy: "nzVirtualForTrackBy", nzLoadingDelay: "nzLoadingDelay", nzLoadingIndicator: "nzLoadingIndicator", nzTotal: "nzTotal", nzTitle: "nzTitle", nzFooter: "nzFooter", nzNoResult: "nzNoResult", nzWidthConfig: "nzWidthConfig", nzPageIndex: "nzPageIndex", nzPageSize: "nzPageSize", nzData: "nzData", nzPaginationPosition: "nzPaginationPosition", nzScroll: "nzScroll", nzItemRender: "nzItemRender", nzFrontPagination: "nzFrontPagination", nzTemplateMode: "nzTemplateMode", nzBordered: "nzBordered", nzShowPagination: "nzShowPagination", nzLoading: "nzLoading", nzShowSizeChanger: "nzShowSizeChanger", nzHideOnSinglePage: "nzHideOnSinglePage", nzShowQuickJumper: "nzShowQuickJumper", nzSimple: "nzSimple" }, outputs: { nzPageSizeChange: "nzPageSizeChange", nzPageIndexChange: "nzPageIndexChange", nzCurrentPageDataChange: "nzCurrentPageDataChange" }, exportAs: ["nzTable"], features: [core.ɵɵNgOnChangesFeature()], ngContentSelectors: _c5, decls: 18, vars: 13, consts: [["renderItemTemplate", ""], ["colGroupTemplate", ""], ["headerTemplate", ""], ["tableInnerTemplate", ""], ["paginationTemplate", ""], [3, "nzDelay", "nzSpinning", "nzIndicator"], [4, "ngIf"], [1, "ant-table"], ["tableMainElement", ""], ["class", "ant-table-title", 4, "ngIf"], [1, "ant-table-content"], [4, "ngIf", "ngIfElse"], ["class", "ant-pagination-item-link", 4, "ngIf"], [1, "ant-pagination-item-link"], ["nz-icon", "", "nzType", "left"], ["nz-icon", "", "nzType", "right"], [3, "width", "minWidth", 4, "ngFor", "ngForOf"], [3, "ngTemplateOutlet"], ["class", "ant-table-thead", 4, "ngIf"], [1, "ant-table-thead"], ["class", "ant-table-header ant-table-hide-scrollbar", 3, "ngStyle", 4, "ngIf"], ["class", "ant-table-body", 3, "maxHeight", "overflow-y", "overflow-x", 4, "ngIf", "ngIfElse"], ["scrollViewTpl", ""], ["class", "ant-table-placeholder", 4, "ngIf"], ["class", "ant-table-footer", 4, "ngIf"], [1, "ant-table-header", "ant-table-hide-scrollbar", 3, "ngStyle"], ["tableHeaderElement", ""], [1, "ant-table-body"], ["tableBodyElement", ""], [3, "ngIf", "ngTemplateOutlet"], [1, "ant-table-body", 3, "hidden", "itemSize", "maxBufferPx", "minBufferPx"], [4, "cdkVirtualFor", "cdkVirtualForOf", "cdkVirtualForTrackBy"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "ant-table-placeholder"], [3, "nzComponentName", "specificContent"], [1, "ant-table-footer"], [4, "nzStringTemplateOutlet"], [3, "nzInTable", "nzShowSizeChanger", "nzPageSizeOptions", "nzItemRender", "nzShowQuickJumper", "nzHideOnSinglePage", "nzShowTotal", "nzSize", "nzPageSize", "nzTotal", "nzSimple", "nzPageIndex", "nzPageSizeChange", "nzPageIndexChange", 4, "ngIf"], [3, "nzInTable", "nzShowSizeChanger", "nzPageSizeOptions", "nzItemRender", "nzShowQuickJumper", "nzHideOnSinglePage", "nzShowTotal", "nzSize", "nzPageSize", "nzTotal", "nzSimple", "nzPageIndex", "nzPageSizeChange", "nzPageIndexChange"], [1, "ant-table-title"], [1, "ant-table-scroll"]], template: function NzTableComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵprojectionDef();
                core.ɵɵtemplate(0, NzTableComponent_ng_template_0_Template, 3, 3, "ng-template", null, 0, core.ɵɵtemplateRefExtractor);
                core.ɵɵtemplate(2, NzTableComponent_ng_template_2_Template, 3, 2, "ng-template", null, 1, core.ɵɵtemplateRefExtractor);
                core.ɵɵtemplate(4, NzTableComponent_ng_template_4_Template, 2, 2, "ng-template", null, 2, core.ɵɵtemplateRefExtractor);
                core.ɵɵtemplate(6, NzTableComponent_ng_template_6_Template, 6, 5, "ng-template", null, 3, core.ɵɵtemplateRefExtractor);
                core.ɵɵtemplate(8, NzTableComponent_ng_template_8_Template, 1, 1, "ng-template", null, 4, core.ɵɵtemplateRefExtractor);
                core.ɵɵelementStart(10, "nz-spin", 5);
                core.ɵɵtemplate(11, NzTableComponent_ng_container_11_Template, 2, 1, "ng-container", 6);
                core.ɵɵelementStart(12, "div", 7, 8);
                core.ɵɵtemplate(14, NzTableComponent_div_14_Template, 2, 1, "div", 9);
                core.ɵɵelementStart(15, "div", 10);
                core.ɵɵtemplate(16, NzTableComponent_ng_container_16_Template, 3, 1, "ng-container", 11);
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵtemplate(17, NzTableComponent_ng_container_17_Template, 2, 1, "ng-container", 6);
                core.ɵɵelementEnd();
            } if (rf & 2) {
                var _r2668 = core.ɵɵreference(7);
                core.ɵɵadvance(10);
                core.ɵɵproperty("nzDelay", ctx.nzLoadingDelay)("nzSpinning", ctx.nzLoading)("nzIndicator", ctx.nzLoadingIndicator);
                core.ɵɵadvance(1);
                core.ɵɵproperty("ngIf", ctx.nzPaginationPosition === "both" || ctx.nzPaginationPosition === "top");
                core.ɵɵadvance(1);
                core.ɵɵclassProp("ant-table-fixed-header", ctx.nzScroll.x || ctx.nzScroll.y)("ant-table-bordered", ctx.nzBordered)("ant-table-default", ctx.nzSize === "default")("ant-table-middle", ctx.nzSize === "middle")("ant-table-small", ctx.nzSize === "small");
                core.ɵɵadvance(2);
                core.ɵɵproperty("ngIf", ctx.nzTitle);
                core.ɵɵadvance(2);
                core.ɵɵproperty("ngIf", ctx.nzScroll.x || ctx.nzScroll.y)("ngIfElse", _r2668);
                core.ɵɵadvance(1);
                core.ɵɵproperty("ngIf", ctx.nzPaginationPosition === "both" || ctx.nzPaginationPosition === "bottom");
            } }, styles: ["\n      nz-table {\n        display: block;\n      }\n\n      cdk-virtual-scroll-viewport.ant-table-body {\n        overflow-y: scroll;\n      }\n    "], encapsulation: 2, changeDetection: 0 });
        __decorate([
            core$1.WithConfig(NZ_CONFIG_COMPONENT_NAME, 'default'),
            __metadata("design:type", String)
        ], NzTableComponent.prototype, "nzSize", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzTableComponent.prototype, "nzVirtualScroll", void 0);
        __decorate([
            core$1.InputNumber(),
            __metadata("design:type", Object)
        ], NzTableComponent.prototype, "nzVirtualItemSize", void 0);
        __decorate([
            core$1.InputNumber(),
            __metadata("design:type", Object)
        ], NzTableComponent.prototype, "nzVirtualMaxBufferPx", void 0);
        __decorate([
            core$1.InputNumber(),
            __metadata("design:type", Object)
        ], NzTableComponent.prototype, "nzVirtualMinBufferPx", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzTableComponent.prototype, "nzFrontPagination", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzTableComponent.prototype, "nzTemplateMode", void 0);
        __decorate([
            core$1.WithConfig(NZ_CONFIG_COMPONENT_NAME, false), core$1.InputBoolean(),
            __metadata("design:type", Boolean)
        ], NzTableComponent.prototype, "nzBordered", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzTableComponent.prototype, "nzShowPagination", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzTableComponent.prototype, "nzLoading", void 0);
        __decorate([
            core$1.WithConfig(NZ_CONFIG_COMPONENT_NAME, false), core$1.InputBoolean(),
            __metadata("design:type", Boolean)
        ], NzTableComponent.prototype, "nzShowSizeChanger", void 0);
        __decorate([
            core$1.WithConfig(NZ_CONFIG_COMPONENT_NAME, false), core$1.InputBoolean(),
            __metadata("design:type", Boolean)
        ], NzTableComponent.prototype, "nzHideOnSinglePage", void 0);
        __decorate([
            core$1.WithConfig(NZ_CONFIG_COMPONENT_NAME, false), core$1.InputBoolean(),
            __metadata("design:type", Boolean)
        ], NzTableComponent.prototype, "nzShowQuickJumper", void 0);
        __decorate([
            core$1.WithConfig(NZ_CONFIG_COMPONENT_NAME, false), core$1.InputBoolean(),
            __metadata("design:type", Boolean)
        ], NzTableComponent.prototype, "nzSimple", void 0);
        return NzTableComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NzTableComponent, [{
            type: core.Component,
            args: [{
                    selector: 'nz-table',
                    exportAs: 'nzTable',
                    preserveWhitespaces: false,
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    encapsulation: core.ViewEncapsulation.None,
                    templateUrl: './nz-table.component.html',
                    host: {
                        '[class.ant-table-empty]': 'data.length === 0 && !nzTemplateMode'
                    },
                    styles: [
                        "\n      nz-table {\n        display: block;\n      }\n\n      cdk-virtual-scroll-viewport.ant-table-body {\n        overflow-y: scroll;\n      }\n    "
                    ]
                }]
        }], function () { return [{ type: core$1.NzConfigService }, { type: core.Renderer2 }, { type: core.NgZone }, { type: core.ChangeDetectorRef }, { type: i18n.NzI18nService }, { type: platform.Platform }, { type: core.ElementRef }]; }, { listOfNzThComponent: [{
                type: core.ContentChildren,
                args: [NzThComponent, { descendants: true }]
            }], tableHeaderElement: [{
                type: core.ViewChild,
                args: ['tableHeaderElement', { static: false, read: core.ElementRef }]
            }], tableBodyElement: [{
                type: core.ViewChild,
                args: ['tableBodyElement', { static: false, read: core.ElementRef }]
            }], tableMainElement: [{
                type: core.ViewChild,
                args: ['tableMainElement', { static: false, read: core.ElementRef }]
            }], cdkVirtualScrollElement: [{
                type: core.ViewChild,
                args: [scrolling.CdkVirtualScrollViewport, { static: false, read: core.ElementRef }]
            }], cdkVirtualScrollViewport: [{
                type: core.ViewChild,
                args: [scrolling.CdkVirtualScrollViewport, { static: false, read: scrolling.CdkVirtualScrollViewport }]
            }], nzVirtualScrollDirective: [{
                type: core.ContentChild,
                args: [NzVirtualScrollDirective, { static: false }]
            }], nzSize: [{
                type: core.Input
            }], nzShowTotal: [{
                type: core.Input
            }], nzPageSizeOptions: [{
                type: core.Input
            }], nzVirtualScroll: [{
                type: core.Input
            }], nzVirtualItemSize: [{
                type: core.Input
            }], nzVirtualMaxBufferPx: [{
                type: core.Input
            }], nzVirtualMinBufferPx: [{
                type: core.Input
            }], nzVirtualForTrackBy: [{
                type: core.Input
            }], nzLoadingDelay: [{
                type: core.Input
            }], nzLoadingIndicator: [{
                type: core.Input
            }], nzTotal: [{
                type: core.Input
            }], nzTitle: [{
                type: core.Input
            }], nzFooter: [{
                type: core.Input
            }], nzNoResult: [{
                type: core.Input
            }], nzWidthConfig: [{
                type: core.Input
            }], nzPageIndex: [{
                type: core.Input
            }], nzPageSize: [{
                type: core.Input
            }], nzData: [{
                type: core.Input
            }], nzPaginationPosition: [{
                type: core.Input
            }], nzScroll: [{
                type: core.Input
            }], nzItemRender: [{
                type: core.Input
            }], itemRenderChild: [{
                type: core.ViewChild,
                args: ['renderItemTemplate', { static: true }]
            }], nzFrontPagination: [{
                type: core.Input
            }], nzTemplateMode: [{
                type: core.Input
            }], nzBordered: [{
                type: core.Input
            }], nzShowPagination: [{
                type: core.Input
            }], nzLoading: [{
                type: core.Input
            }], nzShowSizeChanger: [{
                type: core.Input
            }], nzHideOnSinglePage: [{
                type: core.Input
            }], nzShowQuickJumper: [{
                type: core.Input
            }], nzSimple: [{
                type: core.Input
            }], nzPageSizeChange: [{
                type: core.Output
            }], nzPageIndexChange: [{
                type: core.Output
            }], nzCurrentPageDataChange: [{
                type: core.Output
            }] }); })();

    /**
     * @license
     * Copyright Alibaba.com All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    var NzTbodyDirective = /** @class */ (function () {
        function NzTbodyDirective(nzTableComponent) {
            this.nzTableComponent = nzTableComponent;
        }
        /** @nocollapse */ NzTbodyDirective.ɵfac = function NzTbodyDirective_Factory(t) { return new (t || NzTbodyDirective)(core.ɵɵdirectiveInject(NzTableComponent, 9)); };
        /** @nocollapse */ NzTbodyDirective.ɵdir = core.ɵɵdefineDirective({ type: NzTbodyDirective, selectors: [["tbody"]], hostBindings: function NzTbodyDirective_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
                core.ɵɵallocHostVars(1);
            } if (rf & 2) {
                core.ɵɵclassProp("ant-table-tbody", ctx.nzTableComponent);
            } } });
        return NzTbodyDirective;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NzTbodyDirective, [{
            type: core.Directive,
            args: [{
                    // tslint:disable-next-line:directive-selector
                    selector: 'tbody',
                    host: {
                        '[class.ant-table-tbody]': 'nzTableComponent'
                    }
                }]
        }], function () { return [{ type: NzTableComponent, decorators: [{
                    type: core.Host
                }, {
                    type: core.Optional
                }] }]; }, null); })();

    function NzTdComponent_span_0_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelement(0, "span", 4);
    } if (rf & 2) {
        var ctx_r2717 = core.ɵɵnextContext();
        core.ɵɵstyleProp("padding-left", ctx_r2717.nzIndentSize, "px");
    } }
    function NzTdComponent_label_1_Template(rf, ctx) { if (rf & 1) {
        var _r2722 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "label", 5);
        core.ɵɵlistener("ngModelChange", function NzTdComponent_label_1_Template_label_ngModelChange_0_listener($event) { core.ɵɵrestoreView(_r2722); var ctx_r2721 = core.ɵɵnextContext(); return ctx_r2721.nzChecked = $event; })("ngModelChange", function NzTdComponent_label_1_Template_label_ngModelChange_0_listener($event) { core.ɵɵrestoreView(_r2722); var ctx_r2723 = core.ɵɵnextContext(); return ctx_r2723.nzCheckedChange.emit($event); });
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r2718 = core.ɵɵnextContext();
        core.ɵɵproperty("nzDisabled", ctx_r2718.nzDisabled)("ngModel", ctx_r2718.nzChecked)("nzIndeterminate", ctx_r2718.nzIndeterminate);
    } }
    function NzTdComponent_span_2_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelement(0, "span", 6);
    } }
    function NzTdComponent_span_3_Template(rf, ctx) { if (rf & 1) {
        var _r2725 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "span", 7);
        core.ɵɵlistener("click", function NzTdComponent_span_3_Template_span_click_0_listener($event) { core.ɵɵrestoreView(_r2725); var ctx_r2724 = core.ɵɵnextContext(); return ctx_r2724.expandChange($event); });
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r2720 = core.ɵɵnextContext();
        core.ɵɵclassProp("ant-table-row-expanded", ctx_r2720.nzExpand)("ant-table-row-collapsed", !ctx_r2720.nzExpand);
    } }
    var _c0$2 = ["*"];
    var NzTdComponent = /** @class */ (function () {
        function NzTdComponent(elementRef, nzUpdateHostClassService) {
            this.elementRef = elementRef;
            this.nzUpdateHostClassService = nzUpdateHostClassService;
            this.nzChecked = false;
            this.nzDisabled = false;
            this.nzIndeterminate = false;
            this.nzExpand = false;
            this.nzShowExpand = false;
            this.nzShowCheckbox = false;
            this.nzBreakWord = false;
            this.nzCheckedChange = new core.EventEmitter();
            this.nzExpandChange = new core.EventEmitter();
        }
        NzTdComponent.prototype.expandChange = function (e) {
            e.stopPropagation();
            this.nzExpand = !this.nzExpand;
            this.nzExpandChange.emit(this.nzExpand);
        };
        NzTdComponent.prototype.setClassMap = function () {
            var _a;
            this.nzUpdateHostClassService.updateHostClass(this.elementRef.nativeElement, (_a = {},
                _a["ant-table-row-expand-icon-cell"] = this.nzShowExpand && !core$1.isNotNil(this.nzIndentSize),
                _a["ant-table-selection-column"] = this.nzShowCheckbox,
                _a["ant-table-td-left-sticky"] = core$1.isNotNil(this.nzLeft),
                _a["ant-table-td-right-sticky"] = core$1.isNotNil(this.nzRight),
                _a));
        };
        NzTdComponent.prototype.ngOnChanges = function (changes) {
            if (changes.nzIndentSize || changes.nzShowExpand || changes.nzShowCheckbox || changes.nzRight || changes.nzLeft) {
                this.setClassMap();
            }
        };
        /** @nocollapse */ NzTdComponent.ɵfac = function NzTdComponent_Factory(t) { return new (t || NzTdComponent)(core.ɵɵdirectiveInject(core.ElementRef), core.ɵɵdirectiveInject(core$1.NzUpdateHostClassService)); };
        /** @nocollapse */ NzTdComponent.ɵcmp = core.ɵɵdefineComponent({ type: NzTdComponent, selectors: [["td", 9, "nz-disable-td", 3, "mat-cell", ""]], hostBindings: function NzTdComponent_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
                core.ɵɵallocHostVars(4);
            } if (rf & 2) {
                core.ɵɵstyleProp("left", ctx.nzLeft)("right", ctx.nzRight)("text-align", ctx.nzAlign)("word-break", ctx.nzBreakWord ? "break-all" : "");
            } }, inputs: { nzChecked: "nzChecked", nzDisabled: "nzDisabled", nzIndeterminate: "nzIndeterminate", nzLeft: "nzLeft", nzRight: "nzRight", nzAlign: "nzAlign", nzIndentSize: "nzIndentSize", nzExpand: "nzExpand", nzShowExpand: "nzShowExpand", nzShowCheckbox: "nzShowCheckbox", nzBreakWord: "nzBreakWord" }, outputs: { nzCheckedChange: "nzCheckedChange", nzExpandChange: "nzExpandChange" }, features: [core.ɵɵProvidersFeature([core$1.NzUpdateHostClassService]), core.ɵɵNgOnChangesFeature()], ngContentSelectors: _c0$2, decls: 5, vars: 4, consts: [["class", "ant-table-row-indent", 3, "padding-left", 4, "ngIf"], ["nz-checkbox", "", 3, "nzDisabled", "ngModel", "nzIndeterminate", "ngModelChange", 4, "ngIf"], ["class", "ant-table-row-expand-icon ant-table-row-spaced", 4, "ngIf"], ["class", "ant-table-row-expand-icon", 3, "ant-table-row-expanded", "ant-table-row-collapsed", "click", 4, "ngIf"], [1, "ant-table-row-indent"], ["nz-checkbox", "", 3, "nzDisabled", "ngModel", "nzIndeterminate", "ngModelChange"], [1, "ant-table-row-expand-icon", "ant-table-row-spaced"], [1, "ant-table-row-expand-icon", 3, "click"]], template: function NzTdComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵprojectionDef();
                core.ɵɵtemplate(0, NzTdComponent_span_0_Template, 1, 1, "span", 0);
                core.ɵɵtemplate(1, NzTdComponent_label_1_Template, 1, 3, "label", 1);
                core.ɵɵtemplate(2, NzTdComponent_span_2_Template, 1, 0, "span", 2);
                core.ɵɵtemplate(3, NzTdComponent_span_3_Template, 1, 2, "span", 3);
                core.ɵɵprojection(4);
            } if (rf & 2) {
                core.ɵɵproperty("ngIf", ctx.nzIndentSize >= 0);
                core.ɵɵadvance(1);
                core.ɵɵproperty("ngIf", ctx.nzShowCheckbox);
                core.ɵɵadvance(1);
                core.ɵɵproperty("ngIf", !ctx.nzShowExpand && ctx.nzIndentSize >= 0);
                core.ɵɵadvance(1);
                core.ɵɵproperty("ngIf", ctx.nzShowExpand);
            } }, directives: [common.NgIf, checkbox.NzCheckboxComponent, forms.NgControlStatus, forms.NgModel], encapsulation: 2, changeDetection: 0 });
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzTdComponent.prototype, "nzExpand", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzTdComponent.prototype, "nzShowExpand", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzTdComponent.prototype, "nzShowCheckbox", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzTdComponent.prototype, "nzBreakWord", void 0);
        return NzTdComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NzTdComponent, [{
            type: core.Component,
            args: [{
                    // tslint:disable-next-line:component-selector
                    selector: 'td:not(.nz-disable-td):not([mat-cell])',
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    providers: [core$1.NzUpdateHostClassService],
                    preserveWhitespaces: false,
                    encapsulation: core.ViewEncapsulation.None,
                    templateUrl: './nz-td.component.html',
                    host: {
                        '[style.left]': 'nzLeft',
                        '[style.right]': 'nzRight',
                        '[style.text-align]': 'nzAlign',
                        '[style.word-break]': "nzBreakWord ? 'break-all' : ''"
                    }
                }]
        }], function () { return [{ type: core.ElementRef }, { type: core$1.NzUpdateHostClassService }]; }, { nzChecked: [{
                type: core.Input
            }], nzDisabled: [{
                type: core.Input
            }], nzIndeterminate: [{
                type: core.Input
            }], nzLeft: [{
                type: core.Input
            }], nzRight: [{
                type: core.Input
            }], nzAlign: [{
                type: core.Input
            }], nzIndentSize: [{
                type: core.Input
            }], nzExpand: [{
                type: core.Input
            }], nzShowExpand: [{
                type: core.Input
            }], nzShowCheckbox: [{
                type: core.Input
            }], nzBreakWord: [{
                type: core.Input
            }], nzCheckedChange: [{
                type: core.Output
            }], nzExpandChange: [{
                type: core.Output
            }] }); })();

    var _c0$3 = ["contentTemplate"];
    function NzTheadComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵprojection(0);
    } }
    function NzTheadComponent_ng_container_2_ng_template_1_Template(rf, ctx) { }
    function NzTheadComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵtemplate(1, NzTheadComponent_ng_container_2_ng_template_1_Template, 0, 0, "ng-template", 2);
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        core.ɵɵnextContext();
        var _r2658 = core.ɵɵreference(1);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngTemplateOutlet", _r2658);
    } }
    var _c1$2 = ["*"];
    var NzTheadComponent = /** @class */ (function () {
        // tslint:disable-next-line:no-any
        function NzTheadComponent(nzTableComponent, elementRef, renderer) {
            this.nzTableComponent = nzTableComponent;
            this.elementRef = elementRef;
            this.renderer = renderer;
            this.destroy$ = new rxjs.Subject();
            this.nzSingleSort = false;
            this.nzSortChange = new core.EventEmitter();
            if (this.nzTableComponent) {
                this.nzTableComponent.nzTheadComponent = this;
            }
        }
        NzTheadComponent.prototype.ngAfterContentInit = function () {
            var _this = this;
            this.listOfNzThComponent.changes
                .pipe(operators.startWith(true), operators.switchMap(function () { return rxjs.merge.apply(void 0, __spread(_this.listOfNzThComponent.map(function (th) { return th.nzSortChangeWithKey; }))); }), operators.takeUntil(this.destroy$))
                .subscribe(function (data) {
                _this.nzSortChange.emit(data);
                if (_this.nzSingleSort) {
                    _this.listOfNzThComponent.forEach(function (th) {
                        th.nzSort = th.nzSortKey === data.key ? th.nzSort : null;
                        th.marForCheck();
                    });
                }
            });
        };
        NzTheadComponent.prototype.ngAfterViewInit = function () {
            if (this.nzTableComponent) {
                this.renderer.removeChild(this.renderer.parentNode(this.elementRef.nativeElement), this.elementRef.nativeElement);
            }
        };
        NzTheadComponent.prototype.ngOnDestroy = function () {
            this.destroy$.next();
            this.destroy$.complete();
        };
        /** @nocollapse */ NzTheadComponent.ɵfac = function NzTheadComponent_Factory(t) { return new (t || NzTheadComponent)(core.ɵɵdirectiveInject(NzTableComponent, 9), core.ɵɵdirectiveInject(core.ElementRef), core.ɵɵdirectiveInject(core.Renderer2)); };
        /** @nocollapse */ NzTheadComponent.ɵcmp = core.ɵɵdefineComponent({ type: NzTheadComponent, selectors: [["thead", 9, "ant-table-thead"]], contentQueries: function NzTheadComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
                core.ɵɵcontentQuery(dirIndex, NzThComponent, true);
            } if (rf & 2) {
                var _t;
                core.ɵɵqueryRefresh(_t = core.ɵɵloadQuery()) && (ctx.listOfNzThComponent = _t);
            } }, viewQuery: function NzTheadComponent_Query(rf, ctx) { if (rf & 1) {
                core.ɵɵstaticViewQuery(_c0$3, true);
            } if (rf & 2) {
                var _t;
                core.ɵɵqueryRefresh(_t = core.ɵɵloadQuery()) && (ctx.templateRef = _t.first);
            } }, inputs: { nzSingleSort: "nzSingleSort" }, outputs: { nzSortChange: "nzSortChange" }, ngContentSelectors: _c1$2, decls: 3, vars: 1, consts: [["contentTemplate", ""], [4, "ngIf"], [3, "ngTemplateOutlet"]], template: function NzTheadComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵprojectionDef();
                core.ɵɵtemplate(0, NzTheadComponent_ng_template_0_Template, 1, 0, "ng-template", null, 0, core.ɵɵtemplateRefExtractor);
                core.ɵɵtemplate(2, NzTheadComponent_ng_container_2_Template, 2, 1, "ng-container", 1);
            } if (rf & 2) {
                core.ɵɵadvance(2);
                core.ɵɵproperty("ngIf", !ctx.nzTableComponent);
            } }, directives: [common.NgIf, common.NgTemplateOutlet], encapsulation: 2, changeDetection: 0 });
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzTheadComponent.prototype, "nzSingleSort", void 0);
        return NzTheadComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NzTheadComponent, [{
            type: core.Component,
            args: [{
                    // tslint:disable-next-line:component-selector
                    selector: 'thead:not(.ant-table-thead)',
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    encapsulation: core.ViewEncapsulation.None,
                    templateUrl: './nz-thead.component.html'
                }]
        }], function () { return [{ type: NzTableComponent, decorators: [{
                    type: core.Host
                }, {
                    type: core.Optional
                }] }, { type: core.ElementRef }, { type: core.Renderer2 }]; }, { templateRef: [{
                type: core.ViewChild,
                args: ['contentTemplate', { static: true }]
            }], listOfNzThComponent: [{
                type: core.ContentChildren,
                args: [NzThComponent, { descendants: true }]
            }], nzSingleSort: [{
                type: core.Input
            }], nzSortChange: [{
                type: core.Output
            }] }); })();

    /**
     * @license
     * Copyright Alibaba.com All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    var NzTrDirective = /** @class */ (function () {
        function NzTrDirective(elementRef, renderer, nzTableComponent) {
            this.elementRef = elementRef;
            this.renderer = renderer;
            this.nzTableComponent = nzTableComponent;
        }
        Object.defineProperty(NzTrDirective.prototype, "nzExpand", {
            set: function (value) {
                if (core$1.toBoolean(value)) {
                    this.renderer.removeStyle(this.elementRef.nativeElement, 'display');
                    this.renderer.addClass(this.elementRef.nativeElement, 'ant-table-expanded-row');
                }
                else {
                    this.renderer.setStyle(this.elementRef.nativeElement, 'display', 'none');
                    this.renderer.removeClass(this.elementRef.nativeElement, 'ant-table-expanded-row');
                }
            },
            enumerable: true,
            configurable: true
        });
        /** @nocollapse */ NzTrDirective.ɵfac = function NzTrDirective_Factory(t) { return new (t || NzTrDirective)(core.ɵɵdirectiveInject(core.ElementRef), core.ɵɵdirectiveInject(core.Renderer2), core.ɵɵdirectiveInject(NzTableComponent, 9)); };
        /** @nocollapse */ NzTrDirective.ɵdir = core.ɵɵdefineDirective({ type: NzTrDirective, selectors: [["tr", 3, "mat-row", "", 3, "mat-header-row", ""]], hostBindings: function NzTrDirective_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
                core.ɵɵallocHostVars(1);
            } if (rf & 2) {
                core.ɵɵclassProp("ant-table-row", ctx.nzTableComponent);
            } }, inputs: { nzExpand: "nzExpand" } });
        return NzTrDirective;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NzTrDirective, [{
            type: core.Directive,
            args: [{
                    // tslint:disable-next-line:directive-selector
                    selector: 'tr:not([mat-row]):not([mat-header-row])',
                    host: {
                        '[class.ant-table-row]': 'nzTableComponent'
                    }
                }]
        }], function () { return [{ type: core.ElementRef }, { type: core.Renderer2 }, { type: NzTableComponent, decorators: [{
                    type: core.Host
                }, {
                    type: core.Optional
                }] }]; }, { nzExpand: [{
                type: core.Input
            }] }); })();

    /**
     * @license
     * Copyright Alibaba.com All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    var NzTableModule = /** @class */ (function () {
        function NzTableModule() {
        }
        /** @nocollapse */ NzTableModule.ɵmod = core.ɵɵdefineNgModule({ type: NzTableModule });
        /** @nocollapse */ NzTableModule.ɵinj = core.ɵɵdefineInjector({ factory: function NzTableModule_Factory(t) { return new (t || NzTableModule)(); }, imports: [[
                    menu.NzMenuModule,
                    forms.FormsModule,
                    core$1.NzAddOnModule,
                    radio.NzRadioModule,
                    checkbox.NzCheckboxModule,
                    dropdown.NzDropDownModule,
                    common.CommonModule,
                    platform.PlatformModule,
                    pagination.NzPaginationModule,
                    spin.NzSpinModule,
                    i18n.NzI18nModule,
                    icon.NzIconModule,
                    empty.NzEmptyModule,
                    scrolling.ScrollingModule
                ]] });
        return NzTableModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && core.ɵɵsetNgModuleScope(NzTableModule, { declarations: [NzTableComponent,
            NzThComponent,
            NzTdComponent,
            NzTheadComponent,
            NzTbodyDirective,
            NzTrDirective,
            NzVirtualScrollDirective], imports: [menu.NzMenuModule,
            forms.FormsModule,
            core$1.NzAddOnModule,
            radio.NzRadioModule,
            checkbox.NzCheckboxModule,
            dropdown.NzDropDownModule,
            common.CommonModule,
            platform.PlatformModule,
            pagination.NzPaginationModule,
            spin.NzSpinModule,
            i18n.NzI18nModule,
            icon.NzIconModule,
            empty.NzEmptyModule,
            scrolling.ScrollingModule], exports: [NzTableComponent, NzThComponent, NzTdComponent, NzTheadComponent, NzTbodyDirective, NzTrDirective, NzVirtualScrollDirective] }); })();
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NzTableModule, [{
            type: core.NgModule,
            args: [{
                    declarations: [
                        NzTableComponent,
                        NzThComponent,
                        NzTdComponent,
                        NzTheadComponent,
                        NzTbodyDirective,
                        NzTrDirective,
                        NzVirtualScrollDirective
                    ],
                    exports: [NzTableComponent, NzThComponent, NzTdComponent, NzTheadComponent, NzTbodyDirective, NzTrDirective, NzVirtualScrollDirective],
                    imports: [
                        menu.NzMenuModule,
                        forms.FormsModule,
                        core$1.NzAddOnModule,
                        radio.NzRadioModule,
                        checkbox.NzCheckboxModule,
                        dropdown.NzDropDownModule,
                        common.CommonModule,
                        platform.PlatformModule,
                        pagination.NzPaginationModule,
                        spin.NzSpinModule,
                        i18n.NzI18nModule,
                        icon.NzIconModule,
                        empty.NzEmptyModule,
                        scrolling.ScrollingModule
                    ]
                }]
        }], null, null); })();
    core.ɵɵsetComponentScope(NzTableComponent, [NzTableComponent,
        NzThComponent,
        NzTdComponent,
        NzTheadComponent,
        NzTbodyDirective,
        NzTrDirective,
        NzVirtualScrollDirective, menu.NzMenuDirective, menu.NzMenuItemDirective, menu.NzSubMenuComponent, menu.NzMenuDividerDirective, menu.NzMenuGroupComponent, forms.ɵangular_packages_forms_forms_y, forms.NgSelectOption, forms.ɵangular_packages_forms_forms_x, forms.DefaultValueAccessor, forms.NumberValueAccessor, forms.RangeValueAccessor, forms.CheckboxControlValueAccessor, forms.SelectControlValueAccessor, forms.SelectMultipleControlValueAccessor, forms.RadioControlValueAccessor, forms.NgControlStatus, forms.NgControlStatusGroup, forms.RequiredValidator, forms.MinLengthValidator, forms.MaxLengthValidator, forms.PatternValidator, forms.CheckboxRequiredValidator, forms.EmailValidator, forms.NgModel, forms.NgModelGroup, forms.NgForm, core$1.NzStringTemplateOutletDirective, core$1.NzClassListAddDirective, radio.NzRadioComponent, radio.NzRadioButtonComponent, radio.NzRadioGroupComponent, checkbox.NzCheckboxComponent, checkbox.NzCheckboxGroupComponent, checkbox.NzCheckboxWrapperComponent, dropdown.NzDropDownDirective, dropdown.NzDropDownADirective, dropdown.NzDropdownMenuComponent, common.NgClass, common.NgComponentOutlet, common.NgForOf, common.NgIf, common.NgTemplateOutlet, common.NgStyle, common.NgSwitch, common.NgSwitchCase, common.NgSwitchDefault, common.NgPlural, common.NgPluralCase, pagination.NzPaginationComponent, spin.NzSpinComponent, icon.NzIconDirective, empty.NzEmptyComponent, empty.NzEmbedEmptyComponent, bidi.Dir, scrolling.CdkFixedSizeVirtualScroll, scrolling.CdkScrollable, scrolling.CdkVirtualForOf, scrolling.CdkVirtualScrollViewport], [common.AsyncPipe, common.UpperCasePipe, common.LowerCasePipe, common.JsonPipe, common.SlicePipe, common.DecimalPipe, common.PercentPipe, common.TitleCasePipe, common.CurrencyPipe, common.DatePipe, common.I18nPluralPipe, common.I18nSelectPipe, common.KeyValuePipe, i18n.NzI18nPipe]);

    exports.NzTableComponent = NzTableComponent;
    exports.NzTableModule = NzTableModule;
    exports.NzTbodyDirective = NzTbodyDirective;
    exports.NzTdComponent = NzTdComponent;
    exports.NzThComponent = NzThComponent;
    exports.NzTheadComponent = NzTheadComponent;
    exports.NzTrDirective = NzTrDirective;
    exports.NzVirtualScrollDirective = NzVirtualScrollDirective;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ng-zorro-antd-table.umd.js.map
