(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('ng-zorro-antd/core'), require('@angular/common'), require('ng-zorro-antd/checkbox'), require('ng-zorro-antd/empty'), require('@angular/forms'), require('ng-zorro-antd/icon'), require('rxjs'), require('rxjs/operators'), require('ng-zorro-antd/i18n'), require('ng-zorro-antd/button'), require('ng-zorro-antd/input')) :
    typeof define === 'function' && define.amd ? define('ng-zorro-antd/transfer', ['exports', '@angular/core', 'ng-zorro-antd/core', '@angular/common', 'ng-zorro-antd/checkbox', 'ng-zorro-antd/empty', '@angular/forms', 'ng-zorro-antd/icon', 'rxjs', 'rxjs/operators', 'ng-zorro-antd/i18n', 'ng-zorro-antd/button', 'ng-zorro-antd/input'], factory) :
    (global = global || self, factory((global['ng-zorro-antd'] = global['ng-zorro-antd'] || {}, global['ng-zorro-antd'].transfer = {}), global.ng.core, global['ng-zorro-antd'].core, global.ng.common, global['ng-zorro-antd'].checkbox, global['ng-zorro-antd'].empty, global.ng.forms, global['ng-zorro-antd'].icon, global.rxjs, global.rxjs.operators, global['ng-zorro-antd'].i18n, global['ng-zorro-antd'].button, global['ng-zorro-antd'].input));
}(this, (function (exports, core, core$1, common, checkbox, empty, forms, icon, rxjs, operators, i18n, button, input) { 'use strict';

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
    var _c0 = ["nz-transfer-search", ""];
    function NzTransferSearchComponent_a_1_Template(rf, ctx) { if (rf & 1) {
        var _r1621 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "a", 3);
        core.ɵɵlistener("click", function NzTransferSearchComponent_a_1_Template_a_click_0_listener($event) { core.ɵɵrestoreView(_r1621); var ctx_r1620 = core.ɵɵnextContext(); return ctx_r1620._clear(); });
        core.ɵɵelement(1, "i", 4);
        core.ɵɵelementEnd();
    } }
    function NzTransferSearchComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "span", 5);
        core.ɵɵelement(1, "i", 6);
        core.ɵɵelementEnd();
    } }
    var _c1 = function (a0) { return { "ant-input-disabled": a0 }; };
    var NzTransferSearchComponent = /** @class */ (function () {
        // endregion
        function NzTransferSearchComponent(cdr) {
            this.cdr = cdr;
            this.valueChanged = new core.EventEmitter();
            this.valueClear = new core.EventEmitter();
        }
        NzTransferSearchComponent.prototype._handle = function () {
            this.valueChanged.emit(this.value);
        };
        NzTransferSearchComponent.prototype._clear = function () {
            if (this.disabled) {
                return;
            }
            this.value = '';
            this.valueClear.emit();
        };
        NzTransferSearchComponent.prototype.ngOnChanges = function () {
            this.cdr.detectChanges();
        };
        /** @nocollapse */ NzTransferSearchComponent.ɵfac = function NzTransferSearchComponent_Factory(t) { return new (t || NzTransferSearchComponent)(core.ɵɵdirectiveInject(core.ChangeDetectorRef)); };
        /** @nocollapse */ NzTransferSearchComponent.ɵcmp = core.ɵɵdefineComponent({ type: NzTransferSearchComponent, selectors: [["", "nz-transfer-search", ""]], inputs: { placeholder: "placeholder", value: "value", disabled: "disabled" }, outputs: { valueChanged: "valueChanged", valueClear: "valueClear" }, exportAs: ["nzTransferSearch"], features: [core.ɵɵNgOnChangesFeature()], attrs: _c0, decls: 4, vars: 8, consts: [[1, "ant-input", "ant-transfer-list-search", 3, "ngModel", "disabled", "placeholder", "ngClass", "ngModelChange"], ["class", "ant-transfer-list-search-action", 3, "click", 4, "ngIf", "ngIfElse"], ["def", ""], [1, "ant-transfer-list-search-action", 3, "click"], ["nz-icon", "", "nzType", "close-circle"], [1, "ant-transfer-list-search-action"], ["nz-icon", "", "nzType", "search"]], template: function NzTransferSearchComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵelementStart(0, "input", 0);
                core.ɵɵlistener("ngModelChange", function NzTransferSearchComponent_Template_input_ngModelChange_0_listener($event) { return ctx.value = $event; })("ngModelChange", function NzTransferSearchComponent_Template_input_ngModelChange_0_listener($event) { return ctx._handle(); });
                core.ɵɵelementEnd();
                core.ɵɵtemplate(1, NzTransferSearchComponent_a_1_Template, 2, 0, "a", 1);
                core.ɵɵtemplate(2, NzTransferSearchComponent_ng_template_2_Template, 2, 0, "ng-template", null, 2, core.ɵɵtemplateRefExtractor);
            } if (rf & 2) {
                var _r1618 = core.ɵɵreference(3);
                core.ɵɵproperty("ngModel", ctx.value)("disabled", ctx.disabled)("placeholder", ctx.placeholder)("ngClass", core.ɵɵpureFunction1(6, _c1, ctx.disabled));
                core.ɵɵadvance(1);
                core.ɵɵproperty("ngIf", ctx.value && ctx.value.length > 0)("ngIfElse", _r1618);
            } }, directives: [forms.DefaultValueAccessor, forms.NgControlStatus, forms.NgModel, common.NgClass, common.NgIf, icon.NzIconDirective], encapsulation: 2, changeDetection: 0 });
        return NzTransferSearchComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NzTransferSearchComponent, [{
            type: core.Component,
            args: [{
                    selector: '[nz-transfer-search]',
                    exportAs: 'nzTransferSearch',
                    preserveWhitespaces: false,
                    templateUrl: './nz-transfer-search.component.html',
                    encapsulation: core.ViewEncapsulation.None,
                    changeDetection: core.ChangeDetectionStrategy.OnPush
                }]
        }], function () { return [{ type: core.ChangeDetectorRef }]; }, { placeholder: [{
                type: core.Input
            }], value: [{
                type: core.Input
            }], disabled: [{
                type: core.Input
            }], valueChanged: [{
                type: core.Output
            }], valueClear: [{
                type: core.Output
            }] }); })();

    /**
     * @license
     * Copyright Alibaba.com All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    function NzTransferListComponent_ng_template_0_ul_0_div_1_li_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵtext(1);
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var item_r1597 = core.ɵɵnextContext(2).$implicit;
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate(item_r1597.title);
    } }
    function NzTransferListComponent_ng_template_0_ul_0_div_1_li_1_ng_template_3_Template(rf, ctx) { }
    var _c0$1 = function (a0) { return { "ant-transfer-list-content-item-disabled": a0 }; };
    var _c1$1 = function (a0) { return { $implicit: a0 }; };
    function NzTransferListComponent_ng_template_0_ul_0_div_1_li_1_Template(rf, ctx) { if (rf & 1) {
        var _r1605 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "li", 15);
        core.ɵɵlistener("click", function NzTransferListComponent_ng_template_0_ul_0_div_1_li_1_Template_li_click_0_listener($event) { core.ɵɵrestoreView(_r1605); var item_r1597 = core.ɵɵnextContext().$implicit; var ctx_r1603 = core.ɵɵnextContext(3); return ctx_r1603.onItemSelect(item_r1597); });
        core.ɵɵelementStart(1, "label", 16);
        core.ɵɵlistener("nzCheckedChange", function NzTransferListComponent_ng_template_0_ul_0_div_1_li_1_Template_label_nzCheckedChange_1_listener($event) { core.ɵɵrestoreView(_r1605); var item_r1597 = core.ɵɵnextContext().$implicit; var ctx_r1606 = core.ɵɵnextContext(3); return ctx_r1606.onItemSelect(item_r1597); })("click", function NzTransferListComponent_ng_template_0_ul_0_div_1_li_1_Template_label_click_1_listener($event) { core.ɵɵrestoreView(_r1605); return $event.stopPropagation(); });
        core.ɵɵtemplate(2, NzTransferListComponent_ng_template_0_ul_0_div_1_li_1_ng_container_2_Template, 2, 1, "ng-container", 7);
        core.ɵɵtemplate(3, NzTransferListComponent_ng_template_0_ul_0_div_1_li_1_ng_template_3_Template, 0, 0, "ng-template", 17, 18, core.ɵɵtemplateRefExtractor);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var _r1600 = core.ɵɵreference(4);
        var item_r1597 = core.ɵɵnextContext().$implicit;
        var ctx_r1598 = core.ɵɵnextContext(3);
        core.ɵɵproperty("ngClass", core.ɵɵpureFunction1(7, _c0$1, ctx_r1598.disabled || item_r1597.disabled));
        core.ɵɵadvance(1);
        core.ɵɵproperty("nzChecked", item_r1597.checked)("nzDisabled", ctx_r1598.disabled || item_r1597.disabled);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", !ctx_r1598.render)("ngIfElse", _r1600);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngTemplateOutlet", ctx_r1598.render)("ngTemplateOutletContext", core.ɵɵpureFunction1(9, _c1$1, item_r1597));
    } }
    function NzTransferListComponent_ng_template_0_ul_0_div_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div", 13);
        core.ɵɵtemplate(1, NzTransferListComponent_ng_template_0_ul_0_div_1_li_1_Template, 5, 11, "li", 14);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var item_r1597 = ctx.$implicit;
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", !item_r1597.hide);
    } }
    function NzTransferListComponent_ng_template_0_ul_0_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "ul", 11);
        core.ɵɵtemplate(1, NzTransferListComponent_ng_template_0_ul_0_div_1_Template, 2, 1, "div", 12);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r1594 = core.ɵɵnextContext(2);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngForOf", ctx_r1594.dataSource);
    } }
    function NzTransferListComponent_ng_template_0_div_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div", 19);
        core.ɵɵelement(1, "nz-embed-empty", 20);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r1595 = core.ɵɵnextContext(2);
        core.ɵɵadvance(1);
        core.ɵɵproperty("nzComponentName", "transfer")("specificContent", ctx_r1595.notFoundContent);
    } }
    function NzTransferListComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵtemplate(0, NzTransferListComponent_ng_template_0_ul_0_Template, 2, 1, "ul", 9);
        core.ɵɵtemplate(1, NzTransferListComponent_ng_template_0_div_1_Template, 2, 2, "div", 10);
    } if (rf & 2) {
        var ctx_r1588 = core.ɵɵnextContext();
        core.ɵɵproperty("ngIf", ctx_r1588.stat.shownCount > 0);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", ctx_r1588.stat.shownCount === 0);
    } }
    function NzTransferListComponent_label_3_Template(rf, ctx) { if (rf & 1) {
        var _r1611 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "label", 21);
        core.ɵɵlistener("nzCheckedChange", function NzTransferListComponent_label_3_Template_label_nzCheckedChange_0_listener($event) { core.ɵɵrestoreView(_r1611); var ctx_r1610 = core.ɵɵnextContext(); return ctx_r1610.onItemSelectAll($event); });
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r1589 = core.ɵɵnextContext();
        core.ɵɵproperty("nzChecked", ctx_r1589.stat.checkAll)("nzIndeterminate", ctx_r1589.stat.checkHalf)("nzDisabled", ctx_r1589.stat.shownCount == 0 || ctx_r1589.disabled);
    } }
    function NzTransferListComponent_span_7_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "span", 22);
        core.ɵɵtext(1);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r1590 = core.ɵɵnextContext();
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate(ctx_r1590.titleText);
    } }
    function NzTransferListComponent_div_9_Template(rf, ctx) { if (rf & 1) {
        var _r1613 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "div", 23);
        core.ɵɵelementStart(1, "div", 24);
        core.ɵɵlistener("valueChanged", function NzTransferListComponent_div_9_Template_div_valueChanged_1_listener($event) { core.ɵɵrestoreView(_r1613); var ctx_r1612 = core.ɵɵnextContext(); return ctx_r1612.handleFilter($event); })("valueClear", function NzTransferListComponent_div_9_Template_div_valueClear_1_listener($event) { core.ɵɵrestoreView(_r1613); var ctx_r1614 = core.ɵɵnextContext(); return ctx_r1614.handleClear(); });
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r1591 = core.ɵɵnextContext();
        core.ɵɵadvance(1);
        core.ɵɵproperty("placeholder", ctx_r1591.searchPlaceholder)("disabled", ctx_r1591.disabled)("value", ctx_r1591.filter);
    } }
    function NzTransferListComponent_ng_container_10_ng_container_2_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainer(0);
    } }
    var _c2 = function (a0, a1, a2, a3, a4, a5) { return { $implicit: a0, direction: a1, disabled: a2, onItemSelectAll: a3, onItemSelect: a4, stat: a5 }; };
    function NzTransferListComponent_ng_container_10_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵelementStart(1, "div", 25);
        core.ɵɵtemplate(2, NzTransferListComponent_ng_container_10_ng_container_2_Template, 1, 0, "ng-container", 26);
        core.ɵɵelementEnd();
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var ctx_r1592 = core.ɵɵnextContext();
        core.ɵɵadvance(2);
        core.ɵɵproperty("ngTemplateOutlet", ctx_r1592.renderList)("ngTemplateOutletContext", core.ɵɵpureFunction6(2, _c2, ctx_r1592.dataSource, ctx_r1592.direction, ctx_r1592.disabled, ctx_r1592.onItemSelectAll, ctx_r1592.onItemSelect, ctx_r1592.stat));
    } }
    function NzTransferListComponent_div_11_ng_template_1_Template(rf, ctx) { }
    function NzTransferListComponent_div_11_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div", 27);
        core.ɵɵtemplate(1, NzTransferListComponent_div_11_ng_template_1_Template, 0, 0, "ng-template", 17);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r1593 = core.ɵɵnextContext();
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngTemplateOutlet", ctx_r1593.footer)("ngTemplateOutletContext", core.ɵɵpureFunction1(2, _c1$1, ctx_r1593.direction));
    } }
    var _c3 = function (a0) { return { "ant-transfer__nodata": a0 }; };
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
            this.onItemSelect = function (item) {
                if (_this.disabled || item.disabled) {
                    return;
                }
                item.checked = !item.checked;
                _this.updateCheckStatus();
                _this.handleSelect.emit(item);
            };
            this.onItemSelectAll = function (status) {
                _this.dataSource.forEach(function (item) {
                    if (!item.disabled && !item.hide) {
                        item.checked = status;
                    }
                });
                _this.updateCheckStatus();
                _this.handleSelectAll.emit(status);
            };
        }
        NzTransferListComponent.prototype.setClassMap = function () {
            var _a;
            var classMap = (_a = {},
                _a[this.prefixCls] = true,
                _a[this.prefixCls + "-with-footer"] = !!this.footer,
                _a);
            this.updateHostClassService.updateHostClass(this.el.nativeElement, classMap);
        };
        NzTransferListComponent.prototype.updateCheckStatus = function () {
            var validCount = this.dataSource.filter(function (w) { return !w.disabled; }).length;
            this.stat.checkCount = this.dataSource.filter(function (w) { return w.checked && !w.disabled; }).length;
            this.stat.shownCount = this.dataSource.filter(function (w) { return !w.hide; }).length;
            this.stat.checkAll = validCount > 0 && validCount === this.stat.checkCount;
            this.stat.checkHalf = this.stat.checkCount > 0 && !this.stat.checkAll;
        };
        // #endregion
        // #region search
        NzTransferListComponent.prototype.handleFilter = function (value) {
            var _this = this;
            this.filter = value;
            this.dataSource.forEach(function (item) {
                item.hide = value.length > 0 && !_this.matchFilter(value, item);
            });
            this.stat.shownCount = this.dataSource.filter(function (w) { return !w.hide; }).length;
            this.filterChange.emit({ direction: this.direction, value: value });
        };
        NzTransferListComponent.prototype.handleClear = function () {
            this.handleFilter('');
        };
        NzTransferListComponent.prototype.matchFilter = function (text, item) {
            if (this.filterOption) {
                return this.filterOption(text, item);
            }
            return item.title.includes(text);
        };
        NzTransferListComponent.prototype.ngOnChanges = function (changes) {
            if ('footer' in changes) {
                this.setClassMap();
            }
        };
        NzTransferListComponent.prototype.ngOnInit = function () {
            this.setClassMap();
        };
        NzTransferListComponent.prototype.markForCheck = function () {
            this.updateCheckStatus();
            this.cdr.markForCheck();
        };
        /** @nocollapse */ NzTransferListComponent.ɵfac = function NzTransferListComponent_Factory(t) { return new (t || NzTransferListComponent)(core.ɵɵdirectiveInject(core.ElementRef), core.ɵɵdirectiveInject(core$1.NzUpdateHostClassService), core.ɵɵdirectiveInject(core.ChangeDetectorRef)); };
        /** @nocollapse */ NzTransferListComponent.ɵcmp = core.ɵɵdefineComponent({ type: NzTransferListComponent, selectors: [["nz-transfer-list"]], inputs: { direction: "direction", titleText: "titleText", showSelectAll: "showSelectAll", dataSource: "dataSource", itemUnit: "itemUnit", itemsUnit: "itemsUnit", filter: "filter", disabled: "disabled", showSearch: "showSearch", searchPlaceholder: "searchPlaceholder", notFoundContent: "notFoundContent", filterOption: "filterOption", renderList: "renderList", render: "render", footer: "footer" }, outputs: { handleSelectAll: "handleSelectAll", handleSelect: "handleSelect", filterChange: "filterChange" }, exportAs: ["nzTransferList"], features: [core.ɵɵProvidersFeature([core$1.NzUpdateHostClassService]), core.ɵɵNgOnChangesFeature()], decls: 12, vars: 14, consts: [["defaultRenderList", ""], [1, "ant-transfer-list-header"], ["nz-checkbox", "", 3, "nzChecked", "nzIndeterminate", "nzDisabled", "nzCheckedChange", 4, "ngIf"], [1, "ant-transfer-list-header-selected"], ["class", "ant-transfer-list-header-title", 4, "ngIf"], [3, "ngClass"], ["class", "ant-transfer-list-body-search-wrapper", 4, "ngIf"], [4, "ngIf", "ngIfElse"], ["class", "ant-transfer-list-footer", 4, "ngIf"], ["class", "ant-transfer-list-content", 4, "ngIf"], ["class", "ant-transfer-list-body-not-found", 4, "ngIf"], [1, "ant-transfer-list-content"], ["class", "LazyLoad", 4, "ngFor", "ngForOf"], [1, "LazyLoad"], ["class", "ant-transfer-list-content-item", 3, "ngClass", "click", 4, "ngIf"], [1, "ant-transfer-list-content-item", 3, "ngClass", "click"], ["nz-checkbox", "", 3, "nzChecked", "nzDisabled", "nzCheckedChange", "click"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["renderContainer", ""], [1, "ant-transfer-list-body-not-found"], [3, "nzComponentName", "specificContent"], ["nz-checkbox", "", 3, "nzChecked", "nzIndeterminate", "nzDisabled", "nzCheckedChange"], [1, "ant-transfer-list-header-title"], [1, "ant-transfer-list-body-search-wrapper"], ["nz-transfer-search", "", 3, "placeholder", "disabled", "value", "valueChanged", "valueClear"], [1, "ant-transfer-list-body-customize-wrapper"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "ant-transfer-list-footer"]], template: function NzTransferListComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵtemplate(0, NzTransferListComponent_ng_template_0_Template, 2, 2, "ng-template", null, 0, core.ɵɵtemplateRefExtractor);
                core.ɵɵelementStart(2, "div", 1);
                core.ɵɵtemplate(3, NzTransferListComponent_label_3_Template, 1, 3, "label", 2);
                core.ɵɵelementStart(4, "span", 3);
                core.ɵɵelementStart(5, "span");
                core.ɵɵtext(6);
                core.ɵɵelementEnd();
                core.ɵɵtemplate(7, NzTransferListComponent_span_7_Template, 2, 1, "span", 4);
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵelementStart(8, "div", 5);
                core.ɵɵtemplate(9, NzTransferListComponent_div_9_Template, 2, 3, "div", 6);
                core.ɵɵtemplate(10, NzTransferListComponent_ng_container_10_Template, 3, 9, "ng-container", 7);
                core.ɵɵelementEnd();
                core.ɵɵtemplate(11, NzTransferListComponent_div_11_Template, 2, 4, "div", 8);
            } if (rf & 2) {
                var _r1587 = core.ɵɵreference(1);
                core.ɵɵadvance(3);
                core.ɵɵproperty("ngIf", ctx.showSelectAll);
                core.ɵɵadvance(3);
                core.ɵɵtextInterpolate2("", (ctx.stat.checkCount > 0 ? ctx.stat.checkCount + "/" : "") + ctx.stat.shownCount, " ", ctx.dataSource.length > 1 ? ctx.itemsUnit : ctx.itemUnit, "");
                core.ɵɵadvance(1);
                core.ɵɵproperty("ngIf", ctx.titleText);
                core.ɵɵadvance(1);
                core.ɵɵclassMap(ctx.showSearch ? "ant-transfer-list-body ant-transfer-list-body-with-search" : "ant-transfer-list-body");
                core.ɵɵproperty("ngClass", core.ɵɵpureFunction1(12, _c3, ctx.stat.shownCount === 0));
                core.ɵɵadvance(1);
                core.ɵɵproperty("ngIf", ctx.showSearch);
                core.ɵɵadvance(1);
                core.ɵɵproperty("ngIf", ctx.renderList)("ngIfElse", _r1587);
                core.ɵɵadvance(1);
                core.ɵɵproperty("ngIf", ctx.footer);
            } }, directives: [common.NgIf, common.NgClass, common.NgForOf, checkbox.NzCheckboxComponent, common.NgTemplateOutlet, empty.NzEmbedEmptyComponent, NzTransferSearchComponent], encapsulation: 2, changeDetection: 0 });
        return NzTransferListComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NzTransferListComponent, [{
            type: core.Component,
            args: [{
                    selector: 'nz-transfer-list',
                    exportAs: 'nzTransferList',
                    preserveWhitespaces: false,
                    providers: [core$1.NzUpdateHostClassService],
                    templateUrl: './nz-transfer-list.component.html',
                    encapsulation: core.ViewEncapsulation.None,
                    changeDetection: core.ChangeDetectionStrategy.OnPush
                }]
        }], function () { return [{ type: core.ElementRef }, { type: core$1.NzUpdateHostClassService }, { type: core.ChangeDetectorRef }]; }, { direction: [{
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
            }], handleSelectAll: [{
                type: core.Output
            }], handleSelect: [{
                type: core.Output
            }], filterChange: [{
                type: core.Output
            }] }); })();

    function NzTransferComponent_span_4_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "span");
        core.ɵɵtext(1);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r1622 = core.ɵɵnextContext();
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate(ctx_r1622.nzOperations[1]);
    } }
    function NzTransferComponent_span_7_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "span");
        core.ɵɵtext(1);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r1623 = core.ɵɵnextContext();
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate(ctx_r1623.nzOperations[0]);
    } }
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
            this.nzCanMove = function (arg) { return rxjs.of(arg.list); };
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
            this.handleLeftSelectAll = function (checked) { return _this.handleSelect('left', checked); };
            this.handleRightSelectAll = function (checked) { return _this.handleSelect('right', checked); };
            this.handleLeftSelect = function (item) { return _this.handleSelect('left', !!item.checked, item); };
            this.handleRightSelect = function (item) { return _this.handleSelect('right', !!item.checked, item); };
            // #endregion
            // #region operation
            this.leftActive = false;
            this.rightActive = false;
            this.moveToLeft = function () { return _this.moveTo('left'); };
            this.moveToRight = function () { return _this.moveTo('right'); };
            renderer.addClass(elementRef.nativeElement, 'ant-transfer');
        }
        NzTransferComponent.prototype.splitDataSource = function () {
            var _this = this;
            this.leftDataSource = [];
            this.rightDataSource = [];
            this.nzDataSource.forEach(function (record) {
                if (record.direction === 'right') {
                    record.direction = 'right';
                    _this.rightDataSource.push(record);
                }
                else {
                    record.direction = 'left';
                    _this.leftDataSource.push(record);
                }
            });
        };
        NzTransferComponent.prototype.getCheckedData = function (direction) {
            return this[direction === 'left' ? 'leftDataSource' : 'rightDataSource'].filter(function (w) { return w.checked; });
        };
        NzTransferComponent.prototype.handleSelect = function (direction, checked, item) {
            var list = this.getCheckedData(direction);
            this.updateOperationStatus(direction, list.length);
            this.nzSelectChange.emit({ direction: direction, checked: checked, list: list, item: item });
        };
        NzTransferComponent.prototype.handleFilterChange = function (ret) {
            this.nzSearchChange.emit(ret);
        };
        NzTransferComponent.prototype.updateOperationStatus = function (direction, count) {
            this[direction === 'right' ? 'leftActive' : 'rightActive'] =
                (typeof count === 'undefined' ? this.getCheckedData(direction).filter(function (w) { return !w.disabled; }).length : count) > 0;
        };
        NzTransferComponent.prototype.moveTo = function (direction) {
            var _this = this;
            var oppositeDirection = direction === 'left' ? 'right' : 'left';
            this.updateOperationStatus(oppositeDirection, 0);
            var datasource = direction === 'left' ? this.rightDataSource : this.leftDataSource;
            var moveList = datasource.filter(function (item) { return item.checked === true && !item.disabled; });
            this.nzCanMove({ direction: direction, list: moveList }).subscribe(function (newMoveList) {
                return _this.truthMoveTo(direction, newMoveList.filter(function (i) { return !!i; }));
            }, function () { return moveList.forEach(function (i) { return (i.checked = false); }); });
        };
        NzTransferComponent.prototype.truthMoveTo = function (direction, list) {
            var e_1, _a;
            var oppositeDirection = direction === 'left' ? 'right' : 'left';
            var datasource = direction === 'left' ? this.rightDataSource : this.leftDataSource;
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
        NzTransferComponent.prototype.setClassMap = function () {
            var _a;
            var prefixCls = 'ant-transfer';
            this.nzUpdateHostClassService.updateHostClass(this.elementRef.nativeElement, (_a = {},
                _a[prefixCls + "-disabled"] = this.nzDisabled,
                _a[prefixCls + "-customize-list"] = this.nzRenderList.some(function (i) { return !!i; }),
                _a));
        };
        NzTransferComponent.prototype.markForCheckAllList = function () {
            if (!this.lists) {
                return;
            }
            this.lists.forEach(function (i) { return i.markForCheck(); });
        };
        NzTransferComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.i18n.localeChange.pipe(operators.takeUntil(this.unsubscribe$)).subscribe(function () {
                _this.locale = _this.i18n.getLocaleData('Transfer');
                _this.markForCheckAllList();
            });
            this.setClassMap();
        };
        NzTransferComponent.prototype.ngOnChanges = function (changes) {
            this.setClassMap();
            if (changes.nzDataSource || changes.nzTargetKeys) {
                this.splitDataSource();
                this.updateOperationStatus('left');
                this.updateOperationStatus('right');
                this.cdr.detectChanges();
                this.markForCheckAllList();
            }
        };
        NzTransferComponent.prototype.ngOnDestroy = function () {
            this.unsubscribe$.next();
            this.unsubscribe$.complete();
        };
        /** @nocollapse */ NzTransferComponent.ɵfac = function NzTransferComponent_Factory(t) { return new (t || NzTransferComponent)(core.ɵɵdirectiveInject(core.ChangeDetectorRef), core.ɵɵdirectiveInject(i18n.NzI18nService), core.ɵɵdirectiveInject(core$1.NzUpdateHostClassService), core.ɵɵdirectiveInject(core.ElementRef), core.ɵɵdirectiveInject(core.Renderer2)); };
        /** @nocollapse */ NzTransferComponent.ɵcmp = core.ɵɵdefineComponent({ type: NzTransferComponent, selectors: [["nz-transfer"]], viewQuery: function NzTransferComponent_Query(rf, ctx) { if (rf & 1) {
                core.ɵɵviewQuery(NzTransferListComponent, true);
            } if (rf & 2) {
                var _t;
                core.ɵɵqueryRefresh(_t = core.ɵɵloadQuery()) && (ctx.lists = _t);
            } }, hostBindings: function NzTransferComponent_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
                core.ɵɵallocHostVars(1);
            } if (rf & 2) {
                core.ɵɵclassProp("ant-transfer-disabled", ctx.nzDisabled);
            } }, inputs: { nzDisabled: "nzDisabled", nzDataSource: "nzDataSource", nzTitles: "nzTitles", nzOperations: "nzOperations", nzListStyle: "nzListStyle", nzShowSelectAll: "nzShowSelectAll", nzItemUnit: "nzItemUnit", nzItemsUnit: "nzItemsUnit", nzCanMove: "nzCanMove", nzRenderList: "nzRenderList", nzRender: "nzRender", nzFooter: "nzFooter", nzShowSearch: "nzShowSearch", nzFilterOption: "nzFilterOption", nzSearchPlaceholder: "nzSearchPlaceholder", nzNotFoundContent: "nzNotFoundContent" }, outputs: { nzChange: "nzChange", nzSearchChange: "nzSearchChange", nzSelectChange: "nzSelectChange" }, exportAs: ["nzTransfer"], features: [core.ɵɵProvidersFeature([core$1.NzUpdateHostClassService]), core.ɵɵNgOnChangesFeature()], decls: 9, vars: 38, consts: [["data-direction", "left", 1, "ant-transfer-list", 3, "ngStyle", "titleText", "showSelectAll", "dataSource", "filter", "filterOption", "renderList", "render", "disabled", "showSearch", "searchPlaceholder", "notFoundContent", "itemUnit", "itemsUnit", "footer", "filterChange", "handleSelect", "handleSelectAll"], [1, "ant-transfer-operation"], ["nz-button", "", 3, "disabled", "nzType", "nzSize", "click"], ["nz-icon", "", "nzType", "left"], [4, "ngIf"], ["nz-icon", "", "nzType", "right"], ["data-direction", "right", 1, "ant-transfer-list", 3, "ngStyle", "titleText", "showSelectAll", "dataSource", "filter", "filterOption", "renderList", "render", "disabled", "showSearch", "searchPlaceholder", "notFoundContent", "itemUnit", "itemsUnit", "footer", "filterChange", "handleSelect", "handleSelectAll"]], template: function NzTransferComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵelementStart(0, "nz-transfer-list", 0);
                core.ɵɵlistener("filterChange", function NzTransferComponent_Template_nz_transfer_list_filterChange_0_listener($event) { return ctx.handleFilterChange($event); })("handleSelect", function NzTransferComponent_Template_nz_transfer_list_handleSelect_0_listener($event) { return ctx.handleLeftSelect($event); })("handleSelectAll", function NzTransferComponent_Template_nz_transfer_list_handleSelectAll_0_listener($event) { return ctx.handleLeftSelectAll($event); });
                core.ɵɵelementEnd();
                core.ɵɵelementStart(1, "div", 1);
                core.ɵɵelementStart(2, "button", 2);
                core.ɵɵlistener("click", function NzTransferComponent_Template_button_click_2_listener($event) { return ctx.moveToLeft(); });
                core.ɵɵelement(3, "i", 3);
                core.ɵɵtemplate(4, NzTransferComponent_span_4_Template, 2, 1, "span", 4);
                core.ɵɵelementEnd();
                core.ɵɵelementStart(5, "button", 2);
                core.ɵɵlistener("click", function NzTransferComponent_Template_button_click_5_listener($event) { return ctx.moveToRight(); });
                core.ɵɵelement(6, "i", 5);
                core.ɵɵtemplate(7, NzTransferComponent_span_7_Template, 2, 1, "span", 4);
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵelementStart(8, "nz-transfer-list", 6);
                core.ɵɵlistener("filterChange", function NzTransferComponent_Template_nz_transfer_list_filterChange_8_listener($event) { return ctx.handleFilterChange($event); })("handleSelect", function NzTransferComponent_Template_nz_transfer_list_handleSelect_8_listener($event) { return ctx.handleRightSelect($event); })("handleSelectAll", function NzTransferComponent_Template_nz_transfer_list_handleSelectAll_8_listener($event) { return ctx.handleRightSelectAll($event); });
                core.ɵɵelementEnd();
            } if (rf & 2) {
                core.ɵɵproperty("ngStyle", ctx.nzListStyle)("titleText", ctx.nzTitles[0])("showSelectAll", ctx.nzShowSelectAll)("dataSource", ctx.leftDataSource)("filter", ctx.leftFilter)("filterOption", ctx.nzFilterOption)("renderList", ctx.nzRenderList[0])("render", ctx.nzRender)("disabled", ctx.nzDisabled)("showSearch", ctx.nzShowSearch)("searchPlaceholder", ctx.nzSearchPlaceholder || ctx.locale.searchPlaceholder)("notFoundContent", ctx.nzNotFoundContent)("itemUnit", ctx.nzItemUnit || ctx.locale.itemUnit)("itemsUnit", ctx.nzItemsUnit || ctx.locale.itemsUnit)("footer", ctx.nzFooter);
                core.ɵɵadvance(2);
                core.ɵɵproperty("disabled", ctx.nzDisabled || !ctx.leftActive)("nzType", "primary")("nzSize", "small");
                core.ɵɵadvance(2);
                core.ɵɵproperty("ngIf", ctx.nzOperations[1]);
                core.ɵɵadvance(1);
                core.ɵɵproperty("disabled", ctx.nzDisabled || !ctx.rightActive)("nzType", "primary")("nzSize", "small");
                core.ɵɵadvance(2);
                core.ɵɵproperty("ngIf", ctx.nzOperations[0]);
                core.ɵɵadvance(1);
                core.ɵɵproperty("ngStyle", ctx.nzListStyle)("titleText", ctx.nzTitles[1])("showSelectAll", ctx.nzShowSelectAll)("dataSource", ctx.rightDataSource)("filter", ctx.rightFilter)("filterOption", ctx.nzFilterOption)("renderList", ctx.nzRenderList[1])("render", ctx.nzRender)("disabled", ctx.nzDisabled)("showSearch", ctx.nzShowSearch)("searchPlaceholder", ctx.nzSearchPlaceholder || ctx.locale.searchPlaceholder)("notFoundContent", ctx.nzNotFoundContent)("itemUnit", ctx.nzItemUnit || ctx.locale.itemUnit)("itemsUnit", ctx.nzItemsUnit || ctx.locale.itemsUnit)("footer", ctx.nzFooter);
            } }, directives: [NzTransferListComponent, common.NgStyle, button.NzButtonComponent, icon.NzIconDirective, common.NgIf], encapsulation: 2, changeDetection: 0 });
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
        return NzTransferComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NzTransferComponent, [{
            type: core.Component,
            args: [{
                    selector: 'nz-transfer',
                    exportAs: 'nzTransfer',
                    preserveWhitespaces: false,
                    templateUrl: './nz-transfer.component.html',
                    host: {
                        '[class.ant-transfer-disabled]': 'nzDisabled'
                    },
                    encapsulation: core.ViewEncapsulation.None,
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    providers: [core$1.NzUpdateHostClassService]
                }]
        }], function () { return [{ type: core.ChangeDetectorRef }, { type: i18n.NzI18nService }, { type: core$1.NzUpdateHostClassService }, { type: core.ElementRef }, { type: core.Renderer2 }]; }, { lists: [{
                type: core.ViewChildren,
                args: [NzTransferListComponent]
            }], nzDisabled: [{
                type: core.Input
            }], nzDataSource: [{
                type: core.Input
            }], nzTitles: [{
                type: core.Input
            }], nzOperations: [{
                type: core.Input
            }], nzListStyle: [{
                type: core.Input
            }], nzShowSelectAll: [{
                type: core.Input
            }], nzItemUnit: [{
                type: core.Input
            }], nzItemsUnit: [{
                type: core.Input
            }], nzCanMove: [{
                type: core.Input
            }], nzRenderList: [{
                type: core.Input
            }], nzRender: [{
                type: core.Input
            }], nzFooter: [{
                type: core.Input
            }], nzShowSearch: [{
                type: core.Input
            }], nzFilterOption: [{
                type: core.Input
            }], nzSearchPlaceholder: [{
                type: core.Input
            }], nzNotFoundContent: [{
                type: core.Input
            }], nzChange: [{
                type: core.Output
            }], nzSearchChange: [{
                type: core.Output
            }], nzSelectChange: [{
                type: core.Output
            }] }); })();

    /**
     * @license
     * Copyright Alibaba.com All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    var NzTransferModule = /** @class */ (function () {
        function NzTransferModule() {
        }
        /** @nocollapse */ NzTransferModule.ɵmod = core.ɵɵdefineNgModule({ type: NzTransferModule });
        /** @nocollapse */ NzTransferModule.ɵinj = core.ɵɵdefineInjector({ factory: function NzTransferModule_Factory(t) { return new (t || NzTransferModule)(); }, imports: [[common.CommonModule, forms.FormsModule, checkbox.NzCheckboxModule, button.NzButtonModule, input.NzInputModule, i18n.NzI18nModule, icon.NzIconModule, empty.NzEmptyModule]] });
        return NzTransferModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && core.ɵɵsetNgModuleScope(NzTransferModule, { declarations: [NzTransferComponent, NzTransferListComponent, NzTransferSearchComponent], imports: [common.CommonModule, forms.FormsModule, checkbox.NzCheckboxModule, button.NzButtonModule, input.NzInputModule, i18n.NzI18nModule, icon.NzIconModule, empty.NzEmptyModule], exports: [NzTransferComponent] }); })();
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NzTransferModule, [{
            type: core.NgModule,
            args: [{
                    imports: [common.CommonModule, forms.FormsModule, checkbox.NzCheckboxModule, button.NzButtonModule, input.NzInputModule, i18n.NzI18nModule, icon.NzIconModule, empty.NzEmptyModule],
                    declarations: [NzTransferComponent, NzTransferListComponent, NzTransferSearchComponent],
                    exports: [NzTransferComponent]
                }]
        }], null, null); })();

    exports.NzTransferComponent = NzTransferComponent;
    exports.NzTransferListComponent = NzTransferListComponent;
    exports.NzTransferModule = NzTransferModule;
    exports.NzTransferSearchComponent = NzTransferSearchComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ng-zorro-antd-transfer.umd.js.map
