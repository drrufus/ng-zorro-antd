(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/core'), require('@angular/forms'), require('ng-zorro-antd/i18n'), require('ng-zorro-antd/radio'), require('ng-zorro-antd/select'), require('ng-zorro-antd/core')) :
    typeof define === 'function' && define.amd ? define('ng-zorro-antd/calendar', ['exports', '@angular/common', '@angular/core', '@angular/forms', 'ng-zorro-antd/i18n', 'ng-zorro-antd/radio', 'ng-zorro-antd/select', 'ng-zorro-antd/core'], factory) :
    (global = global || self, factory((global['ng-zorro-antd'] = global['ng-zorro-antd'] || {}, global['ng-zorro-antd'].calendar = {}), global.ng.common, global.ng.core, global.ng.forms, global['ng-zorro-antd'].i18n, global['ng-zorro-antd'].radio, global['ng-zorro-antd'].select, global['ng-zorro-antd'].core));
}(this, (function (exports, common, core, forms, i18n, radio, select, core$1) { 'use strict';

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
     * @license
     * Copyright Alibaba.com All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    var _c0 = ["date-table-cell", ""];
    function DateTableCellComponent_ng_container_1_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainer(0);
    } }
    var _c1 = function (a0) { return { $implicit: a0 }; };
    function DateTableCellComponent_ng_container_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵtemplate(1, DateTableCellComponent_ng_container_1_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 3);
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var ctx_r2023 = core.ɵɵnextContext(2);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngTemplateOutlet", ctx_r2023.cell.dateCellRender)("ngTemplateOutletContext", core.ɵɵpureFunction1(2, _c1, ctx_r2023.cell.value));
    } }
    function DateTableCellComponent_ng_container_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵelement(1, "span", 4);
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var ctx_r2024 = core.ɵɵnextContext(2);
        core.ɵɵadvance(1);
        core.ɵɵproperty("innerHTML", ctx_r2024.cell.dateCellRender, core.ɵɵsanitizeHtml);
    } }
    function DateTableCellComponent_ng_container_1_ng_container_4_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵelementStart(1, "div");
        core.ɵɵtext(2);
        core.ɵɵelementEnd();
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var ctx_r2025 = core.ɵɵnextContext(2);
        core.ɵɵadvance(1);
        core.ɵɵclassMapInterpolate1("", ctx_r2025.prefixCls, "-date");
        core.ɵɵattribute("aria-selected", ctx_r2025.cell.isSelected)("aria-disabled", ctx_r2025.cell.isDisabled);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1(" ", ctx_r2025.cell.content, " ");
    } }
    function DateTableCellComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵelementContainerStart(1, 0);
        core.ɵɵtemplate(2, DateTableCellComponent_ng_container_1_ng_container_2_Template, 2, 4, "ng-container", 1);
        core.ɵɵtemplate(3, DateTableCellComponent_ng_container_1_ng_container_3_Template, 2, 1, "ng-container", 1);
        core.ɵɵtemplate(4, DateTableCellComponent_ng_container_1_ng_container_4_Template, 3, 6, "ng-container", 2);
        core.ɵɵelementContainerEnd();
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var ctx_r2021 = core.ɵɵnextContext();
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngSwitch", true);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngSwitchCase", ctx_r2021.isTemplateRef(ctx_r2021.cell.dateCellRender));
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngSwitchCase", ctx_r2021.isNonEmptyString(ctx_r2021.cell.dateCellRender));
    } }
    function DateTableCellComponent_ng_container_2_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainer(0);
    } }
    function DateTableCellComponent_ng_container_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵtemplate(1, DateTableCellComponent_ng_container_2_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 3);
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var ctx_r2027 = core.ɵɵnextContext(2);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngTemplateOutlet", ctx_r2027.cell.dateFullCellRender)("ngTemplateOutletContext", core.ɵɵpureFunction1(2, _c1, ctx_r2027.cell.value));
    } }
    function DateTableCellComponent_ng_container_2_ng_template_3_div_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainer(0);
    } }
    function DateTableCellComponent_ng_container_2_ng_template_3_div_2_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div");
        core.ɵɵtemplate(1, DateTableCellComponent_ng_container_2_ng_template_3_div_2_ng_container_1_Template, 1, 0, "ng-container", 3);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r2031 = core.ɵɵnextContext(3);
        core.ɵɵclassMapInterpolate1("", ctx_r2031.prefixCls, "-content");
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngTemplateOutlet", ctx_r2031.cell.dateCellRender)("ngTemplateOutletContext", core.ɵɵpureFunction1(5, _c1, ctx_r2031.cell.value));
    } }
    function DateTableCellComponent_ng_container_2_ng_template_3_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div");
        core.ɵɵtext(1);
        core.ɵɵelementEnd();
        core.ɵɵtemplate(2, DateTableCellComponent_ng_container_2_ng_template_3_div_2_Template, 2, 7, "div", 8);
    } if (rf & 2) {
        var ctx_r2029 = core.ɵɵnextContext(2);
        core.ɵɵclassMapInterpolate1("", ctx_r2029.prefixCls, "-value");
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate(ctx_r2029.cell.content);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", ctx_r2029.cell.dateCellRender);
    } }
    function DateTableCellComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵelementStart(1, "div", 5);
        core.ɵɵtemplate(2, DateTableCellComponent_ng_container_2_ng_container_2_Template, 2, 4, "ng-container", 6);
        core.ɵɵtemplate(3, DateTableCellComponent_ng_container_2_ng_template_3_Template, 3, 5, "ng-template", null, 7, core.ɵɵtemplateRefExtractor);
        core.ɵɵelementEnd();
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var _r2028 = core.ɵɵreference(4);
        var ctx_r2022 = core.ɵɵnextContext();
        core.ɵɵadvance(2);
        core.ɵɵproperty("ngIf", ctx_r2022.cell.dateFullCellRender)("ngIfElse", _r2028);
    } }
    var DateTableCellComponent = /** @class */ (function () {
        function DateTableCellComponent() {
            this.isTemplateRef = core$1.isTemplateRef;
            this.isNonEmptyString = core$1.isNonEmptyString;
        }
        /** @nocollapse */ DateTableCellComponent.ɵfac = function DateTableCellComponent_Factory(t) { return new (t || DateTableCellComponent)(); };
        /** @nocollapse */ DateTableCellComponent.ɵcmp = core.ɵɵdefineComponent({ type: DateTableCellComponent, selectors: [["", "date-table-cell", ""]], inputs: { prefixCls: "prefixCls", cell: "cell" }, exportAs: ["dateTableCell"], attrs: _c0, decls: 3, vars: 3, consts: [[3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "innerHTML"], [1, "ant-fullcalendar-date"], [4, "ngIf", "ngIfElse"], ["defaultCell", ""], [3, "class", 4, "ngIf"]], template: function DateTableCellComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵelementContainerStart(0, 0);
                core.ɵɵtemplate(1, DateTableCellComponent_ng_container_1_Template, 5, 3, "ng-container", 1);
                core.ɵɵtemplate(2, DateTableCellComponent_ng_container_2_Template, 5, 2, "ng-container", 1);
                core.ɵɵelementContainerEnd();
            } if (rf & 2) {
                core.ɵɵproperty("ngSwitch", ctx.prefixCls);
                core.ɵɵadvance(1);
                core.ɵɵproperty("ngSwitchCase", "ant-calendar");
                core.ɵɵadvance(1);
                core.ɵɵproperty("ngSwitchCase", "ant-fullcalendar");
            } }, directives: [common.NgSwitch, common.NgSwitchCase, common.NgSwitchDefault, common.NgTemplateOutlet, common.NgIf], encapsulation: 2 });
        return DateTableCellComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(DateTableCellComponent, [{
            type: core.Component,
            args: [{
                    // tslint:disable-next-line: component-selector
                    selector: '[date-table-cell]',
                    exportAs: 'dateTableCell',
                    templateUrl: './date-table-cell.component.html',
                    styles: []
                }]
        }], null, { prefixCls: [{
                type: core.Input
            }], cell: [{
                type: core.Input
            }] }); })();

    /**
     * @license
     * Copyright Alibaba.com All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    function DateTableComponent_th_3_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "th", 5);
        core.ɵɵelementStart(1, "span");
        core.ɵɵtext(2, "x");
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r2010 = core.ɵɵnextContext();
        core.ɵɵclassMapInterpolate2("", ctx_r2010.prefixCls, "-column-header ", ctx_r2010.prefixCls, "-week-number-header");
        core.ɵɵadvance(1);
        core.ɵɵclassMapInterpolate1("", ctx_r2010.prefixCls, "-column-header-inner");
    } }
    function DateTableComponent_th_4_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "th", 6);
        core.ɵɵelementStart(1, "span");
        core.ɵɵtext(2);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var cell_r2013 = ctx.$implicit;
        var ctx_r2011 = core.ɵɵnextContext();
        core.ɵɵclassMapInterpolate1("", ctx_r2011.prefixCls, "-column-header");
        core.ɵɵpropertyInterpolate("title", cell_r2013.short);
        core.ɵɵadvance(1);
        core.ɵɵclassMapInterpolate1("", ctx_r2011.prefixCls, "-column-header-inner");
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate(cell_r2013.veryShort);
    } }
    function DateTableComponent_tr_6_td_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "td", 10);
        core.ɵɵtext(1);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var row_r2014 = core.ɵɵnextContext().$implicit;
        var ctx_r2015 = core.ɵɵnextContext();
        core.ɵɵclassMapInterpolate1("", ctx_r2015.prefixCls, "-week-number-cell");
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1(" ", row_r2014.weekNum, " ");
    } }
    function DateTableComponent_tr_6_td_2_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "td", 11);
        core.ɵɵlistener("click", function DateTableComponent_tr_6_td_2_Template_td_click_0_listener($event) { var cell_r2018 = ctx.$implicit; return cell_r2018.isDisabled ? null : cell_r2018.onClick(); })("mouseenter", function DateTableComponent_tr_6_td_2_Template_td_mouseenter_0_listener($event) { var cell_r2018 = ctx.$implicit; return cell_r2018.isDisabled ? null : cell_r2018.onMouseEnter(); });
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var cell_r2018 = ctx.$implicit;
        var ctx_r2016 = core.ɵɵnextContext(2);
        core.ɵɵpropertyInterpolate("title", cell_r2018.title);
        core.ɵɵproperty("ngClass", cell_r2018.classMap)("prefixCls", ctx_r2016.prefixCls)("cell", cell_r2018);
    } }
    function DateTableComponent_tr_6_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "tr", 7);
        core.ɵɵtemplate(1, DateTableComponent_tr_6_td_1_Template, 2, 4, "td", 8);
        core.ɵɵtemplate(2, DateTableComponent_tr_6_td_2_Template, 1, 4, "td", 9);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var row_r2014 = ctx.$implicit;
        var ctx_r2012 = core.ɵɵnextContext();
        core.ɵɵproperty("ngClass", row_r2014.classMap);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", row_r2014.weekNum);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngForOf", row_r2014.dateCells)("ngForTrackBy", ctx_r2012.trackByDateFn);
    } }
    var DATE_ROW_NUM = 6;
    var DATE_COL_NUM = 7;
    var DateTableComponent = /** @class */ (function () {
        function DateTableComponent(i18n, dateHelper) {
            this.i18n = i18n;
            this.dateHelper = dateHelper;
            this.prefixCls = 'ant-calendar';
            this.showWeek = false;
            this.dayHover = new core.EventEmitter(); // Emitted when hover on a day by mouse enter
            this.valueChange = new core.EventEmitter();
        }
        Object.defineProperty(DateTableComponent.prototype, "value", {
            get: function () {
                return this._value;
            },
            set: function (date) {
                // Show today by default
                this._value = this.activeDate = date || new core$1.CandyDate();
            },
            enumerable: true,
            configurable: true
        });
        DateTableComponent.prototype.ngOnInit = function () {
            this.render();
        };
        DateTableComponent.prototype.ngOnChanges = function (changes) {
            if (this.isDateRealChange(changes.activeDate) ||
                this.isDateRealChange(changes.value) ||
                this.isDateRealChange(changes.selectedValue) ||
                this.isDateRealChange(changes.hoverValue)) {
                this.render();
            }
        };
        DateTableComponent.prototype.isDateRealChange = function (change) {
            if (change) {
                var previousValue_1 = change.previousValue;
                var currentValue = change.currentValue;
                if (Array.isArray(currentValue)) {
                    return (!Array.isArray(previousValue_1) ||
                        currentValue.length !== previousValue_1.length ||
                        currentValue.some(function (value, index) {
                            var previousCandyDate = previousValue_1[index];
                            return previousCandyDate instanceof core$1.CandyDate ? previousCandyDate.isSameDay(value) : previousCandyDate !== value;
                        }));
                }
                else {
                    return !this.isSameDate(previousValue_1, currentValue);
                }
            }
            return false;
        };
        DateTableComponent.prototype.isSameDate = function (left, right) {
            return (!left && !right) || (left && right && right.isSameDay(left));
        };
        DateTableComponent.prototype.render = function () {
            if (this.value) {
                this.headWeekDays = this.makeHeadWeekDays();
                this.weekRows = this.makeWeekRows();
            }
        };
        DateTableComponent.prototype.changeValueFromInside = function (value) {
            // Only change date not change time
            var newValue = this.value
                .setYear(value.getYear())
                .setMonth(value.getMonth())
                .setDate(value.getDate());
            this.valueChange.emit(newValue);
        };
        DateTableComponent.prototype.makeHeadWeekDays = function () {
            var weekDays = [];
            var start = this.activeDate.calendarStart({ weekStartsOn: this.dateHelper.getFirstDayOfWeek() });
            for (var colIndex = 0; colIndex < DATE_COL_NUM; colIndex++) {
                var day = start.addDays(colIndex);
                weekDays[colIndex] = {
                    short: this.dateHelper.format(day.nativeDate, this.dateHelper.relyOnDatePipe ? 'E' : 'ddd'),
                    veryShort: this.dateHelper.format(day.nativeDate, this.getVeryShortWeekFormat()) // eg. Tu
                };
            }
            return weekDays;
        };
        DateTableComponent.prototype.getVeryShortWeekFormat = function () {
            if (this.dateHelper.relyOnDatePipe) {
                return this.i18n
                    .getLocaleId()
                    .toLowerCase()
                    .indexOf('zh') === 0
                    ? 'EEEEE'
                    : 'EEEEEE'; // Use extreme short for chinese
            }
            return 'dd';
        };
        DateTableComponent.prototype.makeWeekRows = function () {
            var _a;
            var _this = this;
            var weekRows = [];
            var firstDayOfMonth = this.activeDate.calendarStart({ weekStartsOn: this.dateHelper.getFirstDayOfWeek() });
            for (var week = 0; week < DATE_ROW_NUM; week++) {
                var weekStart = firstDayOfMonth.addDays(week * 7);
                var row = {
                    isActive: false,
                    isCurrent: false,
                    dateCells: [],
                    year: weekStart.getYear()
                };
                var _loop_1 = function (day) {
                    var _a;
                    var date = weekStart.addDays(day);
                    var dateFormat = this_1.dateHelper.relyOnDatePipe
                        ? 'longDate'
                        : this_1.i18n.getLocaleData('DatePicker.lang.dateFormat', 'YYYY-MM-DD');
                    var title = this_1.dateHelper.format(date.nativeDate, dateFormat);
                    var label = this_1.dateHelper.format(date.nativeDate, this_1.dateHelper.relyOnDatePipe ? 'dd' : 'DD');
                    var cell = {
                        value: date.nativeDate,
                        label: label,
                        isSelected: false,
                        isDisabled: false,
                        isToday: false,
                        title: title,
                        dateCellRender: core$1.valueFunctionProp(this_1.dateCellRender, date),
                        dateFullCellRender: core$1.valueFunctionProp(this_1.dateFullCellRender, date),
                        content: "" + date.getDate(),
                        onClick: function () { return _this.changeValueFromInside(date); },
                        onMouseEnter: function () { return _this.dayHover.emit(date); }
                    };
                    if (this_1.showWeek && !row.weekNum) {
                        row.weekNum = this_1.dateHelper.getISOWeek(date.nativeDate);
                    }
                    if (date.isToday()) {
                        cell.isToday = true;
                        row.isCurrent = true;
                    }
                    if (Array.isArray(this_1.selectedValue) && date.isSameMonth(this_1.activeDate)) {
                        // Range selections
                        var rangeValue = this_1.hoverValue && this_1.hoverValue.length ? this_1.hoverValue : this_1.selectedValue;
                        var start = rangeValue[0];
                        var end = rangeValue[1];
                        if (start) {
                            if (start.isSameDay(date)) {
                                cell.isSelectedStartDate = true;
                                cell.isSelected = true;
                                row.isActive = true;
                            }
                            if (end) {
                                if (end.isSameDay(date)) {
                                    cell.isSelectedEndDate = true;
                                    cell.isSelected = true;
                                    row.isActive = true;
                                }
                                else if (date.isAfterDay(start) && date.isBeforeDay(end)) {
                                    cell.isInRange = true;
                                }
                            }
                        }
                    }
                    else if (date.isSameDay(this_1.value)) {
                        cell.isSelected = true;
                        row.isActive = true;
                    }
                    if (this_1.disabledDate && this_1.disabledDate(date.nativeDate)) {
                        cell.isDisabled = true;
                    }
                    cell.classMap = (_a = {},
                        _a[this_1.prefixCls + "-cell"] = true,
                        _a[this_1.prefixCls + "-today"] = cell.isToday,
                        _a[this_1.prefixCls + "-last-month-cell"] = date.isBeforeMonth(this_1.activeDate),
                        _a[this_1.prefixCls + "-next-month-btn-day"] = date.isAfterMonth(this_1.activeDate),
                        _a[this_1.prefixCls + "-selected-day"] = cell.isSelected,
                        _a[this_1.prefixCls + "-disabled-cell"] = cell.isDisabled,
                        _a[this_1.prefixCls + "-selected-start-date"] = !!cell.isSelectedStartDate,
                        _a[this_1.prefixCls + "-selected-end-date"] = !!cell.isSelectedEndDate,
                        _a[this_1.prefixCls + "-in-range-cell"] = !!cell.isInRange,
                        _a);
                    row.dateCells.push(cell);
                };
                var this_1 = this;
                for (var day = 0; day < 7; day++) {
                    _loop_1(day);
                }
                row.classMap = (_a = {},
                    _a[this.prefixCls + "-current-week"] = row.isCurrent,
                    _a[this.prefixCls + "-active-week"] = row.isActive,
                    _a);
                weekRows.push(row);
            }
            return weekRows;
        };
        DateTableComponent.prototype.trackByDateFn = function (_index, item) {
            return "" + item.title;
        };
        DateTableComponent.prototype.trackByWeekFn = function (_index, item) {
            return item.year + "-" + item.weekNum;
        };
        /** @nocollapse */ DateTableComponent.ɵfac = function DateTableComponent_Factory(t) { return new (t || DateTableComponent)(core.ɵɵdirectiveInject(i18n.NzI18nService), core.ɵɵdirectiveInject(i18n.DateHelperService)); };
        /** @nocollapse */ DateTableComponent.ɵcmp = core.ɵɵdefineComponent({ type: DateTableComponent, selectors: [["date-table"]], inputs: { prefixCls: "prefixCls", locale: "locale", selectedValue: "selectedValue", hoverValue: "hoverValue", value: "value", activeDate: "activeDate", showWeek: "showWeek", disabledDate: "disabledDate", dateCellRender: "dateCellRender", dateFullCellRender: "dateFullCellRender" }, outputs: { dayHover: "dayHover", valueChange: "valueChange" }, exportAs: ["dateTable"], features: [core.ɵɵNgOnChangesFeature()], decls: 7, vars: 10, consts: [["cellSpacing", "0", "role", "grid"], ["role", "row"], ["role", "columnheader", 3, "class", 4, "ngIf"], ["role", "columnheader", 3, "title", "class", 4, "ngFor", "ngForOf"], ["role", "row", 3, "ngClass", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["role", "columnheader"], ["role", "columnheader", 3, "title"], ["role", "row", 3, "ngClass"], ["role", "gridcell", 3, "class", 4, "ngIf"], ["role", "gridcell", "date-table-cell", "", 3, "title", "ngClass", "prefixCls", "cell", "click", "mouseenter", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["role", "gridcell"], ["role", "gridcell", "date-table-cell", "", 3, "title", "ngClass", "prefixCls", "cell", "click", "mouseenter"]], template: function DateTableComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵelementStart(0, "table", 0);
                core.ɵɵelementStart(1, "thead");
                core.ɵɵelementStart(2, "tr", 1);
                core.ɵɵtemplate(3, DateTableComponent_th_3_Template, 3, 7, "th", 2);
                core.ɵɵtemplate(4, DateTableComponent_th_4_Template, 3, 8, "th", 3);
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵelementStart(5, "tbody");
                core.ɵɵtemplate(6, DateTableComponent_tr_6_Template, 3, 4, "tr", 4);
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
            } if (rf & 2) {
                core.ɵɵclassMapInterpolate1("", ctx.prefixCls, "-table");
                core.ɵɵadvance(3);
                core.ɵɵproperty("ngIf", ctx.showWeek);
                core.ɵɵadvance(1);
                core.ɵɵproperty("ngForOf", ctx.headWeekDays);
                core.ɵɵadvance(1);
                core.ɵɵclassMapInterpolate1("", ctx.prefixCls, "-tbody");
                core.ɵɵadvance(1);
                core.ɵɵproperty("ngForOf", ctx.weekRows)("ngForTrackBy", ctx.trackByWeekFn);
            } }, encapsulation: 2, changeDetection: 0 });
        return DateTableComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(DateTableComponent, [{
            type: core.Component,
            args: [{
                    encapsulation: core.ViewEncapsulation.None,
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    // tslint:disable-next-line:component-selector
                    selector: 'date-table',
                    exportAs: 'dateTable',
                    templateUrl: 'date-table.component.html'
                }]
        }], function () { return [{ type: i18n.NzI18nService }, { type: i18n.DateHelperService }]; }, { prefixCls: [{
                type: core.Input
            }], locale: [{
                type: core.Input
            }], selectedValue: [{
                type: core.Input
            }], hoverValue: [{
                type: core.Input
            }], value: [{
                type: core.Input
            }], activeDate: [{
                type: core.Input
            }], showWeek: [{
                type: core.Input
            }], disabledDate: [{
                type: core.Input
            }], dateCellRender: [{
                type: core.Input
            }], dateFullCellRender: [{
                type: core.Input
            }], dayHover: [{
                type: core.Output
            }], valueChange: [{
                type: core.Output
            }] }); })();

    /**
     * @license
     * Copyright Alibaba.com All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    function MonthTableComponent_tr_2_td_1_ng_container_2_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainer(0);
    } }
    var _c0$1 = function (a0) { return { $implicit: a0 }; };
    function MonthTableComponent_tr_2_td_1_ng_container_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵtemplate(1, MonthTableComponent_tr_2_td_1_ng_container_2_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 9);
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var monthCell_r2036 = core.ɵɵnextContext(2).$implicit;
        var ctx_r2039 = core.ɵɵnextContext(2);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngTemplateOutlet", ctx_r2039.monthFullCellRender)("ngTemplateOutletContext", core.ɵɵpureFunction1(2, _c0$1, monthCell_r2036.value));
    } }
    function MonthTableComponent_tr_2_td_1_ng_container_2_ng_template_3_div_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainer(0);
    } }
    function MonthTableComponent_tr_2_td_1_ng_container_2_ng_template_3_div_2_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div");
        core.ɵɵtemplate(1, MonthTableComponent_tr_2_td_1_ng_container_2_ng_template_3_div_2_ng_container_1_Template, 1, 0, "ng-container", 9);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var monthCell_r2036 = core.ɵɵnextContext(3).$implicit;
        var ctx_r2044 = core.ɵɵnextContext(2);
        core.ɵɵclassMapInterpolate1("", ctx_r2044.prefixCls, "-content");
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngTemplateOutlet", ctx_r2044.monthCellRender)("ngTemplateOutletContext", core.ɵɵpureFunction1(5, _c0$1, monthCell_r2036.value));
    } }
    function MonthTableComponent_tr_2_td_1_ng_container_2_ng_template_3_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div");
        core.ɵɵtext(1);
        core.ɵɵelementEnd();
        core.ɵɵtemplate(2, MonthTableComponent_tr_2_td_1_ng_container_2_ng_template_3_div_2_Template, 2, 7, "div", 10);
    } if (rf & 2) {
        var monthCell_r2036 = core.ɵɵnextContext(2).$implicit;
        var ctx_r2041 = core.ɵɵnextContext(2);
        core.ɵɵclassMapInterpolate1("", ctx_r2041.prefixCls, "-value");
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate(monthCell_r2036.content);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", ctx_r2041.monthCellRender);
    } }
    function MonthTableComponent_tr_2_td_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵelementStart(1, "div");
        core.ɵɵtemplate(2, MonthTableComponent_tr_2_td_1_ng_container_2_ng_container_2_Template, 2, 4, "ng-container", 7);
        core.ɵɵtemplate(3, MonthTableComponent_tr_2_td_1_ng_container_2_ng_template_3_Template, 3, 5, "ng-template", null, 8, core.ɵɵtemplateRefExtractor);
        core.ɵɵelementEnd();
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var _r2040 = core.ɵɵreference(4);
        var ctx_r2037 = core.ɵɵnextContext(3);
        core.ɵɵadvance(1);
        core.ɵɵclassMapInterpolate1("", ctx_r2037.prefixCls, "-month");
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", ctx_r2037.monthFullCellRender)("ngIfElse", _r2040);
    } }
    function MonthTableComponent_tr_2_td_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵelementStart(1, "a");
        core.ɵɵtext(2);
        core.ɵɵelementEnd();
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var monthCell_r2036 = core.ɵɵnextContext().$implicit;
        var ctx_r2038 = core.ɵɵnextContext(2);
        core.ɵɵadvance(1);
        core.ɵɵclassMapInterpolate1("", ctx_r2038.prefixCls, "-month-panel-month");
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate(monthCell_r2036.content);
    } }
    function MonthTableComponent_tr_2_td_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "td", 4);
        core.ɵɵlistener("click", function MonthTableComponent_tr_2_td_1_Template_td_click_0_listener($event) { var monthCell_r2036 = ctx.$implicit; return monthCell_r2036.disabled ? null : monthCell_r2036.onClick(); });
        core.ɵɵelementContainerStart(1, 5);
        core.ɵɵtemplate(2, MonthTableComponent_tr_2_td_1_ng_container_2_Template, 5, 5, "ng-container", 6);
        core.ɵɵtemplate(3, MonthTableComponent_tr_2_td_1_ng_container_3_Template, 3, 4, "ng-container", 6);
        core.ɵɵelementContainerEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var monthCell_r2036 = ctx.$implicit;
        var ctx_r2035 = core.ɵɵnextContext(2);
        core.ɵɵpropertyInterpolate("title", monthCell_r2036.title);
        core.ɵɵproperty("ngClass", monthCell_r2036.classMap);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngSwitch", ctx_r2035.prefixCls);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngSwitchCase", "ant-fullcalendar");
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngSwitchCase", "ant-calendar");
    } }
    function MonthTableComponent_tr_2_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "tr", 2);
        core.ɵɵtemplate(1, MonthTableComponent_tr_2_td_1_Template, 4, 5, "td", 3);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var row_r2034 = ctx.$implicit;
        var ctx_r2033 = core.ɵɵnextContext();
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngForOf", row_r2034)("ngForTrackBy", ctx_r2033.trackPanelMonth);
    } }
    var MAX_ROW = 4;
    var MAX_COL = 3;
    var MonthTableComponent = /** @class */ (function () {
        function MonthTableComponent(dateHelper) {
            this.dateHelper = dateHelper;
            this.value = new core$1.CandyDate();
            this.prefixCls = 'ant-fullcalendar';
            this.valueChange = new core.EventEmitter();
        }
        MonthTableComponent.prototype.ngOnChanges = function (changes) {
            if (changes.value || changes.disabledDate) {
                this.render();
            }
        };
        MonthTableComponent.prototype.trackYear = function (_index) {
            return this.value ? this.value.getYear() : _index;
        };
        MonthTableComponent.prototype.trackPanelMonth = function (_index, monthData) {
            return monthData.content;
        };
        MonthTableComponent.prototype.render = function () {
            if (this.value) {
                this.panelMonths = this.makePanelMonths();
            }
        };
        MonthTableComponent.prototype.makePanelMonths = function () {
            var _this = this;
            var months = [];
            var currentMonth = this.value.getMonth();
            var today = new core$1.CandyDate();
            var monthValue = 0;
            for (var rowIndex = 0; rowIndex < MAX_ROW; rowIndex++) {
                months[rowIndex] = [];
                var _loop_1 = function (colIndex) {
                    var _a;
                    var month = this_1.value.setMonth(monthValue);
                    var disabled = this_1.disabledDate ? this_1.disabledDate(this_1.value.setMonth(monthValue).nativeDate) : false;
                    var content = this_1.dateHelper.format(month.nativeDate, 'MMM');
                    var cell = (months[rowIndex][colIndex] = {
                        value: month.nativeDate,
                        disabled: disabled,
                        content: content,
                        month: monthValue,
                        title: content,
                        classMap: null,
                        onClick: function () { return _this.chooseMonth(cell.month); } // don't use monthValue here
                    });
                    cell.classMap = (_a = {},
                        _a[this_1.prefixCls + "-month-panel-cell"] = true,
                        _a[this_1.prefixCls + "-month-panel-cell-disabled"] = disabled,
                        _a[this_1.prefixCls + "-month-panel-selected-cell"] = monthValue === currentMonth,
                        _a[this_1.prefixCls + "-month-panel-current-cell"] = today.getYear() === this_1.value.getYear() && monthValue === today.getMonth(),
                        _a);
                    monthValue++;
                };
                var this_1 = this;
                for (var colIndex = 0; colIndex < MAX_COL; colIndex++) {
                    _loop_1(colIndex);
                }
            }
            return months;
        };
        MonthTableComponent.prototype.chooseMonth = function (month) {
            this.value = this.value.setMonth(month);
            this.valueChange.emit(this.value);
            this.render();
        };
        /** @nocollapse */ MonthTableComponent.ɵfac = function MonthTableComponent_Factory(t) { return new (t || MonthTableComponent)(core.ɵɵdirectiveInject(i18n.DateHelperService)); };
        /** @nocollapse */ MonthTableComponent.ɵcmp = core.ɵɵdefineComponent({ type: MonthTableComponent, selectors: [["month-table"]], inputs: { value: "value", prefixCls: "prefixCls", monthCellRender: "monthCellRender", monthFullCellRender: "monthFullCellRender", disabledDate: "disabledDate" }, outputs: { valueChange: "valueChange" }, exportAs: ["monthTable"], features: [core.ɵɵNgOnChangesFeature()], decls: 3, vars: 8, consts: [["cellSpacing", "0", "role", "grid"], ["role", "row", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["role", "row"], ["role", "gridcell", 3, "title", "ngClass", "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["role", "gridcell", 3, "title", "ngClass", "click"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngIf", "ngIfElse"], ["defaultCell", ""], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "class", 4, "ngIf"]], template: function MonthTableComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵelementStart(0, "table", 0);
                core.ɵɵelementStart(1, "tbody");
                core.ɵɵtemplate(2, MonthTableComponent_tr_2_Template, 2, 2, "tr", 1);
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
            } if (rf & 2) {
                core.ɵɵclassMapInterpolate1("", ctx.prefixCls, "-month-panel-table");
                core.ɵɵadvance(1);
                core.ɵɵclassMapInterpolate1("", ctx.prefixCls, "-month-panel-tbody");
                core.ɵɵadvance(1);
                core.ɵɵproperty("ngForOf", ctx.panelMonths)("ngForTrackBy", ctx.trackYear);
            } }, directives: [common.NgForOf, common.NgClass, common.NgSwitch, common.NgSwitchCase, common.NgIf, common.NgTemplateOutlet], encapsulation: 2, changeDetection: 0 });
        return MonthTableComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(MonthTableComponent, [{
            type: core.Component,
            args: [{
                    encapsulation: core.ViewEncapsulation.None,
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    // tslint:disable-next-line:component-selector
                    selector: 'month-table',
                    exportAs: 'monthTable',
                    templateUrl: 'month-table.component.html'
                }]
        }], function () { return [{ type: i18n.DateHelperService }]; }, { value: [{
                type: core.Input
            }], prefixCls: [{
                type: core.Input
            }], monthCellRender: [{
                type: core.Input
            }], monthFullCellRender: [{
                type: core.Input
            }], valueChange: [{
                type: core.Output
            }], disabledDate: [{
                type: core.Input
            }] }); })();

    /**
     * @license
     * Copyright Alibaba.com All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    var NzDateCellDirective = /** @class */ (function () {
        function NzDateCellDirective() {
        }
        /** @nocollapse */ NzDateCellDirective.ɵfac = function NzDateCellDirective_Factory(t) { return new (t || NzDateCellDirective)(); };
        /** @nocollapse */ NzDateCellDirective.ɵdir = core.ɵɵdefineDirective({ type: NzDateCellDirective, selectors: [["", "nzDateCell", ""]], exportAs: ["nzDateCell"] });
        return NzDateCellDirective;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NzDateCellDirective, [{
            type: core.Directive,
            args: [{
                    selector: '[nzDateCell]',
                    exportAs: 'nzDateCell'
                }]
        }], null, null); })();
    var NzMonthCellDirective = /** @class */ (function () {
        function NzMonthCellDirective() {
        }
        /** @nocollapse */ NzMonthCellDirective.ɵfac = function NzMonthCellDirective_Factory(t) { return new (t || NzMonthCellDirective)(); };
        /** @nocollapse */ NzMonthCellDirective.ɵdir = core.ɵɵdefineDirective({ type: NzMonthCellDirective, selectors: [["", "nzMonthCell", ""]], exportAs: ["nzMonthCell"] });
        return NzMonthCellDirective;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NzMonthCellDirective, [{
            type: core.Directive,
            args: [{
                    selector: '[nzMonthCell]',
                    exportAs: 'nzMonthCell'
                }]
        }], null, null); })();
    var NzDateFullCellDirective = /** @class */ (function () {
        function NzDateFullCellDirective() {
        }
        /** @nocollapse */ NzDateFullCellDirective.ɵfac = function NzDateFullCellDirective_Factory(t) { return new (t || NzDateFullCellDirective)(); };
        /** @nocollapse */ NzDateFullCellDirective.ɵdir = core.ɵɵdefineDirective({ type: NzDateFullCellDirective, selectors: [["", "nzDateFullCell", ""]], exportAs: ["nzDateFullCell"] });
        return NzDateFullCellDirective;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NzDateFullCellDirective, [{
            type: core.Directive,
            args: [{
                    selector: '[nzDateFullCell]',
                    exportAs: 'nzDateFullCell'
                }]
        }], null, null); })();
    var NzMonthFullCellDirective = /** @class */ (function () {
        function NzMonthFullCellDirective() {
        }
        /** @nocollapse */ NzMonthFullCellDirective.ɵfac = function NzMonthFullCellDirective_Factory(t) { return new (t || NzMonthFullCellDirective)(); };
        /** @nocollapse */ NzMonthFullCellDirective.ɵdir = core.ɵɵdefineDirective({ type: NzMonthFullCellDirective, selectors: [["", "nzMonthFullCell", ""]], exportAs: ["nzMonthFullCell"] });
        return NzMonthFullCellDirective;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NzMonthFullCellDirective, [{
            type: core.Directive,
            args: [{
                    selector: '[nzMonthFullCell]',
                    exportAs: 'nzMonthFullCell'
                }]
        }], null, null); })();

    /**
     * @license
     * Copyright Alibaba.com All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    function NzCalendarHeaderComponent_nz_option_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelement(0, "nz-option", 6);
    } if (rf & 2) {
        var year_r2052 = ctx.$implicit;
        core.ɵɵproperty("nzLabel", year_r2052.label)("nzValue", year_r2052.value);
    } }
    function NzCalendarHeaderComponent_nz_select_2_nz_option_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelement(0, "nz-option", 6);
    } if (rf & 2) {
        var month_r2054 = ctx.$implicit;
        core.ɵɵproperty("nzLabel", month_r2054.label)("nzValue", month_r2054.value);
    } }
    function NzCalendarHeaderComponent_nz_select_2_Template(rf, ctx) { if (rf & 1) {
        var _r2056 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "nz-select", 7);
        core.ɵɵlistener("ngModelChange", function NzCalendarHeaderComponent_nz_select_2_Template_nz_select_ngModelChange_0_listener($event) { core.ɵɵrestoreView(_r2056); var ctx_r2055 = core.ɵɵnextContext(); return ctx_r2055.monthChange.emit($event); });
        core.ɵɵtemplate(1, NzCalendarHeaderComponent_nz_select_2_nz_option_1_Template, 1, 2, "nz-option", 1);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r2051 = core.ɵɵnextContext();
        core.ɵɵproperty("nzSize", ctx_r2051.size)("nzDropdownMatchSelectWidth", false)("ngModel", ctx_r2051.activeMonth);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngForOf", ctx_r2051.months);
    } }
    var NzCalendarHeaderComponent = /** @class */ (function () {
        function NzCalendarHeaderComponent(i18n, dateHelper) {
            this.i18n = i18n;
            this.dateHelper = dateHelper;
            this.mode = 'month';
            this.fullscreen = true;
            this.modeChange = new core.EventEmitter();
            this.activeDate = new core$1.CandyDate();
            this.yearChange = new core.EventEmitter();
            this.monthChange = new core.EventEmitter();
            // @Output() readonly valueChange: EventEmitter<CandyDate> = new EventEmitter();
            this.yearOffset = 10;
            this.yearTotal = 20;
        }
        Object.defineProperty(NzCalendarHeaderComponent.prototype, "activeYear", {
            get: function () {
                return this.activeDate.getYear();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzCalendarHeaderComponent.prototype, "activeMonth", {
            get: function () {
                return this.activeDate.getMonth();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzCalendarHeaderComponent.prototype, "size", {
            get: function () {
                return this.fullscreen ? 'default' : 'small';
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzCalendarHeaderComponent.prototype, "yearTypeText", {
            get: function () {
                return this.i18n.getLocale().Calendar.year;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzCalendarHeaderComponent.prototype, "monthTypeText", {
            get: function () {
                return this.i18n.getLocale().Calendar.month;
            },
            enumerable: true,
            configurable: true
        });
        NzCalendarHeaderComponent.prototype.ngOnInit = function () {
            this.setUpYears();
            this.setUpMonths();
        };
        NzCalendarHeaderComponent.prototype.updateYear = function (year) {
            this.yearChange.emit(year);
            this.setUpYears(year);
        };
        NzCalendarHeaderComponent.prototype.setUpYears = function (year) {
            var start = (year || this.activeYear) - this.yearOffset;
            var end = start + this.yearTotal;
            this.years = [];
            for (var i = start; i < end; i++) {
                this.years.push({ label: "" + i, value: i });
            }
        };
        NzCalendarHeaderComponent.prototype.setUpMonths = function () {
            this.months = [];
            for (var i = 0; i < 12; i++) {
                var dateInMonth = this.activeDate.setMonth(i);
                var monthText = this.dateHelper.format(dateInMonth.nativeDate, 'MMM');
                this.months.push({ label: monthText, value: i });
            }
        };
        /** @nocollapse */ NzCalendarHeaderComponent.ɵfac = function NzCalendarHeaderComponent_Factory(t) { return new (t || NzCalendarHeaderComponent)(core.ɵɵdirectiveInject(i18n.NzI18nService), core.ɵɵdirectiveInject(i18n.DateHelperService)); };
        /** @nocollapse */ NzCalendarHeaderComponent.ɵcmp = core.ɵɵdefineComponent({ type: NzCalendarHeaderComponent, selectors: [["nz-calendar-header"]], hostBindings: function NzCalendarHeaderComponent_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
                core.ɵɵallocHostVars(2);
            } if (rf & 2) {
                core.ɵɵstyleProp("display", "block");
                core.ɵɵclassProp("ant-fullcalendar-header", true);
            } }, inputs: { mode: "mode", fullscreen: "fullscreen", activeDate: "activeDate" }, outputs: { modeChange: "modeChange", yearChange: "yearChange", monthChange: "monthChange" }, exportAs: ["nzCalendarHeader"], decls: 8, vars: 9, consts: [[1, "ant-fullcalendar-year-select", 3, "nzSize", "nzDropdownMatchSelectWidth", "ngModel", "ngModelChange"], [3, "nzLabel", "nzValue", 4, "ngFor", "ngForOf"], ["class", "ant-fullcalendar-month-select", 3, "nzSize", "nzDropdownMatchSelectWidth", "ngModel", "ngModelChange", 4, "ngIf"], [3, "ngModel", "nzSize", "ngModelChange"], ["nz-radio-button", "", "nzValue", "month"], ["nz-radio-button", "", "nzValue", "year"], [3, "nzLabel", "nzValue"], [1, "ant-fullcalendar-month-select", 3, "nzSize", "nzDropdownMatchSelectWidth", "ngModel", "ngModelChange"]], template: function NzCalendarHeaderComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵelementStart(0, "nz-select", 0);
                core.ɵɵlistener("ngModelChange", function NzCalendarHeaderComponent_Template_nz_select_ngModelChange_0_listener($event) { return ctx.updateYear($event); });
                core.ɵɵtemplate(1, NzCalendarHeaderComponent_nz_option_1_Template, 1, 2, "nz-option", 1);
                core.ɵɵelementEnd();
                core.ɵɵtemplate(2, NzCalendarHeaderComponent_nz_select_2_Template, 2, 4, "nz-select", 2);
                core.ɵɵelementStart(3, "nz-radio-group", 3);
                core.ɵɵlistener("ngModelChange", function NzCalendarHeaderComponent_Template_nz_radio_group_ngModelChange_3_listener($event) { return ctx.mode = $event; })("ngModelChange", function NzCalendarHeaderComponent_Template_nz_radio_group_ngModelChange_3_listener($event) { return ctx.modeChange.emit($event); });
                core.ɵɵelementStart(4, "label", 4);
                core.ɵɵtext(5);
                core.ɵɵelementEnd();
                core.ɵɵelementStart(6, "label", 5);
                core.ɵɵtext(7);
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
            } if (rf & 2) {
                core.ɵɵproperty("nzSize", ctx.size)("nzDropdownMatchSelectWidth", false)("ngModel", ctx.activeYear);
                core.ɵɵadvance(1);
                core.ɵɵproperty("ngForOf", ctx.years);
                core.ɵɵadvance(1);
                core.ɵɵproperty("ngIf", ctx.mode === "month");
                core.ɵɵadvance(1);
                core.ɵɵproperty("ngModel", ctx.mode)("nzSize", ctx.size);
                core.ɵɵadvance(2);
                core.ɵɵtextInterpolate(ctx.monthTypeText);
                core.ɵɵadvance(2);
                core.ɵɵtextInterpolate(ctx.yearTypeText);
            } }, directives: [select.NzSelectComponent, forms.NgControlStatus, forms.NgModel, common.NgForOf, common.NgIf, radio.NzRadioGroupComponent, radio.NzRadioButtonComponent, select.NzOptionComponent], encapsulation: 2, changeDetection: 0 });
        return NzCalendarHeaderComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NzCalendarHeaderComponent, [{
            type: core.Component,
            args: [{
                    encapsulation: core.ViewEncapsulation.None,
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    selector: 'nz-calendar-header',
                    exportAs: 'nzCalendarHeader',
                    templateUrl: './nz-calendar-header.component.html',
                    host: {
                        '[style.display]': "'block'",
                        '[class.ant-fullcalendar-header]': "true"
                    }
                }]
        }], function () { return [{ type: i18n.NzI18nService }, { type: i18n.DateHelperService }]; }, { mode: [{
                type: core.Input
            }], fullscreen: [{
                type: core.Input
            }], modeChange: [{
                type: core.Output
            }], activeDate: [{
                type: core.Input
            }], yearChange: [{
                type: core.Output
            }], monthChange: [{
                type: core.Output
            }] }); })();

    function NzCalendarComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainer(0);
    } }
    function NzCalendarComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
        var _r2063 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "date-table", 4);
        core.ɵɵlistener("valueChange", function NzCalendarComponent_ng_template_4_Template_date_table_valueChange_0_listener($event) { core.ɵɵrestoreView(_r2063); var ctx_r2062 = core.ɵɵnextContext(); return ctx_r2062.onDateSelect($event); });
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r2059 = core.ɵɵnextContext();
        core.ɵɵproperty("prefixCls", ctx_r2059.prefixCls)("value", ctx_r2059.activeDate)("dateCellRender", ctx_r2059.dateCell)("dateFullCellRender", ctx_r2059.dateFullCell);
    } }
    function NzCalendarComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
        var _r2065 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "month-table", 5);
        core.ɵɵlistener("valueChange", function NzCalendarComponent_ng_template_6_Template_month_table_valueChange_0_listener($event) { core.ɵɵrestoreView(_r2065); var ctx_r2064 = core.ɵɵnextContext(); return ctx_r2064.onDateSelect($event); });
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r2061 = core.ɵɵnextContext();
        core.ɵɵproperty("prefixCls", ctx_r2061.prefixCls)("value", ctx_r2061.activeDate)("monthCellRender", ctx_r2061.monthCell)("monthFullCellRender", ctx_r2061.monthFullCell);
    } }
    var NzCalendarComponent = /** @class */ (function () {
        function NzCalendarComponent(cdr) {
            this.cdr = cdr;
            this.activeDate = new core$1.CandyDate();
            this.prefixCls = 'ant-fullcalendar';
            this.onChangeFn = function () { };
            this.onTouchFn = function () { };
            this.nzMode = 'month';
            this.nzModeChange = new core.EventEmitter();
            this.nzPanelChange = new core.EventEmitter();
            this.nzSelectChange = new core.EventEmitter();
            this.nzValueChange = new core.EventEmitter();
            this.nzFullscreen = true;
        }
        Object.defineProperty(NzCalendarComponent.prototype, "nzValue", {
            set: function (value) {
                this.updateDate(new core$1.CandyDate(value), false);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzCalendarComponent.prototype, "dateCell", {
            get: function () {
                return this.nzDateCell || this.nzDateCellChild;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzCalendarComponent.prototype, "dateFullCell", {
            get: function () {
                return this.nzDateFullCell || this.nzDateFullCellChild;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzCalendarComponent.prototype, "monthCell", {
            get: function () {
                return this.nzMonthCell || this.nzMonthCellChild;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzCalendarComponent.prototype, "monthFullCell", {
            get: function () {
                return this.nzMonthFullCell || this.nzMonthFullCellChild;
            },
            enumerable: true,
            configurable: true
        });
        NzCalendarComponent.prototype.onModeChange = function (mode) {
            this.nzModeChange.emit(mode);
            this.nzPanelChange.emit({ date: this.activeDate.nativeDate, mode: mode });
        };
        NzCalendarComponent.prototype.onYearSelect = function (year) {
            var date = this.activeDate.setYear(year);
            this.updateDate(date);
        };
        NzCalendarComponent.prototype.onMonthSelect = function (month) {
            var date = this.activeDate.setMonth(month);
            this.updateDate(date);
        };
        NzCalendarComponent.prototype.onDateSelect = function (date) {
            // Only activeDate is enough in calendar
            // this.value = date;
            this.updateDate(date);
        };
        NzCalendarComponent.prototype.writeValue = function (value) {
            this.updateDate(new core$1.CandyDate(value), false);
            this.cdr.markForCheck();
        };
        NzCalendarComponent.prototype.registerOnChange = function (fn) {
            this.onChangeFn = fn;
        };
        NzCalendarComponent.prototype.registerOnTouched = function (fn) {
            this.onTouchFn = fn;
        };
        NzCalendarComponent.prototype.updateDate = function (date, touched) {
            if (touched === void 0) { touched = true; }
            this.activeDate = date;
            if (touched) {
                this.onChangeFn(date.nativeDate);
                this.onTouchFn();
                this.nzSelectChange.emit(date.nativeDate);
                this.nzValueChange.emit(date.nativeDate);
            }
        };
        /** @nocollapse */ NzCalendarComponent.ɵfac = function NzCalendarComponent_Factory(t) { return new (t || NzCalendarComponent)(core.ɵɵdirectiveInject(core.ChangeDetectorRef)); };
        /** @nocollapse */ NzCalendarComponent.ɵcmp = core.ɵɵdefineComponent({ type: NzCalendarComponent, selectors: [["nz-calendar"]], contentQueries: function NzCalendarComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
                core.ɵɵcontentQuery(dirIndex, NzDateCellDirective, true, core.TemplateRef);
                core.ɵɵcontentQuery(dirIndex, NzDateFullCellDirective, true, core.TemplateRef);
                core.ɵɵcontentQuery(dirIndex, NzMonthCellDirective, true, core.TemplateRef);
                core.ɵɵcontentQuery(dirIndex, NzMonthFullCellDirective, true, core.TemplateRef);
            } if (rf & 2) {
                var _t;
                core.ɵɵqueryRefresh(_t = core.ɵɵloadQuery()) && (ctx.nzDateCellChild = _t.first);
                core.ɵɵqueryRefresh(_t = core.ɵɵloadQuery()) && (ctx.nzDateFullCellChild = _t.first);
                core.ɵɵqueryRefresh(_t = core.ɵɵloadQuery()) && (ctx.nzMonthCellChild = _t.first);
                core.ɵɵqueryRefresh(_t = core.ɵɵloadQuery()) && (ctx.nzMonthFullCellChild = _t.first);
            } }, hostBindings: function NzCalendarComponent_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
                core.ɵɵallocHostVars(1);
            } if (rf & 2) {
                core.ɵɵclassProp("ant-fullcalendar--fullscreen", ctx.nzFullscreen);
            } }, inputs: { nzMode: "nzMode", nzValue: "nzValue", nzDateCell: "nzDateCell", nzDateFullCell: "nzDateFullCell", nzMonthCell: "nzMonthCell", nzMonthFullCell: "nzMonthFullCell", nzFullscreen: "nzFullscreen" }, outputs: { nzModeChange: "nzModeChange", nzPanelChange: "nzPanelChange", nzSelectChange: "nzSelectChange", nzValueChange: "nzValueChange" }, exportAs: ["nzCalendar"], features: [core.ɵɵProvidersFeature([{ provide: forms.NG_VALUE_ACCESSOR, useExisting: core.forwardRef((function () { return NzCalendarComponent; })), multi: true }])], decls: 8, vars: 14, consts: [[3, "fullscreen", "activeDate", "mode", "modeChange", "yearChange", "monthChange"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["monthModeTable", ""], ["yearModeTable", ""], [3, "prefixCls", "value", "dateCellRender", "dateFullCellRender", "valueChange"], [3, "prefixCls", "value", "monthCellRender", "monthFullCellRender", "valueChange"]], template: function NzCalendarComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵelementStart(0, "nz-calendar-header", 0);
                core.ɵɵlistener("modeChange", function NzCalendarComponent_Template_nz_calendar_header_modeChange_0_listener($event) { return ctx.nzMode = $event; })("modeChange", function NzCalendarComponent_Template_nz_calendar_header_modeChange_0_listener($event) { return ctx.onModeChange($event); })("yearChange", function NzCalendarComponent_Template_nz_calendar_header_yearChange_0_listener($event) { return ctx.onYearSelect($event); })("monthChange", function NzCalendarComponent_Template_nz_calendar_header_monthChange_0_listener($event) { return ctx.onMonthSelect($event); });
                core.ɵɵelementEnd();
                core.ɵɵelementStart(1, "div");
                core.ɵɵelementStart(2, "div");
                core.ɵɵtemplate(3, NzCalendarComponent_ng_container_3_Template, 1, 0, "ng-container", 1);
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵtemplate(4, NzCalendarComponent_ng_template_4_Template, 1, 4, "ng-template", null, 2, core.ɵɵtemplateRefExtractor);
                core.ɵɵtemplate(6, NzCalendarComponent_ng_template_6_Template, 1, 4, "ng-template", null, 3, core.ɵɵtemplateRefExtractor);
            } if (rf & 2) {
                var _r2058 = core.ɵɵreference(5);
                var _r2060 = core.ɵɵreference(7);
                core.ɵɵproperty("fullscreen", ctx.nzFullscreen)("activeDate", ctx.activeDate)("mode", ctx.nzMode);
                core.ɵɵadvance(1);
                core.ɵɵclassMapInterpolate2("", ctx.prefixCls, " ", ctx.prefixCls, "-full");
                core.ɵɵclassProp("ant-fullcalendar-fullscreen", ctx.nzFullscreen);
                core.ɵɵadvance(1);
                core.ɵɵclassMapInterpolate1("", ctx.prefixCls, "-calendar-body");
                core.ɵɵadvance(1);
                core.ɵɵproperty("ngIf", ctx.nzMode === "month")("ngIfThen", _r2058)("ngIfElse", _r2060);
            } }, directives: [NzCalendarHeaderComponent, common.NgIf, DateTableComponent, MonthTableComponent], encapsulation: 2, changeDetection: 0 });
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Boolean)
        ], NzCalendarComponent.prototype, "nzFullscreen", void 0);
        return NzCalendarComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NzCalendarComponent, [{
            type: core.Component,
            args: [{
                    encapsulation: core.ViewEncapsulation.None,
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    selector: 'nz-calendar',
                    exportAs: 'nzCalendar',
                    templateUrl: './nz-calendar.component.html',
                    providers: [{ provide: forms.NG_VALUE_ACCESSOR, useExisting: core.forwardRef((function () { return NzCalendarComponent; })), multi: true }]
                }]
        }], function () { return [{ type: core.ChangeDetectorRef }]; }, { nzMode: [{
                type: core.Input
            }], nzModeChange: [{
                type: core.Output
            }], nzPanelChange: [{
                type: core.Output
            }], nzSelectChange: [{
                type: core.Output
            }], nzValue: [{
                type: core.Input
            }], nzValueChange: [{
                type: core.Output
            }], nzDateCell: [{
                type: core.Input
            }], nzDateCellChild: [{
                type: core.ContentChild,
                args: [NzDateCellDirective, { static: false, read: core.TemplateRef }]
            }], nzDateFullCell: [{
                type: core.Input
            }], nzDateFullCellChild: [{
                type: core.ContentChild,
                args: [NzDateFullCellDirective, { static: false, read: core.TemplateRef }]
            }], nzMonthCell: [{
                type: core.Input
            }], nzMonthCellChild: [{
                type: core.ContentChild,
                args: [NzMonthCellDirective, { static: false, read: core.TemplateRef }]
            }], nzMonthFullCell: [{
                type: core.Input
            }], nzMonthFullCellChild: [{
                type: core.ContentChild,
                args: [NzMonthFullCellDirective, { static: false, read: core.TemplateRef }]
            }], nzFullscreen: [{
                type: core.Input
            }, {
                type: core.HostBinding,
                args: ['class.ant-fullcalendar--fullscreen']
            }] }); })();

    /**
     * @license
     * Copyright Alibaba.com All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    var NzCalendarModule = /** @class */ (function () {
        function NzCalendarModule() {
        }
        /** @nocollapse */ NzCalendarModule.ɵmod = core.ɵɵdefineNgModule({ type: NzCalendarModule });
        /** @nocollapse */ NzCalendarModule.ɵinj = core.ɵɵdefineInjector({ factory: function NzCalendarModule_Factory(t) { return new (t || NzCalendarModule)(); }, imports: [[common.CommonModule, forms.FormsModule, i18n.NzI18nModule, radio.NzRadioModule, select.NzSelectModule]] });
        return NzCalendarModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && core.ɵɵsetNgModuleScope(NzCalendarModule, { declarations: [NzCalendarHeaderComponent,
            NzCalendarComponent,
            NzDateCellDirective,
            NzDateFullCellDirective,
            NzMonthCellDirective,
            NzMonthFullCellDirective,
            DateTableComponent,
            DateTableCellComponent,
            MonthTableComponent], imports: [common.CommonModule, forms.FormsModule, i18n.NzI18nModule, radio.NzRadioModule, select.NzSelectModule], exports: [NzCalendarComponent,
            NzDateCellDirective,
            NzDateFullCellDirective,
            NzMonthCellDirective,
            NzMonthFullCellDirective,
            DateTableComponent,
            MonthTableComponent] }); })();
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NzCalendarModule, [{
            type: core.NgModule,
            args: [{
                    declarations: [
                        NzCalendarHeaderComponent,
                        NzCalendarComponent,
                        NzDateCellDirective,
                        NzDateFullCellDirective,
                        NzMonthCellDirective,
                        NzMonthFullCellDirective,
                        DateTableComponent,
                        DateTableCellComponent,
                        MonthTableComponent
                    ],
                    exports: [
                        NzCalendarComponent,
                        NzDateCellDirective,
                        NzDateFullCellDirective,
                        NzMonthCellDirective,
                        NzMonthFullCellDirective,
                        DateTableComponent,
                        MonthTableComponent
                    ],
                    imports: [common.CommonModule, forms.FormsModule, i18n.NzI18nModule, radio.NzRadioModule, select.NzSelectModule]
                }]
        }], null, null); })();
    core.ɵɵsetComponentScope(DateTableComponent, [NzCalendarHeaderComponent,
        NzCalendarComponent,
        NzDateCellDirective,
        NzDateFullCellDirective,
        NzMonthCellDirective,
        NzMonthFullCellDirective,
        DateTableComponent,
        DateTableCellComponent,
        MonthTableComponent, common.NgClass, common.NgComponentOutlet, common.NgForOf, common.NgIf, common.NgTemplateOutlet, common.NgStyle, common.NgSwitch, common.NgSwitchCase, common.NgSwitchDefault, common.NgPlural, common.NgPluralCase, forms.ɵangular_packages_forms_forms_y, forms.NgSelectOption, forms.ɵangular_packages_forms_forms_x, forms.DefaultValueAccessor, forms.NumberValueAccessor, forms.RangeValueAccessor, forms.CheckboxControlValueAccessor, forms.SelectControlValueAccessor, forms.SelectMultipleControlValueAccessor, forms.RadioControlValueAccessor, forms.NgControlStatus, forms.NgControlStatusGroup, forms.RequiredValidator, forms.MinLengthValidator, forms.MaxLengthValidator, forms.PatternValidator, forms.CheckboxRequiredValidator, forms.EmailValidator, forms.NgModel, forms.NgModelGroup, forms.NgForm, radio.NzRadioComponent, radio.NzRadioButtonComponent, radio.NzRadioGroupComponent, select.NzOptionComponent, select.NzSelectComponent, select.NzOptionContainerComponent, select.NzOptionGroupComponent, select.NzSelectTopControlComponent], [common.AsyncPipe, common.UpperCasePipe, common.LowerCasePipe, common.JsonPipe, common.SlicePipe, common.DecimalPipe, common.PercentPipe, common.TitleCasePipe, common.CurrencyPipe, common.DatePipe, common.I18nPluralPipe, common.I18nSelectPipe, common.KeyValuePipe, i18n.NzI18nPipe]);

    exports.DateTableCellComponent = DateTableCellComponent;
    exports.DateTableComponent = DateTableComponent;
    exports.MonthTableComponent = MonthTableComponent;
    exports.NzCalendarComponent = NzCalendarComponent;
    exports.NzCalendarHeaderComponent = NzCalendarHeaderComponent;
    exports.NzCalendarModule = NzCalendarModule;
    exports.NzDateCellDirective = NzDateCellDirective;
    exports.NzDateFullCellDirective = NzDateFullCellDirective;
    exports.NzMonthCellDirective = NzMonthCellDirective;
    exports.NzMonthFullCellDirective = NzMonthFullCellDirective;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ng-zorro-antd-calendar.umd.js.map
