(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('ng-zorro-antd/core'), require('rxjs'), require('rxjs/operators'), require('@angular/cdk/keycodes'), require('@angular/common'), require('ng-zorro-antd/icon'), require('ng-zorro-antd/empty'), require('@angular/cdk/overlay'), require('@angular/cdk/platform'), require('@angular/forms'), require('ng-zorro-antd/i18n')) :
    typeof define === 'function' && define.amd ? define('ng-zorro-antd/select', ['exports', '@angular/core', 'ng-zorro-antd/core', 'rxjs', 'rxjs/operators', '@angular/cdk/keycodes', '@angular/common', 'ng-zorro-antd/icon', 'ng-zorro-antd/empty', '@angular/cdk/overlay', '@angular/cdk/platform', '@angular/forms', 'ng-zorro-antd/i18n'], factory) :
    (global = global || self, factory((global['ng-zorro-antd'] = global['ng-zorro-antd'] || {}, global['ng-zorro-antd'].select = {}), global.ng.core, global['ng-zorro-antd'].core, global.rxjs, global.rxjs.operators, global.ng.cdk.keycodes, global.ng.common, global['ng-zorro-antd'].icon, global['ng-zorro-antd'].empty, global.ng.cdk.overlay, global.ng.cdk.platform, global.ng.forms, global['ng-zorro-antd'].i18n));
}(this, (function (exports, core, core$1, rxjs, operators, keycodes, common, icon, empty, overlay, platform, forms, i18n) { 'use strict';

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

    function NzOptionComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵprojection(0);
    } }
    var _c0 = ["*"];
    var NzOptionComponent = /** @class */ (function () {
        function NzOptionComponent() {
            this.changes = new rxjs.Subject();
            this.nzDisabled = false;
            this.nzHide = false;
            this.nzCustomContent = false;
        }
        NzOptionComponent.prototype.ngOnChanges = function () {
            this.changes.next();
        };
        /** @nocollapse */ NzOptionComponent.ɵfac = function NzOptionComponent_Factory(t) { return new (t || NzOptionComponent)(); };
        /** @nocollapse */ NzOptionComponent.ɵcmp = core.ɵɵdefineComponent({ type: NzOptionComponent, selectors: [["nz-option"]], viewQuery: function NzOptionComponent_Query(rf, ctx) { if (rf & 1) {
                core.ɵɵviewQuery(core.TemplateRef, true);
            } if (rf & 2) {
                var _t;
                core.ɵɵqueryRefresh(_t = core.ɵɵloadQuery()) && (ctx.template = _t.first);
            } }, inputs: { nzLabel: "nzLabel", nzValue: "nzValue", nzDisabled: "nzDisabled", nzHide: "nzHide", nzCustomContent: "nzCustomContent" }, exportAs: ["nzOption"], features: [core.ɵɵNgOnChangesFeature()], ngContentSelectors: _c0, decls: 1, vars: 0, template: function NzOptionComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵprojectionDef();
                core.ɵɵtemplate(0, NzOptionComponent_ng_template_0_Template, 1, 0, "ng-template");
            } }, encapsulation: 2, changeDetection: 0 });
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzOptionComponent.prototype, "nzDisabled", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzOptionComponent.prototype, "nzHide", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzOptionComponent.prototype, "nzCustomContent", void 0);
        return NzOptionComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NzOptionComponent, [{
            type: core.Component,
            args: [{
                    selector: 'nz-option',
                    exportAs: 'nzOption',
                    encapsulation: core.ViewEncapsulation.None,
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    templateUrl: './nz-option.component.html'
                }]
        }], null, { template: [{
                type: core.ViewChild,
                args: [core.TemplateRef, { static: false }]
            }], nzLabel: [{
                type: core.Input
            }], nzValue: [{
                type: core.Input
            }], nzDisabled: [{
                type: core.Input
            }], nzHide: [{
                type: core.Input
            }], nzCustomContent: [{
                type: core.Input
            }] }); })();

    /**
     * @license
     * Copyright Alibaba.com All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    var _c0$1 = ["*"];
    var NzOptionGroupComponent = /** @class */ (function () {
        function NzOptionGroupComponent() {
            this.isLabelString = false;
        }
        Object.defineProperty(NzOptionGroupComponent.prototype, "nzLabel", {
            get: function () {
                return this.label;
            },
            set: function (value) {
                this.label = value;
                this.isLabelString = !(this.nzLabel instanceof core.TemplateRef);
            },
            enumerable: true,
            configurable: true
        });
        /** @nocollapse */ NzOptionGroupComponent.ɵfac = function NzOptionGroupComponent_Factory(t) { return new (t || NzOptionGroupComponent)(); };
        /** @nocollapse */ NzOptionGroupComponent.ɵcmp = core.ɵɵdefineComponent({ type: NzOptionGroupComponent, selectors: [["nz-option-group"]], contentQueries: function NzOptionGroupComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
                core.ɵɵcontentQuery(dirIndex, NzOptionComponent, false);
            } if (rf & 2) {
                var _t;
                core.ɵɵqueryRefresh(_t = core.ɵɵloadQuery()) && (ctx.listOfNzOptionComponent = _t);
            } }, inputs: { nzLabel: "nzLabel" }, exportAs: ["nzOptionGroup"], ngContentSelectors: _c0$1, decls: 1, vars: 0, template: function NzOptionGroupComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵprojectionDef();
                core.ɵɵprojection(0);
            } }, encapsulation: 2, changeDetection: 0 });
        return NzOptionGroupComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NzOptionGroupComponent, [{
            type: core.Component,
            args: [{
                    selector: 'nz-option-group',
                    exportAs: 'nzOptionGroup',
                    encapsulation: core.ViewEncapsulation.None,
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    templateUrl: './nz-option-group.component.html'
                }]
        }], null, { listOfNzOptionComponent: [{
                type: core.ContentChildren,
                args: [NzOptionComponent]
            }], nzLabel: [{
                type: core.Input
            }] }); })();

    /**
     * @license
     * Copyright Alibaba.com All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    var NzFilterOptionPipe = /** @class */ (function () {
        function NzFilterOptionPipe() {
        }
        NzFilterOptionPipe.prototype.transform = function (options, searchValue, filterOption, serverSearch) {
            if (serverSearch || !searchValue) {
                return options;
            }
            else {
                return options.filter(function (o) { return filterOption(searchValue, o); });
            }
        };
        /** @nocollapse */ NzFilterOptionPipe.ɵfac = function NzFilterOptionPipe_Factory(t) { return new (t || NzFilterOptionPipe)(); };
        /** @nocollapse */ NzFilterOptionPipe.ɵpipe = core.ɵɵdefinePipe({ name: "nzFilterOption", type: NzFilterOptionPipe, pure: true });
        return NzFilterOptionPipe;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NzFilterOptionPipe, [{
            type: core.Pipe,
            args: [{ name: 'nzFilterOption' }]
        }], null, null); })();
    var NzFilterGroupOptionPipe = /** @class */ (function () {
        function NzFilterGroupOptionPipe() {
        }
        NzFilterGroupOptionPipe.prototype.transform = function (groups, searchValue, filterOption, serverSearch) {
            if (serverSearch || !searchValue) {
                return groups;
            }
            else {
                return groups.filter(function (g) {
                    return g.listOfNzOptionComponent.some(function (o) { return filterOption(searchValue, o); });
                });
            }
        };
        /** @nocollapse */ NzFilterGroupOptionPipe.ɵfac = function NzFilterGroupOptionPipe_Factory(t) { return new (t || NzFilterGroupOptionPipe)(); };
        /** @nocollapse */ NzFilterGroupOptionPipe.ɵpipe = core.ɵɵdefinePipe({ name: "nzFilterGroupOption", type: NzFilterGroupOptionPipe, pure: true });
        return NzFilterGroupOptionPipe;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NzFilterGroupOptionPipe, [{
            type: core.Pipe,
            args: [{ name: 'nzFilterGroupOption' }]
        }], null, null); })();
    function defaultFilterOption(searchValue, option) {
        if (option && option.nzLabel) {
            return option.nzLabel.toLowerCase().indexOf(searchValue.toLowerCase()) > -1;
        }
        else {
            return false;
        }
    }

    var NzSelectService = /** @class */ (function () {
        function NzSelectService() {
            var _this = this;
            /** Input params **/
            this.autoClearSearchValue = true;
            this.serverSearch = false;
            this.filterOption = defaultFilterOption;
            this.mode = 'default';
            this.maxMultipleCount = Infinity;
            this.disabled = false;
            // tslint:disable-next-line:no-any
            this.compareWith = function (o1, o2) { return o1 === o2; };
            /** selectedValueChanged should emit ngModelChange or not **/
            // tslint:disable-next-line:no-any
            this.listOfSelectedValueWithEmit$ = new rxjs.BehaviorSubject({
                value: [],
                emit: false
            });
            /** ContentChildren Change **/
            this.mapOfTemplateOption$ = new rxjs.BehaviorSubject({
                listOfNzOptionComponent: [],
                listOfNzOptionGroupComponent: []
            });
            /** searchValue Change **/
            this.searchValueRaw$ = new rxjs.BehaviorSubject('');
            this.listOfFilteredOption = [];
            this.openRaw$ = new rxjs.Subject();
            this.checkRaw$ = new rxjs.Subject();
            this.open = false;
            this.clearInput$ = new rxjs.Subject();
            this.searchValue = '';
            this.isShowNotFound = false;
            /** animation event **/
            this.animationEvent$ = new rxjs.Subject();
            /** open event **/
            this.open$ = this.openRaw$.pipe(operators.distinctUntilChanged());
            this.activatedOption$ = new rxjs.ReplaySubject(1);
            this.listOfSelectedValue$ = this.listOfSelectedValueWithEmit$.pipe(operators.map(function (data) { return data.value; }));
            this.modelChange$ = this.listOfSelectedValueWithEmit$.pipe(operators.filter(function (item) { return item.emit; }), operators.map(function (data) {
                var selectedList = data.value;
                var modelValue = null; // tslint:disable-line:no-any
                if (_this.isSingleMode) {
                    if (selectedList.length) {
                        modelValue = selectedList[0];
                    }
                }
                else {
                    modelValue = selectedList;
                }
                return modelValue;
            }));
            this.searchValue$ = this.searchValueRaw$.pipe(operators.distinctUntilChanged(), operators.skip(1), operators.share(), operators.tap(function (value) {
                _this.searchValue = value;
                if (value) {
                    _this.updateActivatedOption(_this.listOfFilteredOption[0]);
                }
                _this.updateListOfFilteredOption();
            }));
            // tslint:disable-next-line:no-any
            this.listOfSelectedValue = [];
            /** flat ViewChildren **/
            this.listOfTemplateOption = [];
            /** tag option **/
            this.listOfTagOption = [];
            /** tag option concat template option **/
            this.listOfTagAndTemplateOption = [];
            /** ViewChildren **/
            this.listOfNzOptionComponent = [];
            this.listOfNzOptionGroupComponent = [];
            /** display in top control **/
            this.listOfCachedSelectedOption = [];
            /** selected value or ViewChildren change **/
            this.valueOrOption$ = rxjs.combineLatest([this.listOfSelectedValue$, this.mapOfTemplateOption$]).pipe(operators.tap(function (data) {
                var _a = __read(data, 2), listOfSelectedValue = _a[0], mapOfTemplateOption = _a[1];
                _this.listOfSelectedValue = listOfSelectedValue;
                _this.listOfNzOptionComponent = mapOfTemplateOption.listOfNzOptionComponent;
                _this.listOfNzOptionGroupComponent = mapOfTemplateOption.listOfNzOptionGroupComponent;
                _this.listOfTemplateOption = _this.listOfNzOptionComponent.concat(_this.listOfNzOptionGroupComponent.reduce(function (pre, cur) { return __spread(pre, cur.listOfNzOptionComponent.toArray()); }, []));
                _this.updateListOfTagOption();
                _this.updateListOfFilteredOption();
                _this.resetActivatedOptionIfNeeded();
                _this.updateListOfCachedOption();
            }), operators.share());
            this.check$ = rxjs.merge(this.checkRaw$, this.valueOrOption$, this.searchValue$, this.activatedOption$, this.open$, this.modelChange$).pipe(operators.share());
        }
        NzSelectService.prototype.clickOption = function (option) {
            var _this = this;
            /** update listOfSelectedOption -> update listOfSelectedValue -> next listOfSelectedValue$ **/
            if (!option.nzDisabled) {
                this.updateActivatedOption(option);
                var listOfSelectedValue = __spread(this.listOfSelectedValue);
                if (this.isMultipleOrTags) {
                    var targetValue = listOfSelectedValue.find(function (o) { return _this.compareWith(o, option.nzValue); });
                    if (core$1.isNotNil(targetValue)) {
                        listOfSelectedValue.splice(listOfSelectedValue.indexOf(targetValue), 1);
                        this.updateListOfSelectedValue(listOfSelectedValue, true);
                    }
                    else if (listOfSelectedValue.length < this.maxMultipleCount) {
                        listOfSelectedValue.push(option.nzValue);
                        this.updateListOfSelectedValue(listOfSelectedValue, true);
                    }
                }
                else if (!this.compareWith(listOfSelectedValue[0], option.nzValue)) {
                    listOfSelectedValue = [option.nzValue];
                    this.updateListOfSelectedValue(listOfSelectedValue, true);
                }
                if (this.isSingleMode) {
                    this.setOpenState(false);
                }
                else if (this.autoClearSearchValue) {
                    this.clearInput();
                }
            }
        };
        NzSelectService.prototype.updateListOfCachedOption = function () {
            var _this = this;
            if (this.isSingleMode) {
                var selectedOption = this.listOfTemplateOption.find(function (o) { return _this.compareWith(o.nzValue, _this.listOfSelectedValue[0]); });
                if (!core$1.isNil(selectedOption)) {
                    this.listOfCachedSelectedOption = [selectedOption];
                }
            }
            else {
                var listOfCachedSelectedOption_1 = [];
                this.listOfSelectedValue.forEach(function (v) {
                    var listOfMixedOption = __spread(_this.listOfTagAndTemplateOption, _this.listOfCachedSelectedOption);
                    var option = listOfMixedOption.find(function (o) { return _this.compareWith(o.nzValue, v); });
                    if (option) {
                        listOfCachedSelectedOption_1.push(option);
                    }
                });
                this.listOfCachedSelectedOption = listOfCachedSelectedOption_1;
            }
        };
        NzSelectService.prototype.updateListOfTagOption = function () {
            var _this = this;
            if (this.isTagsMode) {
                var listOfMissValue = this.listOfSelectedValue.filter(function (value) { return !_this.listOfTemplateOption.find(function (o) { return _this.compareWith(o.nzValue, value); }); });
                this.listOfTagOption = listOfMissValue.map(function (value) {
                    var cachedOption = _this.listOfCachedSelectedOption.find(function (o) { return _this.compareWith(o.nzValue, value); });
                    if (cachedOption) {
                        return cachedOption;
                    }
                    else {
                        var nzOptionComponent = new NzOptionComponent();
                        nzOptionComponent.nzValue = value;
                        nzOptionComponent.nzLabel = value;
                        return nzOptionComponent;
                    }
                });
                this.listOfTagAndTemplateOption = __spread(this.listOfTemplateOption.concat(this.listOfTagOption));
            }
            else {
                this.listOfTagAndTemplateOption = __spread(this.listOfTemplateOption);
            }
        };
        NzSelectService.prototype.updateAddTagOption = function () {
            var _this = this;
            var isMatch = this.listOfTagAndTemplateOption.find(function (item) { return item.nzLabel === _this.searchValue; });
            if (this.isTagsMode && this.searchValue && !isMatch) {
                var option = new NzOptionComponent();
                option.nzValue = this.searchValue;
                option.nzLabel = this.searchValue;
                this.addedTagOption = option;
                this.updateActivatedOption(option);
            }
            else {
                this.addedTagOption = null;
            }
        };
        NzSelectService.prototype.updateListOfFilteredOption = function () {
            this.updateAddTagOption();
            var listOfFilteredOption = new NzFilterOptionPipe().transform(this.listOfTagAndTemplateOption, this.searchValue, this.filterOption, this.serverSearch);
            this.listOfFilteredOption = this.addedTagOption ? __spread([this.addedTagOption], listOfFilteredOption) : __spread(listOfFilteredOption);
            this.isShowNotFound = !this.isTagsMode && !this.listOfFilteredOption.length;
        };
        NzSelectService.prototype.clearInput = function () {
            this.clearInput$.next();
        };
        // tslint:disable-next-line:no-any
        NzSelectService.prototype.updateListOfSelectedValue = function (value, emit) {
            this.listOfSelectedValueWithEmit$.next({ value: value, emit: emit });
        };
        NzSelectService.prototype.updateActivatedOption = function (option) {
            this.activatedOption$.next(option);
            this.activatedOption = option;
        };
        NzSelectService.prototype.tokenSeparate = function (inputValue, tokenSeparators) {
            /** auto tokenSeparators **/
            if (inputValue &&
                inputValue.length &&
                tokenSeparators.length &&
                this.isMultipleOrTags &&
                this.includesSeparators(inputValue, tokenSeparators)) {
                var listOfLabel = this.splitBySeparators(inputValue, tokenSeparators);
                this.updateSelectedValueByLabelList(listOfLabel);
                this.clearInput();
            }
        };
        NzSelectService.prototype.includesSeparators = function (str, separators) {
            // tslint:disable-next-line:prefer-for-of
            for (var i = 0; i < separators.length; ++i) {
                if (str.lastIndexOf(separators[i]) > 0) {
                    return true;
                }
            }
            return false;
        };
        NzSelectService.prototype.splitBySeparators = function (str, separators) {
            var reg = new RegExp("[" + separators.join() + "]");
            var array = str.split(reg).filter(function (token) { return token; });
            return Array.from(new Set(array));
        };
        NzSelectService.prototype.resetActivatedOptionIfNeeded = function () {
            var _this = this;
            var resetActivatedOption = function () {
                var activatedOption = _this.listOfFilteredOption.find(function (item) { return _this.compareWith(item.nzValue, _this.listOfSelectedValue[0]); });
                _this.updateActivatedOption(activatedOption || null);
            };
            if (this.activatedOption) {
                if (!this.listOfFilteredOption.find(function (item) { return _this.compareWith(item.nzValue, _this.activatedOption.nzValue); }) ||
                    !this.listOfSelectedValue.find(function (item) { return _this.compareWith(item, _this.activatedOption.nzValue); })) {
                    resetActivatedOption();
                }
            }
            else {
                resetActivatedOption();
            }
        };
        NzSelectService.prototype.updateTemplateOption = function (listOfNzOptionComponent, listOfNzOptionGroupComponent) {
            this.mapOfTemplateOption$.next({ listOfNzOptionComponent: listOfNzOptionComponent, listOfNzOptionGroupComponent: listOfNzOptionGroupComponent });
        };
        NzSelectService.prototype.updateSearchValue = function (value) {
            this.searchValueRaw$.next(value);
        };
        NzSelectService.prototype.updateSelectedValueByLabelList = function (listOfLabel) {
            var _this = this;
            var listOfSelectedValue = __spread(this.listOfSelectedValue);
            var listOfMatchOptionValue = this.listOfTagAndTemplateOption
                .filter(function (item) { return listOfLabel.indexOf(item.nzLabel) !== -1; })
                .map(function (item) { return item.nzValue; })
                .filter(function (item) { return !core$1.isNotNil(_this.listOfSelectedValue.find(function (v) { return _this.compareWith(v, item); })); });
            if (this.isMultipleMode) {
                this.updateListOfSelectedValue(__spread(listOfSelectedValue, listOfMatchOptionValue), true);
            }
            else {
                var listOfUnMatchOptionValue = listOfLabel.filter(function (label) { return _this.listOfTagAndTemplateOption.map(function (item) { return item.nzLabel; }).indexOf(label) === -1; });
                this.updateListOfSelectedValue(__spread(listOfSelectedValue, listOfMatchOptionValue, listOfUnMatchOptionValue), true);
            }
        };
        NzSelectService.prototype.onKeyDown = function (e) {
            var _this = this;
            if (this.disabled) {
                return;
            }
            var keyCode = e.keyCode;
            var eventTarget = e.target;
            var listOfFilteredOptionWithoutDisabledOrHidden = this.listOfFilteredOption.filter(function (item) { return !item.nzDisabled && !item.nzHide; });
            var activatedIndex = listOfFilteredOptionWithoutDisabledOrHidden.findIndex(function (item) { return item === _this.activatedOption; });
            switch (keyCode) {
                case keycodes.UP_ARROW:
                    e.preventDefault();
                    var preIndex = activatedIndex > 0 ? activatedIndex - 1 : listOfFilteredOptionWithoutDisabledOrHidden.length - 1;
                    this.updateActivatedOption(listOfFilteredOptionWithoutDisabledOrHidden[preIndex]);
                    break;
                case keycodes.DOWN_ARROW:
                    e.preventDefault();
                    var nextIndex = activatedIndex < listOfFilteredOptionWithoutDisabledOrHidden.length - 1 ? activatedIndex + 1 : 0;
                    this.updateActivatedOption(listOfFilteredOptionWithoutDisabledOrHidden[nextIndex]);
                    if (!this.disabled && !this.open) {
                        this.setOpenState(true);
                    }
                    break;
                case keycodes.ENTER:
                    e.preventDefault();
                    if (this.open) {
                        if (this.activatedOption && !this.activatedOption.nzDisabled) {
                            this.clickOption(this.activatedOption);
                        }
                    }
                    else {
                        this.setOpenState(true);
                    }
                    break;
                case keycodes.BACKSPACE:
                    if (this.isMultipleOrTags && !eventTarget.value && this.listOfCachedSelectedOption.length) {
                        e.preventDefault();
                        this.removeValueFormSelected(this.listOfCachedSelectedOption[this.listOfCachedSelectedOption.length - 1]);
                    }
                    break;
                case keycodes.SPACE:
                    if (!this.disabled && !this.open) {
                        this.setOpenState(true);
                        e.preventDefault();
                    }
                    break;
                case keycodes.TAB:
                    this.setOpenState(false);
                    break;
            }
        };
        // tslint:disable-next-line:no-any
        NzSelectService.prototype.removeValueFormSelected = function (option) {
            var _this = this;
            if (this.disabled || option.nzDisabled) {
                return;
            }
            var listOfSelectedValue = this.listOfSelectedValue.filter(function (item) { return !_this.compareWith(item, option.nzValue); });
            this.updateListOfSelectedValue(listOfSelectedValue, true);
            this.clearInput();
        };
        NzSelectService.prototype.setOpenState = function (value) {
            this.openRaw$.next(value);
            this.open = value;
        };
        NzSelectService.prototype.check = function () {
            this.checkRaw$.next();
        };
        Object.defineProperty(NzSelectService.prototype, "isSingleMode", {
            get: function () {
                return this.mode === 'default';
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzSelectService.prototype, "isTagsMode", {
            get: function () {
                return this.mode === 'tags';
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzSelectService.prototype, "isMultipleMode", {
            get: function () {
                return this.mode === 'multiple';
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzSelectService.prototype, "isMultipleOrTags", {
            get: function () {
                return this.mode === 'tags' || this.mode === 'multiple';
            },
            enumerable: true,
            configurable: true
        });
        /** @nocollapse */ NzSelectService.ɵfac = function NzSelectService_Factory(t) { return new (t || NzSelectService)(); };
        /** @nocollapse */ NzSelectService.ɵprov = core.ɵɵdefineInjectable({ token: NzSelectService, factory: NzSelectService.ɵfac });
        return NzSelectService;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NzSelectService, [{
            type: core.Injectable
        }], null, null); })();

    /**
     * @license
     * Copyright Alibaba.com All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    var _c0$2 = ["nz-option-li", ""];
    function NzOptionLiComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵtext(1);
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var ctx_r1479 = core.ɵɵnextContext();
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1(" ", ctx_r1479.nzOption.nzLabel, "\n");
    } }
    function NzOptionLiComponent_ng_container_1_i_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelement(0, "i", 3);
    } }
    function NzOptionLiComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵtemplate(1, NzOptionLiComponent_ng_container_1_i_1_Template, 1, 0, "i", 2);
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var ctx_r1480 = core.ɵɵnextContext();
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", !ctx_r1480.nzMenuItemSelectedIcon)("ngIfElse", ctx_r1480.nzMenuItemSelectedIcon);
    } }
    var NzOptionLiComponent = /** @class */ (function () {
        function NzOptionLiComponent(elementRef, nzSelectService, cdr, renderer) {
            this.elementRef = elementRef;
            this.nzSelectService = nzSelectService;
            this.cdr = cdr;
            this.el = this.elementRef.nativeElement;
            this.selected = false;
            this.active = false;
            this.destroy$ = new rxjs.Subject();
            renderer.addClass(elementRef.nativeElement, 'ant-select-dropdown-menu-item');
        }
        NzOptionLiComponent.prototype.clickOption = function () {
            this.nzSelectService.clickOption(this.nzOption);
        };
        NzOptionLiComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.nzSelectService.listOfSelectedValue$.pipe(operators.takeUntil(this.destroy$)).subscribe(function (list) {
                _this.selected = core$1.isNotNil(list.find(function (v) { return _this.nzSelectService.compareWith(v, _this.nzOption.nzValue); }));
                _this.cdr.markForCheck();
            });
            this.nzSelectService.activatedOption$.pipe(operators.takeUntil(this.destroy$)).subscribe(function (option) {
                if (option) {
                    _this.active = _this.nzSelectService.compareWith(option.nzValue, _this.nzOption.nzValue);
                }
                else {
                    _this.active = false;
                }
                _this.cdr.markForCheck();
            });
        };
        NzOptionLiComponent.prototype.ngOnDestroy = function () {
            this.destroy$.next();
            this.destroy$.complete();
        };
        /** @nocollapse */ NzOptionLiComponent.ɵfac = function NzOptionLiComponent_Factory(t) { return new (t || NzOptionLiComponent)(core.ɵɵdirectiveInject(core.ElementRef), core.ɵɵdirectiveInject(NzSelectService), core.ɵɵdirectiveInject(core.ChangeDetectorRef), core.ɵɵdirectiveInject(core.Renderer2)); };
        /** @nocollapse */ NzOptionLiComponent.ɵcmp = core.ɵɵdefineComponent({ type: NzOptionLiComponent, selectors: [["", "nz-option-li", ""]], hostBindings: function NzOptionLiComponent_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
                core.ɵɵallocHostVars(5);
                core.ɵɵlistener("click", function NzOptionLiComponent_click_HostBindingHandler($event) { return ctx.clickOption(); })("mousedown", function NzOptionLiComponent_mousedown_HostBindingHandler($event) { return $event.preventDefault(); });
            } if (rf & 2) {
                core.ɵɵattribute("unselectable", "unselectable");
                core.ɵɵstyleProp("user-select", "none");
                core.ɵɵclassProp("ant-select-dropdown-menu-item-selected", ctx.selected && !ctx.nzOption.nzDisabled)("ant-select-dropdown-menu-item-disabled", ctx.nzOption.nzDisabled)("ant-select-dropdown-menu-item-active", ctx.active && !ctx.nzOption.nzDisabled);
            } }, inputs: { nzOption: "nzOption", nzMenuItemSelectedIcon: "nzMenuItemSelectedIcon" }, exportAs: ["nzOptionLi"], attrs: _c0$2, decls: 2, vars: 3, consts: [[4, "ngIf", "ngIfElse"], [4, "ngIf"], ["nz-icon", "", "nzType", "check", "class", "ant-select-selected-icon", 4, "ngIf", "ngIfElse"], ["nz-icon", "", "nzType", "check", 1, "ant-select-selected-icon"]], template: function NzOptionLiComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵtemplate(0, NzOptionLiComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
                core.ɵɵtemplate(1, NzOptionLiComponent_ng_container_1_Template, 2, 2, "ng-container", 1);
            } if (rf & 2) {
                core.ɵɵproperty("ngIf", !ctx.nzOption.nzCustomContent)("ngIfElse", ctx.nzOption.template);
                core.ɵɵadvance(1);
                core.ɵɵproperty("ngIf", ctx.nzSelectService.isMultipleOrTags);
            } }, directives: [common.NgIf, icon.NzIconDirective], encapsulation: 2, changeDetection: 0 });
        return NzOptionLiComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NzOptionLiComponent, [{
            type: core.Component,
            args: [{
                    selector: '[nz-option-li]',
                    exportAs: 'nzOptionLi',
                    templateUrl: './nz-option-li.component.html',
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    encapsulation: core.ViewEncapsulation.None,
                    host: {
                        '[class.ant-select-dropdown-menu-item-selected]': 'selected && !nzOption.nzDisabled',
                        '[class.ant-select-dropdown-menu-item-disabled]': 'nzOption.nzDisabled',
                        '[class.ant-select-dropdown-menu-item-active]': 'active && !nzOption.nzDisabled',
                        '[attr.unselectable]': '"unselectable"',
                        '[style.user-select]': '"none"',
                        '(click)': 'clickOption()',
                        '(mousedown)': '$event.preventDefault()'
                    }
                }]
        }], function () { return [{ type: core.ElementRef }, { type: NzSelectService }, { type: core.ChangeDetectorRef }, { type: core.Renderer2 }]; }, { nzOption: [{
                type: core.Input
            }], nzMenuItemSelectedIcon: [{
                type: core.Input
            }] }); })();

    /**
     * @license
     * Copyright Alibaba.com All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    var NzSelectUnselectableDirective = /** @class */ (function () {
        function NzSelectUnselectableDirective() {
        }
        /** @nocollapse */ NzSelectUnselectableDirective.ɵfac = function NzSelectUnselectableDirective_Factory(t) { return new (t || NzSelectUnselectableDirective)(); };
        /** @nocollapse */ NzSelectUnselectableDirective.ɵdir = core.ɵɵdefineDirective({ type: NzSelectUnselectableDirective, selectors: [["", "nz-select-unselectable", ""]], hostBindings: function NzSelectUnselectableDirective_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
                core.ɵɵallocHostVars(2);
            } if (rf & 2) {
                core.ɵɵattribute("unselectable", "unselectable");
                core.ɵɵstyleProp("user-select", "none");
            } }, exportAs: ["nzSelectUnselectable"] });
        return NzSelectUnselectableDirective;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NzSelectUnselectableDirective, [{
            type: core.Directive,
            args: [{
                    selector: '[nz-select-unselectable]',
                    exportAs: 'nzSelectUnselectable',
                    host: {
                        '[attr.unselectable]': '"unselectable"',
                        '[style.user-select]': '"none"'
                    }
                }]
        }], null, null); })();

    var _c0$3 = ["dropdownUl"];
    var _c1 = ["nz-option-container", ""];
    function NzOptionContainerComponent_li_2_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "li", 7);
        core.ɵɵelement(1, "nz-embed-empty", 8);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r1483 = core.ɵɵnextContext();
        core.ɵɵadvance(1);
        core.ɵɵproperty("nzComponentName", "select")("specificContent", ctx_r1483.nzNotFoundContent);
    } }
    function NzOptionContainerComponent_li_3_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelement(0, "li", 9);
    } if (rf & 2) {
        var ctx_r1484 = core.ɵɵnextContext();
        core.ɵɵproperty("nzMenuItemSelectedIcon", ctx_r1484.nzMenuItemSelectedIcon)("nzOption", ctx_r1484.nzSelectService.addedTagOption);
    } }
    function NzOptionContainerComponent_ng_container_4_li_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelement(0, "li", 9);
    } if (rf & 2) {
        var option_r1488 = core.ɵɵnextContext().$implicit;
        var ctx_r1489 = core.ɵɵnextContext();
        core.ɵɵproperty("nzMenuItemSelectedIcon", ctx_r1489.nzMenuItemSelectedIcon)("nzOption", option_r1488);
    } }
    function NzOptionContainerComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵtemplate(1, NzOptionContainerComponent_ng_container_4_li_1_Template, 1, 2, "li", 3);
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var option_r1488 = ctx.$implicit;
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", !option_r1488.nzHide);
    } }
    function NzOptionContainerComponent_li_6_ng_container_2_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵtext(1);
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var group_r1491 = core.ɵɵnextContext().$implicit;
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1(" ", group_r1491.nzLabel, " ");
    } }
    function NzOptionContainerComponent_li_6_ng_container_4_li_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelement(0, "li", 9);
    } if (rf & 2) {
        var option_r1495 = core.ɵɵnextContext().$implicit;
        var ctx_r1496 = core.ɵɵnextContext(2);
        core.ɵɵproperty("nzMenuItemSelectedIcon", ctx_r1496.nzMenuItemSelectedIcon)("nzOption", option_r1495);
    } }
    function NzOptionContainerComponent_li_6_ng_container_4_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵtemplate(1, NzOptionContainerComponent_li_6_ng_container_4_li_1_Template, 1, 2, "li", 3);
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var option_r1495 = ctx.$implicit;
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", !option_r1495.nzHide);
    } }
    function NzOptionContainerComponent_li_6_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "li", 10);
        core.ɵɵelementStart(1, "div", 11);
        core.ɵɵtemplate(2, NzOptionContainerComponent_li_6_ng_container_2_Template, 2, 1, "ng-container", 12);
        core.ɵɵelementEnd();
        core.ɵɵelementStart(3, "ul", 13);
        core.ɵɵtemplate(4, NzOptionContainerComponent_li_6_ng_container_4_Template, 2, 1, "ng-container", 4);
        core.ɵɵpipe(5, "nzFilterOption");
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var group_r1491 = ctx.$implicit;
        var ctx_r1486 = core.ɵɵnextContext();
        core.ɵɵadvance(1);
        core.ɵɵattribute("title", group_r1491.isLabelString ? group_r1491.nzLabel : "");
        core.ɵɵadvance(1);
        core.ɵɵproperty("nzStringTemplateOutlet", group_r1491.nzLabel);
        core.ɵɵadvance(2);
        core.ɵɵproperty("ngForOf", core.ɵɵpipeBind4(5, 4, group_r1491.listOfNzOptionComponent, ctx_r1486.nzSelectService.searchValue, ctx_r1486.nzSelectService.filterOption, ctx_r1486.nzSelectService.serverSearch))("ngForTrackBy", ctx_r1486.trackValue);
    } }
    function NzOptionContainerComponent_li_8_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelement(0, "li", 9);
    } if (rf & 2) {
        var option_r1498 = ctx.$implicit;
        var ctx_r1487 = core.ɵɵnextContext();
        core.ɵɵproperty("nzMenuItemSelectedIcon", ctx_r1487.nzMenuItemSelectedIcon)("nzOption", option_r1498);
    } }
    var NzOptionContainerComponent = /** @class */ (function () {
        function NzOptionContainerComponent(nzSelectService, cdr, ngZone) {
            this.nzSelectService = nzSelectService;
            this.cdr = cdr;
            this.ngZone = ngZone;
            this.destroy$ = new rxjs.Subject();
            this.lastScrollTop = 0;
            this.nzScrollToBottom = new core.EventEmitter();
        }
        NzOptionContainerComponent.prototype.scrollIntoViewIfNeeded = function (option) {
            var _this = this;
            // delay after open
            setTimeout(function () {
                if (_this.listOfNzOptionLiComponent && _this.listOfNzOptionLiComponent.length && option) {
                    var targetOption = _this.listOfNzOptionLiComponent.find(function (o) { return _this.nzSelectService.compareWith(o.nzOption.nzValue, option.nzValue); });
                    // tslint:disable:no-any
                    if (targetOption && targetOption.el && targetOption.el.scrollIntoViewIfNeeded) {
                        targetOption.el.scrollIntoViewIfNeeded(false);
                    }
                }
            });
        };
        NzOptionContainerComponent.prototype.trackLabel = function (_index, option) {
            return option.nzLabel;
        };
        // tslint:disable-next-line:no-any
        NzOptionContainerComponent.prototype.trackValue = function (_index, option) {
            return option.nzValue;
        };
        NzOptionContainerComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.nzSelectService.activatedOption$.pipe(operators.takeUntil(this.destroy$)).subscribe(function (option) {
                _this.scrollIntoViewIfNeeded(option);
            });
            this.nzSelectService.check$.pipe(operators.takeUntil(this.destroy$)).subscribe(function () {
                _this.cdr.markForCheck();
            });
            this.ngZone.runOutsideAngular(function () {
                var ul = _this.dropdownUl.nativeElement;
                rxjs.fromEvent(ul, 'scroll')
                    .pipe(operators.takeUntil(_this.destroy$))
                    .subscribe(function (e) {
                    e.preventDefault();
                    e.stopPropagation();
                    if (ul && ul.scrollTop > _this.lastScrollTop && ul.scrollHeight < ul.clientHeight + ul.scrollTop + 10) {
                        _this.lastScrollTop = ul.scrollTop;
                        _this.ngZone.run(function () {
                            _this.nzScrollToBottom.emit();
                        });
                    }
                });
            });
        };
        NzOptionContainerComponent.prototype.ngAfterViewInit = function () {
            var _this = this;
            this.listOfNzOptionLiComponent.changes
                .pipe(operators.map(function (list) { return list.length; }), operators.pairwise(), operators.filter(function (_a) {
                var _b = __read(_a, 2), before = _b[0], after = _b[1];
                return after < before;
            }), operators.takeUntil(this.destroy$))
                .subscribe(function () { return (_this.lastScrollTop = 0); });
        };
        NzOptionContainerComponent.prototype.ngOnDestroy = function () {
            this.destroy$.next();
            this.destroy$.complete();
        };
        /** @nocollapse */ NzOptionContainerComponent.ɵfac = function NzOptionContainerComponent_Factory(t) { return new (t || NzOptionContainerComponent)(core.ɵɵdirectiveInject(NzSelectService), core.ɵɵdirectiveInject(core.ChangeDetectorRef), core.ɵɵdirectiveInject(core.NgZone)); };
        /** @nocollapse */ NzOptionContainerComponent.ɵcmp = core.ɵɵdefineComponent({ type: NzOptionContainerComponent, selectors: [["", "nz-option-container", ""]], viewQuery: function NzOptionContainerComponent_Query(rf, ctx) { if (rf & 1) {
                core.ɵɵstaticViewQuery(_c0$3, true);
                core.ɵɵviewQuery(NzOptionLiComponent, true);
            } if (rf & 2) {
                var _t;
                core.ɵɵqueryRefresh(_t = core.ɵɵloadQuery()) && (ctx.dropdownUl = _t.first);
                core.ɵɵqueryRefresh(_t = core.ɵɵloadQuery()) && (ctx.listOfNzOptionLiComponent = _t);
            } }, inputs: { nzNotFoundContent: "nzNotFoundContent", nzMenuItemSelectedIcon: "nzMenuItemSelectedIcon" }, outputs: { nzScrollToBottom: "nzScrollToBottom" }, exportAs: ["nzOptionContainer"], attrs: _c1, decls: 10, vars: 23, consts: [["role", "menu", "tabindex", "0", 1, "ant-select-dropdown-menu", "ant-select-dropdown-menu-root", "ant-select-dropdown-menu-vertical"], ["dropdownUl", ""], ["nz-select-unselectable", "", "class", "ant-select-dropdown-menu-item ant-select-dropdown-menu-item-disabled", 4, "ngIf"], ["nz-option-li", "", 3, "nzMenuItemSelectedIcon", "nzOption", 4, "ngIf"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "ant-select-dropdown-menu-item-group", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["nz-option-li", "", 3, "nzMenuItemSelectedIcon", "nzOption", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["nz-select-unselectable", "", 1, "ant-select-dropdown-menu-item", "ant-select-dropdown-menu-item-disabled"], [3, "nzComponentName", "specificContent"], ["nz-option-li", "", 3, "nzMenuItemSelectedIcon", "nzOption"], [1, "ant-select-dropdown-menu-item-group"], [1, "ant-select-dropdown-menu-item-group-title"], [4, "nzStringTemplateOutlet"], [1, "ant-select-dropdown-menu-item-group-list"]], template: function NzOptionContainerComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵelementStart(0, "ul", 0, 1);
                core.ɵɵtemplate(2, NzOptionContainerComponent_li_2_Template, 2, 2, "li", 2);
                core.ɵɵtemplate(3, NzOptionContainerComponent_li_3_Template, 1, 2, "li", 3);
                core.ɵɵtemplate(4, NzOptionContainerComponent_ng_container_4_Template, 2, 1, "ng-container", 4);
                core.ɵɵpipe(5, "nzFilterOption");
                core.ɵɵtemplate(6, NzOptionContainerComponent_li_6_Template, 6, 9, "li", 5);
                core.ɵɵpipe(7, "nzFilterGroupOption");
                core.ɵɵtemplate(8, NzOptionContainerComponent_li_8_Template, 1, 2, "li", 6);
                core.ɵɵpipe(9, "nzFilterOption");
                core.ɵɵelementEnd();
            } if (rf & 2) {
                core.ɵɵadvance(2);
                core.ɵɵproperty("ngIf", ctx.nzSelectService.isShowNotFound);
                core.ɵɵadvance(1);
                core.ɵɵproperty("ngIf", ctx.nzSelectService.addedTagOption);
                core.ɵɵadvance(1);
                core.ɵɵproperty("ngForOf", core.ɵɵpipeBind4(5, 8, ctx.nzSelectService.listOfNzOptionComponent, ctx.nzSelectService.searchValue, ctx.nzSelectService.filterOption, ctx.nzSelectService.serverSearch))("ngForTrackBy", ctx.trackValue);
                core.ɵɵadvance(2);
                core.ɵɵproperty("ngForOf", core.ɵɵpipeBind4(7, 13, ctx.nzSelectService.listOfNzOptionGroupComponent, ctx.nzSelectService.searchValue, ctx.nzSelectService.filterOption, ctx.nzSelectService.serverSearch))("ngForTrackBy", ctx.trackLabel);
                core.ɵɵadvance(2);
                core.ɵɵproperty("ngForOf", core.ɵɵpipeBind4(9, 18, ctx.nzSelectService.listOfTagOption, ctx.nzSelectService.searchValue, ctx.nzSelectService.filterOption, ctx.nzSelectService.serverSearch))("ngForTrackBy", ctx.trackValue);
            } }, directives: [common.NgIf, common.NgForOf, NzSelectUnselectableDirective, empty.NzEmbedEmptyComponent, NzOptionLiComponent, core$1.NzStringTemplateOutletDirective], pipes: [NzFilterOptionPipe, NzFilterGroupOptionPipe], encapsulation: 2, changeDetection: 0 });
        return NzOptionContainerComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NzOptionContainerComponent, [{
            type: core.Component,
            args: [{
                    selector: '[nz-option-container]',
                    exportAs: 'nzOptionContainer',
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    encapsulation: core.ViewEncapsulation.None,
                    preserveWhitespaces: false,
                    templateUrl: './nz-option-container.component.html'
                }]
        }], function () { return [{ type: NzSelectService }, { type: core.ChangeDetectorRef }, { type: core.NgZone }]; }, { listOfNzOptionLiComponent: [{
                type: core.ViewChildren,
                args: [NzOptionLiComponent]
            }], dropdownUl: [{
                type: core.ViewChild,
                args: ['dropdownUl', { static: true }]
            }], nzNotFoundContent: [{
                type: core.Input
            }], nzMenuItemSelectedIcon: [{
                type: core.Input
            }], nzScrollToBottom: [{
                type: core.Output
            }] }); })();

    /**
     * @license
     * Copyright Alibaba.com All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    var _c0$4 = ["inputElement"];
    var _c1$1 = ["mirrorElement"];
    var _c2 = ["nz-select-top-control", ""];
    function NzSelectTopControlComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
        var _r1509 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "input", 6, 7);
        core.ɵɵlistener("compositionstart", function NzSelectTopControlComponent_ng_template_0_Template_input_compositionstart_0_listener($event) { core.ɵɵrestoreView(_r1509); var ctx_r1508 = core.ɵɵnextContext(); return ctx_r1508.isComposing = true; })("compositionend", function NzSelectTopControlComponent_ng_template_0_Template_input_compositionend_0_listener($event) { core.ɵɵrestoreView(_r1509); var ctx_r1510 = core.ɵɵnextContext(); return ctx_r1510.isComposing = false; })("ngModelChange", function NzSelectTopControlComponent_ng_template_0_Template_input_ngModelChange_0_listener($event) { core.ɵɵrestoreView(_r1509); var ctx_r1511 = core.ɵɵnextContext(); return ctx_r1511.setInputValue($event); });
        core.ɵɵelementEnd();
        core.ɵɵelement(2, "span", 8, 9);
    } if (rf & 2) {
        var ctx_r1500 = core.ɵɵnextContext();
        core.ɵɵproperty("ngModel", ctx_r1500.inputValue)("disabled", ctx_r1500.nzSelectService.disabled);
    } }
    function NzSelectTopControlComponent_div_3_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div", 10);
        core.ɵɵtext(1);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r1501 = core.ɵɵnextContext();
        core.ɵɵstyleProp("display", ctx_r1501.placeHolderDisplay);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1(" ", ctx_r1501.nzPlaceHolder, " ");
    } }
    function NzSelectTopControlComponent_ng_container_4_div_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵelementContainerStart(1);
        core.ɵɵtext(2);
        core.ɵɵelementContainerEnd();
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var ctx_r1514 = core.ɵɵnextContext(3);
        core.ɵɵadvance(2);
        core.ɵɵtextInterpolate(ctx_r1514.nzSelectService.listOfCachedSelectedOption[0] == null ? null : ctx_r1514.nzSelectService.listOfCachedSelectedOption[0].nzLabel);
    } }
    var _c3 = function (a0) { return { $implicit: a0 }; };
    function NzSelectTopControlComponent_ng_container_4_div_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div", 13);
        core.ɵɵtemplate(1, NzSelectTopControlComponent_ng_container_4_div_1_ng_container_1_Template, 3, 1, "ng-container", 14);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r1512 = core.ɵɵnextContext(2);
        core.ɵɵproperty("ngStyle", ctx_r1512.selectedValueStyle);
        core.ɵɵattribute("title", ctx_r1512.nzSelectService.listOfCachedSelectedOption[0] == null ? null : ctx_r1512.nzSelectService.listOfCachedSelectedOption[0].nzLabel);
        core.ɵɵadvance(1);
        core.ɵɵproperty("nzStringTemplateOutlet", ctx_r1512.nzCustomTemplate)("nzStringTemplateOutletContext", core.ɵɵpureFunction1(4, _c3, ctx_r1512.nzSelectService.listOfCachedSelectedOption[0]));
    } }
    function NzSelectTopControlComponent_ng_container_4_div_2_ng_template_2_Template(rf, ctx) { }
    function NzSelectTopControlComponent_ng_container_4_div_2_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div", 15);
        core.ɵɵelementStart(1, "div", 16);
        core.ɵɵtemplate(2, NzSelectTopControlComponent_ng_container_4_div_2_ng_template_2_Template, 0, 0, "ng-template", 17);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r1513 = core.ɵɵnextContext(2);
        var _r1499 = core.ɵɵreference(1);
        core.ɵɵstyleProp("display", ctx_r1513.nzOpen ? "block" : "none");
        core.ɵɵadvance(2);
        core.ɵɵproperty("ngTemplateOutlet", _r1499);
    } }
    function NzSelectTopControlComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵtemplate(1, NzSelectTopControlComponent_ng_container_4_div_1_Template, 2, 6, "div", 11);
        core.ɵɵtemplate(2, NzSelectTopControlComponent_ng_container_4_div_2_Template, 3, 2, "div", 12);
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var ctx_r1502 = core.ɵɵnextContext();
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", ctx_r1502.nzSelectService.listOfCachedSelectedOption.length && ctx_r1502.nzSelectService.listOfSelectedValue.length);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", ctx_r1502.nzShowSearch);
    } }
    function NzSelectTopControlComponent_ul_5_ng_container_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵelementStart(1, "div", 22);
        core.ɵɵtext(2);
        core.ɵɵelementEnd();
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var option_r1519 = core.ɵɵnextContext().$implicit;
        core.ɵɵadvance(2);
        core.ɵɵtextInterpolate(option_r1519.nzLabel);
    } }
    function NzSelectTopControlComponent_ul_5_ng_container_1_span_3_i_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelement(0, "i", 25);
    } }
    function NzSelectTopControlComponent_ul_5_ng_container_1_span_3_Template(rf, ctx) { if (rf & 1) {
        var _r1526 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "span", 23);
        core.ɵɵlistener("mousedown", function NzSelectTopControlComponent_ul_5_ng_container_1_span_3_Template_span_mousedown_0_listener($event) { core.ɵɵrestoreView(_r1526); return $event.preventDefault(); })("click", function NzSelectTopControlComponent_ul_5_ng_container_1_span_3_Template_span_click_0_listener($event) { core.ɵɵrestoreView(_r1526); var option_r1519 = core.ɵɵnextContext().$implicit; var ctx_r1527 = core.ɵɵnextContext(2); return ctx_r1527.removeSelectedValue(option_r1519, $event); });
        core.ɵɵtemplate(1, NzSelectTopControlComponent_ul_5_ng_container_1_span_3_i_1_Template, 1, 0, "i", 24);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r1522 = core.ɵɵnextContext(3);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", !ctx_r1522.nzRemoveIcon)("ngIfElse", ctx_r1522.nzRemoveIcon);
    } }
    function NzSelectTopControlComponent_ul_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
        var _r1530 = core.ɵɵgetCurrentView();
        core.ɵɵelementContainerStart(0);
        core.ɵɵelementStart(1, "li", 20);
        core.ɵɵlistener("@zoomMotion.done", function NzSelectTopControlComponent_ul_5_ng_container_1_Template_li_animation_zoomMotion_done_1_listener($event) { core.ɵɵrestoreView(_r1530); var ctx_r1529 = core.ɵɵnextContext(2); return ctx_r1529.animationEnd(); });
        core.ɵɵtemplate(2, NzSelectTopControlComponent_ul_5_ng_container_1_ng_container_2_Template, 3, 1, "ng-container", 14);
        core.ɵɵtemplate(3, NzSelectTopControlComponent_ul_5_ng_container_1_span_3_Template, 2, 2, "span", 21);
        core.ɵɵelementEnd();
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var option_r1519 = ctx.$implicit;
        var index_r1520 = ctx.index;
        var ctx_r1516 = core.ɵɵnextContext(2);
        core.ɵɵadvance(1);
        core.ɵɵclassProp("ant-select-selection__choice__disabled", option_r1519.nzDisabled);
        core.ɵɵproperty("@zoomMotion", undefined)("@.disabled", ctx_r1516.noAnimation == null ? null : ctx_r1516.noAnimation.nzNoAnimation)("nzNoAnimation", ctx_r1516.noAnimation == null ? null : ctx_r1516.noAnimation.nzNoAnimation);
        core.ɵɵattribute("title", option_r1519.nzLabel);
        core.ɵɵadvance(1);
        core.ɵɵproperty("nzStringTemplateOutlet", ctx_r1516.nzCustomTemplate)("nzStringTemplateOutletContext", core.ɵɵpureFunction1(8, _c3, ctx_r1516.nzSelectService.listOfCachedSelectedOption[index_r1520]));
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", !option_r1519.nzDisabled);
    } }
    function NzSelectTopControlComponent_ul_5_li_3_ng_container_2_ng_template_1_Template(rf, ctx) { }
    function NzSelectTopControlComponent_ul_5_li_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵtemplate(1, NzSelectTopControlComponent_ul_5_li_3_ng_container_2_ng_template_1_Template, 0, 0, "ng-template", 26);
        core.ɵɵpipe(2, "slice");
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var ctx_r1531 = core.ɵɵnextContext(3);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngTemplateOutlet", ctx_r1531.nzMaxTagPlaceholder)("ngTemplateOutletContext", core.ɵɵpureFunction1(5, _c3, core.ɵɵpipeBind2(2, 2, ctx_r1531.nzSelectService.listOfSelectedValue, ctx_r1531.nzMaxTagCount)));
    } }
    function NzSelectTopControlComponent_ul_5_li_3_ng_container_3_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵtext(1);
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var ctx_r1532 = core.ɵɵnextContext(3);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1(" + ", ctx_r1532.nzSelectService.listOfCachedSelectedOption.length - ctx_r1532.nzMaxTagCount, " ... ");
    } }
    function NzSelectTopControlComponent_ul_5_li_3_Template(rf, ctx) { if (rf & 1) {
        var _r1535 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "li", 20);
        core.ɵɵlistener("@zoomMotion.done", function NzSelectTopControlComponent_ul_5_li_3_Template_li_animation_zoomMotion_done_0_listener($event) { core.ɵɵrestoreView(_r1535); var ctx_r1534 = core.ɵɵnextContext(2); return ctx_r1534.animationEnd(); });
        core.ɵɵelementStart(1, "div", 22);
        core.ɵɵtemplate(2, NzSelectTopControlComponent_ul_5_li_3_ng_container_2_Template, 3, 7, "ng-container", 3);
        core.ɵɵtemplate(3, NzSelectTopControlComponent_ul_5_li_3_ng_container_3_Template, 2, 1, "ng-container", 3);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r1517 = core.ɵɵnextContext(2);
        core.ɵɵproperty("@zoomMotion", undefined)("@.disabled", ctx_r1517.noAnimation == null ? null : ctx_r1517.noAnimation.nzNoAnimation)("nzNoAnimation", ctx_r1517.noAnimation == null ? null : ctx_r1517.noAnimation.nzNoAnimation);
        core.ɵɵadvance(2);
        core.ɵɵproperty("ngIf", ctx_r1517.nzMaxTagPlaceholder);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", !ctx_r1517.nzMaxTagPlaceholder);
    } }
    function NzSelectTopControlComponent_ul_5_ng_template_5_Template(rf, ctx) { }
    function NzSelectTopControlComponent_ul_5_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "ul");
        core.ɵɵtemplate(1, NzSelectTopControlComponent_ul_5_ng_container_1_Template, 4, 10, "ng-container", 18);
        core.ɵɵpipe(2, "slice");
        core.ɵɵtemplate(3, NzSelectTopControlComponent_ul_5_li_3_Template, 4, 5, "li", 19);
        core.ɵɵelementStart(4, "li", 15);
        core.ɵɵtemplate(5, NzSelectTopControlComponent_ul_5_ng_template_5_Template, 0, 0, "ng-template", 17);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r1503 = core.ɵɵnextContext();
        var _r1499 = core.ɵɵreference(1);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngForOf", core.ɵɵpipeBind3(2, 4, ctx_r1503.nzSelectService.listOfCachedSelectedOption, 0, ctx_r1503.nzMaxTagCount))("ngForTrackBy", ctx_r1503.trackValue);
        core.ɵɵadvance(2);
        core.ɵɵproperty("ngIf", ctx_r1503.nzSelectService.listOfCachedSelectedOption.length > ctx_r1503.nzMaxTagCount);
        core.ɵɵadvance(2);
        core.ɵɵproperty("ngTemplateOutlet", _r1499);
    } }
    function NzSelectTopControlComponent_span_6_i_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelement(0, "i", 29);
    } }
    function NzSelectTopControlComponent_span_6_Template(rf, ctx) { if (rf & 1) {
        var _r1538 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "span", 27);
        core.ɵɵlistener("mousedown", function NzSelectTopControlComponent_span_6_Template_span_mousedown_0_listener($event) { core.ɵɵrestoreView(_r1538); return $event.preventDefault(); })("click", function NzSelectTopControlComponent_span_6_Template_span_click_0_listener($event) { core.ɵɵrestoreView(_r1538); var ctx_r1539 = core.ɵɵnextContext(); return ctx_r1539.onClearSelection($event); });
        core.ɵɵtemplate(1, NzSelectTopControlComponent_span_6_i_1_Template, 1, 0, "i", 28);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r1504 = core.ɵɵnextContext();
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", !ctx_r1504.nzClearIcon)("ngIfElse", ctx_r1504.nzClearIcon);
    } }
    function NzSelectTopControlComponent_span_7_i_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelement(0, "i", 33);
    } }
    function NzSelectTopControlComponent_span_7_ng_template_2_i_0_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelement(0, "i", 35);
    } }
    function NzSelectTopControlComponent_span_7_ng_template_2_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵtemplate(0, NzSelectTopControlComponent_span_7_ng_template_2_i_0_Template, 1, 0, "i", 34);
    } if (rf & 2) {
        var ctx_r1542 = core.ɵɵnextContext(2);
        core.ɵɵproperty("ngIf", !ctx_r1542.nzSuffixIcon)("ngIfElse", ctx_r1542.nzSuffixIcon);
    } }
    function NzSelectTopControlComponent_span_7_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "span", 30);
        core.ɵɵtemplate(1, NzSelectTopControlComponent_span_7_i_1_Template, 1, 0, "i", 31);
        core.ɵɵtemplate(2, NzSelectTopControlComponent_span_7_ng_template_2_Template, 1, 2, "ng-template", null, 32, core.ɵɵtemplateRefExtractor);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var _r1541 = core.ɵɵreference(3);
        var ctx_r1505 = core.ɵɵnextContext();
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", ctx_r1505.nzLoading)("ngIfElse", _r1541);
    } }
    var NzSelectTopControlComponent = /** @class */ (function () {
        function NzSelectTopControlComponent(renderer, nzSelectService, cdr, noAnimation) {
            this.renderer = renderer;
            this.nzSelectService = nzSelectService;
            this.cdr = cdr;
            this.noAnimation = noAnimation;
            this.isComposing = false;
            this.destroy$ = new rxjs.Subject();
            this.nzShowSearch = false;
            this.nzOpen = false;
            this.nzAllowClear = false;
            this.nzShowArrow = true;
            this.nzLoading = false;
            this.nzTokenSeparators = [];
        }
        NzSelectTopControlComponent.prototype.onClearSelection = function (e) {
            e.stopPropagation();
            this.nzSelectService.updateListOfSelectedValue([], true);
        };
        NzSelectTopControlComponent.prototype.setInputValue = function (value) {
            /** fix clear value https://github.com/NG-ZORRO/ng-zorro-antd/issues/3825 **/
            if (this.inputDOM && !value) {
                this.inputDOM.value = value;
            }
            this.inputValue = value;
            this.updateWidth();
            this.nzSelectService.updateSearchValue(value);
            this.nzSelectService.tokenSeparate(this.inputValue, this.nzTokenSeparators);
        };
        Object.defineProperty(NzSelectTopControlComponent.prototype, "mirrorDOM", {
            get: function () {
                return this.mirrorElement && this.mirrorElement.nativeElement;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzSelectTopControlComponent.prototype, "inputDOM", {
            get: function () {
                return this.inputElement && this.inputElement.nativeElement;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzSelectTopControlComponent.prototype, "placeHolderDisplay", {
            get: function () {
                return this.inputValue || this.isComposing || this.nzSelectService.listOfSelectedValue.length ? 'none' : 'block';
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzSelectTopControlComponent.prototype, "selectedValueStyle", {
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
        // tslint:disable-next-line:no-any
        NzSelectTopControlComponent.prototype.trackValue = function (_index, option) {
            return option.nzValue;
        };
        NzSelectTopControlComponent.prototype.updateWidth = function () {
            if (this.mirrorDOM && this.inputDOM && this.inputDOM.value) {
                this.mirrorDOM.innerText = this.inputDOM.value + "&nbsp;";
                this.renderer.removeStyle(this.inputDOM, 'width');
                this.renderer.setStyle(this.inputDOM, 'width', this.mirrorDOM.clientWidth + "px");
            }
            else if (this.inputDOM) {
                this.renderer.removeStyle(this.inputDOM, 'width');
                this.mirrorDOM.innerText = '';
            }
        };
        NzSelectTopControlComponent.prototype.removeSelectedValue = function (option, e) {
            this.nzSelectService.removeValueFormSelected(option);
            e.stopPropagation();
        };
        NzSelectTopControlComponent.prototype.animationEnd = function () {
            this.nzSelectService.animationEvent$.next();
        };
        NzSelectTopControlComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.nzSelectService.open$.pipe(operators.takeUntil(this.destroy$)).subscribe(function (open) {
                if (_this.inputElement && open) {
                    setTimeout(function () { return _this.inputDOM.focus(); });
                }
            });
            this.nzSelectService.clearInput$.pipe(operators.takeUntil(this.destroy$)).subscribe(function () {
                _this.setInputValue('');
            });
            this.nzSelectService.check$.pipe(operators.takeUntil(this.destroy$)).subscribe(function () {
                _this.cdr.markForCheck();
            });
        };
        NzSelectTopControlComponent.prototype.ngOnDestroy = function () {
            this.destroy$.next();
            this.destroy$.complete();
        };
        /** @nocollapse */ NzSelectTopControlComponent.ɵfac = function NzSelectTopControlComponent_Factory(t) { return new (t || NzSelectTopControlComponent)(core.ɵɵdirectiveInject(core.Renderer2), core.ɵɵdirectiveInject(NzSelectService), core.ɵɵdirectiveInject(core.ChangeDetectorRef), core.ɵɵdirectiveInject(core$1.NzNoAnimationDirective, 9)); };
        /** @nocollapse */ NzSelectTopControlComponent.ɵcmp = core.ɵɵdefineComponent({ type: NzSelectTopControlComponent, selectors: [["", "nz-select-top-control", ""]], viewQuery: function NzSelectTopControlComponent_Query(rf, ctx) { if (rf & 1) {
                core.ɵɵviewQuery(_c0$4, true);
                core.ɵɵviewQuery(_c1$1, true);
            } if (rf & 2) {
                var _t;
                core.ɵɵqueryRefresh(_t = core.ɵɵloadQuery()) && (ctx.inputElement = _t.first);
                core.ɵɵqueryRefresh(_t = core.ɵɵloadQuery()) && (ctx.mirrorElement = _t.first);
            } }, inputs: { nzShowSearch: "nzShowSearch", nzPlaceHolder: "nzPlaceHolder", nzOpen: "nzOpen", nzMaxTagCount: "nzMaxTagCount", nzAllowClear: "nzAllowClear", nzShowArrow: "nzShowArrow", nzLoading: "nzLoading", nzCustomTemplate: "nzCustomTemplate", nzSuffixIcon: "nzSuffixIcon", nzClearIcon: "nzClearIcon", nzRemoveIcon: "nzRemoveIcon", nzMaxTagPlaceholder: "nzMaxTagPlaceholder", nzTokenSeparators: "nzTokenSeparators" }, exportAs: ["nzSelectTopControl"], attrs: _c2, decls: 8, vars: 5, consts: [["inputTemplate", ""], [1, "ant-select-selection__rendered"], ["nz-select-unselectable", "", "class", "ant-select-selection__placeholder", 3, "display", 4, "ngIf"], [4, "ngIf"], ["class", "ant-select-selection__clear", "nz-select-unselectable", "", 3, "mousedown", "click", 4, "ngIf"], ["class", "ant-select-arrow", "nz-select-unselectable", "", 4, "ngIf"], ["autocomplete", "something-new", 1, "ant-select-search__field", 3, "ngModel", "disabled", "compositionstart", "compositionend", "ngModelChange"], ["inputElement", ""], [1, "ant-select-search__field__mirror"], ["mirrorElement", ""], ["nz-select-unselectable", "", 1, "ant-select-selection__placeholder"], ["class", "ant-select-selection-selected-value", 3, "ngStyle", 4, "ngIf"], ["class", "ant-select-search ant-select-search--inline", 3, "display", 4, "ngIf"], [1, "ant-select-selection-selected-value", 3, "ngStyle"], [4, "nzStringTemplateOutlet", "nzStringTemplateOutletContext"], [1, "ant-select-search", "ant-select-search--inline"], [1, "ant-select-search__field__wrap"], [3, "ngTemplateOutlet"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "ant-select-selection__choice", 3, "nzNoAnimation", 4, "ngIf"], [1, "ant-select-selection__choice", 3, "nzNoAnimation"], ["class", "ant-select-selection__choice__remove", 3, "mousedown", "click", 4, "ngIf"], [1, "ant-select-selection__choice__content"], [1, "ant-select-selection__choice__remove", 3, "mousedown", "click"], ["nz-icon", "", "nzType", "close", "class", "ant-select-remove-icon", 4, "ngIf", "ngIfElse"], ["nz-icon", "", "nzType", "close", 1, "ant-select-remove-icon"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["nz-select-unselectable", "", 1, "ant-select-selection__clear", 3, "mousedown", "click"], ["nz-icon", "", "nzType", "close-circle", "nzTheme", "fill", "class", "ant-select-close-icon", 4, "ngIf", "ngIfElse"], ["nz-icon", "", "nzType", "close-circle", "nzTheme", "fill", 1, "ant-select-close-icon"], ["nz-select-unselectable", "", 1, "ant-select-arrow"], ["nz-icon", "", "nzType", "loading", 4, "ngIf", "ngIfElse"], ["defaultArrow", ""], ["nz-icon", "", "nzType", "loading"], ["nz-icon", "", "nzType", "down", "class", "ant-select-arrow-icon", 4, "ngIf", "ngIfElse"], ["nz-icon", "", "nzType", "down", 1, "ant-select-arrow-icon"]], template: function NzSelectTopControlComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵtemplate(0, NzSelectTopControlComponent_ng_template_0_Template, 4, 2, "ng-template", null, 0, core.ɵɵtemplateRefExtractor);
                core.ɵɵelementStart(2, "div", 1);
                core.ɵɵtemplate(3, NzSelectTopControlComponent_div_3_Template, 2, 2, "div", 2);
                core.ɵɵtemplate(4, NzSelectTopControlComponent_ng_container_4_Template, 3, 2, "ng-container", 3);
                core.ɵɵtemplate(5, NzSelectTopControlComponent_ul_5_Template, 6, 8, "ul", 3);
                core.ɵɵelementEnd();
                core.ɵɵtemplate(6, NzSelectTopControlComponent_span_6_Template, 2, 2, "span", 4);
                core.ɵɵtemplate(7, NzSelectTopControlComponent_span_7_Template, 4, 2, "span", 5);
            } if (rf & 2) {
                core.ɵɵadvance(3);
                core.ɵɵproperty("ngIf", ctx.nzPlaceHolder);
                core.ɵɵadvance(1);
                core.ɵɵproperty("ngIf", ctx.nzSelectService.isSingleMode);
                core.ɵɵadvance(1);
                core.ɵɵproperty("ngIf", ctx.nzSelectService.isMultipleOrTags);
                core.ɵɵadvance(1);
                core.ɵɵproperty("ngIf", ctx.nzAllowClear && ctx.nzSelectService.listOfSelectedValue.length);
                core.ɵɵadvance(1);
                core.ɵɵproperty("ngIf", ctx.nzShowArrow);
            } }, directives: [common.NgIf, forms.DefaultValueAccessor, forms.NgControlStatus, forms.NgModel, NzSelectUnselectableDirective, common.NgStyle, core$1.NzStringTemplateOutletDirective, common.NgTemplateOutlet, common.NgForOf, core$1.NzNoAnimationDirective, icon.NzIconDirective], pipes: [common.SlicePipe], encapsulation: 2, data: { animation: [core$1.zoomMotion] }, changeDetection: 0 });
        return NzSelectTopControlComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NzSelectTopControlComponent, [{
            type: core.Component,
            args: [{
                    selector: '[nz-select-top-control]',
                    exportAs: 'nzSelectTopControl',
                    preserveWhitespaces: false,
                    animations: [core$1.zoomMotion],
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    encapsulation: core.ViewEncapsulation.None,
                    templateUrl: './nz-select-top-control.component.html'
                }]
        }], function () { return [{ type: core.Renderer2 }, { type: NzSelectService }, { type: core.ChangeDetectorRef }, { type: core$1.NzNoAnimationDirective, decorators: [{
                    type: core.Host
                }, {
                    type: core.Optional
                }] }]; }, { inputElement: [{
                type: core.ViewChild,
                args: ['inputElement', { static: false }]
            }], mirrorElement: [{
                type: core.ViewChild,
                args: ['mirrorElement', { static: false }]
            }], nzShowSearch: [{
                type: core.Input
            }], nzPlaceHolder: [{
                type: core.Input
            }], nzOpen: [{
                type: core.Input
            }], nzMaxTagCount: [{
                type: core.Input
            }], nzAllowClear: [{
                type: core.Input
            }], nzShowArrow: [{
                type: core.Input
            }], nzLoading: [{
                type: core.Input
            }], nzCustomTemplate: [{
                type: core.Input
            }], nzSuffixIcon: [{
                type: core.Input
            }], nzClearIcon: [{
                type: core.Input
            }], nzRemoveIcon: [{
                type: core.Input
            }], nzMaxTagPlaceholder: [{
                type: core.Input
            }], nzTokenSeparators: [{
                type: core.Input
            }] }); })();

    function NzSelectComponent_ng_template_1_ng_template_2_Template(rf, ctx) { }
    var _c0$5 = function (a0) { return [a0]; };
    function NzSelectComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
        var _r1548 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "div", 2);
        core.ɵɵelementStart(1, "div", 3);
        core.ɵɵlistener("keydown", function NzSelectComponent_ng_template_1_Template_div_keydown_1_listener($event) { core.ɵɵrestoreView(_r1548); var ctx_r1547 = core.ɵɵnextContext(); return ctx_r1547.onKeyDown($event); })("nzScrollToBottom", function NzSelectComponent_ng_template_1_Template_div_nzScrollToBottom_1_listener($event) { core.ɵɵrestoreView(_r1548); var ctx_r1549 = core.ɵɵnextContext(); return ctx_r1549.nzScrollToBottom.emit(); });
        core.ɵɵelementEnd();
        core.ɵɵtemplate(2, NzSelectComponent_ng_template_1_ng_template_2_Template, 0, 0, "ng-template", 4);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r1544 = core.ɵɵnextContext();
        core.ɵɵclassProp("ant-select-dropdown--single", ctx_r1544.nzSelectService.isSingleMode)("ant-select-dropdown--multiple", ctx_r1544.nzSelectService.isMultipleOrTags)("ant-select-dropdown-placement-bottomLeft", ctx_r1544.dropDownPosition === "bottom")("ant-select-dropdown-placement-topLeft", ctx_r1544.dropDownPosition === "top");
        core.ɵɵproperty("nzClassListAdd", core.ɵɵpureFunction1(12, _c0$5, ctx_r1544.nzDropdownClassName))("@slideMotion", ctx_r1544.dropDownPosition)("@.disabled", ctx_r1544.noAnimation == null ? null : ctx_r1544.noAnimation.nzNoAnimation)("nzNoAnimation", ctx_r1544.noAnimation == null ? null : ctx_r1544.noAnimation.nzNoAnimation)("ngStyle", ctx_r1544.nzDropdownStyle);
        core.ɵɵadvance(1);
        core.ɵɵproperty("nzMenuItemSelectedIcon", ctx_r1544.nzMenuItemSelectedIcon)("nzNotFoundContent", ctx_r1544.nzNotFoundContent);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngTemplateOutlet", ctx_r1544.nzDropdownRender);
    } }
    function NzSelectComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵprojection(0);
    } }
    var _c1$2 = ["*"];
    var NzSelectComponent = /** @class */ (function () {
        function NzSelectComponent(renderer, nzSelectService, cdr, platform, elementRef, noAnimation) {
            this.nzSelectService = nzSelectService;
            this.cdr = cdr;
            this.platform = platform;
            this.noAnimation = noAnimation;
            this.open = false;
            this.onChange = function () { return null; };
            this.onTouched = function () { return null; };
            this.dropDownPosition = 'bottom';
            this._disabled = false;
            this.isInit = false;
            this.destroy$ = new rxjs.Subject();
            this.nzOnSearch = new core.EventEmitter();
            this.nzScrollToBottom = new core.EventEmitter();
            this.nzOpenChange = new core.EventEmitter();
            this.nzBlur = new core.EventEmitter();
            this.nzFocus = new core.EventEmitter();
            this.nzSize = 'default';
            this.nzDropdownMatchSelectWidth = true;
            this.nzAllowClear = false;
            this.nzShowSearch = false;
            this.nzLoading = false;
            this.nzAutoFocus = false;
            this.nzShowArrow = true;
            this.nzTokenSeparators = [];
            renderer.addClass(elementRef.nativeElement, 'ant-select');
        }
        Object.defineProperty(NzSelectComponent.prototype, "nzAutoClearSearchValue", {
            set: function (value) {
                this.nzSelectService.autoClearSearchValue = core$1.toBoolean(value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzSelectComponent.prototype, "nzMaxMultipleCount", {
            set: function (value) {
                this.nzSelectService.maxMultipleCount = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzSelectComponent.prototype, "nzServerSearch", {
            set: function (value) {
                this.nzSelectService.serverSearch = core$1.toBoolean(value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzSelectComponent.prototype, "nzMode", {
            set: function (value) {
                this.nzSelectService.mode = value;
                this.nzSelectService.check();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzSelectComponent.prototype, "nzFilterOption", {
            set: function (value) {
                this.nzSelectService.filterOption = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzSelectComponent.prototype, "compareWith", {
            set: function (value) {
                this.nzSelectService.compareWith = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzSelectComponent.prototype, "nzOpen", {
            set: function (value) {
                this.open = value;
                this.nzSelectService.setOpenState(value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzSelectComponent.prototype, "nzDisabled", {
            get: function () {
                return this._disabled;
            },
            set: function (value) {
                this._disabled = core$1.toBoolean(value);
                this.nzSelectService.disabled = this._disabled;
                this.nzSelectService.check();
                if (this.nzDisabled && this.isInit) {
                    this.closeDropDown();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzSelectComponent.prototype, "nzSelectTopControlDOM", {
            get: function () {
                return this.nzSelectTopControlElement && this.nzSelectTopControlElement.nativeElement;
            },
            enumerable: true,
            configurable: true
        });
        NzSelectComponent.prototype.updateAutoFocus = function () {
            if (this.nzSelectTopControlDOM && this.nzAutoFocus) {
                this.nzSelectTopControlDOM.focus();
            }
        };
        NzSelectComponent.prototype.focus = function () {
            if (this.nzSelectTopControlDOM) {
                this.nzSelectTopControlDOM.focus();
            }
        };
        NzSelectComponent.prototype.blur = function () {
            if (this.nzSelectTopControlDOM) {
                this.nzSelectTopControlDOM.blur();
            }
        };
        NzSelectComponent.prototype.onFocus = function () {
            this.nzFocus.emit();
        };
        NzSelectComponent.prototype.onBlur = function () {
            this.nzBlur.emit();
        };
        NzSelectComponent.prototype.onKeyDown = function (event) {
            this.nzSelectService.onKeyDown(event);
        };
        NzSelectComponent.prototype.toggleDropDown = function () {
            if (!this.nzDisabled) {
                this.nzSelectService.setOpenState(!this.open);
            }
        };
        NzSelectComponent.prototype.closeDropDown = function () {
            this.nzSelectService.setOpenState(false);
        };
        NzSelectComponent.prototype.onPositionChange = function (position) {
            this.dropDownPosition = position.connectionPair.originY;
        };
        NzSelectComponent.prototype.updateCdkConnectedOverlayStatus = function () {
            if (this.platform.isBrowser) {
                this.triggerWidth = this.cdkOverlayOrigin.elementRef.nativeElement.getBoundingClientRect().width;
            }
        };
        NzSelectComponent.prototype.updateCdkConnectedOverlayPositions = function () {
            var _this = this;
            setTimeout(function () {
                if (_this.cdkConnectedOverlay && _this.cdkConnectedOverlay.overlayRef) {
                    _this.cdkConnectedOverlay.overlayRef.updatePosition();
                }
            });
        };
        /** update ngModel -> update listOfSelectedValue **/
        // tslint:disable-next-line:no-any
        NzSelectComponent.prototype.writeValue = function (value) {
            this.value = value;
            var listValue = []; // tslint:disable-line:no-any
            if (core$1.isNotNil(value)) {
                if (this.nzSelectService.isMultipleOrTags) {
                    listValue = value;
                }
                else {
                    listValue = [value];
                }
            }
            this.nzSelectService.updateListOfSelectedValue(listValue, false);
            this.cdr.markForCheck();
        };
        NzSelectComponent.prototype.registerOnChange = function (fn) {
            this.onChange = fn;
        };
        NzSelectComponent.prototype.registerOnTouched = function (fn) {
            this.onTouched = fn;
        };
        NzSelectComponent.prototype.setDisabledState = function (isDisabled) {
            this.nzDisabled = isDisabled;
            this.cdr.markForCheck();
        };
        NzSelectComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.nzSelectService.animationEvent$.pipe(operators.takeUntil(this.destroy$)).subscribe(function () { return _this.updateCdkConnectedOverlayPositions(); });
            this.nzSelectService.searchValue$.pipe(operators.takeUntil(this.destroy$)).subscribe(function (data) {
                _this.nzOnSearch.emit(data);
                _this.updateCdkConnectedOverlayPositions();
            });
            this.nzSelectService.modelChange$.pipe(operators.takeUntil(this.destroy$)).subscribe(function (modelValue) {
                if (_this.value !== modelValue) {
                    _this.value = modelValue;
                    _this.onChange(_this.value);
                }
            });
            this.nzSelectService.open$.pipe(operators.takeUntil(this.destroy$)).subscribe(function (value) {
                if (_this.open !== value) {
                    _this.nzOpenChange.emit(value);
                }
                if (value) {
                    _this.focus();
                    _this.updateCdkConnectedOverlayStatus();
                }
                else {
                    _this.blur();
                    _this.onTouched();
                }
                _this.open = value;
                _this.nzSelectService.clearInput();
            });
            this.nzSelectService.check$.pipe(operators.takeUntil(this.destroy$)).subscribe(function () {
                _this.cdr.markForCheck();
            });
        };
        NzSelectComponent.prototype.ngAfterViewInit = function () {
            this.updateCdkConnectedOverlayStatus();
            this.updateAutoFocus();
            this.isInit = true;
        };
        NzSelectComponent.prototype.ngAfterContentInit = function () {
            var _this = this;
            this.listOfNzOptionGroupComponent.changes
                .pipe(operators.startWith(true), operators.flatMap(function () {
                return rxjs.merge.apply(void 0, __spread([_this.listOfNzOptionGroupComponent.changes,
                    _this.listOfNzOptionComponent.changes], _this.listOfNzOptionComponent.map(function (option) { return option.changes; }), _this.listOfNzOptionGroupComponent.map(function (group) {
                    return group.listOfNzOptionComponent ? group.listOfNzOptionComponent.changes : rxjs.EMPTY;
                }))).pipe(operators.startWith(true));
            }))
                .subscribe(function () {
                _this.nzSelectService.updateTemplateOption(_this.listOfNzOptionComponent.toArray(), _this.listOfNzOptionGroupComponent.toArray());
            });
        };
        NzSelectComponent.prototype.ngOnDestroy = function () {
            this.destroy$.next();
            this.destroy$.complete();
        };
        /** @nocollapse */ NzSelectComponent.ɵfac = function NzSelectComponent_Factory(t) { return new (t || NzSelectComponent)(core.ɵɵdirectiveInject(core.Renderer2), core.ɵɵdirectiveInject(NzSelectService), core.ɵɵdirectiveInject(core.ChangeDetectorRef), core.ɵɵdirectiveInject(platform.Platform), core.ɵɵdirectiveInject(core.ElementRef), core.ɵɵdirectiveInject(core$1.NzNoAnimationDirective, 9)); };
        /** @nocollapse */ NzSelectComponent.ɵcmp = core.ɵɵdefineComponent({ type: NzSelectComponent, selectors: [["nz-select"]], contentQueries: function NzSelectComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
                core.ɵɵcontentQuery(dirIndex, NzOptionComponent, false);
                core.ɵɵcontentQuery(dirIndex, NzOptionGroupComponent, false);
            } if (rf & 2) {
                var _t;
                core.ɵɵqueryRefresh(_t = core.ɵɵloadQuery()) && (ctx.listOfNzOptionComponent = _t);
                core.ɵɵqueryRefresh(_t = core.ɵɵloadQuery()) && (ctx.listOfNzOptionGroupComponent = _t);
            } }, viewQuery: function NzSelectComponent_Query(rf, ctx) { if (rf & 1) {
                core.ɵɵviewQuery(overlay.CdkOverlayOrigin, true);
                core.ɵɵviewQuery(overlay.CdkConnectedOverlay, true);
                core.ɵɵstaticViewQuery(NzSelectTopControlComponent, true);
                core.ɵɵstaticViewQuery(NzSelectTopControlComponent, true, core.ElementRef);
            } if (rf & 2) {
                var _t;
                core.ɵɵqueryRefresh(_t = core.ɵɵloadQuery()) && (ctx.cdkOverlayOrigin = _t.first);
                core.ɵɵqueryRefresh(_t = core.ɵɵloadQuery()) && (ctx.cdkConnectedOverlay = _t.first);
                core.ɵɵqueryRefresh(_t = core.ɵɵloadQuery()) && (ctx.nzSelectTopControlComponent = _t.first);
                core.ɵɵqueryRefresh(_t = core.ɵɵloadQuery()) && (ctx.nzSelectTopControlElement = _t.first);
            } }, hostBindings: function NzSelectComponent_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
                core.ɵɵallocHostVars(7);
                core.ɵɵlistener("click", function NzSelectComponent_click_HostBindingHandler($event) { return ctx.toggleDropDown(); });
            } if (rf & 2) {
                core.ɵɵclassProp("ant-select-lg", ctx.nzSize === "large")("ant-select-sm", ctx.nzSize === "small")("ant-select-enabled", !ctx.nzDisabled)("ant-select-no-arrow", !ctx.nzShowArrow)("ant-select-disabled", ctx.nzDisabled)("ant-select-allow-clear", ctx.nzAllowClear)("ant-select-open", ctx.open);
            } }, inputs: { nzSize: "nzSize", nzDropdownClassName: "nzDropdownClassName", nzDropdownMatchSelectWidth: "nzDropdownMatchSelectWidth", nzDropdownStyle: "nzDropdownStyle", nzNotFoundContent: "nzNotFoundContent", nzAllowClear: "nzAllowClear", nzShowSearch: "nzShowSearch", nzLoading: "nzLoading", nzAutoFocus: "nzAutoFocus", nzPlaceHolder: "nzPlaceHolder", nzMaxTagCount: "nzMaxTagCount", nzDropdownRender: "nzDropdownRender", nzCustomTemplate: "nzCustomTemplate", nzSuffixIcon: "nzSuffixIcon", nzClearIcon: "nzClearIcon", nzRemoveIcon: "nzRemoveIcon", nzMenuItemSelectedIcon: "nzMenuItemSelectedIcon", nzShowArrow: "nzShowArrow", nzTokenSeparators: "nzTokenSeparators", nzMaxTagPlaceholder: "nzMaxTagPlaceholder", nzAutoClearSearchValue: "nzAutoClearSearchValue", nzMaxMultipleCount: "nzMaxMultipleCount", nzServerSearch: "nzServerSearch", nzMode: "nzMode", nzFilterOption: "nzFilterOption", compareWith: "compareWith", nzOpen: "nzOpen", nzDisabled: "nzDisabled" }, outputs: { nzOnSearch: "nzOnSearch", nzScrollToBottom: "nzScrollToBottom", nzOpenChange: "nzOpenChange", nzBlur: "nzBlur", nzFocus: "nzFocus" }, exportAs: ["nzSelect"], features: [core.ɵɵProvidersFeature([
                    NzSelectService,
                    {
                        provide: forms.NG_VALUE_ACCESSOR,
                        useExisting: core.forwardRef((function () { return NzSelectComponent; })),
                        multi: true
                    }
                ])], ngContentSelectors: _c1$2, decls: 3, vars: 22, consts: [["cdkOverlayOrigin", "", "nz-select-top-control", "", "tabindex", "0", 1, "ant-select-selection", 3, "nzOpen", "nzNoAnimation", "nzMaxTagPlaceholder", "nzPlaceHolder", "nzAllowClear", "nzMaxTagCount", "nzShowArrow", "nzLoading", "nzCustomTemplate", "nzSuffixIcon", "nzClearIcon", "nzRemoveIcon", "nzShowSearch", "nzTokenSeparators", "focus", "blur", "keydown"], ["cdkConnectedOverlay", "", "nzConnectedOverlay", "", 3, "cdkConnectedOverlayHasBackdrop", "cdkConnectedOverlayMinWidth", "cdkConnectedOverlayWidth", "cdkConnectedOverlayOrigin", "cdkConnectedOverlayOpen", "backdropClick", "detach", "positionChange"], [1, "ant-select-dropdown", 3, "nzClassListAdd", "nzNoAnimation", "ngStyle"], ["nz-option-container", "", 2, "overflow", "auto", "transform", "translateZ(0px)", 3, "nzMenuItemSelectedIcon", "nzNotFoundContent", "keydown", "nzScrollToBottom"], [3, "ngTemplateOutlet"]], template: function NzSelectComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵprojectionDef();
                core.ɵɵelementStart(0, "div", 0);
                core.ɵɵlistener("focus", function NzSelectComponent_Template_div_focus_0_listener($event) { return ctx.onFocus(); })("blur", function NzSelectComponent_Template_div_blur_0_listener($event) { return ctx.onBlur(); })("keydown", function NzSelectComponent_Template_div_keydown_0_listener($event) { return ctx.onKeyDown($event); });
                core.ɵɵelementEnd();
                core.ɵɵtemplate(1, NzSelectComponent_ng_template_1_Template, 3, 14, "ng-template", 1);
                core.ɵɵlistener("backdropClick", function NzSelectComponent_Template_ng_template_backdropClick_1_listener($event) { return ctx.closeDropDown(); })("detach", function NzSelectComponent_Template_ng_template_detach_1_listener($event) { return ctx.closeDropDown(); })("positionChange", function NzSelectComponent_Template_ng_template_positionChange_1_listener($event) { return ctx.onPositionChange($event); });
                core.ɵɵtemplate(2, NzSelectComponent_ng_template_2_Template, 1, 0, "ng-template");
            } if (rf & 2) {
                core.ɵɵclassProp("ant-select-selection--single", ctx.nzSelectService.isSingleMode)("ant-select-selection--multiple", ctx.nzSelectService.isMultipleOrTags);
                core.ɵɵproperty("nzOpen", ctx.open)("@.disabled", ctx.noAnimation == null ? null : ctx.noAnimation.nzNoAnimation)("nzNoAnimation", ctx.noAnimation == null ? null : ctx.noAnimation.nzNoAnimation)("nzMaxTagPlaceholder", ctx.nzMaxTagPlaceholder)("nzPlaceHolder", ctx.nzPlaceHolder)("nzAllowClear", ctx.nzAllowClear)("nzMaxTagCount", ctx.nzMaxTagCount)("nzShowArrow", ctx.nzShowArrow)("nzLoading", ctx.nzLoading)("nzCustomTemplate", ctx.nzCustomTemplate)("nzSuffixIcon", ctx.nzSuffixIcon)("nzClearIcon", ctx.nzClearIcon)("nzRemoveIcon", ctx.nzRemoveIcon)("nzShowSearch", ctx.nzShowSearch)("nzTokenSeparators", ctx.nzTokenSeparators);
                core.ɵɵadvance(1);
                core.ɵɵproperty("cdkConnectedOverlayHasBackdrop", true)("cdkConnectedOverlayMinWidth", ctx.nzDropdownMatchSelectWidth ? null : ctx.triggerWidth)("cdkConnectedOverlayWidth", ctx.nzDropdownMatchSelectWidth ? ctx.triggerWidth : null)("cdkConnectedOverlayOrigin", ctx.cdkOverlayOrigin)("cdkConnectedOverlayOpen", ctx.open);
            } }, directives: [overlay.CdkOverlayOrigin, NzSelectTopControlComponent, core$1.NzNoAnimationDirective, overlay.CdkConnectedOverlay, core$1.NzConnectedOverlayDirective, core$1.NzClassListAddDirective, common.NgStyle, NzOptionContainerComponent, common.NgTemplateOutlet], styles: ["\n      .ant-select-dropdown {\n        top: 100%;\n        left: 0;\n        position: relative;\n        width: 100%;\n        margin-top: 4px;\n        margin-bottom: 4px;\n      }\n    "], encapsulation: 2, data: { animation: [core$1.slideMotion] }, changeDetection: 0 });
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzSelectComponent.prototype, "nzAllowClear", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzSelectComponent.prototype, "nzShowSearch", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzSelectComponent.prototype, "nzLoading", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzSelectComponent.prototype, "nzAutoFocus", void 0);
        return NzSelectComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NzSelectComponent, [{
            type: core.Component,
            args: [{
                    selector: 'nz-select',
                    exportAs: 'nzSelect',
                    preserveWhitespaces: false,
                    providers: [
                        NzSelectService,
                        {
                            provide: forms.NG_VALUE_ACCESSOR,
                            useExisting: core.forwardRef((function () { return NzSelectComponent; })),
                            multi: true
                        }
                    ],
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    encapsulation: core.ViewEncapsulation.None,
                    animations: [core$1.slideMotion],
                    templateUrl: './nz-select.component.html',
                    host: {
                        '[class.ant-select-lg]': 'nzSize==="large"',
                        '[class.ant-select-sm]': 'nzSize==="small"',
                        '[class.ant-select-enabled]': '!nzDisabled',
                        '[class.ant-select-no-arrow]': '!nzShowArrow',
                        '[class.ant-select-disabled]': 'nzDisabled',
                        '[class.ant-select-allow-clear]': 'nzAllowClear',
                        '[class.ant-select-open]': 'open',
                        '(click)': 'toggleDropDown()'
                    },
                    styles: [
                        "\n      .ant-select-dropdown {\n        top: 100%;\n        left: 0;\n        position: relative;\n        width: 100%;\n        margin-top: 4px;\n        margin-bottom: 4px;\n      }\n    "
                    ]
                }]
        }], function () { return [{ type: core.Renderer2 }, { type: NzSelectService }, { type: core.ChangeDetectorRef }, { type: platform.Platform }, { type: core.ElementRef }, { type: core$1.NzNoAnimationDirective, decorators: [{
                    type: core.Host
                }, {
                    type: core.Optional
                }] }]; }, { cdkOverlayOrigin: [{
                type: core.ViewChild,
                args: [overlay.CdkOverlayOrigin, { static: false }]
            }], cdkConnectedOverlay: [{
                type: core.ViewChild,
                args: [overlay.CdkConnectedOverlay, { static: false }]
            }], nzSelectTopControlComponent: [{
                type: core.ViewChild,
                args: [NzSelectTopControlComponent, { static: true }]
            }], nzSelectTopControlElement: [{
                type: core.ViewChild,
                args: [NzSelectTopControlComponent, { static: true, read: core.ElementRef }]
            }], listOfNzOptionComponent: [{
                type: core.ContentChildren,
                args: [NzOptionComponent]
            }], listOfNzOptionGroupComponent: [{
                type: core.ContentChildren,
                args: [NzOptionGroupComponent]
            }], nzOnSearch: [{
                type: core.Output
            }], nzScrollToBottom: [{
                type: core.Output
            }], nzOpenChange: [{
                type: core.Output
            }], nzBlur: [{
                type: core.Output
            }], nzFocus: [{
                type: core.Output
            }], nzSize: [{
                type: core.Input
            }], nzDropdownClassName: [{
                type: core.Input
            }], nzDropdownMatchSelectWidth: [{
                type: core.Input
            }], nzDropdownStyle: [{
                type: core.Input
            }], nzNotFoundContent: [{
                type: core.Input
            }], nzAllowClear: [{
                type: core.Input
            }], nzShowSearch: [{
                type: core.Input
            }], nzLoading: [{
                type: core.Input
            }], nzAutoFocus: [{
                type: core.Input
            }], nzPlaceHolder: [{
                type: core.Input
            }], nzMaxTagCount: [{
                type: core.Input
            }], nzDropdownRender: [{
                type: core.Input
            }], nzCustomTemplate: [{
                type: core.Input
            }], nzSuffixIcon: [{
                type: core.Input
            }], nzClearIcon: [{
                type: core.Input
            }], nzRemoveIcon: [{
                type: core.Input
            }], nzMenuItemSelectedIcon: [{
                type: core.Input
            }], nzShowArrow: [{
                type: core.Input
            }], nzTokenSeparators: [{
                type: core.Input
            }], nzMaxTagPlaceholder: [{
                type: core.Input
            }], nzAutoClearSearchValue: [{
                type: core.Input
            }], nzMaxMultipleCount: [{
                type: core.Input
            }], nzServerSearch: [{
                type: core.Input
            }], nzMode: [{
                type: core.Input
            }], nzFilterOption: [{
                type: core.Input
            }], compareWith: [{
                type: core.Input
            }], nzOpen: [{
                type: core.Input
            }], nzDisabled: [{
                type: core.Input
            }] }); })();

    /**
     * @license
     * Copyright Alibaba.com All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    var NzSelectModule = /** @class */ (function () {
        function NzSelectModule() {
        }
        /** @nocollapse */ NzSelectModule.ɵmod = core.ɵɵdefineNgModule({ type: NzSelectModule });
        /** @nocollapse */ NzSelectModule.ɵinj = core.ɵɵdefineInjector({ factory: function NzSelectModule_Factory(t) { return new (t || NzSelectModule)(); }, imports: [[
                    common.CommonModule,
                    i18n.NzI18nModule,
                    forms.FormsModule,
                    platform.PlatformModule,
                    overlay.OverlayModule,
                    icon.NzIconModule,
                    core$1.NzAddOnModule,
                    empty.NzEmptyModule,
                    core$1.NzOverlayModule,
                    core$1.NzNoAnimationModule
                ]] });
        return NzSelectModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && core.ɵɵsetNgModuleScope(NzSelectModule, { declarations: [NzFilterGroupOptionPipe,
            NzFilterOptionPipe,
            NzOptionComponent,
            NzSelectComponent,
            NzOptionContainerComponent,
            NzOptionGroupComponent,
            NzOptionLiComponent,
            NzSelectTopControlComponent,
            NzSelectUnselectableDirective], imports: [common.CommonModule,
            i18n.NzI18nModule,
            forms.FormsModule,
            platform.PlatformModule,
            overlay.OverlayModule,
            icon.NzIconModule,
            core$1.NzAddOnModule,
            empty.NzEmptyModule,
            core$1.NzOverlayModule,
            core$1.NzNoAnimationModule], exports: [NzOptionComponent, NzSelectComponent, NzOptionContainerComponent, NzOptionGroupComponent, NzSelectTopControlComponent] }); })();
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NzSelectModule, [{
            type: core.NgModule,
            args: [{
                    imports: [
                        common.CommonModule,
                        i18n.NzI18nModule,
                        forms.FormsModule,
                        platform.PlatformModule,
                        overlay.OverlayModule,
                        icon.NzIconModule,
                        core$1.NzAddOnModule,
                        empty.NzEmptyModule,
                        core$1.NzOverlayModule,
                        core$1.NzNoAnimationModule
                    ],
                    declarations: [
                        NzFilterGroupOptionPipe,
                        NzFilterOptionPipe,
                        NzOptionComponent,
                        NzSelectComponent,
                        NzOptionContainerComponent,
                        NzOptionGroupComponent,
                        NzOptionLiComponent,
                        NzSelectTopControlComponent,
                        NzSelectUnselectableDirective
                    ],
                    exports: [NzOptionComponent, NzSelectComponent, NzOptionContainerComponent, NzOptionGroupComponent, NzSelectTopControlComponent]
                }]
        }], null, null); })();

    exports.NzFilterGroupOptionPipe = NzFilterGroupOptionPipe;
    exports.NzFilterOptionPipe = NzFilterOptionPipe;
    exports.NzOptionComponent = NzOptionComponent;
    exports.NzOptionContainerComponent = NzOptionContainerComponent;
    exports.NzOptionGroupComponent = NzOptionGroupComponent;
    exports.NzOptionLiComponent = NzOptionLiComponent;
    exports.NzSelectComponent = NzSelectComponent;
    exports.NzSelectModule = NzSelectModule;
    exports.NzSelectService = NzSelectService;
    exports.NzSelectTopControlComponent = NzSelectTopControlComponent;
    exports.NzSelectUnselectableDirective = NzSelectUnselectableDirective;
    exports.defaultFilterOption = defaultFilterOption;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ng-zorro-antd-select.umd.js.map
