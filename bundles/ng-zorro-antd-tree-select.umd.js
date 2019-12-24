(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/cdk/keycodes'), require('@angular/cdk/overlay'), require('@angular/core'), require('@angular/forms'), require('rxjs'), require('rxjs/operators'), require('ng-zorro-antd/core'), require('ng-zorro-antd/tree'), require('@angular/common'), require('ng-zorro-antd/empty'), require('ng-zorro-antd/icon')) :
    typeof define === 'function' && define.amd ? define('ng-zorro-antd/tree-select', ['exports', '@angular/cdk/keycodes', '@angular/cdk/overlay', '@angular/core', '@angular/forms', 'rxjs', 'rxjs/operators', 'ng-zorro-antd/core', 'ng-zorro-antd/tree', '@angular/common', 'ng-zorro-antd/empty', 'ng-zorro-antd/icon'], factory) :
    (global = global || self, factory((global['ng-zorro-antd'] = global['ng-zorro-antd'] || {}, global['ng-zorro-antd']['tree-select'] = {}), global.ng.cdk.keycodes, global.ng.cdk.overlay, global.ng.core, global.ng.forms, global.rxjs, global.rxjs.operators, global['ng-zorro-antd'].core, global['ng-zorro-antd'].tree, global.ng.common, global['ng-zorro-antd'].empty, global['ng-zorro-antd'].icon));
}(this, (function (exports, keycodes, overlay, core, forms, rxjs, operators, core$1, tree, common, empty, icon) { 'use strict';

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

    var NzTreeSelectService = /** @class */ (function (_super) {
        __extends(NzTreeSelectService, _super);
        function NzTreeSelectService() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /** @nocollapse */ NzTreeSelectService.ɵfac = function NzTreeSelectService_Factory(t) { return ɵNzTreeSelectService_BaseFactory(t || NzTreeSelectService); };
        /** @nocollapse */ NzTreeSelectService.ɵprov = core.ɵɵdefineInjectable({ token: NzTreeSelectService, factory: NzTreeSelectService.ɵfac });
        return NzTreeSelectService;
    }(core$1.NzTreeBaseService));
    var ɵNzTreeSelectService_BaseFactory = core.ɵɵgetInheritedFactory(NzTreeSelectService);
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NzTreeSelectService, [{
            type: core.Injectable
        }], null, null); })();

    var _c0 = ["nzTreeTemplate"];
    var _c1 = ["inputElement"];
    var _c2 = ["treeRef"];
    function NzTreeSelectComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
        var _r1675 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "input", 6, 7);
        core.ɵɵlistener("compositionstart", function NzTreeSelectComponent_ng_template_0_Template_input_compositionstart_0_listener($event) { core.ɵɵrestoreView(_r1675); var ctx_r1674 = core.ɵɵnextContext(); return ctx_r1674.isComposing = true; })("compositionend", function NzTreeSelectComponent_ng_template_0_Template_input_compositionend_0_listener($event) { core.ɵɵrestoreView(_r1675); var ctx_r1676 = core.ɵɵnextContext(); return ctx_r1676.isComposing = false; })("keydown", function NzTreeSelectComponent_ng_template_0_Template_input_keydown_0_listener($event) { core.ɵɵrestoreView(_r1675); var ctx_r1677 = core.ɵɵnextContext(); return ctx_r1677.onKeyDownInput($event); })("ngModelChange", function NzTreeSelectComponent_ng_template_0_Template_input_ngModelChange_0_listener($event) { core.ɵɵrestoreView(_r1675); var ctx_r1678 = core.ɵɵnextContext(); return ctx_r1678.setInputValue($event); });
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r1667 = core.ɵɵnextContext();
        core.ɵɵproperty("ngModel", ctx_r1667.inputValue)("disabled", ctx_r1667.nzDisabled);
    } }
    function NzTreeSelectComponent_ng_template_2_span_3_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "span", 12);
        core.ɵɵelement(1, "nz-embed-empty", 13);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r1680 = core.ɵɵnextContext(2);
        core.ɵɵadvance(1);
        core.ɵɵproperty("nzComponentName", "tree-select")("specificContent", ctx_r1680.nzNotFoundContent);
    } }
    var _c3 = function () { return []; };
    function NzTreeSelectComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
        var _r1682 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "div", 8);
        core.ɵɵelementStart(1, "nz-tree", 9, 10);
        core.ɵɵlistener("nzExpandChange", function NzTreeSelectComponent_ng_template_2_Template_nz_tree_nzExpandChange_1_listener($event) { core.ɵɵrestoreView(_r1682); var ctx_r1681 = core.ɵɵnextContext(); return ctx_r1681.onExpandedKeysChange($event); })("nzClick", function NzTreeSelectComponent_ng_template_2_Template_nz_tree_nzClick_1_listener($event) { core.ɵɵrestoreView(_r1682); var ctx_r1683 = core.ɵɵnextContext(); return ctx_r1683.nzTreeClick.emit($event); })("nzCheckedKeysChange", function NzTreeSelectComponent_ng_template_2_Template_nz_tree_nzCheckedKeysChange_1_listener($event) { core.ɵɵrestoreView(_r1682); var ctx_r1684 = core.ɵɵnextContext(); return ctx_r1684.updateSelectedNodes(); })("nzSelectedKeysChange", function NzTreeSelectComponent_ng_template_2_Template_nz_tree_nzSelectedKeysChange_1_listener($event) { core.ɵɵrestoreView(_r1682); var ctx_r1685 = core.ɵɵnextContext(); return ctx_r1685.updateSelectedNodes(); })("nzCheckBoxChange", function NzTreeSelectComponent_ng_template_2_Template_nz_tree_nzCheckBoxChange_1_listener($event) { core.ɵɵrestoreView(_r1682); var ctx_r1686 = core.ɵɵnextContext(); return ctx_r1686.nzTreeCheckBoxChange.emit($event); })("nzSearchValueChange", function NzTreeSelectComponent_ng_template_2_Template_nz_tree_nzSearchValueChange_1_listener($event) { core.ɵɵrestoreView(_r1682); var ctx_r1687 = core.ɵɵnextContext(); return ctx_r1687.setSearchValues($event); });
        core.ɵɵelementEnd();
        core.ɵɵtemplate(3, NzTreeSelectComponent_ng_template_2_span_3_Template, 2, 2, "span", 11);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r1668 = core.ɵɵnextContext();
        core.ɵɵclassProp("ant-select-dropdown--single", !ctx_r1668.nzMultiple)("ant-select-dropdown--multiple", ctx_r1668.nzMultiple)("ant-select-dropdown-placement-bottomLeft", ctx_r1668.dropDownPosition === "bottom")("ant-select-dropdown-placement-topLeft", ctx_r1668.dropDownPosition === "top");
        core.ɵɵproperty("@slideMotion", ctx_r1668.nzOpen ? ctx_r1668.dropDownPosition : "void")("@.disabled", ctx_r1668.noAnimation == null ? null : ctx_r1668.noAnimation.nzNoAnimation)("nzNoAnimation", ctx_r1668.noAnimation == null ? null : ctx_r1668.noAnimation.nzNoAnimation)("ngStyle", ctx_r1668.nzDropdownStyle);
        core.ɵɵadvance(1);
        core.ɵɵproperty("hidden", ctx_r1668.isNotFound)("nzData", ctx_r1668.nzNodes)("nzMultiple", ctx_r1668.nzMultiple)("nzSearchValue", ctx_r1668.inputValue)("nzHideUnMatched", ctx_r1668.nzHideUnMatched)("nzShowIcon", ctx_r1668.nzShowIcon)("nzCheckable", ctx_r1668.nzCheckable)("nzAsyncData", ctx_r1668.nzAsyncData)("nzShowExpand", ctx_r1668.nzShowExpand)("nzShowLine", ctx_r1668.nzShowLine)("nzExpandedIcon", ctx_r1668.nzExpandedIcon)("nzExpandAll", ctx_r1668.nzDefaultExpandAll)("nzExpandedKeys", ctx_r1668.expandedKeys)("nzCheckedKeys", ctx_r1668.nzCheckable ? ctx_r1668.value : core.ɵɵpureFunction0(26, _c3))("nzSelectedKeys", !ctx_r1668.nzCheckable ? ctx_r1668.value : core.ɵɵpureFunction0(27, _c3))("nzTreeTemplate", ctx_r1668.treeTemplate)("nzCheckStrictly", ctx_r1668.nzCheckStrictly);
        core.ɵɵadvance(2);
        core.ɵɵproperty("ngIf", ctx_r1668.nzNodes.length === 0 || ctx_r1668.isNotFound);
    } }
    function NzTreeSelectComponent_ng_container_4_div_2_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div", 18);
        core.ɵɵtext(1);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r1688 = core.ɵɵnextContext(2);
        core.ɵɵstyleProp("display", ctx_r1688.placeHolderDisplay);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1(" ", ctx_r1688.nzPlaceHolder, " ");
    } }
    function NzTreeSelectComponent_ng_container_4_div_3_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div", 19);
        core.ɵɵtext(1);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r1689 = core.ɵɵnextContext(2);
        core.ɵɵproperty("ngStyle", ctx_r1689.selectedValueDisplay);
        core.ɵɵattribute("title", ctx_r1689.nzDisplayWith(ctx_r1689.selectedNodes[0]));
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1(" ", ctx_r1689.nzDisplayWith(ctx_r1689.selectedNodes[0]), " ");
    } }
    function NzTreeSelectComponent_ng_container_4_div_4_ng_template_2_Template(rf, ctx) { }
    function NzTreeSelectComponent_ng_container_4_div_4_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div", 20);
        core.ɵɵelementStart(1, "div", 21);
        core.ɵɵtemplate(2, NzTreeSelectComponent_ng_container_4_div_4_ng_template_2_Template, 0, 0, "ng-template", 22);
        core.ɵɵelementStart(3, "span", 23);
        core.ɵɵtext(4);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r1690 = core.ɵɵnextContext(2);
        var _r1666 = core.ɵɵreference(1);
        core.ɵɵstyleProp("display", ctx_r1690.searchDisplay);
        core.ɵɵadvance(2);
        core.ɵɵproperty("ngTemplateOutlet", _r1666);
        core.ɵɵadvance(2);
        core.ɵɵtextInterpolate1("", ctx_r1690.inputValue, "\u00A0");
    } }
    function NzTreeSelectComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵelementStart(1, "div", 14);
        core.ɵɵtemplate(2, NzTreeSelectComponent_ng_container_4_div_2_Template, 2, 2, "div", 15);
        core.ɵɵtemplate(3, NzTreeSelectComponent_ng_container_4_div_3_Template, 2, 3, "div", 16);
        core.ɵɵtemplate(4, NzTreeSelectComponent_ng_container_4_div_4_Template, 5, 3, "div", 17);
        core.ɵɵelementEnd();
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var ctx_r1669 = core.ɵɵnextContext();
        core.ɵɵadvance(2);
        core.ɵɵproperty("ngIf", ctx_r1669.nzPlaceHolder && ctx_r1669.selectedNodes.length === 0);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", ctx_r1669.selectedNodes.length === 1);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", ctx_r1669.nzShowSearch);
    } }
    function NzTreeSelectComponent_ng_container_5_div_2_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div", 18);
        core.ɵɵtext(1);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r1692 = core.ɵɵnextContext(2);
        core.ɵɵstyleProp("display", ctx_r1692.placeHolderDisplay);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1(" ", ctx_r1692.nzPlaceHolder, " ");
    } }
    function NzTreeSelectComponent_ng_container_5_ng_container_3_span_2_Template(rf, ctx) { if (rf & 1) {
        var _r1699 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "span", 29);
        core.ɵɵlistener("mousedown", function NzTreeSelectComponent_ng_container_5_ng_container_3_span_2_Template_span_mousedown_0_listener($event) { core.ɵɵrestoreView(_r1699); return $event.preventDefault(); })("click", function NzTreeSelectComponent_ng_container_5_ng_container_3_span_2_Template_span_click_0_listener($event) { core.ɵɵrestoreView(_r1699); var node_r1696 = core.ɵɵnextContext().$implicit; var ctx_r1700 = core.ɵɵnextContext(2); return ctx_r1700.removeSelected(node_r1696, true, $event); });
        core.ɵɵelement(1, "i", 30);
        core.ɵɵelementEnd();
    } }
    function NzTreeSelectComponent_ng_container_5_ng_container_3_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵelementStart(1, "li", 26);
        core.ɵɵtemplate(2, NzTreeSelectComponent_ng_container_5_ng_container_3_span_2_Template, 2, 0, "span", 27);
        core.ɵɵelementStart(3, "span", 28);
        core.ɵɵtext(4);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var node_r1696 = ctx.$implicit;
        var ctx_r1693 = core.ɵɵnextContext(2);
        core.ɵɵadvance(1);
        core.ɵɵclassProp("ant-select-selection__choice__disabled", node_r1696.isDisabled);
        core.ɵɵproperty("@zoomMotion", undefined)("@.disabled", ctx_r1693.noAnimation == null ? null : ctx_r1693.noAnimation.nzNoAnimation)("nzNoAnimation", ctx_r1693.noAnimation == null ? null : ctx_r1693.noAnimation.nzNoAnimation);
        core.ɵɵattribute("title", ctx_r1693.nzDisplayWith(node_r1696));
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", !node_r1696.isDisabled);
        core.ɵɵadvance(2);
        core.ɵɵtextInterpolate(ctx_r1693.nzDisplayWith(node_r1696));
    } }
    function NzTreeSelectComponent_ng_container_5_li_5_ng_container_2_ng_template_1_Template(rf, ctx) { }
    var _c4 = function (a0) { return { $implicit: a0 }; };
    function NzTreeSelectComponent_ng_container_5_li_5_ng_container_2_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵtemplate(1, NzTreeSelectComponent_ng_container_5_li_5_ng_container_2_ng_template_1_Template, 0, 0, "ng-template", 32);
        core.ɵɵpipe(2, "slice");
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var ctx_r1702 = core.ɵɵnextContext(3);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngTemplateOutlet", ctx_r1702.nzMaxTagPlaceholder)("ngTemplateOutletContext", core.ɵɵpureFunction1(5, _c4, core.ɵɵpipeBind2(2, 2, ctx_r1702.selectedNodes, ctx_r1702.nzMaxTagCount)));
    } }
    function NzTreeSelectComponent_ng_container_5_li_5_ng_container_3_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵtext(1);
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var ctx_r1703 = core.ɵɵnextContext(3);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1(" + ", ctx_r1703.selectedNodes.length - ctx_r1703.nzMaxTagCount, " ... ");
    } }
    function NzTreeSelectComponent_ng_container_5_li_5_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "li", 31);
        core.ɵɵelementStart(1, "div", 28);
        core.ɵɵtemplate(2, NzTreeSelectComponent_ng_container_5_li_5_ng_container_2_Template, 3, 7, "ng-container", 3);
        core.ɵɵtemplate(3, NzTreeSelectComponent_ng_container_5_li_5_ng_container_3_Template, 2, 1, "ng-container", 3);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r1694 = core.ɵɵnextContext(2);
        core.ɵɵproperty("@zoomMotion", undefined);
        core.ɵɵadvance(2);
        core.ɵɵproperty("ngIf", ctx_r1694.nzMaxTagPlaceholder);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", !ctx_r1694.nzMaxTagPlaceholder);
    } }
    function NzTreeSelectComponent_ng_container_5_ng_template_7_Template(rf, ctx) { }
    function NzTreeSelectComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵelementStart(1, "ul", 14);
        core.ɵɵtemplate(2, NzTreeSelectComponent_ng_container_5_div_2_Template, 2, 2, "div", 15);
        core.ɵɵtemplate(3, NzTreeSelectComponent_ng_container_5_ng_container_3_Template, 5, 7, "ng-container", 24);
        core.ɵɵpipe(4, "slice");
        core.ɵɵtemplate(5, NzTreeSelectComponent_ng_container_5_li_5_Template, 4, 3, "li", 25);
        core.ɵɵelementStart(6, "li", 20);
        core.ɵɵtemplate(7, NzTreeSelectComponent_ng_container_5_ng_template_7_Template, 0, 0, "ng-template", 22);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var ctx_r1670 = core.ɵɵnextContext();
        var _r1666 = core.ɵɵreference(1);
        core.ɵɵadvance(2);
        core.ɵɵproperty("ngIf", ctx_r1670.nzPlaceHolder && ctx_r1670.selectedNodes.length === 0);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngForOf", core.ɵɵpipeBind3(4, 5, ctx_r1670.selectedNodes, 0, ctx_r1670.nzMaxTagCount))("ngForTrackBy", ctx_r1670.trackValue);
        core.ɵɵadvance(2);
        core.ɵɵproperty("ngIf", ctx_r1670.selectedNodes.length > ctx_r1670.nzMaxTagCount);
        core.ɵɵadvance(2);
        core.ɵɵproperty("ngTemplateOutlet", _r1666);
    } }
    function NzTreeSelectComponent_span_6_Template(rf, ctx) { if (rf & 1) {
        var _r1706 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "span", 33);
        core.ɵɵlistener("mousedown", function NzTreeSelectComponent_span_6_Template_span_mousedown_0_listener($event) { core.ɵɵrestoreView(_r1706); return $event.preventDefault(); })("click", function NzTreeSelectComponent_span_6_Template_span_click_0_listener($event) { core.ɵɵrestoreView(_r1706); var ctx_r1707 = core.ɵɵnextContext(); return ctx_r1707.onClearSelection($event); });
        core.ɵɵelement(1, "i", 34);
        core.ɵɵelementEnd();
    } }
    function NzTreeSelectComponent_span_7_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "span", 35);
        core.ɵɵelement(1, "i", 36);
        core.ɵɵelementEnd();
    } }
    function higherOrderServiceFactory(injector) {
        return injector.get(NzTreeSelectService);
    }
    var NZ_CONFIG_COMPONENT_NAME = 'treeSelect';
    var NzTreeSelectComponent = /** @class */ (function (_super) {
        __extends(NzTreeSelectComponent, _super);
        function NzTreeSelectComponent(nzTreeService, nzConfigService, renderer, cdr, elementRef, noAnimation) {
            var _this = _super.call(this, nzTreeService) || this;
            _this.nzConfigService = nzConfigService;
            _this.renderer = renderer;
            _this.cdr = cdr;
            _this.elementRef = elementRef;
            _this.noAnimation = noAnimation;
            _this.nzAllowClear = true;
            _this.nzShowExpand = true;
            _this.nzShowLine = false;
            _this.nzCheckable = false;
            _this.nzShowSearch = false;
            _this.nzDisabled = false;
            _this.nzAsyncData = false;
            _this.nzMultiple = false;
            _this.nzDefaultExpandAll = false;
            _this.nzCheckStrictly = false;
            _this.nzNodes = [];
            _this.nzOpen = false;
            _this.nzPlaceHolder = '';
            _this.nzDisplayWith = function (node) { return node.title; };
            _this.nzOpenChange = new core.EventEmitter();
            _this.nzCleared = new core.EventEmitter();
            _this.nzRemoved = new core.EventEmitter();
            _this.nzExpandChange = new core.EventEmitter();
            _this.nzTreeClick = new core.EventEmitter();
            _this.nzTreeCheckBoxChange = new core.EventEmitter();
            _this.isComposing = false;
            _this.isDestroy = true;
            _this.isNotFound = false;
            _this.inputValue = '';
            _this.dropDownPosition = 'bottom';
            _this.selectedNodes = [];
            _this.expandedKeys = [];
            _this.value = [];
            _this.onTouched = function () { return null; };
            _this.renderer.addClass(_this.elementRef.nativeElement, 'ant-select');
            return _this;
        }
        Object.defineProperty(NzTreeSelectComponent.prototype, "nzDefaultExpandedKeys", {
            get: function () {
                return this.expandedKeys;
            },
            /**
             * @deprecated 9.0.0 - use `nzExpandedKeys` instead.
             */
            set: function (value) {
                core$1.warnDeprecation("'nzDefaultExpandedKeys' would be removed in 9.0.0. Please use 'nzExpandedKeys' instead.");
                this.expandedKeys = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzTreeSelectComponent.prototype, "nzExpandedKeys", {
            get: function () {
                return this.expandedKeys;
            },
            set: function (value) {
                this.expandedKeys = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzTreeSelectComponent.prototype, "treeTemplate", {
            get: function () {
                return this.nzTreeTemplate || this.nzTreeTemplateChild;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzTreeSelectComponent.prototype, "placeHolderDisplay", {
            get: function () {
                return this.inputValue || this.isComposing || this.selectedNodes.length ? 'none' : 'block';
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzTreeSelectComponent.prototype, "searchDisplay", {
            get: function () {
                return this.nzOpen ? 'block' : 'none';
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzTreeSelectComponent.prototype, "isMultiple", {
            get: function () {
                return this.nzMultiple || this.nzCheckable;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzTreeSelectComponent.prototype, "selectedValueDisplay", {
            get: function () {
                var showSelectedValue = false;
                var opacity = 1;
                if (!this.nzShowSearch) {
                    showSelectedValue = true;
                }
                else {
                    if (this.nzOpen) {
                        showSelectedValue = !(this.inputValue || this.isComposing);
                        if (showSelectedValue) {
                            opacity = 0.4;
                        }
                    }
                    else {
                        showSelectedValue = true;
                    }
                }
                return {
                    display: showSelectedValue ? 'block' : 'none',
                    opacity: "" + opacity
                };
            },
            enumerable: true,
            configurable: true
        });
        NzTreeSelectComponent.prototype.ngOnInit = function () {
            this.isDestroy = false;
            this.selectionChangeSubscription = this.subscribeSelectionChange();
        };
        NzTreeSelectComponent.prototype.ngOnDestroy = function () {
            this.isDestroy = true;
            this.closeDropDown();
            this.selectionChangeSubscription.unsubscribe();
        };
        NzTreeSelectComponent.prototype.setDisabledState = function (isDisabled) {
            this.nzDisabled = isDisabled;
            this.closeDropDown();
        };
        NzTreeSelectComponent.prototype.ngOnChanges = function (changes) {
            if (changes.hasOwnProperty('nzNodes')) {
                this.updateSelectedNodes(true);
            }
        };
        NzTreeSelectComponent.prototype.writeValue = function (value) {
            var _this = this;
            if (core$1.isNotNil(value)) {
                if (this.isMultiple && Array.isArray(value)) {
                    this.value = value;
                }
                else {
                    this.value = [value];
                }
                this.updateSelectedNodes(true);
            }
            else {
                this.value = [];
                this.selectedNodes.forEach(function (node) {
                    _this.removeSelected(node, false);
                });
                this.selectedNodes = [];
            }
            this.cdr.markForCheck();
        };
        NzTreeSelectComponent.prototype.registerOnChange = function (fn) {
            this.onChange = fn;
        };
        NzTreeSelectComponent.prototype.registerOnTouched = function (fn) {
            this.onTouched = fn;
        };
        NzTreeSelectComponent.prototype.trigger = function () {
            if (this.nzDisabled || (!this.nzDisabled && this.nzOpen)) {
                this.closeDropDown();
            }
            else {
                this.openDropdown();
                if (this.nzShowSearch || this.isMultiple) {
                    this.focusOnInput();
                }
            }
        };
        NzTreeSelectComponent.prototype.openDropdown = function () {
            if (!this.nzDisabled) {
                this.nzOpen = true;
                this.nzOpenChange.emit(this.nzOpen);
                this.updateCdkConnectedOverlayStatus();
                this.updatePosition();
            }
        };
        NzTreeSelectComponent.prototype.closeDropDown = function () {
            this.onTouched();
            this.nzOpen = false;
            this.nzOpenChange.emit(this.nzOpen);
            this.cdr.markForCheck();
        };
        NzTreeSelectComponent.prototype.onKeyDownInput = function (e) {
            var keyCode = e.keyCode;
            var eventTarget = e.target;
            if (this.isMultiple && !eventTarget.value && keyCode === keycodes.BACKSPACE) {
                e.preventDefault();
                if (this.selectedNodes.length) {
                    var removeNode = this.selectedNodes[this.selectedNodes.length - 1];
                    this.removeSelected(removeNode);
                    this.nzTreeService.triggerEventChange$.next({
                        eventName: 'removeSelect',
                        node: removeNode
                    });
                }
            }
        };
        NzTreeSelectComponent.prototype.onExpandedKeysChange = function (value) {
            this.nzExpandChange.emit(value);
            this.expandedKeys = __spread(value.keys);
        };
        NzTreeSelectComponent.prototype.setInputValue = function (value) {
            this.inputValue = value;
            this.updateInputWidth();
            this.updatePosition();
        };
        NzTreeSelectComponent.prototype.removeSelected = function (node, emit, event) {
            if (emit === void 0) { emit = true; }
            node.isSelected = false;
            node.isChecked = false;
            if (this.nzCheckable) {
                this.nzTreeService.conduct(node);
            }
            else {
                this.nzTreeService.setSelectedNodeList(node, this.nzMultiple);
            }
            if (emit) {
                this.nzRemoved.emit(node);
            }
            // Do not trigger the popup
            if (event && event.stopPropagation) {
                event.stopPropagation();
            }
        };
        NzTreeSelectComponent.prototype.focusOnInput = function () {
            var _this = this;
            setTimeout(function () {
                if (_this.inputElement) {
                    _this.inputElement.nativeElement.focus();
                }
            });
        };
        NzTreeSelectComponent.prototype.subscribeSelectionChange = function () {
            var _this = this;
            return rxjs.merge(this.nzTreeClick.pipe(operators.tap(function (event) {
                var node = event.node;
                if (_this.nzCheckable && !node.isDisabled && !node.isDisableCheckbox) {
                    node.isChecked = !node.isChecked;
                    node.isHalfChecked = false;
                    if (!_this.nzCheckStrictly) {
                        _this.nzTreeService.conduct(node);
                    }
                }
                if (_this.nzCheckable) {
                    node.isSelected = false;
                }
            }), operators.filter(function (event) {
                var node = event.node;
                return _this.nzCheckable ? !node.isDisabled && !node.isDisableCheckbox : !node.isDisabled && node.isSelectable;
            })), this.nzCheckable ? this.nzTreeCheckBoxChange : rxjs.of(), this.nzCleared, this.nzRemoved).subscribe(function () {
                _this.updateSelectedNodes();
                var value = _this.selectedNodes.map(function (node) { return node.key; });
                _this.value = __spread(value);
                if (_this.nzShowSearch || _this.isMultiple) {
                    _this.inputValue = '';
                    _this.isNotFound = false;
                }
                if (_this.isMultiple) {
                    _this.onChange(value);
                    _this.focusOnInput();
                    _this.updatePosition();
                }
                else {
                    _this.closeDropDown();
                    _this.onChange(value.length ? value[0] : null);
                }
            });
        };
        NzTreeSelectComponent.prototype.updateSelectedNodes = function (init) {
            if (init === void 0) { init = false; }
            if (init) {
                var nodes = this.coerceTreeNodes(this.nzNodes);
                this.nzTreeService.isMultiple = this.isMultiple;
                this.nzTreeService.isCheckStrictly = this.nzCheckStrictly;
                this.nzTreeService.initTree(nodes);
                if (this.nzCheckable) {
                    this.nzTreeService.calcCheckedKeys(this.value, nodes, this.nzCheckStrictly);
                }
                else {
                    this.nzTreeService.calcSelectedKeys(this.value, nodes, this.isMultiple);
                }
            }
            this.selectedNodes = __spread((this.nzCheckable ? this.getCheckedNodeList() : this.getSelectedNodeList()));
        };
        NzTreeSelectComponent.prototype.updatePosition = function () {
            var _this = this;
            setTimeout(function () {
                if (_this.cdkConnectedOverlay && _this.cdkConnectedOverlay.overlayRef) {
                    _this.cdkConnectedOverlay.overlayRef.updatePosition();
                }
            });
        };
        NzTreeSelectComponent.prototype.onPositionChange = function (position) {
            this.dropDownPosition = position.connectionPair.originY;
        };
        NzTreeSelectComponent.prototype.updateInputWidth = function () {
            if (this.isMultiple && this.inputElement) {
                if (this.inputValue || this.isComposing) {
                    this.renderer.setStyle(this.inputElement.nativeElement, 'width', this.inputElement.nativeElement.scrollWidth + "px");
                }
                else {
                    this.renderer.removeStyle(this.inputElement.nativeElement, 'width');
                }
            }
        };
        NzTreeSelectComponent.prototype.onClearSelection = function ($event) {
            var _this = this;
            $event.stopPropagation();
            $event.preventDefault();
            this.selectedNodes.forEach(function (node) {
                _this.removeSelected(node, false);
            });
            this.nzCleared.emit();
        };
        NzTreeSelectComponent.prototype.setSearchValues = function ($event) {
            var _this = this;
            Promise.resolve().then(function () {
                _this.isNotFound = (_this.nzShowSearch || _this.isMultiple) && !!_this.inputValue && $event.matchedKeys.length === 0;
            });
        };
        NzTreeSelectComponent.prototype.updateCdkConnectedOverlayStatus = function () {
            this.triggerWidth = this.cdkOverlayOrigin.elementRef.nativeElement.getBoundingClientRect().width;
        };
        NzTreeSelectComponent.prototype.trackValue = function (_index, option) {
            return option.key;
        };
        /** @nocollapse */ NzTreeSelectComponent.ɵfac = function NzTreeSelectComponent_Factory(t) { return new (t || NzTreeSelectComponent)(core.ɵɵdirectiveInject(NzTreeSelectService), core.ɵɵdirectiveInject(core$1.NzConfigService), core.ɵɵdirectiveInject(core.Renderer2), core.ɵɵdirectiveInject(core.ChangeDetectorRef), core.ɵɵdirectiveInject(core.ElementRef), core.ɵɵdirectiveInject(core$1.NzNoAnimationDirective, 9)); };
        /** @nocollapse */ NzTreeSelectComponent.ɵcmp = core.ɵɵdefineComponent({ type: NzTreeSelectComponent, selectors: [["nz-tree-select"]], contentQueries: function NzTreeSelectComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
                core.ɵɵstaticContentQuery(dirIndex, _c0, true);
            } if (rf & 2) {
                var _t;
                core.ɵɵqueryRefresh(_t = core.ɵɵloadQuery()) && (ctx.nzTreeTemplateChild = _t.first);
            } }, viewQuery: function NzTreeSelectComponent_Query(rf, ctx) { if (rf & 1) {
                core.ɵɵviewQuery(_c1, true);
                core.ɵɵviewQuery(_c2, true);
                core.ɵɵstaticViewQuery(overlay.CdkOverlayOrigin, true);
                core.ɵɵviewQuery(overlay.CdkConnectedOverlay, true);
            } if (rf & 2) {
                var _t;
                core.ɵɵqueryRefresh(_t = core.ɵɵloadQuery()) && (ctx.inputElement = _t.first);
                core.ɵɵqueryRefresh(_t = core.ɵɵloadQuery()) && (ctx.treeRef = _t.first);
                core.ɵɵqueryRefresh(_t = core.ɵɵloadQuery()) && (ctx.cdkOverlayOrigin = _t.first);
                core.ɵɵqueryRefresh(_t = core.ɵɵloadQuery()) && (ctx.cdkConnectedOverlay = _t.first);
            } }, hostBindings: function NzTreeSelectComponent_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
                core.ɵɵallocHostVars(6);
                core.ɵɵlistener("click", function NzTreeSelectComponent_click_HostBindingHandler($event) { return ctx.trigger(); });
            } if (rf & 2) {
                core.ɵɵclassProp("ant-select-lg", ctx.nzSize === "large")("ant-select-sm", ctx.nzSize === "small")("ant-select-enabled", !ctx.nzDisabled)("ant-select-disabled", ctx.nzDisabled)("ant-select-allow-clear", ctx.nzAllowClear)("ant-select-open", ctx.nzOpen);
            } }, inputs: { nzAllowClear: "nzAllowClear", nzShowExpand: "nzShowExpand", nzShowLine: "nzShowLine", nzDropdownMatchSelectWidth: "nzDropdownMatchSelectWidth", nzCheckable: "nzCheckable", nzHideUnMatched: "nzHideUnMatched", nzShowIcon: "nzShowIcon", nzShowSearch: "nzShowSearch", nzDisabled: "nzDisabled", nzAsyncData: "nzAsyncData", nzMultiple: "nzMultiple", nzDefaultExpandAll: "nzDefaultExpandAll", nzCheckStrictly: "nzCheckStrictly", nzExpandedIcon: "nzExpandedIcon", nzNotFoundContent: "nzNotFoundContent", nzNodes: "nzNodes", nzOpen: "nzOpen", nzSize: "nzSize", nzPlaceHolder: "nzPlaceHolder", nzDropdownStyle: "nzDropdownStyle", nzDefaultExpandedKeys: "nzDefaultExpandedKeys", nzExpandedKeys: "nzExpandedKeys", nzDisplayWith: "nzDisplayWith", nzMaxTagCount: "nzMaxTagCount", nzMaxTagPlaceholder: "nzMaxTagPlaceholder", nzTreeTemplate: "nzTreeTemplate" }, outputs: { nzOpenChange: "nzOpenChange", nzCleared: "nzCleared", nzRemoved: "nzRemoved", nzExpandChange: "nzExpandChange", nzTreeClick: "nzTreeClick", nzTreeCheckBoxChange: "nzTreeCheckBoxChange" }, exportAs: ["nzTreeSelect"], features: [core.ɵɵProvidersFeature([
                    NzTreeSelectService,
                    {
                        provide: core$1.NzTreeHigherOrderServiceToken,
                        useFactory: higherOrderServiceFactory,
                        deps: [[new core.Self(), core.Injector]]
                    },
                    {
                        provide: forms.NG_VALUE_ACCESSOR,
                        useExisting: core.forwardRef((function () { return NzTreeSelectComponent; })),
                        multi: true
                    }
                ]), core.ɵɵInheritDefinitionFeature, core.ɵɵNgOnChangesFeature()], decls: 8, vars: 11, consts: [["inputTemplate", ""], ["cdkConnectedOverlay", "", "nzConnectedOverlay", "", 3, "cdkConnectedOverlayOrigin", "cdkConnectedOverlayOpen", "cdkConnectedOverlayHasBackdrop", "cdkConnectedOverlayMinWidth", "cdkConnectedOverlayWidth", "backdropClick", "detach", "positionChange"], ["cdkOverlayOrigin", "", "tabindex", "0", 1, "ant-select-selection"], [4, "ngIf"], ["class", "ant-select-selection__clear", 3, "mousedown", "click", 4, "ngIf"], ["class", "ant-select-arrow", 4, "ngIf"], ["autocomplete", "off", 1, "ant-select-search__field", 3, "ngModel", "disabled", "compositionstart", "compositionend", "keydown", "ngModelChange"], ["inputElement", ""], [1, "ant-select-dropdown", "ant-select-tree-dropdown", 3, "nzNoAnimation", "ngStyle"], ["nzNoAnimation", "", "nzSelectMode", "", 3, "hidden", "nzData", "nzMultiple", "nzSearchValue", "nzHideUnMatched", "nzShowIcon", "nzCheckable", "nzAsyncData", "nzShowExpand", "nzShowLine", "nzExpandedIcon", "nzExpandAll", "nzExpandedKeys", "nzCheckedKeys", "nzSelectedKeys", "nzTreeTemplate", "nzCheckStrictly", "nzExpandChange", "nzClick", "nzCheckedKeysChange", "nzSelectedKeysChange", "nzCheckBoxChange", "nzSearchValueChange"], ["treeRef", ""], ["class", "ant-select-not-found", 4, "ngIf"], [1, "ant-select-not-found"], [3, "nzComponentName", "specificContent"], [1, "ant-select-selection__rendered"], ["class", "ant-select-selection__placeholder", 3, "display", 4, "ngIf"], ["class", "ant-select-selection-selected-value", 3, "ngStyle", 4, "ngIf"], ["class", "ant-select-search ant-select-search--inline", 3, "display", 4, "ngIf"], [1, "ant-select-selection__placeholder"], [1, "ant-select-selection-selected-value", 3, "ngStyle"], [1, "ant-select-search", "ant-select-search--inline"], [1, "ant-select-search__field__wrap"], [3, "ngTemplateOutlet"], [1, "ant-select-search__field__mirror"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "ant-select-selection__choice", 4, "ngIf"], [1, "ant-select-selection__choice", 3, "nzNoAnimation"], ["class", "ant-select-selection__choice__remove", 3, "mousedown", "click", 4, "ngIf"], [1, "ant-select-selection__choice__content"], [1, "ant-select-selection__choice__remove", 3, "mousedown", "click"], ["nz-icon", "", "nzType", "close", 1, "ant-select-remove-icon"], [1, "ant-select-selection__choice"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "ant-select-selection__clear", 3, "mousedown", "click"], ["nz-icon", "", "nzType", "close-circle", "nzTheme", "fill", 1, "ant-select-clear-icon"], [1, "ant-select-arrow"], ["nz-icon", "", "nzType", "down", 1, "ant-select-arrow-icon"]], template: function NzTreeSelectComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵtemplate(0, NzTreeSelectComponent_ng_template_0_Template, 2, 2, "ng-template", null, 0, core.ɵɵtemplateRefExtractor);
                core.ɵɵtemplate(2, NzTreeSelectComponent_ng_template_2_Template, 4, 28, "ng-template", 1);
                core.ɵɵlistener("backdropClick", function NzTreeSelectComponent_Template_ng_template_backdropClick_2_listener($event) { return ctx.closeDropDown(); })("detach", function NzTreeSelectComponent_Template_ng_template_detach_2_listener($event) { return ctx.closeDropDown(); })("positionChange", function NzTreeSelectComponent_Template_ng_template_positionChange_2_listener($event) { return ctx.onPositionChange($event); });
                core.ɵɵelementStart(3, "div", 2);
                core.ɵɵtemplate(4, NzTreeSelectComponent_ng_container_4_Template, 5, 3, "ng-container", 3);
                core.ɵɵtemplate(5, NzTreeSelectComponent_ng_container_5_Template, 8, 9, "ng-container", 3);
                core.ɵɵtemplate(6, NzTreeSelectComponent_span_6_Template, 2, 0, "span", 4);
                core.ɵɵtemplate(7, NzTreeSelectComponent_span_7_Template, 2, 0, "span", 5);
                core.ɵɵelementEnd();
            } if (rf & 2) {
                core.ɵɵadvance(2);
                core.ɵɵproperty("cdkConnectedOverlayOrigin", ctx.cdkOverlayOrigin)("cdkConnectedOverlayOpen", ctx.nzOpen)("cdkConnectedOverlayHasBackdrop", true)("cdkConnectedOverlayMinWidth", ctx.nzDropdownMatchSelectWidth ? null : ctx.triggerWidth)("cdkConnectedOverlayWidth", ctx.nzDropdownMatchSelectWidth ? ctx.triggerWidth : null);
                core.ɵɵadvance(1);
                core.ɵɵclassProp("ant-select-selection--single", !ctx.isMultiple)("ant-select-selection--multiple", ctx.isMultiple);
                core.ɵɵadvance(1);
                core.ɵɵproperty("ngIf", !ctx.isMultiple);
                core.ɵɵadvance(1);
                core.ɵɵproperty("ngIf", ctx.isMultiple);
                core.ɵɵadvance(1);
                core.ɵɵproperty("ngIf", ctx.nzAllowClear);
                core.ɵɵadvance(1);
                core.ɵɵproperty("ngIf", !ctx.isMultiple);
            } }, directives: [overlay.CdkConnectedOverlay, core$1.NzConnectedOverlayDirective, overlay.CdkOverlayOrigin, common.NgIf, forms.DefaultValueAccessor, forms.NgControlStatus, forms.NgModel, core$1.NzNoAnimationDirective, common.NgStyle, tree.NzTreeComponent, empty.NzEmbedEmptyComponent, common.NgTemplateOutlet, common.NgForOf, icon.NzIconDirective], pipes: [common.SlicePipe], styles: [".ant-select-dropdown[_ngcontent-%COMP%] {\n        top: 100%;\n        left: 0;\n        position: relative;\n        width: 100%;\n        margin-top: 4px;\n        margin-bottom: 4px;\n        overflow: auto;\n      }"], data: { animation: [core$1.slideMotion, core$1.zoomMotion] } });
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Boolean)
        ], NzTreeSelectComponent.prototype, "nzAllowClear", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Boolean)
        ], NzTreeSelectComponent.prototype, "nzShowExpand", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Boolean)
        ], NzTreeSelectComponent.prototype, "nzShowLine", void 0);
        __decorate([
            core$1.InputBoolean(), core$1.WithConfig(NZ_CONFIG_COMPONENT_NAME, true),
            __metadata("design:type", Boolean)
        ], NzTreeSelectComponent.prototype, "nzDropdownMatchSelectWidth", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Boolean)
        ], NzTreeSelectComponent.prototype, "nzCheckable", void 0);
        __decorate([
            core$1.InputBoolean(), core$1.WithConfig(NZ_CONFIG_COMPONENT_NAME, false),
            __metadata("design:type", Boolean)
        ], NzTreeSelectComponent.prototype, "nzHideUnMatched", void 0);
        __decorate([
            core$1.InputBoolean(), core$1.WithConfig(NZ_CONFIG_COMPONENT_NAME, false),
            __metadata("design:type", Boolean)
        ], NzTreeSelectComponent.prototype, "nzShowIcon", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Boolean)
        ], NzTreeSelectComponent.prototype, "nzShowSearch", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzTreeSelectComponent.prototype, "nzDisabled", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzTreeSelectComponent.prototype, "nzAsyncData", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzTreeSelectComponent.prototype, "nzMultiple", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzTreeSelectComponent.prototype, "nzDefaultExpandAll", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzTreeSelectComponent.prototype, "nzCheckStrictly", void 0);
        __decorate([
            core$1.WithConfig(NZ_CONFIG_COMPONENT_NAME, 'default'),
            __metadata("design:type", String)
        ], NzTreeSelectComponent.prototype, "nzSize", void 0);
        return NzTreeSelectComponent;
    }(core$1.NzTreeBase));
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NzTreeSelectComponent, [{
            type: core.Component,
            args: [{
                    selector: 'nz-tree-select',
                    exportAs: 'nzTreeSelect',
                    animations: [core$1.slideMotion, core$1.zoomMotion],
                    templateUrl: './nz-tree-select.component.html',
                    providers: [
                        NzTreeSelectService,
                        {
                            provide: core$1.NzTreeHigherOrderServiceToken,
                            useFactory: higherOrderServiceFactory,
                            deps: [[new core.Self(), core.Injector]]
                        },
                        {
                            provide: forms.NG_VALUE_ACCESSOR,
                            useExisting: core.forwardRef((function () { return NzTreeSelectComponent; })),
                            multi: true
                        }
                    ],
                    host: {
                        '[class.ant-select-lg]': 'nzSize==="large"',
                        '[class.ant-select-sm]': 'nzSize==="small"',
                        '[class.ant-select-enabled]': '!nzDisabled',
                        '[class.ant-select-disabled]': 'nzDisabled',
                        '[class.ant-select-allow-clear]': 'nzAllowClear',
                        '[class.ant-select-open]': 'nzOpen',
                        '(click)': 'trigger()'
                    },
                    styles: [
                        "\n      .ant-select-dropdown {\n        top: 100%;\n        left: 0;\n        position: relative;\n        width: 100%;\n        margin-top: 4px;\n        margin-bottom: 4px;\n        overflow: auto;\n      }\n    "
                    ]
                }]
        }], function () { return [{ type: NzTreeSelectService }, { type: core$1.NzConfigService }, { type: core.Renderer2 }, { type: core.ChangeDetectorRef }, { type: core.ElementRef }, { type: core$1.NzNoAnimationDirective, decorators: [{
                    type: core.Host
                }, {
                    type: core.Optional
                }] }]; }, { nzAllowClear: [{
                type: core.Input
            }], nzShowExpand: [{
                type: core.Input
            }], nzShowLine: [{
                type: core.Input
            }], nzDropdownMatchSelectWidth: [{
                type: core.Input
            }], nzCheckable: [{
                type: core.Input
            }], nzHideUnMatched: [{
                type: core.Input
            }], nzShowIcon: [{
                type: core.Input
            }], nzShowSearch: [{
                type: core.Input
            }], nzDisabled: [{
                type: core.Input
            }], nzAsyncData: [{
                type: core.Input
            }], nzMultiple: [{
                type: core.Input
            }], nzDefaultExpandAll: [{
                type: core.Input
            }], nzCheckStrictly: [{
                type: core.Input
            }], nzExpandedIcon: [{
                type: core.Input
            }], nzNotFoundContent: [{
                type: core.Input
            }], nzNodes: [{
                type: core.Input
            }], nzOpen: [{
                type: core.Input
            }], nzSize: [{
                type: core.Input
            }], nzPlaceHolder: [{
                type: core.Input
            }], nzDropdownStyle: [{
                type: core.Input
            }], nzDefaultExpandedKeys: [{
                type: core.Input
            }], nzExpandedKeys: [{
                type: core.Input
            }], nzDisplayWith: [{
                type: core.Input
            }], nzMaxTagCount: [{
                type: core.Input
            }], nzMaxTagPlaceholder: [{
                type: core.Input
            }], nzOpenChange: [{
                type: core.Output
            }], nzCleared: [{
                type: core.Output
            }], nzRemoved: [{
                type: core.Output
            }], nzExpandChange: [{
                type: core.Output
            }], nzTreeClick: [{
                type: core.Output
            }], nzTreeCheckBoxChange: [{
                type: core.Output
            }], inputElement: [{
                type: core.ViewChild,
                args: ['inputElement', { static: false }]
            }], treeRef: [{
                type: core.ViewChild,
                args: ['treeRef', { static: false }]
            }], cdkOverlayOrigin: [{
                type: core.ViewChild,
                args: [overlay.CdkOverlayOrigin, { static: true }]
            }], cdkConnectedOverlay: [{
                type: core.ViewChild,
                args: [overlay.CdkConnectedOverlay, { static: false }]
            }], nzTreeTemplate: [{
                type: core.Input
            }], nzTreeTemplateChild: [{
                type: core.ContentChild,
                args: ['nzTreeTemplate', { static: true }]
            }] }); })();

    /**
     * @license
     * Copyright Alibaba.com All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    var NzTreeSelectModule = /** @class */ (function () {
        function NzTreeSelectModule() {
        }
        /** @nocollapse */ NzTreeSelectModule.ɵmod = core.ɵɵdefineNgModule({ type: NzTreeSelectModule });
        /** @nocollapse */ NzTreeSelectModule.ɵinj = core.ɵɵdefineInjector({ factory: function NzTreeSelectModule_Factory(t) { return new (t || NzTreeSelectModule)(); }, imports: [[common.CommonModule, overlay.OverlayModule, forms.FormsModule, tree.NzTreeModule, icon.NzIconModule, empty.NzEmptyModule, core$1.NzOverlayModule, core$1.NzNoAnimationModule]] });
        return NzTreeSelectModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && core.ɵɵsetNgModuleScope(NzTreeSelectModule, { declarations: [NzTreeSelectComponent], imports: [common.CommonModule, overlay.OverlayModule, forms.FormsModule, tree.NzTreeModule, icon.NzIconModule, empty.NzEmptyModule, core$1.NzOverlayModule, core$1.NzNoAnimationModule], exports: [NzTreeSelectComponent] }); })();
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NzTreeSelectModule, [{
            type: core.NgModule,
            args: [{
                    imports: [common.CommonModule, overlay.OverlayModule, forms.FormsModule, tree.NzTreeModule, icon.NzIconModule, empty.NzEmptyModule, core$1.NzOverlayModule, core$1.NzNoAnimationModule],
                    declarations: [NzTreeSelectComponent],
                    exports: [NzTreeSelectComponent]
                }]
        }], null, null); })();

    exports.NzTreeSelectComponent = NzTreeSelectComponent;
    exports.NzTreeSelectModule = NzTreeSelectModule;
    exports.NzTreeSelectService = NzTreeSelectService;
    exports.higherOrderServiceFactory = higherOrderServiceFactory;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ng-zorro-antd-tree-select.umd.js.map
