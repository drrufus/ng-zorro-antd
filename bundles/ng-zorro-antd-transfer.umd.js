(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('@angular/core'),require('ng-zorro-antd/core'),require('@angular/common'),require('ng-zorro-antd/checkbox'),require('ng-zorro-antd/empty'),require('@angular/forms'),require('ng-zorro-antd/icon'),require('ng-zorro-antd/i18n'),require('ng-zorro-antd/button'),require('ng-zorro-antd/input'),exports, require('@angular/core'), require('ng-zorro-antd/core'), require('rxjs'), require('rxjs/operators'), require('ng-zorro-antd/i18n'), require('@angular/common'), require('@angular/forms'), require('ng-zorro-antd/button'), require('ng-zorro-antd/checkbox'), require('ng-zorro-antd/empty'), require('ng-zorro-antd/icon'), require('ng-zorro-antd/input')) :
    typeof define === 'function' && define.amd ? define('ng-zorro-antd/transfer', ['@angular/core','ng-zorro-antd/core','@angular/common','ng-zorro-antd/checkbox','ng-zorro-antd/empty','@angular/forms','ng-zorro-antd/icon','ng-zorro-antd/i18n','ng-zorro-antd/button','ng-zorro-antd/input','exports', '@angular/core', 'ng-zorro-antd/core', 'rxjs', 'rxjs/operators', 'ng-zorro-antd/i18n', '@angular/common', '@angular/forms', 'ng-zorro-antd/button', 'ng-zorro-antd/checkbox', 'ng-zorro-antd/empty', 'ng-zorro-antd/icon', 'ng-zorro-antd/input'], factory) :
    (global = global || self, factory(global.ng.core,global.ngZorroAntd.core,global.ng.common,global.ngZorroAntd.checkbox,global.ngZorroAntd.empty,global.ng.forms,global.ngZorroAntd.icon,global.ngZorroAntd.i18n,global.ngZorroAntd.button,global.ngZorroAntd.input,(global['ng-zorro-antd'] = global['ng-zorro-antd'] || {}, global['ng-zorro-antd'].transfer = {}), global.ng.core, global['ng-zorro-antd'].core, global.rxjs, global.rxjs.operators, global['ng-zorro-antd'].i18n, global.ng.common, global.ng.forms, global['ng-zorro-antd'].button, global['ng-zorro-antd'].checkbox, global['ng-zorro-antd'].empty, global['ng-zorro-antd'].icon, global['ng-zorro-antd'].input));
}(this, (function (ɵngcc0,ɵngcc1,ɵngcc2,ɵngcc3,ɵngcc4,ɵngcc5,ɵngcc6,ɵngcc7,ɵngcc8,ɵngcc9,exports, core, core$1, rxjs, operators, i18n, common, forms, button, checkbox, empty, icon, input) { 
function NzTransferListComponent_ng_template_0_ul_0_div_1_li_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var item_r10 = ɵngcc0.ɵɵnextContext(2).$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(item_r10.title);
} }
function NzTransferListComponent_ng_template_0_ul_0_div_1_li_1_ng_template_3_Template(rf, ctx) { }
var _c0 = function (a0) { return { "ant-transfer-list-content-item-disabled": a0 }; };
var _c1 = function (a0) { return { $implicit: a0 }; };
function NzTransferListComponent_ng_template_0_ul_0_div_1_li_1_Template(rf, ctx) { if (rf & 1) {
    var _r18 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "li", 15);
    ɵngcc0.ɵɵlistener("click", function NzTransferListComponent_ng_template_0_ul_0_div_1_li_1_Template_li_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r18); var item_r10 = ɵngcc0.ɵɵnextContext().$implicit; var ctx_r16 = ɵngcc0.ɵɵnextContext(3); return ctx_r16.onItemSelect(item_r10); });
    ɵngcc0.ɵɵelementStart(1, "label", 16);
    ɵngcc0.ɵɵlistener("nzCheckedChange", function NzTransferListComponent_ng_template_0_ul_0_div_1_li_1_Template_label_nzCheckedChange_1_listener() { ɵngcc0.ɵɵrestoreView(_r18); var item_r10 = ɵngcc0.ɵɵnextContext().$implicit; var ctx_r19 = ɵngcc0.ɵɵnextContext(3); return ctx_r19.onItemSelect(item_r10); })("click", function NzTransferListComponent_ng_template_0_ul_0_div_1_li_1_Template_label_click_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r18); return $event.stopPropagation(); });
    ɵngcc0.ɵɵtemplate(2, NzTransferListComponent_ng_template_0_ul_0_div_1_li_1_ng_container_2_Template, 2, 1, "ng-container", 7);
    ɵngcc0.ɵɵtemplate(3, NzTransferListComponent_ng_template_0_ul_0_div_1_li_1_ng_template_3_Template, 0, 0, "ng-template", 17, 18, ɵngcc0.ɵɵtemplateRefExtractor);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var _r13 = ɵngcc0.ɵɵreference(4);
    var item_r10 = ɵngcc0.ɵɵnextContext().$implicit;
    var ctx_r11 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(7, _c0, ctx_r11.disabled || item_r10.disabled));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("nzChecked", item_r10.checked)("nzDisabled", ctx_r11.disabled || item_r10.disabled);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r11.render)("ngIfElse", _r13);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r11.render)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction1(9, _c1, item_r10));
} }
function NzTransferListComponent_ng_template_0_ul_0_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 13);
    ɵngcc0.ɵɵtemplate(1, NzTransferListComponent_ng_template_0_ul_0_div_1_li_1_Template, 5, 11, "li", 14);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var item_r10 = ctx.$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !item_r10.hide);
} }
function NzTransferListComponent_ng_template_0_ul_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "ul", 11);
    ɵngcc0.ɵɵtemplate(1, NzTransferListComponent_ng_template_0_ul_0_div_1_Template, 2, 1, "div", 12);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r7 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r7.dataSource);
} }
function NzTransferListComponent_ng_template_0_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 19);
    ɵngcc0.ɵɵelement(1, "nz-embed-empty", 20);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r8 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("nzComponentName", "transfer")("specificContent", ctx_r8.notFoundContent);
} }
function NzTransferListComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, NzTransferListComponent_ng_template_0_ul_0_Template, 2, 1, "ul", 9);
    ɵngcc0.ɵɵtemplate(1, NzTransferListComponent_ng_template_0_div_1_Template, 2, 2, "div", 10);
} if (rf & 2) {
    var ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngIf", ctx_r1.stat.shownCount > 0);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r1.stat.shownCount === 0);
} }
function NzTransferListComponent_label_3_Template(rf, ctx) { if (rf & 1) {
    var _r24 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "label", 21);
    ɵngcc0.ɵɵlistener("nzCheckedChange", function NzTransferListComponent_label_3_Template_label_nzCheckedChange_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r24); var ctx_r23 = ɵngcc0.ɵɵnextContext(); return ctx_r23.onItemSelectAll($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("nzChecked", ctx_r2.stat.checkAll)("nzIndeterminate", ctx_r2.stat.checkHalf)("nzDisabled", ctx_r2.stat.shownCount == 0 || ctx_r2.disabled);
} }
function NzTransferListComponent_span_7_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span", 22);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r3 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r3.titleText);
} }
function NzTransferListComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    var _r26 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 23);
    ɵngcc0.ɵɵelementStart(1, "div", 24);
    ɵngcc0.ɵɵlistener("valueChanged", function NzTransferListComponent_div_9_Template_div_valueChanged_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r26); var ctx_r25 = ɵngcc0.ɵɵnextContext(); return ctx_r25.handleFilter($event); })("valueClear", function NzTransferListComponent_div_9_Template_div_valueClear_1_listener() { ɵngcc0.ɵɵrestoreView(_r26); var ctx_r27 = ɵngcc0.ɵɵnextContext(); return ctx_r27.handleClear(); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r4 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("placeholder", ctx_r4.searchPlaceholder)("disabled", ctx_r4.disabled)("value", ctx_r4.filter);
} }
function NzTransferListComponent_ng_container_10_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
var _c2 = function (a0, a1, a2, a3, a4, a5) { return { $implicit: a0, direction: a1, disabled: a2, onItemSelectAll: a3, onItemSelect: a4, stat: a5 }; };
function NzTransferListComponent_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelementStart(1, "div", 25);
    ɵngcc0.ɵɵtemplate(2, NzTransferListComponent_ng_container_10_ng_container_2_Template, 1, 0, "ng-container", 26);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r5 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r5.renderList)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction6(2, _c2, ctx_r5.dataSource, ctx_r5.direction, ctx_r5.disabled, ctx_r5.onItemSelectAll, ctx_r5.onItemSelect, ctx_r5.stat));
} }
function NzTransferListComponent_div_11_ng_template_1_Template(rf, ctx) { }
function NzTransferListComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 27);
    ɵngcc0.ɵɵtemplate(1, NzTransferListComponent_div_11_ng_template_1_Template, 0, 0, "ng-template", 17);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r6 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r6.footer)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction1(2, _c1, ctx_r6.direction));
} }
var _c3 = function (a0) { return { "ant-transfer__nodata": a0 }; };
var _c4 = ["nz-transfer-search", ""];
function NzTransferSearchComponent_a_1_Template(rf, ctx) { if (rf & 1) {
    var _r4 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "a", 3);
    ɵngcc0.ɵɵlistener("click", function NzTransferSearchComponent_a_1_Template_a_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r4); var ctx_r3 = ɵngcc0.ɵɵnextContext(); return ctx_r3._clear(); });
    ɵngcc0.ɵɵelement(1, "i", 4);
    ɵngcc0.ɵɵelementEnd();
} }
function NzTransferSearchComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span", 5);
    ɵngcc0.ɵɵelement(1, "i", 6);
    ɵngcc0.ɵɵelementEnd();
} }
var _c5 = function (a0) { return { "ant-input-disabled": a0 }; };
function NzTransferComponent_span_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span");
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r0.nzOperations[1]);
} }
function NzTransferComponent_span_7_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span");
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r1.nzOperations[0]);
} }
'use strict';

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

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @license
     * Copyright Alibaba.com All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    /**
     * @record
     */
    function TransferItem() { }
    if (false) {
        /** @type {?} */
        TransferItem.prototype.title;
        /** @type {?|undefined} */
        TransferItem.prototype.direction;
        /** @type {?|undefined} */
        TransferItem.prototype.disabled;
        /** @type {?|undefined} */
        TransferItem.prototype.checked;
        /** @type {?|undefined} */
        TransferItem.prototype.hide;
        /* Skipping unhandled member: [key: string]: any;*/
    }
    /**
     * @record
     */
    function TransferCanMove() { }
    if (false) {
        /** @type {?} */
        TransferCanMove.prototype.direction;
        /** @type {?} */
        TransferCanMove.prototype.list;
    }
    /**
     * @record
     */
    function TransferChange() { }
    if (false) {
        /** @type {?} */
        TransferChange.prototype.from;
        /** @type {?} */
        TransferChange.prototype.to;
        /** @type {?} */
        TransferChange.prototype.list;
    }
    /**
     * @record
     */
    function TransferSearchChange() { }
    if (false) {
        /** @type {?} */
        TransferSearchChange.prototype.direction;
        /** @type {?} */
        TransferSearchChange.prototype.value;
    }
    /**
     * @record
     */
    function TransferSelectChange() { }
    if (false) {
        /** @type {?} */
        TransferSelectChange.prototype.direction;
        /** @type {?} */
        TransferSelectChange.prototype.checked;
        /** @type {?} */
        TransferSelectChange.prototype.list;
        /** @type {?|undefined} */
        TransferSelectChange.prototype.item;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzTransferListComponent = /** @class */ (function () {
        // #endregion
        function NzTransferListComponent(el, updateHostClassService, cdr) {
            var _this = this;
            this.el = el;
            this.updateHostClassService = updateHostClassService;
            this.cdr = cdr;
            // #region fields
            this.direction = '';
            this.titleText = '';
            this.showSelectAll = true;
            this.dataSource = [];
            this.itemUnit = '';
            this.itemsUnit = '';
            this.filter = '';
            // events
            this.handleSelectAll = new core.EventEmitter();
            this.handleSelect = new core.EventEmitter();
            this.filterChange = new core.EventEmitter();
            // #endregion
            // #region styles
            this.prefixCls = 'ant-transfer-list';
            // #endregion
            // #region select all
            this.stat = {
                checkAll: false,
                checkHalf: false,
                checkCount: 0,
                shownCount: 0
            };
            this.onItemSelect = (/**
             * @param {?} item
             * @return {?}
             */
            function (item) {
                if (_this.disabled || item.disabled) {
                    return;
                }
                item.checked = !item.checked;
                _this.updateCheckStatus();
                _this.handleSelect.emit(item);
            });
            this.onItemSelectAll = (/**
             * @param {?} status
             * @return {?}
             */
            function (status) {
                _this.dataSource.forEach((/**
                 * @param {?} item
                 * @return {?}
                 */
                function (item) {
                    if (!item.disabled && !item.hide) {
                        item.checked = status;
                    }
                }));
                _this.updateCheckStatus();
                _this.handleSelectAll.emit(status);
            });
        }
        /**
         * @return {?}
         */
        NzTransferListComponent.prototype.setClassMap = /**
         * @return {?}
         */
        function () {
            var _a;
            /** @type {?} */
            var classMap = (_a = {},
                _a[this.prefixCls] = true,
                _a[this.prefixCls + "-with-footer"] = !!this.footer,
                _a);
            this.updateHostClassService.updateHostClass(this.el.nativeElement, classMap);
        };
        /**
         * @private
         * @return {?}
         */
        NzTransferListComponent.prototype.updateCheckStatus = /**
         * @private
         * @return {?}
         */
        function () {
            /** @type {?} */
            var validCount = this.dataSource.filter((/**
             * @param {?} w
             * @return {?}
             */
            function (w) { return !w.disabled; })).length;
            this.stat.checkCount = this.dataSource.filter((/**
             * @param {?} w
             * @return {?}
             */
            function (w) { return w.checked && !w.disabled; })).length;
            this.stat.shownCount = this.dataSource.filter((/**
             * @param {?} w
             * @return {?}
             */
            function (w) { return !w.hide; })).length;
            this.stat.checkAll = validCount > 0 && validCount === this.stat.checkCount;
            this.stat.checkHalf = this.stat.checkCount > 0 && !this.stat.checkAll;
        };
        // #endregion
        // #region search
        // #endregion
        // #region search
        /**
         * @param {?} value
         * @return {?}
         */
        NzTransferListComponent.prototype.handleFilter = 
        // #endregion
        // #region search
        /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            var _this = this;
            this.filter = value;
            this.dataSource.forEach((/**
             * @param {?} item
             * @return {?}
             */
            function (item) {
                item.hide = value.length > 0 && !_this.matchFilter(value, item);
            }));
            this.stat.shownCount = this.dataSource.filter((/**
             * @param {?} w
             * @return {?}
             */
            function (w) { return !w.hide; })).length;
            this.filterChange.emit({ direction: this.direction, value: value });
        };
        /**
         * @return {?}
         */
        NzTransferListComponent.prototype.handleClear = /**
         * @return {?}
         */
        function () {
            this.handleFilter('');
        };
        /**
         * @private
         * @param {?} text
         * @param {?} item
         * @return {?}
         */
        NzTransferListComponent.prototype.matchFilter = /**
         * @private
         * @param {?} text
         * @param {?} item
         * @return {?}
         */
        function (text, item) {
            if (this.filterOption) {
                return this.filterOption(text, item);
            }
            return item.title.includes(text);
        };
        /**
         * @param {?} changes
         * @return {?}
         */
        NzTransferListComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
        function (changes) {
            if ('footer' in changes) {
                this.setClassMap();
            }
        };
        /**
         * @return {?}
         */
        NzTransferListComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            this.setClassMap();
        };
        /**
         * @return {?}
         */
        NzTransferListComponent.prototype.markForCheck = /**
         * @return {?}
         */
        function () {
            this.updateCheckStatus();
            this.cdr.markForCheck();
        };
        /** @nocollapse */
        NzTransferListComponent.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: core$1.NzUpdateHostClassService },
            { type: core.ChangeDetectorRef }
        ]; };
        NzTransferListComponent.propDecorators = {
            direction: [{ type: core.Input }],
            titleText: [{ type: core.Input }],
            showSelectAll: [{ type: core.Input }],
            dataSource: [{ type: core.Input }],
            itemUnit: [{ type: core.Input }],
            itemsUnit: [{ type: core.Input }],
            filter: [{ type: core.Input }],
            disabled: [{ type: core.Input }],
            showSearch: [{ type: core.Input }],
            searchPlaceholder: [{ type: core.Input }],
            notFoundContent: [{ type: core.Input }],
            filterOption: [{ type: core.Input }],
            renderList: [{ type: core.Input }],
            render: [{ type: core.Input }],
            footer: [{ type: core.Input }],
            handleSelectAll: [{ type: core.Output }],
            handleSelect: [{ type: core.Output }],
            filterChange: [{ type: core.Output }]
        };
NzTransferListComponent.ɵfac = function NzTransferListComponent_Factory(t) { return new (t || NzTransferListComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.NzUpdateHostClassService), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
NzTransferListComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzTransferListComponent, selectors: [["nz-transfer-list"]], inputs: { direction: "direction", titleText: "titleText", showSelectAll: "showSelectAll", dataSource: "dataSource", itemUnit: "itemUnit", itemsUnit: "itemsUnit", filter: "filter", disabled: "disabled", showSearch: "showSearch", searchPlaceholder: "searchPlaceholder", notFoundContent: "notFoundContent", filterOption: "filterOption", renderList: "renderList", render: "render", footer: "footer" }, outputs: { handleSelectAll: "handleSelectAll", handleSelect: "handleSelect", filterChange: "filterChange" }, exportAs: ["nzTransferList"], features: [ɵngcc0.ɵɵProvidersFeature([core$1.NzUpdateHostClassService]), ɵngcc0.ɵɵNgOnChangesFeature], decls: 12, vars: 14, consts: [["defaultRenderList", ""], [1, "ant-transfer-list-header"], ["nz-checkbox", "", 3, "nzChecked", "nzIndeterminate", "nzDisabled", "nzCheckedChange", 4, "ngIf"], [1, "ant-transfer-list-header-selected"], ["class", "ant-transfer-list-header-title", 4, "ngIf"], [3, "ngClass"], ["class", "ant-transfer-list-body-search-wrapper", 4, "ngIf"], [4, "ngIf", "ngIfElse"], ["class", "ant-transfer-list-footer", 4, "ngIf"], ["class", "ant-transfer-list-content", 4, "ngIf"], ["class", "ant-transfer-list-body-not-found", 4, "ngIf"], [1, "ant-transfer-list-content"], ["class", "LazyLoad", 4, "ngFor", "ngForOf"], [1, "LazyLoad"], ["class", "ant-transfer-list-content-item", 3, "ngClass", "click", 4, "ngIf"], [1, "ant-transfer-list-content-item", 3, "ngClass", "click"], ["nz-checkbox", "", 3, "nzChecked", "nzDisabled", "nzCheckedChange", "click"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["renderContainer", ""], [1, "ant-transfer-list-body-not-found"], [3, "nzComponentName", "specificContent"], ["nz-checkbox", "", 3, "nzChecked", "nzIndeterminate", "nzDisabled", "nzCheckedChange"], [1, "ant-transfer-list-header-title"], [1, "ant-transfer-list-body-search-wrapper"], ["nz-transfer-search", "", 3, "placeholder", "disabled", "value", "valueChanged", "valueClear"], [1, "ant-transfer-list-body-customize-wrapper"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "ant-transfer-list-footer"]], template: function NzTransferListComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, NzTransferListComponent_ng_template_0_Template, 2, 2, "ng-template", null, 0, ɵngcc0.ɵɵtemplateRefExtractor);
        ɵngcc0.ɵɵelementStart(2, "div", 1);
        ɵngcc0.ɵɵtemplate(3, NzTransferListComponent_label_3_Template, 1, 3, "label", 2);
        ɵngcc0.ɵɵelementStart(4, "span", 3);
        ɵngcc0.ɵɵelementStart(5, "span");
        ɵngcc0.ɵɵtext(6);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(7, NzTransferListComponent_span_7_Template, 2, 1, "span", 4);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(8, "div", 5);
        ɵngcc0.ɵɵtemplate(9, NzTransferListComponent_div_9_Template, 2, 3, "div", 6);
        ɵngcc0.ɵɵtemplate(10, NzTransferListComponent_ng_container_10_Template, 3, 9, "ng-container", 7);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(11, NzTransferListComponent_div_11_Template, 2, 4, "div", 8);
    } if (rf & 2) {
        var _r0 = ɵngcc0.ɵɵreference(1);
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵproperty("ngIf", ctx.showSelectAll);
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵtextInterpolate2("", (ctx.stat.checkCount > 0 ? ctx.stat.checkCount + "/" : "") + ctx.stat.shownCount, " ", ctx.dataSource.length > 1 ? ctx.itemsUnit : ctx.itemUnit, "");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.titleText);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassMap(ctx.showSearch ? "ant-transfer-list-body ant-transfer-list-body-with-search" : "ant-transfer-list-body");
        ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(12, _c3, ctx.stat.shownCount === 0));
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.showSearch);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.renderList)("ngIfElse", _r0);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.footer);
    } }, directives: function () { return [ɵngcc2.NgIf, ɵngcc2.NgClass, ɵngcc2.NgForOf, ɵngcc3.NzCheckboxComponent, ɵngcc2.NgTemplateOutlet, ɵngcc4.NzEmbedEmptyComponent, NzTransferSearchComponent]; }, encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzTransferListComponent, [{
        type: core.Component,
        args: [{
                selector: 'nz-transfer-list',
                exportAs: 'nzTransferList',
                preserveWhitespaces: false,
                providers: [core$1.NzUpdateHostClassService],
                template: "<ng-template #defaultRenderList>\r\n  <ul *ngIf=\"stat.shownCount > 0\" class=\"ant-transfer-list-content\">\r\n    <div class=\"LazyLoad\" *ngFor=\"let item of dataSource\">\r\n      <li *ngIf=\"!item.hide\" (click)=\"onItemSelect(item)\"\r\n        class=\"ant-transfer-list-content-item\" [ngClass]=\"{'ant-transfer-list-content-item-disabled': disabled || item.disabled}\">\r\n        <label nz-checkbox [nzChecked]=\"item.checked\" (nzCheckedChange)=\"onItemSelect(item)\"\r\n          (click)=\"$event.stopPropagation()\" [nzDisabled]=\"disabled || item.disabled\">\r\n          <ng-container *ngIf=\"!render; else renderContainer\">{{ item.title }}</ng-container>\r\n          <ng-template #renderContainer [ngTemplateOutlet]=\"render\" [ngTemplateOutletContext]=\"{ $implicit: item }\"></ng-template>\r\n        </label>\r\n      </li>\r\n    </div>\r\n  </ul>\r\n  <div *ngIf=\"stat.shownCount === 0\" class=\"ant-transfer-list-body-not-found\">\r\n    <nz-embed-empty [nzComponentName]=\"'transfer'\" [specificContent]=\"notFoundContent\"></nz-embed-empty>\r\n  </div>\r\n</ng-template>\r\n<div class=\"ant-transfer-list-header\">\r\n  <label *ngIf=\"showSelectAll\" nz-checkbox [nzChecked]=\"stat.checkAll\" (nzCheckedChange)=\"onItemSelectAll($event)\"\r\n    [nzIndeterminate]=\"stat.checkHalf\" [nzDisabled]=\"stat.shownCount == 0 || disabled\">\r\n  </label>\r\n  <span class=\"ant-transfer-list-header-selected\">\r\n    <span>{{ (stat.checkCount > 0 ? stat.checkCount + '/' : '') + stat.shownCount }} {{ dataSource.length > 1 ? itemsUnit : itemUnit }}</span>\r\n    <span *ngIf=\"titleText\" class=\"ant-transfer-list-header-title\">{{ titleText }}</span>\r\n  </span>\r\n</div>\r\n<div class=\"{{showSearch ? 'ant-transfer-list-body ant-transfer-list-body-with-search' : 'ant-transfer-list-body'}}\"\r\n  [ngClass]=\"{'ant-transfer__nodata': stat.shownCount === 0}\">\r\n  <div *ngIf=\"showSearch\" class=\"ant-transfer-list-body-search-wrapper\">\r\n    <div nz-transfer-search\r\n      (valueChanged)=\"handleFilter($event)\"\r\n      (valueClear)=\"handleClear()\"\r\n      [placeholder]=\"searchPlaceholder\"\r\n      [disabled]=\"disabled\"\r\n      [value]=\"filter\"></div>\r\n  </div>\r\n  <ng-container *ngIf=\"renderList else defaultRenderList\">\r\n    <div class=\"ant-transfer-list-body-customize-wrapper\">\r\n      <ng-container *ngTemplateOutlet=\"renderList; context: {\r\n        $implicit: dataSource,\r\n        direction: direction,\r\n        disabled: disabled,\r\n        onItemSelectAll: onItemSelectAll,\r\n        onItemSelect: onItemSelect,\r\n        stat: stat\r\n      }\"></ng-container>\r\n    </div>\r\n  </ng-container>\r\n</div>\r\n<div *ngIf=\"footer\" class=\"ant-transfer-list-footer\">\r\n  <ng-template [ngTemplateOutlet]=\"footer\" [ngTemplateOutletContext]=\"{ $implicit: direction }\"></ng-template>\r\n</div>",
                encapsulation: core.ViewEncapsulation.None,
                changeDetection: core.ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc1.NzUpdateHostClassService }, { type: ɵngcc0.ChangeDetectorRef }]; }, { direction: [{
            type: core.Input
        }], titleText: [{
            type: core.Input
        }], showSelectAll: [{
            type: core.Input
        }], dataSource: [{
            type: core.Input
        }], itemUnit: [{
            type: core.Input
        }], itemsUnit: [{
            type: core.Input
        }], filter: [{
            type: core.Input
        }], handleSelectAll: [{
            type: core.Output
        }], handleSelect: [{
            type: core.Output
        }], filterChange: [{
            type: core.Output
        }], disabled: [{
            type: core.Input
        }], showSearch: [{
            type: core.Input
        }], searchPlaceholder: [{
            type: core.Input
        }], notFoundContent: [{
            type: core.Input
        }], filterOption: [{
            type: core.Input
        }], renderList: [{
            type: core.Input
        }], render: [{
            type: core.Input
        }], footer: [{
            type: core.Input
        }] }); })();
        return NzTransferListComponent;
    }());
    if (false) {
        /** @type {?} */
        NzTransferListComponent.prototype.direction;
        /** @type {?} */
        NzTransferListComponent.prototype.titleText;
        /** @type {?} */
        NzTransferListComponent.prototype.showSelectAll;
        /** @type {?} */
        NzTransferListComponent.prototype.dataSource;
        /** @type {?} */
        NzTransferListComponent.prototype.itemUnit;
        /** @type {?} */
        NzTransferListComponent.prototype.itemsUnit;
        /** @type {?} */
        NzTransferListComponent.prototype.filter;
        /** @type {?} */
        NzTransferListComponent.prototype.disabled;
        /** @type {?} */
        NzTransferListComponent.prototype.showSearch;
        /** @type {?} */
        NzTransferListComponent.prototype.searchPlaceholder;
        /** @type {?} */
        NzTransferListComponent.prototype.notFoundContent;
        /** @type {?} */
        NzTransferListComponent.prototype.filterOption;
        /** @type {?} */
        NzTransferListComponent.prototype.renderList;
        /** @type {?} */
        NzTransferListComponent.prototype.render;
        /** @type {?} */
        NzTransferListComponent.prototype.footer;
        /** @type {?} */
        NzTransferListComponent.prototype.handleSelectAll;
        /** @type {?} */
        NzTransferListComponent.prototype.handleSelect;
        /** @type {?} */
        NzTransferListComponent.prototype.filterChange;
        /** @type {?} */
        NzTransferListComponent.prototype.prefixCls;
        /** @type {?} */
        NzTransferListComponent.prototype.stat;
        /** @type {?} */
        NzTransferListComponent.prototype.onItemSelect;
        /** @type {?} */
        NzTransferListComponent.prototype.onItemSelectAll;
        /**
         * @type {?}
         * @private
         */
        NzTransferListComponent.prototype.el;
        /**
         * @type {?}
         * @private
         */
        NzTransferListComponent.prototype.updateHostClassService;
        /**
         * @type {?}
         * @private
         */
        NzTransferListComponent.prototype.cdr;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzTransferSearchComponent = /** @class */ (function () {
        // endregion
        function NzTransferSearchComponent(cdr) {
            this.cdr = cdr;
            this.valueChanged = new core.EventEmitter();
            this.valueClear = new core.EventEmitter();
        }
        /**
         * @return {?}
         */
        NzTransferSearchComponent.prototype._handle = /**
         * @return {?}
         */
        function () {
            this.valueChanged.emit(this.value);
        };
        /**
         * @return {?}
         */
        NzTransferSearchComponent.prototype._clear = /**
         * @return {?}
         */
        function () {
            if (this.disabled) {
                return;
            }
            this.value = '';
            this.valueClear.emit();
        };
        /**
         * @return {?}
         */
        NzTransferSearchComponent.prototype.ngOnChanges = /**
         * @return {?}
         */
        function () {
            this.cdr.detectChanges();
        };
        /** @nocollapse */
        NzTransferSearchComponent.ctorParameters = function () { return [
            { type: core.ChangeDetectorRef }
        ]; };
        NzTransferSearchComponent.propDecorators = {
            placeholder: [{ type: core.Input }],
            value: [{ type: core.Input }],
            disabled: [{ type: core.Input }],
            valueChanged: [{ type: core.Output }],
            valueClear: [{ type: core.Output }]
        };
NzTransferSearchComponent.ɵfac = function NzTransferSearchComponent_Factory(t) { return new (t || NzTransferSearchComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
NzTransferSearchComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzTransferSearchComponent, selectors: [["", "nz-transfer-search", ""]], inputs: { value: "value", placeholder: "placeholder", disabled: "disabled" }, outputs: { valueChanged: "valueChanged", valueClear: "valueClear" }, exportAs: ["nzTransferSearch"], features: [ɵngcc0.ɵɵNgOnChangesFeature], attrs: _c4, decls: 4, vars: 8, consts: [[1, "ant-input", "ant-transfer-list-search", 3, "ngModel", "disabled", "placeholder", "ngClass", "ngModelChange"], ["class", "ant-transfer-list-search-action", 3, "click", 4, "ngIf", "ngIfElse"], ["def", ""], [1, "ant-transfer-list-search-action", 3, "click"], ["nz-icon", "", "nzType", "close-circle"], [1, "ant-transfer-list-search-action"], ["nz-icon", "", "nzType", "search"]], template: function NzTransferSearchComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "input", 0);
        ɵngcc0.ɵɵlistener("ngModelChange", function NzTransferSearchComponent_Template_input_ngModelChange_0_listener($event) { return ctx.value = $event; })("ngModelChange", function NzTransferSearchComponent_Template_input_ngModelChange_0_listener() { return ctx._handle(); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(1, NzTransferSearchComponent_a_1_Template, 2, 0, "a", 1);
        ɵngcc0.ɵɵtemplate(2, NzTransferSearchComponent_ng_template_2_Template, 2, 0, "ng-template", null, 2, ɵngcc0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        var _r1 = ɵngcc0.ɵɵreference(3);
        ɵngcc0.ɵɵproperty("ngModel", ctx.value)("disabled", ctx.disabled)("placeholder", ctx.placeholder)("ngClass", ɵngcc0.ɵɵpureFunction1(6, _c5, ctx.disabled));
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.value && ctx.value.length > 0)("ngIfElse", _r1);
    } }, directives: [ɵngcc5.DefaultValueAccessor, ɵngcc5.NgControlStatus, ɵngcc5.NgModel, ɵngcc2.NgClass, ɵngcc2.NgIf, ɵngcc6.NzIconDirective], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzTransferSearchComponent, [{
        type: core.Component,
        args: [{
                selector: '[nz-transfer-search]',
                exportAs: 'nzTransferSearch',
                preserveWhitespaces: false,
                template: "<input [(ngModel)]=\"value\" (ngModelChange)=\"_handle()\" [disabled]=\"disabled\" [placeholder]=\"placeholder\"\r\n  class=\"ant-input ant-transfer-list-search\" [ngClass]=\"{'ant-input-disabled': disabled}\">\r\n<a *ngIf=\"value && value.length > 0; else def\" class=\"ant-transfer-list-search-action\" (click)=\"_clear()\">\r\n  <i nz-icon nzType=\"close-circle\"></i>\r\n</a>\r\n<ng-template #def>\r\n  <span class=\"ant-transfer-list-search-action\"><i nz-icon nzType=\"search\"></i></span>\r\n</ng-template>",
                encapsulation: core.ViewEncapsulation.None,
                changeDetection: core.ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: ɵngcc0.ChangeDetectorRef }]; }, { valueChanged: [{
            type: core.Output
        }], valueClear: [{
            type: core.Output
        }], value: [{
            type: core.Input
        }], placeholder: [{
            type: core.Input
        }], disabled: [{
            type: core.Input
        }] }); })();
        return NzTransferSearchComponent;
    }());
    if (false) {
        /** @type {?} */
        NzTransferSearchComponent.prototype.placeholder;
        /** @type {?} */
        NzTransferSearchComponent.prototype.value;
        /** @type {?} */
        NzTransferSearchComponent.prototype.disabled;
        /** @type {?} */
        NzTransferSearchComponent.prototype.valueChanged;
        /** @type {?} */
        NzTransferSearchComponent.prototype.valueClear;
        /**
         * @type {?}
         * @private
         */
        NzTransferSearchComponent.prototype.cdr;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzTransferComponent = /** @class */ (function () {
        // #endregion
        function NzTransferComponent(cdr, i18n, nzUpdateHostClassService, elementRef, renderer) {
            var _this = this;
            this.cdr = cdr;
            this.i18n = i18n;
            this.nzUpdateHostClassService = nzUpdateHostClassService;
            this.elementRef = elementRef;
            this.unsubscribe$ = new rxjs.Subject();
            // tslint:disable-next-line:no-any
            this.locale = {};
            this.leftFilter = '';
            this.rightFilter = '';
            // #region fields
            this.nzDisabled = false;
            this.nzDataSource = [];
            this.nzTitles = ['', ''];
            this.nzOperations = [];
            this.nzShowSelectAll = true;
            this.nzCanMove = (/**
             * @param {?} arg
             * @return {?}
             */
            function (arg) { return rxjs.of(arg.list); });
            this.nzRenderList = [null, null];
            this.nzShowSearch = false;
            // events
            this.nzChange = new core.EventEmitter();
            this.nzSearchChange = new core.EventEmitter();
            this.nzSelectChange = new core.EventEmitter();
            // #endregion
            // #region process data
            // left
            this.leftDataSource = [];
            // right
            this.rightDataSource = [];
            this.handleLeftSelectAll = (/**
             * @param {?} checked
             * @return {?}
             */
            function (checked) { return _this.handleSelect('left', checked); });
            this.handleRightSelectAll = (/**
             * @param {?} checked
             * @return {?}
             */
            function (checked) { return _this.handleSelect('right', checked); });
            this.handleLeftSelect = (/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return _this.handleSelect('left', !!item.checked, item); });
            this.handleRightSelect = (/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return _this.handleSelect('right', !!item.checked, item); });
            // #endregion
            // #region operation
            this.leftActive = false;
            this.rightActive = false;
            this.moveToLeft = (/**
             * @return {?}
             */
            function () { return _this.moveTo('left'); });
            this.moveToRight = (/**
             * @return {?}
             */
            function () { return _this.moveTo('right'); });
            renderer.addClass(elementRef.nativeElement, 'ant-transfer');
        }
        /**
         * @private
         * @return {?}
         */
        NzTransferComponent.prototype.splitDataSource = /**
         * @private
         * @return {?}
         */
        function () {
            var _this = this;
            this.leftDataSource = [];
            this.rightDataSource = [];
            this.nzDataSource.forEach((/**
             * @param {?} record
             * @return {?}
             */
            function (record) {
                if (record.direction === 'right') {
                    record.direction = 'right';
                    _this.rightDataSource.push(record);
                }
                else {
                    record.direction = 'left';
                    _this.leftDataSource.push(record);
                }
            }));
        };
        /**
         * @private
         * @param {?} direction
         * @return {?}
         */
        NzTransferComponent.prototype.getCheckedData = /**
         * @private
         * @param {?} direction
         * @return {?}
         */
        function (direction) {
            return this[direction === 'left' ? 'leftDataSource' : 'rightDataSource'].filter((/**
             * @param {?} w
             * @return {?}
             */
            function (w) { return w.checked; }));
        };
        /**
         * @param {?} direction
         * @param {?} checked
         * @param {?=} item
         * @return {?}
         */
        NzTransferComponent.prototype.handleSelect = /**
         * @param {?} direction
         * @param {?} checked
         * @param {?=} item
         * @return {?}
         */
        function (direction, checked, item) {
            /** @type {?} */
            var list = this.getCheckedData(direction);
            this.updateOperationStatus(direction, list.length);
            this.nzSelectChange.emit({ direction: direction, checked: checked, list: list, item: item });
        };
        /**
         * @param {?} ret
         * @return {?}
         */
        NzTransferComponent.prototype.handleFilterChange = /**
         * @param {?} ret
         * @return {?}
         */
        function (ret) {
            this.nzSearchChange.emit(ret);
        };
        /**
         * @private
         * @param {?} direction
         * @param {?=} count
         * @return {?}
         */
        NzTransferComponent.prototype.updateOperationStatus = /**
         * @private
         * @param {?} direction
         * @param {?=} count
         * @return {?}
         */
        function (direction, count) {
            this[direction === 'right' ? 'leftActive' : 'rightActive'] =
                (typeof count === 'undefined' ? this.getCheckedData(direction).filter((/**
                 * @param {?} w
                 * @return {?}
                 */
                function (w) { return !w.disabled; })).length : count) > 0;
        };
        /**
         * @param {?} direction
         * @return {?}
         */
        NzTransferComponent.prototype.moveTo = /**
         * @param {?} direction
         * @return {?}
         */
        function (direction) {
            var _this = this;
            /** @type {?} */
            var oppositeDirection = direction === 'left' ? 'right' : 'left';
            this.updateOperationStatus(oppositeDirection, 0);
            /** @type {?} */
            var datasource = direction === 'left' ? this.rightDataSource : this.leftDataSource;
            /** @type {?} */
            var moveList = datasource.filter((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return item.checked === true && !item.disabled; }));
            this.nzCanMove({ direction: direction, list: moveList }).subscribe((/**
             * @param {?} newMoveList
             * @return {?}
             */
            function (newMoveList) { return _this.truthMoveTo(direction, newMoveList.filter((/**
             * @param {?} i
             * @return {?}
             */
            function (i) { return !!i; }))); }), (/**
             * @return {?}
             */
            function () { return moveList.forEach((/**
             * @param {?} i
             * @return {?}
             */
            function (i) { return (i.checked = false); })); }));
        };
        /**
         * @private
         * @param {?} direction
         * @param {?} list
         * @return {?}
         */
        NzTransferComponent.prototype.truthMoveTo = /**
         * @private
         * @param {?} direction
         * @param {?} list
         * @return {?}
         */
        function (direction, list) {
            var e_1, _a;
            /** @type {?} */
            var oppositeDirection = direction === 'left' ? 'right' : 'left';
            /** @type {?} */
            var datasource = direction === 'left' ? this.rightDataSource : this.leftDataSource;
            /** @type {?} */
            var targetDatasource = direction === 'left' ? this.leftDataSource : this.rightDataSource;
            try {
                for (var list_1 = __values(list), list_1_1 = list_1.next(); !list_1_1.done; list_1_1 = list_1.next()) {
                    var item = list_1_1.value;
                    item.checked = false;
                    item.hide = false;
                    item.direction = direction;
                    datasource.splice(datasource.indexOf(item), 1);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (list_1_1 && !list_1_1.done && (_a = list_1.return)) _a.call(list_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            targetDatasource.splice.apply(targetDatasource, __spread([0, 0], list));
            this.updateOperationStatus(oppositeDirection);
            this.nzChange.emit({
                from: oppositeDirection,
                to: direction,
                list: list
            });
            this.markForCheckAllList();
        };
        /**
         * @private
         * @return {?}
         */
        NzTransferComponent.prototype.setClassMap = /**
         * @private
         * @return {?}
         */
        function () {
            var _a;
            /** @type {?} */
            var prefixCls = 'ant-transfer';
            this.nzUpdateHostClassService.updateHostClass(this.elementRef.nativeElement, (_a = {},
                _a[prefixCls + "-disabled"] = this.nzDisabled,
                _a[prefixCls + "-customize-list"] = this.nzRenderList.some((/**
                 * @param {?} i
                 * @return {?}
                 */
                function (i) { return !!i; })),
                _a));
        };
        /**
         * @private
         * @return {?}
         */
        NzTransferComponent.prototype.markForCheckAllList = /**
         * @private
         * @return {?}
         */
        function () {
            if (!this.lists) {
                return;
            }
            this.lists.forEach((/**
             * @param {?} i
             * @return {?}
             */
            function (i) { return i.markForCheck(); }));
        };
        /**
         * @return {?}
         */
        NzTransferComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.i18n.localeChange.pipe(operators.takeUntil(this.unsubscribe$)).subscribe((/**
             * @return {?}
             */
            function () {
                _this.locale = _this.i18n.getLocaleData('Transfer');
                _this.markForCheckAllList();
            }));
            this.setClassMap();
        };
        /**
         * @param {?} changes
         * @return {?}
         */
        NzTransferComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
        function (changes) {
            this.setClassMap();
            if (changes.nzDataSource || changes.nzTargetKeys) {
                this.splitDataSource();
                this.updateOperationStatus('left');
                this.updateOperationStatus('right');
                this.cdr.detectChanges();
                this.markForCheckAllList();
            }
        };
        /**
         * @return {?}
         */
        NzTransferComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            this.unsubscribe$.next();
            this.unsubscribe$.complete();
        };
        /** @nocollapse */
        NzTransferComponent.ctorParameters = function () { return [
            { type: core.ChangeDetectorRef },
            { type: i18n.NzI18nService },
            { type: core$1.NzUpdateHostClassService },
            { type: core.ElementRef },
            { type: core.Renderer2 }
        ]; };
        NzTransferComponent.propDecorators = {
            lists: [{ type: core.ViewChildren, args: [NzTransferListComponent,] }],
            nzDisabled: [{ type: core.Input }],
            nzDataSource: [{ type: core.Input }],
            nzTitles: [{ type: core.Input }],
            nzOperations: [{ type: core.Input }],
            nzListStyle: [{ type: core.Input }],
            nzShowSelectAll: [{ type: core.Input }],
            nzItemUnit: [{ type: core.Input }],
            nzItemsUnit: [{ type: core.Input }],
            nzCanMove: [{ type: core.Input }],
            nzRenderList: [{ type: core.Input }],
            nzRender: [{ type: core.Input }],
            nzFooter: [{ type: core.Input }],
            nzShowSearch: [{ type: core.Input }],
            nzFilterOption: [{ type: core.Input }],
            nzSearchPlaceholder: [{ type: core.Input }],
            nzNotFoundContent: [{ type: core.Input }],
            nzChange: [{ type: core.Output }],
            nzSearchChange: [{ type: core.Output }],
            nzSelectChange: [{ type: core.Output }]
        };
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzTransferComponent.prototype, "nzDisabled", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzTransferComponent.prototype, "nzShowSelectAll", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzTransferComponent.prototype, "nzShowSearch", void 0);
NzTransferComponent.ɵfac = function NzTransferComponent_Factory(t) { return new (t || NzTransferComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc7.NzI18nService), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.NzUpdateHostClassService), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2)); };
NzTransferComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzTransferComponent, selectors: [["nz-transfer"]], viewQuery: function NzTransferComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(NzTransferListComponent, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.lists = _t);
    } }, hostVars: 2, hostBindings: function NzTransferComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("ant-transfer-disabled", ctx.nzDisabled);
    } }, inputs: { nzDisabled: "nzDisabled", nzDataSource: "nzDataSource", nzTitles: "nzTitles", nzOperations: "nzOperations", nzShowSelectAll: "nzShowSelectAll", nzCanMove: "nzCanMove", nzRenderList: "nzRenderList", nzShowSearch: "nzShowSearch", nzListStyle: "nzListStyle", nzItemUnit: "nzItemUnit", nzItemsUnit: "nzItemsUnit", nzRender: "nzRender", nzFooter: "nzFooter", nzFilterOption: "nzFilterOption", nzSearchPlaceholder: "nzSearchPlaceholder", nzNotFoundContent: "nzNotFoundContent" }, outputs: { nzChange: "nzChange", nzSearchChange: "nzSearchChange", nzSelectChange: "nzSelectChange" }, exportAs: ["nzTransfer"], features: [ɵngcc0.ɵɵProvidersFeature([core$1.NzUpdateHostClassService]), ɵngcc0.ɵɵNgOnChangesFeature], decls: 9, vars: 38, consts: [["data-direction", "left", 1, "ant-transfer-list", 3, "ngStyle", "titleText", "showSelectAll", "dataSource", "filter", "filterOption", "renderList", "render", "disabled", "showSearch", "searchPlaceholder", "notFoundContent", "itemUnit", "itemsUnit", "footer", "filterChange", "handleSelect", "handleSelectAll"], [1, "ant-transfer-operation"], ["nz-button", "", 3, "disabled", "nzType", "nzSize", "click"], ["nz-icon", "", "nzType", "left"], [4, "ngIf"], ["nz-icon", "", "nzType", "right"], ["data-direction", "right", 1, "ant-transfer-list", 3, "ngStyle", "titleText", "showSelectAll", "dataSource", "filter", "filterOption", "renderList", "render", "disabled", "showSearch", "searchPlaceholder", "notFoundContent", "itemUnit", "itemsUnit", "footer", "filterChange", "handleSelect", "handleSelectAll"]], template: function NzTransferComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "nz-transfer-list", 0);
        ɵngcc0.ɵɵlistener("filterChange", function NzTransferComponent_Template_nz_transfer_list_filterChange_0_listener($event) { return ctx.handleFilterChange($event); })("handleSelect", function NzTransferComponent_Template_nz_transfer_list_handleSelect_0_listener($event) { return ctx.handleLeftSelect($event); })("handleSelectAll", function NzTransferComponent_Template_nz_transfer_list_handleSelectAll_0_listener($event) { return ctx.handleLeftSelectAll($event); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(1, "div", 1);
        ɵngcc0.ɵɵelementStart(2, "button", 2);
        ɵngcc0.ɵɵlistener("click", function NzTransferComponent_Template_button_click_2_listener() { return ctx.moveToLeft(); });
        ɵngcc0.ɵɵelement(3, "i", 3);
        ɵngcc0.ɵɵtemplate(4, NzTransferComponent_span_4_Template, 2, 1, "span", 4);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(5, "button", 2);
        ɵngcc0.ɵɵlistener("click", function NzTransferComponent_Template_button_click_5_listener() { return ctx.moveToRight(); });
        ɵngcc0.ɵɵelement(6, "i", 5);
        ɵngcc0.ɵɵtemplate(7, NzTransferComponent_span_7_Template, 2, 1, "span", 4);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(8, "nz-transfer-list", 6);
        ɵngcc0.ɵɵlistener("filterChange", function NzTransferComponent_Template_nz_transfer_list_filterChange_8_listener($event) { return ctx.handleFilterChange($event); })("handleSelect", function NzTransferComponent_Template_nz_transfer_list_handleSelect_8_listener($event) { return ctx.handleRightSelect($event); })("handleSelectAll", function NzTransferComponent_Template_nz_transfer_list_handleSelectAll_8_listener($event) { return ctx.handleRightSelectAll($event); });
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngStyle", ctx.nzListStyle)("titleText", ctx.nzTitles[0])("showSelectAll", ctx.nzShowSelectAll)("dataSource", ctx.leftDataSource)("filter", ctx.leftFilter)("filterOption", ctx.nzFilterOption)("renderList", ctx.nzRenderList[0])("render", ctx.nzRender)("disabled", ctx.nzDisabled)("showSearch", ctx.nzShowSearch)("searchPlaceholder", ctx.nzSearchPlaceholder || ctx.locale.searchPlaceholder)("notFoundContent", ctx.nzNotFoundContent)("itemUnit", ctx.nzItemUnit || ctx.locale.itemUnit)("itemsUnit", ctx.nzItemsUnit || ctx.locale.itemsUnit)("footer", ctx.nzFooter);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("disabled", ctx.nzDisabled || !ctx.leftActive)("nzType", "primary")("nzSize", "small");
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", ctx.nzOperations[1]);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("disabled", ctx.nzDisabled || !ctx.rightActive)("nzType", "primary")("nzSize", "small");
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", ctx.nzOperations[0]);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngStyle", ctx.nzListStyle)("titleText", ctx.nzTitles[1])("showSelectAll", ctx.nzShowSelectAll)("dataSource", ctx.rightDataSource)("filter", ctx.rightFilter)("filterOption", ctx.nzFilterOption)("renderList", ctx.nzRenderList[1])("render", ctx.nzRender)("disabled", ctx.nzDisabled)("showSearch", ctx.nzShowSearch)("searchPlaceholder", ctx.nzSearchPlaceholder || ctx.locale.searchPlaceholder)("notFoundContent", ctx.nzNotFoundContent)("itemUnit", ctx.nzItemUnit || ctx.locale.itemUnit)("itemsUnit", ctx.nzItemsUnit || ctx.locale.itemsUnit)("footer", ctx.nzFooter);
    } }, directives: [NzTransferListComponent, ɵngcc2.NgStyle, ɵngcc8.NzButtonComponent, ɵngcc6.NzIconDirective, ɵngcc2.NgIf], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzTransferComponent, [{
        type: core.Component,
        args: [{
                selector: 'nz-transfer',
                exportAs: 'nzTransfer',
                preserveWhitespaces: false,
                template: "<nz-transfer-list class=\"ant-transfer-list\" [ngStyle]=\"nzListStyle\" data-direction=\"left\"\r\n  [titleText]=\"nzTitles[0]\"\r\n  [showSelectAll]=\"nzShowSelectAll\"\r\n  [dataSource]=\"leftDataSource\"\r\n  [filter]=\"leftFilter\"\r\n  [filterOption]=\"nzFilterOption\"\r\n  (filterChange)=\"handleFilterChange($event)\"\r\n  [renderList]=\"nzRenderList[0]\"\r\n  [render]=\"nzRender\"\r\n  [disabled]=\"nzDisabled\"\r\n  [showSearch]=\"nzShowSearch\"\r\n  [searchPlaceholder]=\"nzSearchPlaceholder || locale.searchPlaceholder\"\r\n  [notFoundContent]=\"nzNotFoundContent\"\r\n  [itemUnit]=\"nzItemUnit || locale.itemUnit\"\r\n  [itemsUnit]=\"nzItemsUnit || locale.itemsUnit\"\r\n  [footer]=\"nzFooter\"\r\n  (handleSelect)=\"handleLeftSelect($event)\"\r\n  (handleSelectAll)=\"handleLeftSelectAll($event)\">\r\n</nz-transfer-list>\r\n<div class=\"ant-transfer-operation\">\r\n  <button nz-button (click)=\"moveToLeft()\" [disabled]=\"nzDisabled || !leftActive\" [nzType]=\"'primary'\" [nzSize]=\"'small'\">\r\n    <i nz-icon nzType=\"left\"></i><span *ngIf=\"nzOperations[1]\">{{ nzOperations[1] }}</span>\r\n  </button>\r\n  <button nz-button (click)=\"moveToRight()\" [disabled]=\"nzDisabled || !rightActive\" [nzType]=\"'primary'\" [nzSize]=\"'small'\">\r\n    <i nz-icon nzType=\"right\"></i><span *ngIf=\"nzOperations[0]\">{{ nzOperations[0] }}</span>\r\n  </button>\r\n</div>\r\n<nz-transfer-list class=\"ant-transfer-list\" [ngStyle]=\"nzListStyle\" data-direction=\"right\"\r\n  [titleText]=\"nzTitles[1]\"\r\n  [showSelectAll]=\"nzShowSelectAll\"\r\n  [dataSource]=\"rightDataSource\"\r\n  [filter]=\"rightFilter\"\r\n  [filterOption]=\"nzFilterOption\"\r\n  (filterChange)=\"handleFilterChange($event)\"\r\n  [renderList]=\"nzRenderList[1]\"\r\n  [render]=\"nzRender\"\r\n  [disabled]=\"nzDisabled\"\r\n  [showSearch]=\"nzShowSearch\"\r\n  [searchPlaceholder]=\"nzSearchPlaceholder || locale.searchPlaceholder\"\r\n  [notFoundContent]=\"nzNotFoundContent\"\r\n  [itemUnit]=\"nzItemUnit || locale.itemUnit\"\r\n  [itemsUnit]=\"nzItemsUnit || locale.itemsUnit\"\r\n  [footer]=\"nzFooter\"\r\n  (handleSelect)=\"handleRightSelect($event)\"\r\n  (handleSelectAll)=\"handleRightSelectAll($event)\">\r\n</nz-transfer-list>\r\n",
                host: {
                    '[class.ant-transfer-disabled]': 'nzDisabled'
                },
                encapsulation: core.ViewEncapsulation.None,
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                providers: [core$1.NzUpdateHostClassService]
            }]
    }], function () { return [{ type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc7.NzI18nService }, { type: ɵngcc1.NzUpdateHostClassService }, { type: ɵngcc0.ElementRef }, { type: ɵngcc0.Renderer2 }]; }, { nzDisabled: [{
            type: core.Input
        }], nzDataSource: [{
            type: core.Input
        }], nzTitles: [{
            type: core.Input
        }], nzOperations: [{
            type: core.Input
        }], nzShowSelectAll: [{
            type: core.Input
        }], nzCanMove: [{
            type: core.Input
        }], nzRenderList: [{
            type: core.Input
        }], nzShowSearch: [{
            type: core.Input
        }], nzChange: [{
            type: core.Output
        }], nzSearchChange: [{
            type: core.Output
        }], nzSelectChange: [{
            type: core.Output
        }], lists: [{
            type: core.ViewChildren,
            args: [NzTransferListComponent]
        }], nzListStyle: [{
            type: core.Input
        }], nzItemUnit: [{
            type: core.Input
        }], nzItemsUnit: [{
            type: core.Input
        }], nzRender: [{
            type: core.Input
        }], nzFooter: [{
            type: core.Input
        }], nzFilterOption: [{
            type: core.Input
        }], nzSearchPlaceholder: [{
            type: core.Input
        }], nzNotFoundContent: [{
            type: core.Input
        }] }); })();
        return NzTransferComponent;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        NzTransferComponent.prototype.unsubscribe$;
        /**
         * @type {?}
         * @private
         */
        NzTransferComponent.prototype.lists;
        /** @type {?} */
        NzTransferComponent.prototype.locale;
        /** @type {?} */
        NzTransferComponent.prototype.leftFilter;
        /** @type {?} */
        NzTransferComponent.prototype.rightFilter;
        /** @type {?} */
        NzTransferComponent.prototype.nzDisabled;
        /** @type {?} */
        NzTransferComponent.prototype.nzDataSource;
        /** @type {?} */
        NzTransferComponent.prototype.nzTitles;
        /** @type {?} */
        NzTransferComponent.prototype.nzOperations;
        /** @type {?} */
        NzTransferComponent.prototype.nzListStyle;
        /** @type {?} */
        NzTransferComponent.prototype.nzShowSelectAll;
        /** @type {?} */
        NzTransferComponent.prototype.nzItemUnit;
        /** @type {?} */
        NzTransferComponent.prototype.nzItemsUnit;
        /** @type {?} */
        NzTransferComponent.prototype.nzCanMove;
        /** @type {?} */
        NzTransferComponent.prototype.nzRenderList;
        /** @type {?} */
        NzTransferComponent.prototype.nzRender;
        /** @type {?} */
        NzTransferComponent.prototype.nzFooter;
        /** @type {?} */
        NzTransferComponent.prototype.nzShowSearch;
        /** @type {?} */
        NzTransferComponent.prototype.nzFilterOption;
        /** @type {?} */
        NzTransferComponent.prototype.nzSearchPlaceholder;
        /** @type {?} */
        NzTransferComponent.prototype.nzNotFoundContent;
        /** @type {?} */
        NzTransferComponent.prototype.nzChange;
        /** @type {?} */
        NzTransferComponent.prototype.nzSearchChange;
        /** @type {?} */
        NzTransferComponent.prototype.nzSelectChange;
        /** @type {?} */
        NzTransferComponent.prototype.leftDataSource;
        /** @type {?} */
        NzTransferComponent.prototype.rightDataSource;
        /** @type {?} */
        NzTransferComponent.prototype.handleLeftSelectAll;
        /** @type {?} */
        NzTransferComponent.prototype.handleRightSelectAll;
        /** @type {?} */
        NzTransferComponent.prototype.handleLeftSelect;
        /** @type {?} */
        NzTransferComponent.prototype.handleRightSelect;
        /** @type {?} */
        NzTransferComponent.prototype.leftActive;
        /** @type {?} */
        NzTransferComponent.prototype.rightActive;
        /** @type {?} */
        NzTransferComponent.prototype.moveToLeft;
        /** @type {?} */
        NzTransferComponent.prototype.moveToRight;
        /**
         * @type {?}
         * @private
         */
        NzTransferComponent.prototype.cdr;
        /**
         * @type {?}
         * @private
         */
        NzTransferComponent.prototype.i18n;
        /**
         * @type {?}
         * @private
         */
        NzTransferComponent.prototype.nzUpdateHostClassService;
        /**
         * @type {?}
         * @private
         */
        NzTransferComponent.prototype.elementRef;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzTransferModule = /** @class */ (function () {
        function NzTransferModule() {
        }
NzTransferModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: NzTransferModule });
NzTransferModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function NzTransferModule_Factory(t) { return new (t || NzTransferModule)(); }, imports: [[
            common.CommonModule,
            forms.FormsModule,
            checkbox.NzCheckboxModule,
            button.NzButtonModule,
            input.NzInputModule,
            i18n.NzI18nModule,
            icon.NzIconModule,
            empty.NzEmptyModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(NzTransferModule, { declarations: [NzTransferComponent,
        NzTransferListComponent,
        NzTransferSearchComponent], imports: [ɵngcc2.CommonModule, ɵngcc5.FormsModule, ɵngcc3.NzCheckboxModule, ɵngcc8.NzButtonModule, ɵngcc9.NzInputModule, ɵngcc7.NzI18nModule, ɵngcc6.NzIconModule, ɵngcc4.NzEmptyModule], exports: [NzTransferComponent] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzTransferModule, [{
        type: core.NgModule,
        args: [{
                imports: [
                    common.CommonModule,
                    forms.FormsModule,
                    checkbox.NzCheckboxModule,
                    button.NzButtonModule,
                    input.NzInputModule,
                    i18n.NzI18nModule,
                    icon.NzIconModule,
                    empty.NzEmptyModule
                ],
                declarations: [NzTransferComponent, NzTransferListComponent, NzTransferSearchComponent],
                exports: [NzTransferComponent]
            }]
    }], function () { return []; }, null); })();
        return NzTransferModule;
    }());

    exports.NzTransferComponent = NzTransferComponent;
    exports.NzTransferListComponent = NzTransferListComponent;
    exports.NzTransferModule = NzTransferModule;
    exports.NzTransferSearchComponent = NzTransferSearchComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));


//# sourceMappingURL=ng-zorro-antd-transfer.umd.js.map