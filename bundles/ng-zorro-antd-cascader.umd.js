(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/cdk/keycodes'), require('@angular/cdk/overlay'), require('@angular/core'), require('@angular/forms'), require('rxjs'), require('rxjs/operators'), require('ng-zorro-antd/core'), require('ng-zorro-antd/i18n'), require('@angular/common'), require('ng-zorro-antd/icon'), require('ng-zorro-antd/input'), require('ng-zorro-antd/empty')) :
    typeof define === 'function' && define.amd ? define('ng-zorro-antd/cascader', ['exports', '@angular/cdk/keycodes', '@angular/cdk/overlay', '@angular/core', '@angular/forms', 'rxjs', 'rxjs/operators', 'ng-zorro-antd/core', 'ng-zorro-antd/i18n', '@angular/common', 'ng-zorro-antd/icon', 'ng-zorro-antd/input', 'ng-zorro-antd/empty'], factory) :
    (global = global || self, factory((global['ng-zorro-antd'] = global['ng-zorro-antd'] || {}, global['ng-zorro-antd'].cascader = {}), global.ng.cdk.keycodes, global.ng.cdk.overlay, global.ng.core, global.ng.forms, global.rxjs, global.rxjs.operators, global['ng-zorro-antd'].core, global['ng-zorro-antd'].i18n, global.ng.common, global['ng-zorro-antd'].icon, global['ng-zorro-antd'].input, global['ng-zorro-antd'].empty));
}(this, (function (exports, keycodes, overlay, core, forms, rxjs, operators, core$1, i18n, common, icon, input, empty) { 'use strict';

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
    function isShowSearchObject(options) {
        return typeof options !== 'boolean';
    }

    /**
     * @license
     * Copyright Alibaba.com All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    function isChildOption(o) {
        return o.isLeaf || !o.children || !o.children.length;
    }
    function isParentOption(o) {
        return !!o.children && !!o.children.length && !o.isLeaf;
    }

    /**
     * @license
     * Copyright Alibaba.com All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    var _c0 = ["nz-cascader-option", ""];
    function NzCascaderOptionComponent_ng_container_0_ng_template_1_Template(rf, ctx) { }
    var _c1 = function (a0, a1) { return { $implicit: a0, index: a1 }; };
    function NzCascaderOptionComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵtemplate(1, NzCascaderOptionComponent_ng_container_0_ng_template_1_Template, 0, 0, "ng-template", 3);
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var ctx_r1076 = core.ɵɵnextContext();
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngTemplateOutlet", ctx_r1076.optionTemplate)("ngTemplateOutletContext", core.ɵɵpureFunction2(2, _c1, ctx_r1076.option, ctx_r1076.columnIndex));
    } }
    function NzCascaderOptionComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelement(0, "span", 4);
        core.ɵɵpipe(1, "nzHighlight");
    } if (rf & 2) {
        var ctx_r1078 = core.ɵɵnextContext();
        core.ɵɵproperty("innerHTML", core.ɵɵpipeBind4(1, 1, ctx_r1078.optionLabel, ctx_r1078.highlightText, "g", "ant-cascader-menu-item-keyword"), core.ɵɵsanitizeHtml);
    } }
    function NzCascaderOptionComponent_span_3_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "span", 5);
        core.ɵɵelement(1, "i", 6);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r1079 = core.ɵɵnextContext();
        core.ɵɵadvance(1);
        core.ɵɵproperty("nzType", ctx_r1079.option.loading ? "loading" : "right");
    } }
    var NzCascaderOptionComponent = /** @class */ (function () {
        function NzCascaderOptionComponent(cdr, elementRef, renderer) {
            this.cdr = cdr;
            this.optionTemplate = null;
            this.activated = false;
            this.nzLabelProperty = 'label';
            renderer.addClass(elementRef.nativeElement, 'ant-cascader-menu-item');
        }
        Object.defineProperty(NzCascaderOptionComponent.prototype, "optionLabel", {
            get: function () {
                return this.option[this.nzLabelProperty];
            },
            enumerable: true,
            configurable: true
        });
        NzCascaderOptionComponent.prototype.markForCheck = function () {
            this.cdr.markForCheck();
        };
        /** @nocollapse */ NzCascaderOptionComponent.ɵfac = function NzCascaderOptionComponent_Factory(t) { return new (t || NzCascaderOptionComponent)(core.ɵɵdirectiveInject(core.ChangeDetectorRef), core.ɵɵdirectiveInject(core.ElementRef), core.ɵɵdirectiveInject(core.Renderer2)); };
        /** @nocollapse */ NzCascaderOptionComponent.ɵcmp = core.ɵɵdefineComponent({ type: NzCascaderOptionComponent, selectors: [["", "nz-cascader-option", ""]], hostBindings: function NzCascaderOptionComponent_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
                core.ɵɵallocHostVars(4);
            } if (rf & 2) {
                core.ɵɵattribute("title", ctx.option.title || ctx.optionLabel);
                core.ɵɵclassProp("ant-cascader-menu-item-active", ctx.activated)("ant-cascader-menu-item-expand", !ctx.option.isLeaf)("ant-cascader-menu-item-disabled", ctx.option.disabled);
            } }, inputs: { optionTemplate: "optionTemplate", option: "option", activated: "activated", highlightText: "highlightText", nzLabelProperty: "nzLabelProperty", columnIndex: "columnIndex" }, exportAs: ["nzCascaderOption"], attrs: _c0, decls: 4, vars: 3, consts: [[4, "ngIf", "ngIfElse"], ["defaultOptionTemplate", ""], ["class", "ant-cascader-menu-item-expand-icon", 4, "ngIf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "innerHTML"], [1, "ant-cascader-menu-item-expand-icon"], ["nz-icon", "", 3, "nzType"]], template: function NzCascaderOptionComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵtemplate(0, NzCascaderOptionComponent_ng_container_0_Template, 2, 5, "ng-container", 0);
                core.ɵɵtemplate(1, NzCascaderOptionComponent_ng_template_1_Template, 2, 6, "ng-template", null, 1, core.ɵɵtemplateRefExtractor);
                core.ɵɵtemplate(3, NzCascaderOptionComponent_span_3_Template, 2, 1, "span", 2);
            } if (rf & 2) {
                var _r1077 = core.ɵɵreference(2);
                core.ɵɵproperty("ngIf", ctx.optionTemplate)("ngIfElse", _r1077);
                core.ɵɵadvance(3);
                core.ɵɵproperty("ngIf", !ctx.option.isLeaf || (ctx.option.children == null ? null : ctx.option.children.length) || ctx.option.loading);
            } }, directives: [common.NgIf, common.NgTemplateOutlet, icon.NzIconDirective], pipes: [core$1.NzHighlightPipe], encapsulation: 2, changeDetection: 0 });
        return NzCascaderOptionComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NzCascaderOptionComponent, [{
            type: core.Component,
            args: [{
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    encapsulation: core.ViewEncapsulation.None,
                    selector: '[nz-cascader-option]',
                    exportAs: 'nzCascaderOption',
                    templateUrl: './nz-cascader-li.component.html',
                    host: {
                        '[attr.title]': 'option.title || optionLabel',
                        '[class.ant-cascader-menu-item-active]': 'activated',
                        '[class.ant-cascader-menu-item-expand]': '!option.isLeaf',
                        '[class.ant-cascader-menu-item-disabled]': 'option.disabled'
                    }
                }]
        }], function () { return [{ type: core.ChangeDetectorRef }, { type: core.ElementRef }, { type: core.Renderer2 }]; }, { optionTemplate: [{
                type: core.Input
            }], option: [{
                type: core.Input
            }], activated: [{
                type: core.Input
            }], highlightText: [{
                type: core.Input
            }], nzLabelProperty: [{
                type: core.Input
            }], columnIndex: [{
                type: core.Input
            }] }); })();

    /**
     * All data is stored and parsed in NzCascaderService.
     */
    var NzCascaderService = /** @class */ (function () {
        function NzCascaderService() {
            /** Activated options in each column. */
            this.activatedOptions = [];
            /** An array to store cascader items arranged in different layers. */
            this.columns = [[]];
            /** If user has entered searching mode. */
            this.inSearchingMode = false;
            /** Selected options would be output to user. */
            this.selectedOptions = [];
            this.values = []; // tslint:disable-line:no-any
            this.$loading = new rxjs.BehaviorSubject(false);
            /**
             * Emit an event to notify cascader it needs to redraw because activated or
             * selected options are changed.
             */
            this.$redraw = new rxjs.Subject();
            /**
             * Emit an event when an option gets selected.
             * Emit true if a leaf options is selected.
             */
            this.$optionSelected = new rxjs.Subject();
            /**
             * Emit an event to notify cascader it needs to quit searching mode.
             * Only emit when user do select a searching option.
             */
            this.$quitSearching = new rxjs.Subject();
            /** To hold columns before entering searching mode. */
            this.columnsSnapshot = [[]];
            /** To hold activated options before entering searching mode. */
            this.activatedOptionsSnapshot = [];
        }
        Object.defineProperty(NzCascaderService.prototype, "nzOptions", {
            /** Return cascader options in the first layer. */
            get: function () {
                return this.columns[0];
            },
            enumerable: true,
            configurable: true
        });
        NzCascaderService.prototype.ngOnDestroy = function () {
            this.$redraw.complete();
            this.$quitSearching.complete();
            this.$optionSelected.complete();
            this.$loading.complete();
        };
        /**
         * Make sure that value matches what is displayed in the dropdown.
         */
        NzCascaderService.prototype.syncOptions = function (first) {
            var _this = this;
            if (first === void 0) { first = false; }
            var values = this.values;
            var hasValue = values && values.length;
            var lastColumnIndex = values.length - 1;
            var initColumnWithIndex = function (columnIndex) {
                var activatedOptionSetter = function () {
                    var _a;
                    var currentValue = values[columnIndex];
                    if (!core$1.isNotNil(currentValue)) {
                        _this.$redraw.next();
                        return;
                    }
                    var option = _this.findOptionWithValue(columnIndex, values[columnIndex]) ||
                        (typeof currentValue === 'object'
                            ? currentValue
                            : (_a = {},
                                _a["" + _this.cascaderComponent.nzValueProperty] = currentValue,
                                _a["" + _this.cascaderComponent.nzLabelProperty] = currentValue,
                                _a));
                    _this.setOptionActivated(option, columnIndex, false, false);
                    if (columnIndex < lastColumnIndex) {
                        initColumnWithIndex(columnIndex + 1);
                    }
                    else {
                        _this.dropBehindColumns(columnIndex);
                        _this.selectedOptions = __spread(_this.activatedOptions);
                        _this.$redraw.next();
                    }
                };
                if (_this.isLoaded(columnIndex) || !_this.cascaderComponent.nzLoadData) {
                    activatedOptionSetter();
                }
                else {
                    var option = _this.activatedOptions[columnIndex - 1] || {};
                    _this.loadChildren(option, columnIndex - 1, activatedOptionSetter);
                }
            };
            this.activatedOptions = [];
            this.selectedOptions = [];
            if (first && this.cascaderComponent.nzLoadData && !hasValue) {
                // Should also notify the component that value changes. Fix #3480.
                this.$redraw.next();
                return;
            }
            else {
                initColumnWithIndex(0);
            }
        };
        /**
         * Bind cascader component so this service could use inputs.
         */
        NzCascaderService.prototype.withComponent = function (cascaderComponent) {
            this.cascaderComponent = cascaderComponent;
        };
        /**
         * Reset all options. Rebuild searching options if in searching mode.
         */
        NzCascaderService.prototype.withOptions = function (options) {
            this.columnsSnapshot = this.columns = options && options.length ? [options] : [];
            if (this.inSearchingMode) {
                this.prepareSearchOptions(this.cascaderComponent.inputValue);
            }
            else if (this.columns.length) {
                this.syncOptions();
            }
        };
        /**
         * Try to set a option as activated.
         * @param option Cascader option
         * @param columnIndex Of which column this option is in
         * @param performSelect Select
         * @param loadingChildren Try to load children asynchronously.
         */
        NzCascaderService.prototype.setOptionActivated = function (option, columnIndex, performSelect, loadingChildren) {
            if (performSelect === void 0) { performSelect = false; }
            if (loadingChildren === void 0) { loadingChildren = true; }
            if (option.disabled) {
                return;
            }
            this.activatedOptions[columnIndex] = option;
            this.trackAncestorActivatedOptions(columnIndex);
            this.dropBehindActivatedOptions(columnIndex);
            var isParent = isParentOption(option);
            if (isParent) {
                // Parent option that has children.
                this.setColumnData(option.children, columnIndex + 1, option);
            }
            else if (!option.isLeaf && loadingChildren) {
                // Parent option that should try to load children asynchronously.
                this.loadChildren(option, columnIndex);
            }
            else if (option.isLeaf) {
                // Leaf option.
                this.dropBehindColumns(columnIndex);
            }
            // Actually perform selection to make an options not only activated but also selected.
            if (performSelect) {
                this.setOptionSelected(option, columnIndex);
            }
            this.$redraw.next();
        };
        NzCascaderService.prototype.setOptionSelected = function (option, index) {
            var changeOn = this.cascaderComponent.nzChangeOn;
            var shouldPerformSelection = function (o, i) {
                return typeof changeOn === 'function' ? changeOn(o, i) : false;
            };
            if (option.isLeaf || this.cascaderComponent.nzChangeOnSelect || shouldPerformSelection(option, index)) {
                this.selectedOptions = __spread(this.activatedOptions);
                this.prepareEmitValue();
                this.$redraw.next();
                this.$optionSelected.next({ option: option, index: index });
            }
        };
        NzCascaderService.prototype.setOptionDeactivatedSinceColumn = function (column) {
            this.dropBehindActivatedOptions(column - 1);
            this.dropBehindColumns(column);
            this.$redraw.next();
        };
        /**
         * Set a searching option as selected, finishing up things.
         * @param option
         */
        NzCascaderService.prototype.setSearchOptionSelected = function (option) {
            var _this = this;
            this.activatedOptions = [option];
            this.selectedOptions = __spread(option.path);
            this.prepareEmitValue();
            this.$redraw.next();
            this.$optionSelected.next({ option: option, index: 0 });
            setTimeout(function () {
                // Reset data and tell UI only to remove input and reset dropdown width style.
                _this.$quitSearching.next();
                _this.$redraw.next();
                _this.inSearchingMode = false;
                _this.columns = __spread(_this.columnsSnapshot);
                _this.activatedOptions = __spread(_this.selectedOptions);
            }, 200);
        };
        /**
         * Filter cascader options to reset `columns`.
         * @param searchValue The string user wants to search.
         */
        NzCascaderService.prototype.prepareSearchOptions = function (searchValue) {
            var _this = this;
            var results = []; // Search results only have one layer.
            var path = [];
            var defaultFilter = function (i, p) {
                return p.some(function (o) {
                    var label = _this.getOptionLabel(o);
                    return !!label && label.indexOf(i) !== -1;
                });
            };
            var showSearch = this.cascaderComponent.nzShowSearch;
            var filter = isShowSearchObject(showSearch) && showSearch.filter ? showSearch.filter : defaultFilter;
            var sorter = isShowSearchObject(showSearch) && showSearch.sorter ? showSearch.sorter : null;
            var loopChild = function (node, forceDisabled) {
                var _a;
                if (forceDisabled === void 0) { forceDisabled = false; }
                path.push(node);
                var cPath = Array.from(path);
                if (filter(searchValue, cPath)) {
                    var disabled = forceDisabled || node.disabled;
                    var option = (_a = {
                            disabled: disabled,
                            isLeaf: true,
                            path: cPath
                        },
                        _a[_this.cascaderComponent.nzLabelProperty] = cPath.map(function (p) { return _this.getOptionLabel(p); }).join(' / '),
                        _a);
                    results.push(option);
                }
                path.pop();
            };
            var loopParent = function (node, forceDisabled) {
                if (forceDisabled === void 0) { forceDisabled = false; }
                var disabled = forceDisabled || node.disabled;
                path.push(node);
                node.children.forEach(function (sNode) {
                    if (!sNode.parent) {
                        sNode.parent = node;
                    }
                    if (!sNode.isLeaf) {
                        loopParent(sNode, disabled);
                    }
                    if (sNode.isLeaf || !sNode.children || !sNode.children.length) {
                        loopChild(sNode, disabled);
                    }
                });
                path.pop();
            };
            if (!this.columnsSnapshot.length) {
                this.columns = [[]];
                return;
            }
            this.columnsSnapshot[0].forEach(function (o) { return (isChildOption(o) ? loopChild(o) : loopParent(o)); });
            if (sorter) {
                results.sort(function (a, b) { return sorter(a.path, b.path, searchValue); });
            }
            this.columns = [results];
        };
        /**
         * Toggle searching mode by UI. It deals with things not directly related to UI.
         * @param toSearching If this cascader is entering searching mode
         */
        NzCascaderService.prototype.toggleSearchingMode = function (toSearching) {
            this.inSearchingMode = toSearching;
            if (toSearching) {
                this.activatedOptionsSnapshot = __spread(this.activatedOptions);
                this.activatedOptions = [];
                this.selectedOptions = [];
                this.$redraw.next();
            }
            else {
                // User quit searching mode without selecting an option.
                this.activatedOptions = __spread(this.activatedOptionsSnapshot);
                this.selectedOptions = __spread(this.activatedOptions);
                this.columns = __spread(this.columnsSnapshot);
                this.syncOptions();
                this.$redraw.next();
            }
        };
        /**
         * Clear selected options.
         */
        NzCascaderService.prototype.clear = function () {
            this.values = [];
            this.selectedOptions = [];
            this.activatedOptions = [];
            this.dropBehindColumns(0);
            this.prepareEmitValue();
            this.$redraw.next();
            this.$optionSelected.next(null);
        };
        NzCascaderService.prototype.getOptionLabel = function (o) {
            return o[this.cascaderComponent.nzLabelProperty || 'label'];
        };
        // tslint:disable-next-line:no-any
        NzCascaderService.prototype.getOptionValue = function (o) {
            return o[this.cascaderComponent.nzValueProperty || 'value'];
        };
        /**
         * Try to insert options into a column.
         * @param options Options to insert
         * @param columnIndex Position
         */
        NzCascaderService.prototype.setColumnData = function (options, columnIndex, parent) {
            var existingOptions = this.columns[columnIndex];
            if (!core$1.arraysEqual(existingOptions, options)) {
                options.forEach(function (o) { return (o.parent = parent); });
                this.columns[columnIndex] = options;
                this.dropBehindColumns(columnIndex);
            }
        };
        /**
         * Set all ancestor options as activated.
         */
        NzCascaderService.prototype.trackAncestorActivatedOptions = function (startIndex) {
            for (var i = startIndex - 1; i >= 0; i--) {
                if (!this.activatedOptions[i]) {
                    this.activatedOptions[i] = this.activatedOptions[i + 1].parent;
                }
            }
        };
        NzCascaderService.prototype.dropBehindActivatedOptions = function (lastReserveIndex) {
            this.activatedOptions = this.activatedOptions.splice(0, lastReserveIndex + 1);
        };
        NzCascaderService.prototype.dropBehindColumns = function (lastReserveIndex) {
            if (lastReserveIndex < this.columns.length - 1) {
                this.columns = this.columns.slice(0, lastReserveIndex + 1);
            }
        };
        /**
         * Load children of an option asynchronously.
         */
        NzCascaderService.prototype.loadChildren = function (option, // tslint:disable-line:no-any
        columnIndex, success, failure) {
            var _this = this;
            var loadFn = this.cascaderComponent.nzLoadData;
            if (loadFn) {
                // If there isn't any option in columns.
                this.$loading.next(columnIndex < 0);
                if (typeof option === 'object') {
                    option.loading = true;
                }
                loadFn(option, columnIndex).then(function () {
                    option.loading = false;
                    if (option.children) {
                        _this.setColumnData(option.children, columnIndex + 1, option);
                    }
                    if (success) {
                        success();
                    }
                    _this.$loading.next(false);
                    _this.$redraw.next();
                }, function () {
                    option.loading = false;
                    option.isLeaf = true;
                    if (failure) {
                        failure();
                    }
                    _this.$redraw.next();
                });
            }
        };
        NzCascaderService.prototype.isLoaded = function (index) {
            return this.columns[index] && this.columns[index].length > 0;
        };
        /**
         * Find a option that has a given value in a given column.
         */
        NzCascaderService.prototype.findOptionWithValue = function (columnIndex, value // tslint:disable-line:no-any
        ) {
            var _this = this;
            var targetColumn = this.columns[columnIndex];
            if (targetColumn) {
                var v_1 = typeof value === 'object' ? this.getOptionValue(value) : value;
                return targetColumn.find(function (o) { return v_1 === _this.getOptionValue(o); });
            }
            return null;
        };
        NzCascaderService.prototype.prepareEmitValue = function () {
            var _this = this;
            this.values = this.selectedOptions.map(function (o) { return _this.getOptionValue(o); });
        };
        /** @nocollapse */ NzCascaderService.ɵfac = function NzCascaderService_Factory(t) { return new (t || NzCascaderService)(); };
        /** @nocollapse */ NzCascaderService.ɵprov = core.ɵɵdefineInjectable({ token: NzCascaderService, factory: NzCascaderService.ɵfac });
        return NzCascaderService;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NzCascaderService, [{
            type: core.Injectable
        }], null, null); })();

    var _c0$1 = ["input"];
    var _c1$1 = ["menu"];
    function NzCascaderComponent_div_3_i_3_Template(rf, ctx) { if (rf & 1) {
        var _r1093 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "i", 12);
        core.ɵɵlistener("click", function NzCascaderComponent_div_3_i_3_Template_i_click_0_listener($event) { core.ɵɵrestoreView(_r1093); var ctx_r1092 = core.ɵɵnextContext(2); return ctx_r1092.clearSelection($event); });
        core.ɵɵelementEnd();
    } }
    function NzCascaderComponent_div_3_i_4_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelement(0, "i", 13);
    } if (rf & 2) {
        var ctx_r1087 = core.ɵɵnextContext(2);
        core.ɵɵclassProp("ant-cascader-picker-arrow-expand", ctx_r1087.menuVisible);
    } }
    function NzCascaderComponent_div_3_i_5_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelement(0, "i", 14);
    } }
    function NzCascaderComponent_div_3_ng_container_7_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵtext(1);
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var ctx_r1089 = core.ɵɵnextContext(2);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate(ctx_r1089.labelRenderText);
    } }
    function NzCascaderComponent_div_3_ng_template_8_ng_template_0_Template(rf, ctx) { }
    function NzCascaderComponent_div_3_ng_template_8_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵtemplate(0, NzCascaderComponent_div_3_ng_template_8_ng_template_0_Template, 0, 0, "ng-template", 15);
    } if (rf & 2) {
        var ctx_r1091 = core.ɵɵnextContext(2);
        core.ɵɵproperty("ngTemplateOutlet", ctx_r1091.nzLabelRender)("ngTemplateOutletContext", ctx_r1091.labelRenderContext);
    } }
    function NzCascaderComponent_div_3_Template(rf, ctx) { if (rf & 1) {
        var _r1096 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "div");
        core.ɵɵelementStart(1, "input", 4, 5);
        core.ɵɵlistener("ngModelChange", function NzCascaderComponent_div_3_Template_input_ngModelChange_1_listener($event) { core.ɵɵrestoreView(_r1096); var ctx_r1095 = core.ɵɵnextContext(); return ctx_r1095.inputValue = $event; })("blur", function NzCascaderComponent_div_3_Template_input_blur_1_listener($event) { core.ɵɵrestoreView(_r1096); var ctx_r1097 = core.ɵɵnextContext(); return ctx_r1097.handleInputBlur(); })("focus", function NzCascaderComponent_div_3_Template_input_focus_1_listener($event) { core.ɵɵrestoreView(_r1096); var ctx_r1098 = core.ɵɵnextContext(); return ctx_r1098.handleInputFocus(); })("change", function NzCascaderComponent_div_3_Template_input_change_1_listener($event) { core.ɵɵrestoreView(_r1096); return $event.stopPropagation(); });
        core.ɵɵelementEnd();
        core.ɵɵtemplate(3, NzCascaderComponent_div_3_i_3_Template, 1, 0, "i", 6);
        core.ɵɵtemplate(4, NzCascaderComponent_div_3_i_4_Template, 1, 1, "i", 7);
        core.ɵɵtemplate(5, NzCascaderComponent_div_3_i_5_Template, 1, 0, "i", 8);
        core.ɵɵelementStart(6, "span", 9);
        core.ɵɵtemplate(7, NzCascaderComponent_div_3_ng_container_7_Template, 2, 1, "ng-container", 10);
        core.ɵɵtemplate(8, NzCascaderComponent_div_3_ng_template_8_Template, 1, 2, "ng-template", null, 11, core.ɵɵtemplateRefExtractor);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var _r1090 = core.ɵɵreference(9);
        var ctx_r1083 = core.ɵɵnextContext();
        core.ɵɵadvance(1);
        core.ɵɵclassProp("ant-cascader-input-disabled", ctx_r1083.nzDisabled)("ant-cascader-input-lg", ctx_r1083.nzSize === "large")("ant-cascader-input-sm", ctx_r1083.nzSize === "small");
        core.ɵɵproperty("readonly", !ctx_r1083.nzShowSearch)("disabled", ctx_r1083.nzDisabled)("nzSize", ctx_r1083.nzSize)("ngModel", ctx_r1083.inputValue);
        core.ɵɵattribute("autoComplete", "off")("placeholder", ctx_r1083.showPlaceholder ? ctx_r1083.nzPlaceHolder || (ctx_r1083.locale == null ? null : ctx_r1083.locale.placeholder) : null)("autofocus", ctx_r1083.nzAutoFocus ? "autofocus" : null);
        core.ɵɵadvance(2);
        core.ɵɵproperty("ngIf", ctx_r1083.clearIconVisible);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", ctx_r1083.nzShowArrow && !ctx_r1083.isLoading);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", ctx_r1083.isLoading);
        core.ɵɵadvance(1);
        core.ɵɵclassProp("ant-cascader-show-search", !!ctx_r1083.nzShowSearch)("ant-focusd", !!ctx_r1083.nzShowSearch && ctx_r1083.isFocused && !ctx_r1083.inputValue);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", !ctx_r1083.isLabelRenderTemplate)("ngIfElse", _r1090);
    } }
    function NzCascaderComponent_ng_template_5_div_0_ul_2_li_1_Template(rf, ctx) { if (rf & 1) {
        var _r1110 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "li", 23);
        core.ɵɵlistener("mouseenter", function NzCascaderComponent_ng_template_5_div_0_ul_2_li_1_Template_li_mouseenter_0_listener($event) { core.ɵɵrestoreView(_r1110); var option_r1107 = ctx.$implicit; var i_r1104 = core.ɵɵnextContext().index; var ctx_r1108 = core.ɵɵnextContext(3); return ctx_r1108.onOptionMouseEnter(option_r1107, i_r1104, $event); })("mouseleave", function NzCascaderComponent_ng_template_5_div_0_ul_2_li_1_Template_li_mouseleave_0_listener($event) { core.ɵɵrestoreView(_r1110); var option_r1107 = ctx.$implicit; var i_r1104 = core.ɵɵnextContext().index; var ctx_r1111 = core.ɵɵnextContext(3); return ctx_r1111.onOptionMouseLeave(option_r1107, i_r1104, $event); })("click", function NzCascaderComponent_ng_template_5_div_0_ul_2_li_1_Template_li_click_0_listener($event) { core.ɵɵrestoreView(_r1110); var option_r1107 = ctx.$implicit; var i_r1104 = core.ɵɵnextContext().index; var ctx_r1113 = core.ɵɵnextContext(3); return ctx_r1113.onOptionClick(option_r1107, i_r1104, $event); });
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var option_r1107 = ctx.$implicit;
        var i_r1104 = core.ɵɵnextContext().index;
        var ctx_r1105 = core.ɵɵnextContext(3);
        core.ɵɵproperty("columnIndex", i_r1104)("nzLabelProperty", ctx_r1105.nzLabelProperty)("optionTemplate", ctx_r1105.nzOptionRender)("activated", ctx_r1105.isOptionActivated(option_r1107, i_r1104))("highlightText", ctx_r1105.inSearchingMode ? ctx_r1105.inputValue : "")("option", option_r1107);
    } }
    function NzCascaderComponent_ng_template_5_div_0_ul_2_li_2_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "li", 24);
        core.ɵɵelement(1, "nz-embed-empty", 25);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r1106 = core.ɵɵnextContext(4);
        core.ɵɵadvance(1);
        core.ɵɵproperty("nzComponentName", "cascader")("specificContent", ctx_r1106.nzNotFoundContent);
    } }
    function NzCascaderComponent_ng_template_5_div_0_ul_2_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "ul", 20);
        core.ɵɵtemplate(1, NzCascaderComponent_ng_template_5_div_0_ul_2_li_1_Template, 1, 6, "li", 21);
        core.ɵɵtemplate(2, NzCascaderComponent_ng_template_5_div_0_ul_2_li_2_Template, 2, 2, "li", 22);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var options_r1103 = ctx.$implicit;
        var ctx_r1102 = core.ɵɵnextContext(3);
        core.ɵɵstyleProp("height", ctx_r1102.inSearchingMode && !ctx_r1102.cascaderService.columns[0].length ? "auto" : "")("width", ctx_r1102.dropdownWidthStyle);
        core.ɵɵproperty("ngClass", ctx_r1102.menuColumnCls);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngForOf", options_r1103);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", ctx_r1102.inSearchingMode && !ctx_r1102.cascaderService.columns[0].length);
    } }
    function NzCascaderComponent_ng_template_5_div_0_Template(rf, ctx) { if (rf & 1) {
        var _r1117 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "div", 17, 18);
        core.ɵɵlistener("mouseleave", function NzCascaderComponent_ng_template_5_div_0_Template_div_mouseleave_0_listener($event) { core.ɵɵrestoreView(_r1117); var ctx_r1116 = core.ɵɵnextContext(2); return ctx_r1116.onTriggerMouseLeave($event); });
        core.ɵɵtemplate(2, NzCascaderComponent_ng_template_5_div_0_ul_2_Template, 3, 5, "ul", 19);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r1100 = core.ɵɵnextContext(2);
        core.ɵɵclassProp("ant-cascader-menus-hidden", !ctx_r1100.menuVisible);
        core.ɵɵproperty("ngClass", ctx_r1100.menuCls)("ngStyle", ctx_r1100.nzMenuStyle)("@.disabled", ctx_r1100.noAnimation == null ? null : ctx_r1100.noAnimation.nzNoAnimation)("nzNoAnimation", ctx_r1100.noAnimation == null ? null : ctx_r1100.noAnimation.nzNoAnimation)("@slideMotion", ctx_r1100.dropDownPosition);
        core.ɵɵadvance(2);
        core.ɵɵproperty("ngForOf", ctx_r1100.cascaderService.columns);
    } }
    function NzCascaderComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵtemplate(0, NzCascaderComponent_ng_template_5_div_0_Template, 3, 7, "div", 16);
    } if (rf & 2) {
        var ctx_r1084 = core.ɵɵnextContext();
        core.ɵɵproperty("ngIf", ctx_r1084.nzOptions && ctx_r1084.nzOptions.length || ctx_r1084.inSearchingMode);
    } }
    var _c2 = ["*"];
    var NZ_CONFIG_COMPONENT_NAME = 'cascader';
    var defaultDisplayRender = function (labels) { return labels.join(' / '); };
    var NzCascaderComponent = /** @class */ (function () {
        function NzCascaderComponent(cascaderService, i18nService, nzConfigService, cdr, elementRef, renderer, noAnimation) {
            this.cascaderService = cascaderService;
            this.i18nService = i18nService;
            this.nzConfigService = nzConfigService;
            this.cdr = cdr;
            this.noAnimation = noAnimation;
            this.nzOptionRender = null;
            this.nzShowInput = true;
            this.nzShowArrow = true;
            this.nzAllowClear = true;
            this.nzAutoFocus = false;
            this.nzChangeOnSelect = false;
            this.nzDisabled = false;
            this.nzExpandTrigger = 'click';
            this.nzValueProperty = 'value';
            this.nzLabelProperty = 'label';
            this.nzMouseEnterDelay = 150; // ms
            this.nzMouseLeaveDelay = 150; // ms
            this.nzTriggerAction = ['click'];
            this.nzVisibleChange = new core.EventEmitter();
            this.nzSelectionChange = new core.EventEmitter();
            /**
             * @deprecated 9.0.0. This api is a duplication of `ngModelChange`.
             */
            this.nzSelect = new core.EventEmitter();
            this.nzClear = new core.EventEmitter();
            this.dropDownPosition = 'bottom';
            this.menuVisible = false;
            this.isLoading = false;
            this.labelRenderContext = {};
            this.onChange = Function.prototype;
            this.onTouched = Function.prototype;
            this.positions = __spread(core$1.DEFAULT_DROPDOWN_POSITIONS);
            this.isFocused = false;
            this.$destroy = new rxjs.Subject();
            this.inputString = '';
            this.isOpening = false;
            this.el = elementRef.nativeElement;
            this.cascaderService.withComponent(this);
            renderer.addClass(elementRef.nativeElement, 'ant-cascader');
            renderer.addClass(elementRef.nativeElement, 'ant-cascader-picker');
        }
        Object.defineProperty(NzCascaderComponent.prototype, "nzOptions", {
            get: function () {
                return this.cascaderService.nzOptions;
            },
            set: function (options) {
                this.cascaderService.withOptions(options);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzCascaderComponent.prototype, "inSearchingMode", {
            get: function () {
                return this.cascaderService.inSearchingMode;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzCascaderComponent.prototype, "inputValue", {
            get: function () {
                return this.inputString;
            },
            set: function (inputValue) {
                this.inputString = inputValue;
                this.toggleSearchingMode(!!inputValue);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzCascaderComponent.prototype, "menuCls", {
            get: function () {
                var _a;
                return _a = {}, _a["" + this.nzMenuClassName] = !!this.nzMenuClassName, _a;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzCascaderComponent.prototype, "menuColumnCls", {
            get: function () {
                var _a;
                return _a = {}, _a["" + this.nzColumnClassName] = !!this.nzColumnClassName, _a;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzCascaderComponent.prototype, "hasInput", {
            get: function () {
                return !!this.inputValue;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzCascaderComponent.prototype, "hasValue", {
            get: function () {
                return this.cascaderService.values && this.cascaderService.values.length > 0;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzCascaderComponent.prototype, "showPlaceholder", {
            get: function () {
                return !(this.hasInput || this.hasValue);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzCascaderComponent.prototype, "clearIconVisible", {
            get: function () {
                return this.nzAllowClear && !this.nzDisabled && (this.hasValue || this.hasInput);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzCascaderComponent.prototype, "isLabelRenderTemplate", {
            get: function () {
                return !!this.nzLabelRender;
            },
            enumerable: true,
            configurable: true
        });
        NzCascaderComponent.prototype.ngOnInit = function () {
            var _this = this;
            var srv = this.cascaderService;
            srv.$redraw.pipe(operators.takeUntil(this.$destroy)).subscribe(function () {
                // These operations would not mutate data.
                _this.checkChildren();
                _this.buildDisplayLabel();
                _this.reposition();
                _this.cdr.markForCheck();
            });
            srv.$loading.pipe(operators.takeUntil(this.$destroy)).subscribe(function (loading) {
                _this.isLoading = loading;
            });
            srv.$optionSelected.pipe(operators.takeUntil(this.$destroy)).subscribe(function (data) {
                if (!data) {
                    _this.onChange([]);
                    _this.nzSelect.emit(null);
                    _this.nzSelectionChange.emit([]);
                }
                else {
                    var option = data.option, index = data.index;
                    var shouldClose = option.isLeaf;
                    if (shouldClose) {
                        _this.delaySetMenuVisible(false);
                    }
                    _this.onChange(_this.cascaderService.values);
                    _this.nzSelectionChange.emit(_this.cascaderService.selectedOptions);
                    _this.nzSelect.emit({ option: option, index: index });
                    _this.cdr.markForCheck();
                }
            });
            srv.$quitSearching.pipe(operators.takeUntil(this.$destroy)).subscribe(function () {
                _this.inputString = '';
                _this.dropdownWidthStyle = '';
            });
            this.i18nService.localeChange.pipe(operators.startWith(), operators.takeUntil(this.$destroy)).subscribe(function () {
                _this.setLocale();
            });
            this.nzConfigService
                .getConfigChangeEventForComponent(NZ_CONFIG_COMPONENT_NAME)
                .pipe(operators.takeUntil(this.$destroy))
                .subscribe(function () {
                _this.cdr.markForCheck();
            });
            if (this.nzSelect.observers.length > 0) {
                core$1.warnDeprecation("nzSelect is deprecated and will be removed in 9.0.0. Please use 'nzSelectionChange' instead.");
            }
        };
        NzCascaderComponent.prototype.ngOnDestroy = function () {
            this.$destroy.next();
            this.$destroy.complete();
            this.clearDelayMenuTimer();
            this.clearDelaySelectTimer();
        };
        NzCascaderComponent.prototype.registerOnChange = function (fn) {
            this.onChange = fn;
        };
        NzCascaderComponent.prototype.registerOnTouched = function (fn) {
            this.onTouched = fn;
        };
        // tslint:disable-next-line:no-any
        NzCascaderComponent.prototype.writeValue = function (value) {
            this.cascaderService.values = core$1.toArray(value);
            this.cascaderService.syncOptions(true);
        };
        NzCascaderComponent.prototype.delaySetMenuVisible = function (visible, delay, setOpening) {
            var _this = this;
            if (delay === void 0) { delay = 100; }
            if (setOpening === void 0) { setOpening = false; }
            this.clearDelayMenuTimer();
            if (delay) {
                if (visible && setOpening) {
                    this.isOpening = true;
                }
                this.delayMenuTimer = setTimeout(function () {
                    _this.setMenuVisible(visible);
                    _this.cdr.detectChanges();
                    _this.clearDelayMenuTimer();
                    if (visible) {
                        setTimeout(function () {
                            _this.isOpening = false;
                        }, 100);
                    }
                }, delay);
            }
            else {
                this.setMenuVisible(visible);
            }
        };
        NzCascaderComponent.prototype.setMenuVisible = function (visible) {
            if (this.nzDisabled || this.menuVisible === visible) {
                return;
            }
            if (visible) {
                this.cascaderService.syncOptions();
            }
            this.menuVisible = visible;
            this.nzVisibleChange.emit(visible);
            this.cdr.detectChanges();
        };
        NzCascaderComponent.prototype.clearDelayMenuTimer = function () {
            if (this.delayMenuTimer) {
                clearTimeout(this.delayMenuTimer);
                this.delayMenuTimer = null;
            }
        };
        NzCascaderComponent.prototype.clearSelection = function (event) {
            if (event) {
                event.preventDefault();
                event.stopPropagation();
            }
            this.labelRenderText = '';
            this.labelRenderContext = {};
            this.inputValue = '';
            this.setMenuVisible(false);
            this.cascaderService.clear();
        };
        // tslint:disable-next-line:no-any
        NzCascaderComponent.prototype.getSubmitValue = function () {
            var _this = this;
            return this.cascaderService.selectedOptions.map(function (o) { return _this.cascaderService.getOptionValue(o); });
        };
        NzCascaderComponent.prototype.focus = function () {
            if (!this.isFocused) {
                (this.input ? this.input.nativeElement : this.el).focus();
                this.isFocused = true;
            }
        };
        NzCascaderComponent.prototype.blur = function () {
            if (this.isFocused) {
                (this.input ? this.input.nativeElement : this.el).blur();
                this.isFocused = false;
            }
        };
        NzCascaderComponent.prototype.handleInputBlur = function () {
            this.menuVisible ? this.focus() : this.blur();
        };
        NzCascaderComponent.prototype.handleInputFocus = function () {
            this.focus();
        };
        NzCascaderComponent.prototype.onKeyDown = function (event) {
            var keyCode = event.keyCode;
            if (keyCode !== keycodes.DOWN_ARROW &&
                keyCode !== keycodes.UP_ARROW &&
                keyCode !== keycodes.LEFT_ARROW &&
                keyCode !== keycodes.RIGHT_ARROW &&
                keyCode !== keycodes.ENTER &&
                keyCode !== keycodes.BACKSPACE &&
                keyCode !== keycodes.ESCAPE) {
                return;
            }
            // Press any keys above to reopen menu.
            if (!this.menuVisible && keyCode !== keycodes.BACKSPACE && keyCode !== keycodes.ESCAPE) {
                return this.setMenuVisible(true);
            }
            // Make these keys work as default in searching mode.
            if (this.inSearchingMode && (keyCode === keycodes.BACKSPACE || keyCode === keycodes.LEFT_ARROW || keyCode === keycodes.RIGHT_ARROW)) {
                return;
            }
            // Interact with the component.
            if (this.menuVisible) {
                event.preventDefault();
                if (keyCode === keycodes.DOWN_ARROW) {
                    this.moveUpOrDown(false);
                }
                else if (keyCode === keycodes.UP_ARROW) {
                    this.moveUpOrDown(true);
                }
                else if (keyCode === keycodes.LEFT_ARROW) {
                    this.moveLeft();
                }
                else if (keyCode === keycodes.RIGHT_ARROW) {
                    this.moveRight();
                }
                else if (keyCode === keycodes.ENTER) {
                    this.onEnter();
                }
            }
        };
        NzCascaderComponent.prototype.onTriggerClick = function () {
            if (this.nzDisabled) {
                return;
            }
            if (this.nzShowSearch) {
                this.focus();
            }
            if (this.isActionTrigger('click')) {
                this.delaySetMenuVisible(!this.menuVisible, 100);
            }
            this.onTouched();
        };
        NzCascaderComponent.prototype.onTriggerMouseEnter = function () {
            if (this.nzDisabled || !this.isActionTrigger('hover')) {
                return;
            }
            this.delaySetMenuVisible(true, this.nzMouseEnterDelay, true);
        };
        NzCascaderComponent.prototype.onTriggerMouseLeave = function (event) {
            if (this.nzDisabled || !this.menuVisible || this.isOpening || !this.isActionTrigger('hover')) {
                event.preventDefault();
                return;
            }
            var mouseTarget = event.relatedTarget;
            var hostEl = this.el;
            var menuEl = this.menu && this.menu.nativeElement;
            if (hostEl.contains(mouseTarget) || (menuEl && menuEl.contains(mouseTarget))) {
                return;
            }
            this.delaySetMenuVisible(false, this.nzMouseLeaveDelay);
        };
        NzCascaderComponent.prototype.onOptionMouseEnter = function (option, columnIndex, event) {
            event.preventDefault();
            if (this.nzExpandTrigger === 'hover') {
                if (!option.isLeaf) {
                    this.delaySetOptionActivated(option, columnIndex, false);
                }
                else {
                    this.cascaderService.setOptionDeactivatedSinceColumn(columnIndex);
                }
            }
        };
        NzCascaderComponent.prototype.onOptionMouseLeave = function (option, _columnIndex, event) {
            event.preventDefault();
            if (this.nzExpandTrigger === 'hover' && !option.isLeaf) {
                this.clearDelaySelectTimer();
            }
        };
        NzCascaderComponent.prototype.onOptionClick = function (option, columnIndex, event) {
            if (event) {
                event.preventDefault();
            }
            if (option && option.disabled) {
                return;
            }
            this.el.focus();
            this.inSearchingMode
                ? this.cascaderService.setSearchOptionSelected(option)
                : this.cascaderService.setOptionActivated(option, columnIndex, true);
        };
        NzCascaderComponent.prototype.isActionTrigger = function (action) {
            return typeof this.nzTriggerAction === 'string' ? this.nzTriggerAction === action : this.nzTriggerAction.indexOf(action) !== -1;
        };
        NzCascaderComponent.prototype.onEnter = function () {
            var columnIndex = Math.max(this.cascaderService.activatedOptions.length - 1, 0);
            var option = this.cascaderService.activatedOptions[columnIndex];
            if (option && !option.disabled) {
                this.inSearchingMode
                    ? this.cascaderService.setSearchOptionSelected(option)
                    : this.cascaderService.setOptionActivated(option, columnIndex, true);
            }
        };
        NzCascaderComponent.prototype.moveUpOrDown = function (isUp) {
            var columnIndex = Math.max(this.cascaderService.activatedOptions.length - 1, 0);
            var activeOption = this.cascaderService.activatedOptions[columnIndex];
            var options = this.cascaderService.columns[columnIndex] || [];
            var length = options.length;
            var nextIndex = -1;
            if (!activeOption) {
                // Not selected options in this column
                nextIndex = isUp ? length : -1;
            }
            else {
                nextIndex = options.indexOf(activeOption);
            }
            while (true) {
                nextIndex = isUp ? nextIndex - 1 : nextIndex + 1;
                if (nextIndex < 0 || nextIndex >= length) {
                    break;
                }
                var nextOption = options[nextIndex];
                if (!nextOption || nextOption.disabled) {
                    continue;
                }
                this.cascaderService.setOptionActivated(nextOption, columnIndex);
                break;
            }
        };
        NzCascaderComponent.prototype.moveLeft = function () {
            var options = this.cascaderService.activatedOptions;
            if (options.length) {
                options.pop(); // Remove the last one
            }
        };
        NzCascaderComponent.prototype.moveRight = function () {
            var length = this.cascaderService.activatedOptions.length;
            var options = this.cascaderService.columns[length];
            if (options && options.length) {
                var nextOpt = options.find(function (o) { return !o.disabled; });
                if (nextOpt) {
                    this.cascaderService.setOptionActivated(nextOpt, length);
                }
            }
        };
        NzCascaderComponent.prototype.clearDelaySelectTimer = function () {
            if (this.delaySelectTimer) {
                clearTimeout(this.delaySelectTimer);
                this.delaySelectTimer = null;
            }
        };
        NzCascaderComponent.prototype.delaySetOptionActivated = function (option, columnIndex, performSelect) {
            var _this = this;
            this.clearDelaySelectTimer();
            this.delaySelectTimer = setTimeout(function () {
                _this.cascaderService.setOptionActivated(option, columnIndex, performSelect);
                _this.delaySelectTimer = null;
            }, 150);
        };
        NzCascaderComponent.prototype.toggleSearchingMode = function (toSearching) {
            if (this.inSearchingMode !== toSearching) {
                this.cascaderService.toggleSearchingMode(toSearching);
                this.dropdownWidthStyle = toSearching ? this.input.nativeElement.offsetWidth + "px" : '';
            }
            if (this.inSearchingMode) {
                this.cascaderService.prepareSearchOptions(this.inputValue);
            }
        };
        NzCascaderComponent.prototype.isOptionActivated = function (option, index) {
            var activeOpt = this.cascaderService.activatedOptions[index];
            return activeOpt === option;
        };
        NzCascaderComponent.prototype.setDisabledState = function (isDisabled) {
            if (isDisabled) {
                this.closeMenu();
            }
            this.nzDisabled = isDisabled;
        };
        NzCascaderComponent.prototype.closeMenu = function () {
            this.blur();
            this.clearDelayMenuTimer();
            this.setMenuVisible(false);
        };
        NzCascaderComponent.prototype.onPositionChange = function (position) {
            var newValue = position.connectionPair.originY === 'bottom' ? 'bottom' : 'top';
            if (this.dropDownPosition !== newValue) {
                this.dropDownPosition = newValue;
                this.cdr.detectChanges();
            }
        };
        /**
         * Reposition the cascader panel. When a menu opens, the cascader expands
         * and may exceed the boundary of browser's window.
         */
        NzCascaderComponent.prototype.reposition = function () {
            var _this = this;
            if (this.overlay && this.overlay.overlayRef && this.menuVisible) {
                Promise.resolve().then(function () {
                    _this.overlay.overlayRef.updatePosition();
                });
            }
        };
        /**
         * When a cascader options is changed, a child needs to know that it should re-render.
         */
        NzCascaderComponent.prototype.checkChildren = function () {
            if (this.cascaderItems) {
                this.cascaderItems.forEach(function (item) { return item.markForCheck(); });
            }
        };
        NzCascaderComponent.prototype.buildDisplayLabel = function () {
            var _this = this;
            var selectedOptions = this.cascaderService.selectedOptions;
            var labels = selectedOptions.map(function (o) { return _this.cascaderService.getOptionLabel(o); });
            if (this.isLabelRenderTemplate) {
                this.labelRenderContext = { labels: labels, selectedOptions: selectedOptions };
            }
            else {
                this.labelRenderText = defaultDisplayRender.call(this, labels, selectedOptions);
            }
        };
        NzCascaderComponent.prototype.setLocale = function () {
            this.locale = this.i18nService.getLocaleData('global');
            this.cdr.markForCheck();
        };
        /** @nocollapse */ NzCascaderComponent.ɵfac = function NzCascaderComponent_Factory(t) { return new (t || NzCascaderComponent)(core.ɵɵdirectiveInject(NzCascaderService), core.ɵɵdirectiveInject(i18n.NzI18nService), core.ɵɵdirectiveInject(core$1.NzConfigService), core.ɵɵdirectiveInject(core.ChangeDetectorRef), core.ɵɵdirectiveInject(core.ElementRef), core.ɵɵdirectiveInject(core.Renderer2), core.ɵɵdirectiveInject(core$1.NzNoAnimationDirective, 9)); };
        /** @nocollapse */ NzCascaderComponent.ɵcmp = core.ɵɵdefineComponent({ type: NzCascaderComponent, selectors: [["nz-cascader"], ["", "nz-cascader", ""]], viewQuery: function NzCascaderComponent_Query(rf, ctx) { if (rf & 1) {
                core.ɵɵviewQuery(_c0$1, true);
                core.ɵɵviewQuery(_c1$1, true);
                core.ɵɵviewQuery(overlay.CdkConnectedOverlay, true);
                core.ɵɵviewQuery(NzCascaderOptionComponent, true);
            } if (rf & 2) {
                var _t;
                core.ɵɵqueryRefresh(_t = core.ɵɵloadQuery()) && (ctx.input = _t.first);
                core.ɵɵqueryRefresh(_t = core.ɵɵloadQuery()) && (ctx.menu = _t.first);
                core.ɵɵqueryRefresh(_t = core.ɵɵloadQuery()) && (ctx.overlay = _t.first);
                core.ɵɵqueryRefresh(_t = core.ɵɵloadQuery()) && (ctx.cascaderItems = _t);
            } }, hostBindings: function NzCascaderComponent_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
                core.ɵɵallocHostVars(7);
                core.ɵɵlistener("keydown", function NzCascaderComponent_keydown_HostBindingHandler($event) { return ctx.onKeyDown($event); })("click", function NzCascaderComponent_click_HostBindingHandler($event) { return ctx.onTriggerClick(); })("mouseenter", function NzCascaderComponent_mouseenter_HostBindingHandler($event) { return ctx.onTriggerMouseEnter(); })("mouseleave", function NzCascaderComponent_mouseleave_HostBindingHandler($event) { return ctx.onTriggerMouseLeave($event); });
            } if (rf & 2) {
                core.ɵɵattribute("tabIndex", "0");
                core.ɵɵclassProp("ant-cascader-lg", ctx.nzSize === "large")("ant-cascader-sm", ctx.nzSize === "small")("ant-cascader-picker-disabled", ctx.nzDisabled)("ant-cascader-picker-open", ctx.menuVisible)("ant-cascader-picker-with-value", !!ctx.inputValue)("ant-cascader-focused", ctx.isFocused);
            } }, inputs: { nzOptionRender: "nzOptionRender", nzShowInput: "nzShowInput", nzShowArrow: "nzShowArrow", nzAllowClear: "nzAllowClear", nzAutoFocus: "nzAutoFocus", nzChangeOnSelect: "nzChangeOnSelect", nzDisabled: "nzDisabled", nzColumnClassName: "nzColumnClassName", nzExpandTrigger: "nzExpandTrigger", nzValueProperty: "nzValueProperty", nzLabelRender: "nzLabelRender", nzLabelProperty: "nzLabelProperty", nzNotFoundContent: "nzNotFoundContent", nzSize: "nzSize", nzShowSearch: "nzShowSearch", nzPlaceHolder: "nzPlaceHolder", nzMenuClassName: "nzMenuClassName", nzMenuStyle: "nzMenuStyle", nzMouseEnterDelay: "nzMouseEnterDelay", nzMouseLeaveDelay: "nzMouseLeaveDelay", nzTriggerAction: "nzTriggerAction", nzChangeOn: "nzChangeOn", nzLoadData: "nzLoadData", nzOptions: "nzOptions" }, outputs: { nzVisibleChange: "nzVisibleChange", nzSelectionChange: "nzSelectionChange", nzSelect: "nzSelect", nzClear: "nzClear" }, exportAs: ["nzCascader"], features: [core.ɵɵProvidersFeature([
                    {
                        provide: forms.NG_VALUE_ACCESSOR,
                        useExisting: core.forwardRef((function () { return NzCascaderComponent; })),
                        multi: true
                    },
                    NzCascaderService
                ])], ngContentSelectors: _c2, decls: 6, vars: 4, consts: [["cdkOverlayOrigin", ""], ["origin", "cdkOverlayOrigin", "trigger", ""], [4, "ngIf"], ["cdkConnectedOverlay", "", "nzConnectedOverlay", "", "cdkConnectedOverlayHasBackdrop", "", 3, "cdkConnectedOverlayOrigin", "cdkConnectedOverlayPositions", "cdkConnectedOverlayOpen", "backdropClick", "detach", "positionChange"], ["nz-input", "", 1, "ant-cascader-input", 3, "readonly", "disabled", "nzSize", "ngModel", "ngModelChange", "blur", "focus", "change"], ["input", ""], ["nz-icon", "", "nzType", "close-circle", "nzTheme", "fill", "class", "ant-cascader-picker-clear", 3, "click", 4, "ngIf"], ["nz-icon", "", "nzType", "down", "class", "ant-cascader-picker-arrow", 3, "ant-cascader-picker-arrow-expand", 4, "ngIf"], ["nz-icon", "", "nzType", "loading", "class", "ant-cascader-picker-arrow", 4, "ngIf"], [1, "ant-cascader-picker-label"], [4, "ngIf", "ngIfElse"], ["labelTemplate", ""], ["nz-icon", "", "nzType", "close-circle", "nzTheme", "fill", 1, "ant-cascader-picker-clear", 3, "click"], ["nz-icon", "", "nzType", "down", 1, "ant-cascader-picker-arrow"], ["nz-icon", "", "nzType", "loading", 1, "ant-cascader-picker-arrow"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["class", "ant-cascader-menus", 3, "ant-cascader-menus-hidden", "ngClass", "ngStyle", "nzNoAnimation", "mouseleave", 4, "ngIf"], [1, "ant-cascader-menus", 3, "ngClass", "ngStyle", "nzNoAnimation", "mouseleave"], ["menu", ""], ["class", "ant-cascader-menu", 3, "ngClass", "height", "width", 4, "ngFor", "ngForOf"], [1, "ant-cascader-menu", 3, "ngClass"], ["nz-cascader-option", "", 3, "columnIndex", "nzLabelProperty", "optionTemplate", "activated", "highlightText", "option", "mouseenter", "mouseleave", "click", 4, "ngFor", "ngForOf"], ["class", "ant-cascader-menu-item ant-cascader-menu-item-expanded ant-cascader-menu-item-disabled", 4, "ngIf"], ["nz-cascader-option", "", 3, "columnIndex", "nzLabelProperty", "optionTemplate", "activated", "highlightText", "option", "mouseenter", "mouseleave", "click"], [1, "ant-cascader-menu-item", "ant-cascader-menu-item-expanded", "ant-cascader-menu-item-disabled"], [3, "nzComponentName", "specificContent"]], template: function NzCascaderComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵprojectionDef();
                core.ɵɵelementStart(0, "div", 0, 1);
                core.ɵɵtemplate(3, NzCascaderComponent_div_3_Template, 10, 17, "div", 2);
                core.ɵɵprojection(4);
                core.ɵɵelementEnd();
                core.ɵɵtemplate(5, NzCascaderComponent_ng_template_5_Template, 1, 1, "ng-template", 3);
                core.ɵɵlistener("backdropClick", function NzCascaderComponent_Template_ng_template_backdropClick_5_listener($event) { return ctx.closeMenu(); })("detach", function NzCascaderComponent_Template_ng_template_detach_5_listener($event) { return ctx.closeMenu(); })("positionChange", function NzCascaderComponent_Template_ng_template_positionChange_5_listener($event) { return ctx.onPositionChange($event); });
            } if (rf & 2) {
                var _r1081 = core.ɵɵreference(1);
                core.ɵɵadvance(3);
                core.ɵɵproperty("ngIf", ctx.nzShowInput);
                core.ɵɵadvance(2);
                core.ɵɵproperty("cdkConnectedOverlayOrigin", _r1081)("cdkConnectedOverlayPositions", ctx.positions)("cdkConnectedOverlayOpen", ctx.menuVisible);
            } }, directives: [overlay.CdkOverlayOrigin, common.NgIf, overlay.CdkConnectedOverlay, core$1.NzConnectedOverlayDirective, forms.DefaultValueAccessor, input.NzInputDirective, forms.NgControlStatus, forms.NgModel, icon.NzIconDirective, common.NgTemplateOutlet, common.NgClass, common.NgStyle, core$1.NzNoAnimationDirective, common.NgForOf, NzCascaderOptionComponent, empty.NzEmbedEmptyComponent], styles: ["\n      .ant-cascader-menus {\n        margin-top: 4px;\n        margin-bottom: 4px;\n        top: 100%;\n        left: 0;\n        position: relative;\n        width: 100%;\n      }\n    "], encapsulation: 2, data: { animation: [core$1.slideMotion] }, changeDetection: 0 });
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzCascaderComponent.prototype, "nzShowInput", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzCascaderComponent.prototype, "nzShowArrow", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzCascaderComponent.prototype, "nzAllowClear", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzCascaderComponent.prototype, "nzAutoFocus", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzCascaderComponent.prototype, "nzChangeOnSelect", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzCascaderComponent.prototype, "nzDisabled", void 0);
        __decorate([
            core$1.WithConfig(NZ_CONFIG_COMPONENT_NAME, 'default'),
            __metadata("design:type", String)
        ], NzCascaderComponent.prototype, "nzSize", void 0);
        return NzCascaderComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NzCascaderComponent, [{
            type: core.Component,
            args: [{
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    encapsulation: core.ViewEncapsulation.None,
                    selector: 'nz-cascader, [nz-cascader]',
                    exportAs: 'nzCascader',
                    preserveWhitespaces: false,
                    templateUrl: './nz-cascader.component.html',
                    animations: [core$1.slideMotion],
                    providers: [
                        {
                            provide: forms.NG_VALUE_ACCESSOR,
                            useExisting: core.forwardRef((function () { return NzCascaderComponent; })),
                            multi: true
                        },
                        NzCascaderService
                    ],
                    host: {
                        '[attr.tabIndex]': '"0"',
                        '[class.ant-cascader-lg]': 'nzSize === "large"',
                        '[class.ant-cascader-sm]': 'nzSize === "small"',
                        '[class.ant-cascader-picker-disabled]': 'nzDisabled',
                        '[class.ant-cascader-picker-open]': 'menuVisible',
                        '[class.ant-cascader-picker-with-value]': '!!inputValue',
                        '[class.ant-cascader-focused]': 'isFocused'
                    },
                    styles: [
                        "\n      .ant-cascader-menus {\n        margin-top: 4px;\n        margin-bottom: 4px;\n        top: 100%;\n        left: 0;\n        position: relative;\n        width: 100%;\n      }\n    "
                    ]
                }]
        }], function () { return [{ type: NzCascaderService }, { type: i18n.NzI18nService }, { type: core$1.NzConfigService }, { type: core.ChangeDetectorRef }, { type: core.ElementRef }, { type: core.Renderer2 }, { type: core$1.NzNoAnimationDirective, decorators: [{
                    type: core.Host
                }, {
                    type: core.Optional
                }] }]; }, { input: [{
                type: core.ViewChild,
                args: ['input', { static: false }]
            }], menu: [{
                type: core.ViewChild,
                args: ['menu', { static: false }]
            }], overlay: [{
                type: core.ViewChild,
                args: [overlay.CdkConnectedOverlay, { static: false }]
            }], cascaderItems: [{
                type: core.ViewChildren,
                args: [NzCascaderOptionComponent]
            }], nzOptionRender: [{
                type: core.Input
            }], nzShowInput: [{
                type: core.Input
            }], nzShowArrow: [{
                type: core.Input
            }], nzAllowClear: [{
                type: core.Input
            }], nzAutoFocus: [{
                type: core.Input
            }], nzChangeOnSelect: [{
                type: core.Input
            }], nzDisabled: [{
                type: core.Input
            }], nzColumnClassName: [{
                type: core.Input
            }], nzExpandTrigger: [{
                type: core.Input
            }], nzValueProperty: [{
                type: core.Input
            }], nzLabelRender: [{
                type: core.Input
            }], nzLabelProperty: [{
                type: core.Input
            }], nzNotFoundContent: [{
                type: core.Input
            }], nzSize: [{
                type: core.Input
            }], nzShowSearch: [{
                type: core.Input
            }], nzPlaceHolder: [{
                type: core.Input
            }], nzMenuClassName: [{
                type: core.Input
            }], nzMenuStyle: [{
                type: core.Input
            }], nzMouseEnterDelay: [{
                type: core.Input
            }], nzMouseLeaveDelay: [{
                type: core.Input
            }], nzTriggerAction: [{
                type: core.Input
            }], nzChangeOn: [{
                type: core.Input
            }], nzLoadData: [{
                type: core.Input
            }], nzOptions: [{
                type: core.Input
            }], nzVisibleChange: [{
                type: core.Output
            }], nzSelectionChange: [{
                type: core.Output
            }], nzSelect: [{
                type: core.Output
            }], nzClear: [{
                type: core.Output
            }], onKeyDown: [{
                type: core.HostListener,
                args: ['keydown', ['$event']]
            }], onTriggerClick: [{
                type: core.HostListener,
                args: ['click']
            }], onTriggerMouseEnter: [{
                type: core.HostListener,
                args: ['mouseenter']
            }], onTriggerMouseLeave: [{
                type: core.HostListener,
                args: ['mouseleave', ['$event']]
            }] }); })();

    /**
     * @license
     * Copyright Alibaba.com All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    var NzCascaderModule = /** @class */ (function () {
        function NzCascaderModule() {
        }
        /** @nocollapse */ NzCascaderModule.ɵmod = core.ɵɵdefineNgModule({ type: NzCascaderModule });
        /** @nocollapse */ NzCascaderModule.ɵinj = core.ɵɵdefineInjector({ factory: function NzCascaderModule_Factory(t) { return new (t || NzCascaderModule)(); }, imports: [[
                    common.CommonModule,
                    forms.FormsModule,
                    overlay.OverlayModule,
                    core$1.NzAddOnModule,
                    empty.NzEmptyModule,
                    core$1.NzHighlightModule,
                    icon.NzIconModule,
                    input.NzInputModule,
                    core$1.NzNoAnimationModule,
                    core$1.NzOverlayModule
                ]] });
        return NzCascaderModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && core.ɵɵsetNgModuleScope(NzCascaderModule, { declarations: [NzCascaderComponent, NzCascaderOptionComponent], imports: [common.CommonModule,
            forms.FormsModule,
            overlay.OverlayModule,
            core$1.NzAddOnModule,
            empty.NzEmptyModule,
            core$1.NzHighlightModule,
            icon.NzIconModule,
            input.NzInputModule,
            core$1.NzNoAnimationModule,
            core$1.NzOverlayModule], exports: [NzCascaderComponent] }); })();
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NzCascaderModule, [{
            type: core.NgModule,
            args: [{
                    imports: [
                        common.CommonModule,
                        forms.FormsModule,
                        overlay.OverlayModule,
                        core$1.NzAddOnModule,
                        empty.NzEmptyModule,
                        core$1.NzHighlightModule,
                        icon.NzIconModule,
                        input.NzInputModule,
                        core$1.NzNoAnimationModule,
                        core$1.NzOverlayModule
                    ],
                    declarations: [NzCascaderComponent, NzCascaderOptionComponent],
                    exports: [NzCascaderComponent]
                }]
        }], null, null); })();

    exports.NzCascaderComponent = NzCascaderComponent;
    exports.NzCascaderModule = NzCascaderModule;
    exports.NzCascaderOptionComponent = NzCascaderOptionComponent;
    exports.NzCascaderService = NzCascaderService;
    exports.isChildOption = isChildOption;
    exports.isParentOption = isParentOption;
    exports.isShowSearchObject = isShowSearchObject;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ng-zorro-antd-cascader.umd.js.map
