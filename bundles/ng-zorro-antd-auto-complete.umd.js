(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/cdk/overlay'), require('@angular/common'), require('@angular/core'), require('@angular/forms'), require('ng-zorro-antd/core'), require('@angular/cdk/keycodes'), require('@angular/cdk/portal'), require('rxjs'), require('rxjs/operators')) :
    typeof define === 'function' && define.amd ? define('ng-zorro-antd/auto-complete', ['exports', '@angular/cdk/overlay', '@angular/common', '@angular/core', '@angular/forms', 'ng-zorro-antd/core', '@angular/cdk/keycodes', '@angular/cdk/portal', 'rxjs', 'rxjs/operators'], factory) :
    (global = global || self, factory((global['ng-zorro-antd'] = global['ng-zorro-antd'] || {}, global['ng-zorro-antd']['auto-complete'] = {}), global.ng.cdk.overlay, global.ng.common, global.ng.core, global.ng.forms, global['ng-zorro-antd'].core, global.ng.cdk.keycodes, global.ng.cdk.portal, global.rxjs, global.rxjs.operators));
}(this, (function (exports, overlay, common, core, forms, core$1, keycodes, portal, rxjs, operators) { 'use strict';

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
    var _c0 = ["role", "group", 1, "ant-select-dropdown-menu-item-group"];
    function NzAutocompleteOptgroupComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵtext(1);
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var ctx_r13 = core.ɵɵnextContext();
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate(ctx_r13.nzLabel);
    } }
    var _c1 = [[["nz-auto-option"]]];
    var _c2 = ["nz-auto-option"];
    var NzAutocompleteOptgroupComponent = /** @class */ (function () {
        function NzAutocompleteOptgroupComponent() {
        }
        /** @nocollapse */ NzAutocompleteOptgroupComponent.ɵfac = function NzAutocompleteOptgroupComponent_Factory(t) { return new (t || NzAutocompleteOptgroupComponent)(); };
        /** @nocollapse */ NzAutocompleteOptgroupComponent.ɵcmp = core.ɵɵdefineComponent({ type: NzAutocompleteOptgroupComponent, selectors: [["nz-auto-optgroup"]], hostBindings: function NzAutocompleteOptgroupComponent_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
                core.ɵɵelementHostAttrs(_c0);
            } }, inputs: { nzLabel: "nzLabel" }, exportAs: ["nzAutoOptgroup"], ngContentSelectors: _c2, decls: 4, vars: 1, consts: [[1, "ant-select-dropdown-menu-item-group-title"], [4, "nzStringTemplateOutlet"], [1, "ant-select-dropdown-menu-item-group-list"]], template: function NzAutocompleteOptgroupComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵprojectionDef(_c1);
                core.ɵɵelementStart(0, "div", 0);
                core.ɵɵtemplate(1, NzAutocompleteOptgroupComponent_ng_container_1_Template, 2, 1, "ng-container", 1);
                core.ɵɵelementEnd();
                core.ɵɵelementStart(2, "ul", 2);
                core.ɵɵprojection(3);
                core.ɵɵelementEnd();
            } if (rf & 2) {
                core.ɵɵadvance(1);
                core.ɵɵproperty("nzStringTemplateOutlet", ctx.nzLabel);
            } }, directives: [core$1.NzStringTemplateOutletDirective], encapsulation: 2, changeDetection: 0 });
        return NzAutocompleteOptgroupComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NzAutocompleteOptgroupComponent, [{
            type: core.Component,
            args: [{
                    selector: 'nz-auto-optgroup',
                    exportAs: 'nzAutoOptgroup',
                    preserveWhitespaces: false,
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    encapsulation: core.ViewEncapsulation.None,
                    templateUrl: './nz-autocomplete-optgroup.component.html',
                    host: {
                        role: 'group',
                        class: 'ant-select-dropdown-menu-item-group'
                    }
                }]
        }], function () { return []; }, { nzLabel: [{
                type: core.Input
            }] }); })();

    var _c0$1 = ["role", "menuitem", 1, "ant-select-dropdown-menu-item"];
    var _c1$1 = ["*"];
    var NzOptionSelectionChange = /** @class */ (function () {
        function NzOptionSelectionChange(source, isUserInput) {
            if (isUserInput === void 0) { isUserInput = false; }
            this.source = source;
            this.isUserInput = isUserInput;
        }
        return NzOptionSelectionChange;
    }());
    var NzAutocompleteOptionComponent = /** @class */ (function () {
        function NzAutocompleteOptionComponent(changeDetectorRef, element) {
            this.changeDetectorRef = changeDetectorRef;
            this.element = element;
            this.nzDisabled = false;
            this.selectionChange = new core.EventEmitter();
            this.active = false;
            this.selected = false;
        }
        NzAutocompleteOptionComponent.prototype.select = function (emit) {
            if (emit === void 0) { emit = true; }
            this.selected = true;
            this.changeDetectorRef.markForCheck();
            if (emit) {
                this.emitSelectionChangeEvent();
            }
        };
        NzAutocompleteOptionComponent.prototype.deselect = function () {
            this.selected = false;
            this.changeDetectorRef.markForCheck();
            this.emitSelectionChangeEvent();
        };
        /** Git display label */
        NzAutocompleteOptionComponent.prototype.getLabel = function () {
            return this.nzLabel || this.nzValue.toString();
        };
        /** Set active (only styles) */
        NzAutocompleteOptionComponent.prototype.setActiveStyles = function () {
            if (!this.active) {
                this.active = true;
                this.changeDetectorRef.markForCheck();
            }
        };
        /** Unset active (only styles) */
        NzAutocompleteOptionComponent.prototype.setInactiveStyles = function () {
            if (this.active) {
                this.active = false;
                this.changeDetectorRef.markForCheck();
            }
        };
        NzAutocompleteOptionComponent.prototype.scrollIntoViewIfNeeded = function () {
            core$1.scrollIntoView(this.element.nativeElement);
        };
        NzAutocompleteOptionComponent.prototype.selectViaInteraction = function () {
            if (!this.nzDisabled) {
                this.selected = !this.selected;
                if (this.selected) {
                    this.setActiveStyles();
                }
                else {
                    this.setInactiveStyles();
                }
                this.emitSelectionChangeEvent(true);
                this.changeDetectorRef.markForCheck();
            }
        };
        NzAutocompleteOptionComponent.prototype.emitSelectionChangeEvent = function (isUserInput) {
            if (isUserInput === void 0) { isUserInput = false; }
            this.selectionChange.emit(new NzOptionSelectionChange(this, isUserInput));
        };
        /** @nocollapse */ NzAutocompleteOptionComponent.ɵfac = function NzAutocompleteOptionComponent_Factory(t) { return new (t || NzAutocompleteOptionComponent)(core.ɵɵdirectiveInject(core.ChangeDetectorRef), core.ɵɵdirectiveInject(core.ElementRef)); };
        /** @nocollapse */ NzAutocompleteOptionComponent.ɵcmp = core.ɵɵdefineComponent({ type: NzAutocompleteOptionComponent, selectors: [["nz-auto-option"]], hostBindings: function NzAutocompleteOptionComponent_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
                core.ɵɵallocHostVars(5);
                core.ɵɵlistener("click", function NzAutocompleteOptionComponent_click_HostBindingHandler($event) { return ctx.selectViaInteraction(); })("mousedown", function NzAutocompleteOptionComponent_mousedown_HostBindingHandler($event) { return $event.preventDefault(); });
                core.ɵɵelementHostAttrs(_c0$1);
            } if (rf & 2) {
                core.ɵɵattribute("aria-selected", ctx.selected.toString())("aria-disabled", ctx.nzDisabled.toString());
                core.ɵɵclassProp("ant-select-dropdown-menu-item-selected", ctx.selected)("ant-select-dropdown-menu-item-active", ctx.active)("ant-select-dropdown-menu-item-disabled", ctx.nzDisabled);
            } }, inputs: { nzValue: "nzValue", nzLabel: "nzLabel", nzDisabled: "nzDisabled" }, outputs: { selectionChange: "selectionChange" }, exportAs: ["nzAutoOption"], ngContentSelectors: _c1$1, decls: 1, vars: 0, template: function NzAutocompleteOptionComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵprojectionDef();
                core.ɵɵprojection(0);
            } }, encapsulation: 2, changeDetection: 0 });
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzAutocompleteOptionComponent.prototype, "nzDisabled", void 0);
        return NzAutocompleteOptionComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NzAutocompleteOptionComponent, [{
            type: core.Component,
            args: [{
                    selector: 'nz-auto-option',
                    exportAs: 'nzAutoOption',
                    preserveWhitespaces: false,
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    encapsulation: core.ViewEncapsulation.None,
                    templateUrl: './nz-autocomplete-option.component.html',
                    host: {
                        role: 'menuitem',
                        class: 'ant-select-dropdown-menu-item',
                        '[class.ant-select-dropdown-menu-item-selected]': 'selected',
                        '[class.ant-select-dropdown-menu-item-active]': 'active',
                        '[class.ant-select-dropdown-menu-item-disabled]': 'nzDisabled',
                        '[attr.aria-selected]': 'selected.toString()',
                        '[attr.aria-disabled]': 'nzDisabled.toString()',
                        '(click)': 'selectViaInteraction()',
                        '(mousedown)': '$event.preventDefault()'
                    }
                }]
        }], function () { return [{ type: core.ChangeDetectorRef }, { type: core.ElementRef }]; }, { nzValue: [{
                type: core.Input
            }], nzLabel: [{
                type: core.Input
            }], nzDisabled: [{
                type: core.Input
            }], selectionChange: [{
                type: core.Output
            }] }); })();

    var _c0$2 = ["panel"];
    var _c1$2 = ["content"];
    function NzAutocompleteComponent_ng_template_0_4_ng_template_0_Template(rf, ctx) { }
    function NzAutocompleteComponent_ng_template_0_4_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵtemplate(0, NzAutocompleteComponent_ng_template_0_4_ng_template_0_Template, 0, 0, "ng-template");
    } }
    function NzAutocompleteComponent_ng_template_0_ng_template_5_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵprojection(0);
    } }
    function NzAutocompleteComponent_ng_template_0_ng_template_7_nz_auto_option_0_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "nz-auto-option", 8);
        core.ɵɵtext(1);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var option_r23 = ctx.$implicit;
        core.ɵɵproperty("nzValue", option_r23);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate(option_r23);
    } }
    function NzAutocompleteComponent_ng_template_0_ng_template_7_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵtemplate(0, NzAutocompleteComponent_ng_template_0_ng_template_7_nz_auto_option_0_Template, 2, 2, "nz-auto-option", 7);
    } if (rf & 2) {
        var ctx_r20 = core.ɵɵnextContext(2);
        core.ɵɵproperty("ngForOf", ctx_r20.nzDataSource);
    } }
    function NzAutocompleteComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div", 0, 1);
        core.ɵɵelementStart(2, "div", 2);
        core.ɵɵelementStart(3, "ul", 3);
        core.ɵɵtemplate(4, NzAutocompleteComponent_ng_template_0_4_Template, 1, 0, undefined, 4);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵtemplate(5, NzAutocompleteComponent_ng_template_0_ng_template_5_Template, 1, 0, "ng-template", null, 5, core.ɵɵtemplateRefExtractor);
        core.ɵɵtemplate(7, NzAutocompleteComponent_ng_template_0_ng_template_7_Template, 1, 1, "ng-template", null, 6, core.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        var _r17 = core.ɵɵreference(6);
        var _r19 = core.ɵɵreference(8);
        var ctx_r14 = core.ɵɵnextContext();
        core.ɵɵclassProp("ant-select-dropdown-hidden", !ctx_r14.showPanel);
        core.ɵɵproperty("@.disabled", ctx_r14.noAnimation == null ? null : ctx_r14.noAnimation.nzNoAnimation)("nzNoAnimation", ctx_r14.noAnimation == null ? null : ctx_r14.noAnimation.nzNoAnimation)("@slideMotion", ctx_r14.dropDownPosition)("ngClass", ctx_r14.nzOverlayClassName)("ngStyle", ctx_r14.nzOverlayStyle);
        core.ɵɵadvance(4);
        core.ɵɵproperty("ngTemplateOutlet", ctx_r14.nzDataSource ? _r19 : _r17);
    } }
    var _c2$1 = ["*"];
    var NzAutocompleteComponent = /** @class */ (function () {
        function NzAutocompleteComponent(changeDetectorRef, ngZone, noAnimation) {
            var _this = this;
            this.changeDetectorRef = changeDetectorRef;
            this.ngZone = ngZone;
            this.noAnimation = noAnimation;
            this.nzOverlayClassName = '';
            this.nzOverlayStyle = {};
            this.nzDefaultActiveFirstOption = true;
            this.nzBackfill = false;
            this.compareWith = function (o1, o2) { return o1 === o2; };
            this.selectionChange = new core.EventEmitter();
            this.showPanel = true;
            this.isOpen = false;
            this.dropDownPosition = 'bottom';
            this.activeItemIndex = -1;
            this.selectionChangeSubscription = rxjs.Subscription.EMPTY;
            this.dataSourceChangeSubscription = rxjs.Subscription.EMPTY;
            /** Options changes listener */
            this.optionSelectionChanges = rxjs.defer(function () {
                if (_this.options) {
                    return rxjs.merge.apply(void 0, __spread(_this.options.map(function (option) { return option.selectionChange; })));
                }
                return _this.ngZone.onStable.asObservable().pipe(operators.take(1), operators.switchMap(function () { return _this.optionSelectionChanges; }));
            });
        }
        Object.defineProperty(NzAutocompleteComponent.prototype, "options", {
            /**
             * Options accessor, its source may be content or dataSource
             */
            get: function () {
                // first dataSource
                if (this.nzDataSource) {
                    return this.fromDataSourceOptions;
                }
                else {
                    return this.fromContentOptions;
                }
            },
            enumerable: true,
            configurable: true
        });
        NzAutocompleteComponent.prototype.ngAfterContentInit = function () {
            if (!this.nzDataSource) {
                this.optionsInit();
            }
        };
        NzAutocompleteComponent.prototype.ngAfterViewInit = function () {
            if (this.nzDataSource) {
                this.optionsInit();
            }
        };
        NzAutocompleteComponent.prototype.ngOnDestroy = function () {
            this.dataSourceChangeSubscription.unsubscribe();
            this.selectionChangeSubscription.unsubscribe();
        };
        NzAutocompleteComponent.prototype.setVisibility = function () {
            this.showPanel = !!this.options.length;
            this.changeDetectorRef.markForCheck();
        };
        NzAutocompleteComponent.prototype.setActiveItem = function (index) {
            var activeItem = this.options.toArray()[index];
            if (activeItem && !activeItem.active) {
                this.activeItem = activeItem;
                this.activeItemIndex = index;
                this.clearSelectedOptions(this.activeItem);
                this.activeItem.setActiveStyles();
                this.changeDetectorRef.markForCheck();
            }
        };
        NzAutocompleteComponent.prototype.setNextItemActive = function () {
            var nextIndex = this.activeItemIndex + 1 <= this.options.length - 1 ? this.activeItemIndex + 1 : 0;
            this.setActiveItem(nextIndex);
        };
        NzAutocompleteComponent.prototype.setPreviousItemActive = function () {
            var previousIndex = this.activeItemIndex - 1 < 0 ? this.options.length - 1 : this.activeItemIndex - 1;
            this.setActiveItem(previousIndex);
        };
        // tslint:disable-next-line:no-any
        NzAutocompleteComponent.prototype.getOptionIndex = function (value) {
            var _this = this;
            return this.options.reduce(function (result, current, index) {
                return result === -1 ? (_this.compareWith(value, current.nzValue) ? index : -1) : result;
            }, -1);
        };
        NzAutocompleteComponent.prototype.updatePosition = function (position) {
            this.dropDownPosition = position;
            this.changeDetectorRef.markForCheck();
        };
        NzAutocompleteComponent.prototype.optionsInit = function () {
            var _this = this;
            this.setVisibility();
            this.subscribeOptionChanges();
            var changes = this.nzDataSource ? this.fromDataSourceOptions.changes : this.fromContentOptions.changes;
            // async
            this.dataSourceChangeSubscription = changes.subscribe(function (e) {
                if (!e.dirty && _this.isOpen) {
                    setTimeout(function () { return _this.setVisibility(); });
                }
                _this.subscribeOptionChanges();
            });
        };
        /**
         * Clear the status of options
         */
        NzAutocompleteComponent.prototype.clearSelectedOptions = function (skip, deselect) {
            if (deselect === void 0) { deselect = false; }
            this.options.forEach(function (option) {
                if (option !== skip) {
                    if (deselect) {
                        option.deselect();
                    }
                    option.setInactiveStyles();
                }
            });
        };
        NzAutocompleteComponent.prototype.subscribeOptionChanges = function () {
            var _this = this;
            this.selectionChangeSubscription.unsubscribe();
            this.selectionChangeSubscription = this.optionSelectionChanges
                .pipe(operators.filter(function (event) { return event.isUserInput; }))
                .subscribe(function (event) {
                event.source.select();
                event.source.setActiveStyles();
                _this.activeItem = event.source;
                _this.activeItemIndex = _this.getOptionIndex(_this.activeItem.nzValue);
                _this.clearSelectedOptions(event.source, true);
                _this.selectionChange.emit(event.source);
            });
        };
        /** @nocollapse */ NzAutocompleteComponent.ɵfac = function NzAutocompleteComponent_Factory(t) { return new (t || NzAutocompleteComponent)(core.ɵɵdirectiveInject(core.ChangeDetectorRef), core.ɵɵdirectiveInject(core.NgZone), core.ɵɵdirectiveInject(core$1.NzNoAnimationDirective, 9)); };
        /** @nocollapse */ NzAutocompleteComponent.ɵcmp = core.ɵɵdefineComponent({ type: NzAutocompleteComponent, selectors: [["nz-autocomplete"]], contentQueries: function NzAutocompleteComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
                core.ɵɵcontentQuery(dirIndex, NzAutocompleteOptionComponent, true);
            } if (rf & 2) {
                var _t;
                core.ɵɵqueryRefresh(_t = core.ɵɵloadQuery()) && (ctx.fromContentOptions = _t);
            } }, viewQuery: function NzAutocompleteComponent_Query(rf, ctx) { if (rf & 1) {
                core.ɵɵviewQuery(core.TemplateRef, true);
                core.ɵɵviewQuery(_c0$2, true);
                core.ɵɵviewQuery(_c1$2, true);
                core.ɵɵviewQuery(NzAutocompleteOptionComponent, true);
            } if (rf & 2) {
                var _t;
                core.ɵɵqueryRefresh(_t = core.ɵɵloadQuery()) && (ctx.template = _t.first);
                core.ɵɵqueryRefresh(_t = core.ɵɵloadQuery()) && (ctx.panel = _t.first);
                core.ɵɵqueryRefresh(_t = core.ɵɵloadQuery()) && (ctx.content = _t.first);
                core.ɵɵqueryRefresh(_t = core.ɵɵloadQuery()) && (ctx.fromDataSourceOptions = _t);
            } }, inputs: { nzWidth: "nzWidth", nzOverlayClassName: "nzOverlayClassName", nzOverlayStyle: "nzOverlayStyle", nzDefaultActiveFirstOption: "nzDefaultActiveFirstOption", nzBackfill: "nzBackfill", compareWith: "compareWith", nzDataSource: "nzDataSource" }, outputs: { selectionChange: "selectionChange" }, exportAs: ["nzAutocomplete"], ngContentSelectors: _c2$1, decls: 1, vars: 0, consts: [[1, "ant-select-dropdown", "ant-select-dropdown--single", "ant-select-dropdown-placement-bottomLeft", 3, "nzNoAnimation", "ngClass", "ngStyle"], ["panel", ""], [2, "overflow", "auto"], ["role", "menu", "aria-activedescendant", "", 1, "ant-select-dropdown-menu", "ant-select-dropdown-menu-root", "ant-select-dropdown-menu-vertical"], [4, "ngTemplateOutlet"], ["contentTemplate", ""], ["optionsTemplate", ""], [3, "nzValue", 4, "ngFor", "ngForOf"], [3, "nzValue"]], template: function NzAutocompleteComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵprojectionDef();
                core.ɵɵtemplate(0, NzAutocompleteComponent_ng_template_0_Template, 9, 7, "ng-template");
            } }, directives: [core$1.NzNoAnimationDirective, common.NgClass, common.NgStyle, common.NgTemplateOutlet, common.NgForOf, NzAutocompleteOptionComponent], styles: ["\n      .ant-select-dropdown {\n        top: 100%;\n        left: 0;\n        position: relative;\n        width: 100%;\n        margin-top: 4px;\n        margin-bottom: 4px;\n      }\n    "], encapsulation: 2, data: { animation: [core$1.slideMotion] }, changeDetection: 0 });
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzAutocompleteComponent.prototype, "nzDefaultActiveFirstOption", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzAutocompleteComponent.prototype, "nzBackfill", void 0);
        return NzAutocompleteComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NzAutocompleteComponent, [{
            type: core.Component,
            args: [{
                    selector: 'nz-autocomplete',
                    exportAs: 'nzAutocomplete',
                    preserveWhitespaces: false,
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    encapsulation: core.ViewEncapsulation.None,
                    templateUrl: './nz-autocomplete.component.html',
                    animations: [core$1.slideMotion],
                    styles: [
                        "\n      .ant-select-dropdown {\n        top: 100%;\n        left: 0;\n        position: relative;\n        width: 100%;\n        margin-top: 4px;\n        margin-bottom: 4px;\n      }\n    "
                    ]
                }]
        }], function () { return [{ type: core.ChangeDetectorRef }, { type: core.NgZone }, { type: core$1.NzNoAnimationDirective, decorators: [{
                    type: core.Host
                }, {
                    type: core.Optional
                }] }]; }, { nzWidth: [{
                type: core.Input
            }], nzOverlayClassName: [{
                type: core.Input
            }], nzOverlayStyle: [{
                type: core.Input
            }], nzDefaultActiveFirstOption: [{
                type: core.Input
            }], nzBackfill: [{
                type: core.Input
            }], compareWith: [{
                type: core.Input
            }], nzDataSource: [{
                type: core.Input
            }], selectionChange: [{
                type: core.Output
            }], fromContentOptions: [{
                type: core.ContentChildren,
                args: [NzAutocompleteOptionComponent, { descendants: true }]
            }], fromDataSourceOptions: [{
                type: core.ViewChildren,
                args: [NzAutocompleteOptionComponent]
            }], template: [{
                type: core.ViewChild,
                args: [core.TemplateRef, { static: false }]
            }], panel: [{
                type: core.ViewChild,
                args: ['panel', { static: false }]
            }], content: [{
                type: core.ViewChild,
                args: ['content', { static: false }]
            }] }); })();

    /**
     * @license
     * Copyright Alibaba.com All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    var _c0$3 = ["autocomplete", "off", "aria-autocomplete", "list"];
    var NZ_AUTOCOMPLETE_VALUE_ACCESSOR = {
        provide: forms.NG_VALUE_ACCESSOR,
        useExisting: core.forwardRef(function () { return NzAutocompleteTriggerDirective; }),
        multi: true
    };
    function getNzAutocompleteMissingPanelError() {
        return Error('Attempting to open an undefined instance of `nz-autocomplete`. ' +
            'Make sure that the id passed to the `nzAutocomplete` is correct and that ' +
            "you're attempting to open it after the ngAfterContentInit hook.");
    }
    var NzAutocompleteTriggerDirective = /** @class */ (function () {
        function NzAutocompleteTriggerDirective(elementRef, overlay, viewContainerRef, ngZone, 
        // tslint:disable-next-line:no-any
        document) {
            this.elementRef = elementRef;
            this.overlay = overlay;
            this.viewContainerRef = viewContainerRef;
            this.ngZone = ngZone;
            this.document = document;
            // tslint:disable-next-line:no-any
            this._onChange = function () { };
            this._onTouched = function () { };
            this.panelOpen = false;
        }
        Object.defineProperty(NzAutocompleteTriggerDirective.prototype, "activeOption", {
            /** Current active option */
            get: function () {
                if (this.nzAutocomplete && this.nzAutocomplete.options.length) {
                    return this.nzAutocomplete.activeItem;
                }
            },
            enumerable: true,
            configurable: true
        });
        NzAutocompleteTriggerDirective.prototype.ngOnDestroy = function () {
            this.destroyPanel();
        };
        // tslint:disable-next-line:no-any
        NzAutocompleteTriggerDirective.prototype.writeValue = function (value) {
            this.setTriggerValue(value);
        };
        NzAutocompleteTriggerDirective.prototype.registerOnChange = function (fn) {
            this._onChange = fn;
        };
        NzAutocompleteTriggerDirective.prototype.registerOnTouched = function (fn) {
            this._onTouched = fn;
        };
        NzAutocompleteTriggerDirective.prototype.setDisabledState = function (isDisabled) {
            var element = this.elementRef.nativeElement;
            element.disabled = isDisabled;
            this.closePanel();
        };
        NzAutocompleteTriggerDirective.prototype.openPanel = function () {
            this.previousValue = this.elementRef.nativeElement.value;
            this.attachOverlay();
            this.updateStatus();
        };
        NzAutocompleteTriggerDirective.prototype.closePanel = function () {
            if (this.panelOpen) {
                this.nzAutocomplete.isOpen = this.panelOpen = false;
                if (this.overlayRef && this.overlayRef.hasAttached()) {
                    this.selectionChangeSubscription.unsubscribe();
                    this.overlayBackdropClickSubscription.unsubscribe();
                    this.overlayPositionChangeSubscription.unsubscribe();
                    this.optionsChangeSubscription.unsubscribe();
                    this.overlayRef.detach();
                    this.overlayRef = null;
                    this.portal = null;
                }
            }
        };
        NzAutocompleteTriggerDirective.prototype.handleKeydown = function (event) {
            var keyCode = event.keyCode;
            var isArrowKey = keyCode === keycodes.UP_ARROW || keyCode === keycodes.DOWN_ARROW;
            if (keyCode === keycodes.ESCAPE) {
                event.preventDefault();
            }
            if (this.panelOpen && (keyCode === keycodes.ESCAPE || keyCode === keycodes.TAB)) {
                // Reset value when tab / ESC close
                if (this.activeOption && this.activeOption.getLabel() !== this.previousValue) {
                    this.setTriggerValue(this.previousValue);
                }
                this.closePanel();
            }
            else if (this.panelOpen && keyCode === keycodes.ENTER) {
                if (this.nzAutocomplete.showPanel && this.activeOption) {
                    event.preventDefault();
                    this.activeOption.selectViaInteraction();
                }
            }
            else if (this.panelOpen && isArrowKey && this.nzAutocomplete.showPanel) {
                event.stopPropagation();
                event.preventDefault();
                if (keyCode === keycodes.UP_ARROW) {
                    this.nzAutocomplete.setPreviousItemActive();
                }
                else {
                    this.nzAutocomplete.setNextItemActive();
                }
                if (this.activeOption) {
                    this.activeOption.scrollIntoViewIfNeeded();
                }
                this.doBackfill();
            }
        };
        NzAutocompleteTriggerDirective.prototype.handleInput = function (event) {
            var target = event.target;
            var document = this.document;
            var value = target.value;
            if (target.type === 'number') {
                value = value === '' ? null : parseFloat(value);
            }
            if (this.previousValue !== value) {
                this.previousValue = value;
                this._onChange(value);
                if (this.canOpen() && document.activeElement === event.target) {
                    this.openPanel();
                }
            }
        };
        NzAutocompleteTriggerDirective.prototype.handleFocus = function () {
            if (this.canOpen()) {
                this.openPanel();
            }
        };
        NzAutocompleteTriggerDirective.prototype.handleBlur = function () {
            this.closePanel();
            this._onTouched();
        };
        /**
         * Subscription data source changes event
         */
        NzAutocompleteTriggerDirective.prototype.subscribeOptionsChange = function () {
            var _this = this;
            var firstStable = this.ngZone.onStable.asObservable().pipe(operators.take(1));
            var optionChanges = this.nzAutocomplete.options.changes.pipe(operators.tap(function () { return _this.positionStrategy.reapplyLastPosition(); }), operators.delay(0));
            return rxjs.merge(firstStable, optionChanges).subscribe(function () {
                _this.resetActiveItem();
                if (_this.panelOpen) {
                    _this.overlayRef.updatePosition();
                }
            });
        };
        /**
         * Subscription option changes event and set the value
         */
        NzAutocompleteTriggerDirective.prototype.subscribeSelectionChange = function () {
            var _this = this;
            return this.nzAutocomplete.selectionChange.subscribe(function (option) {
                _this.setValueAndClose(option);
            });
        };
        /**
         * Subscription external click and close panel
         */
        NzAutocompleteTriggerDirective.prototype.subscribeOverlayBackdropClick = function () {
            var _this = this;
            return rxjs.merge(rxjs.fromEvent(this.document, 'click'), rxjs.fromEvent(this.document, 'touchend')).subscribe(function (event) {
                var clickTarget = event.target;
                // Make sure is not self
                if (clickTarget !== _this.elementRef.nativeElement && !_this.overlayRef.overlayElement.contains(clickTarget) && _this.panelOpen) {
                    _this.closePanel();
                }
            });
        };
        /**
         * Subscription overlay position changes and reset dropdown position
         */
        NzAutocompleteTriggerDirective.prototype.subscribeOverlayPositionChange = function () {
            var _this = this;
            return this.positionStrategy.positionChanges
                .pipe(operators.map(function (position) { return position.connectionPair.originY; }), operators.distinct(), operators.delay(0))
                .subscribe(function (position) {
                _this.nzAutocomplete.updatePosition(position);
            });
        };
        NzAutocompleteTriggerDirective.prototype.attachOverlay = function () {
            if (!this.nzAutocomplete) {
                throw getNzAutocompleteMissingPanelError();
            }
            if (!this.portal) {
                this.portal = new portal.TemplatePortal(this.nzAutocomplete.template, this.viewContainerRef);
            }
            if (!this.overlayRef) {
                this.overlayRef = this.overlay.create(this.getOverlayConfig());
            }
            if (this.overlayRef && !this.overlayRef.hasAttached()) {
                this.overlayRef.attach(this.portal);
                this.overlayPositionChangeSubscription = this.subscribeOverlayPositionChange();
                this.selectionChangeSubscription = this.subscribeSelectionChange();
                this.overlayBackdropClickSubscription = this.subscribeOverlayBackdropClick();
                this.optionsChangeSubscription = this.subscribeOptionsChange();
            }
            this.nzAutocomplete.isOpen = this.panelOpen = true;
        };
        NzAutocompleteTriggerDirective.prototype.updateStatus = function () {
            if (this.overlayRef) {
                this.overlayRef.updateSize({ width: this.nzAutocomplete.nzWidth || this.getHostWidth() });
            }
            this.nzAutocomplete.setVisibility();
            this.resetActiveItem();
            if (this.activeOption) {
                this.activeOption.scrollIntoViewIfNeeded();
            }
        };
        NzAutocompleteTriggerDirective.prototype.destroyPanel = function () {
            if (this.overlayRef) {
                this.closePanel();
            }
        };
        NzAutocompleteTriggerDirective.prototype.getOverlayConfig = function () {
            return new overlay.OverlayConfig({
                positionStrategy: this.getOverlayPosition(),
                scrollStrategy: this.overlay.scrollStrategies.reposition(),
                // default host element width
                width: this.nzAutocomplete.nzWidth || this.getHostWidth()
            });
        };
        NzAutocompleteTriggerDirective.prototype.getConnectedElement = function () {
            return this.elementRef;
        };
        NzAutocompleteTriggerDirective.prototype.getHostWidth = function () {
            return this.getConnectedElement().nativeElement.getBoundingClientRect().width;
        };
        NzAutocompleteTriggerDirective.prototype.getOverlayPosition = function () {
            var positions = [
                new overlay.ConnectionPositionPair({ originX: 'start', originY: 'bottom' }, { overlayX: 'start', overlayY: 'top' }),
                new overlay.ConnectionPositionPair({ originX: 'start', originY: 'top' }, { overlayX: 'start', overlayY: 'bottom' })
            ];
            this.positionStrategy = this.overlay
                .position()
                .flexibleConnectedTo(this.getConnectedElement())
                .withFlexibleDimensions(false)
                .withPush(false)
                .withPositions(positions);
            return this.positionStrategy;
        };
        NzAutocompleteTriggerDirective.prototype.resetActiveItem = function () {
            var index = this.nzAutocomplete.getOptionIndex(this.previousValue);
            this.nzAutocomplete.clearSelectedOptions(null, true);
            if (index !== -1) {
                this.nzAutocomplete.setActiveItem(index);
                this.nzAutocomplete.activeItem.select(false);
            }
            else {
                this.nzAutocomplete.setActiveItem(this.nzAutocomplete.nzDefaultActiveFirstOption ? 0 : -1);
            }
        };
        NzAutocompleteTriggerDirective.prototype.setValueAndClose = function (option) {
            var value = option.nzValue;
            this.setTriggerValue(option.getLabel());
            this._onChange(value);
            this.elementRef.nativeElement.focus();
            this.closePanel();
        };
        NzAutocompleteTriggerDirective.prototype.setTriggerValue = function (value) {
            this.elementRef.nativeElement.value = value || '';
            if (!this.nzAutocomplete.nzBackfill) {
                this.previousValue = value;
            }
        };
        NzAutocompleteTriggerDirective.prototype.doBackfill = function () {
            if (this.nzAutocomplete.nzBackfill && this.nzAutocomplete.activeItem) {
                this.setTriggerValue(this.nzAutocomplete.activeItem.getLabel());
            }
        };
        NzAutocompleteTriggerDirective.prototype.canOpen = function () {
            var element = this.elementRef.nativeElement;
            return !element.readOnly && !element.disabled;
        };
        /** @nocollapse */ NzAutocompleteTriggerDirective.ɵfac = function NzAutocompleteTriggerDirective_Factory(t) { return new (t || NzAutocompleteTriggerDirective)(core.ɵɵdirectiveInject(core.ElementRef), core.ɵɵdirectiveInject(overlay.Overlay), core.ɵɵdirectiveInject(core.ViewContainerRef), core.ɵɵdirectiveInject(core.NgZone), core.ɵɵdirectiveInject(common.DOCUMENT, 8)); };
        /** @nocollapse */ NzAutocompleteTriggerDirective.ɵdir = core.ɵɵdefineDirective({ type: NzAutocompleteTriggerDirective, selectors: [["input", "nzAutocomplete", ""], ["textarea", "nzAutocomplete", ""]], hostBindings: function NzAutocompleteTriggerDirective_HostBindings(rf, ctx, elIndex) { if (rf & 1) {
                core.ɵɵlistener("focusin", function NzAutocompleteTriggerDirective_focusin_HostBindingHandler($event) { return ctx.handleFocus(); })("blur", function NzAutocompleteTriggerDirective_blur_HostBindingHandler($event) { return ctx.handleBlur(); })("input", function NzAutocompleteTriggerDirective_input_HostBindingHandler($event) { return ctx.handleInput($event); })("keydown", function NzAutocompleteTriggerDirective_keydown_HostBindingHandler($event) { return ctx.handleKeydown($event); });
                core.ɵɵelementHostAttrs(_c0$3);
            } }, inputs: { nzAutocomplete: "nzAutocomplete" }, exportAs: ["nzAutocompleteTrigger"], features: [core.ɵɵProvidersFeature([NZ_AUTOCOMPLETE_VALUE_ACCESSOR])] });
        return NzAutocompleteTriggerDirective;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NzAutocompleteTriggerDirective, [{
            type: core.Directive,
            args: [{
                    selector: "input[nzAutocomplete], textarea[nzAutocomplete]",
                    exportAs: 'nzAutocompleteTrigger',
                    providers: [NZ_AUTOCOMPLETE_VALUE_ACCESSOR],
                    host: {
                        autocomplete: 'off',
                        'aria-autocomplete': 'list',
                        '(focusin)': 'handleFocus()',
                        '(blur)': 'handleBlur()',
                        '(input)': 'handleInput($event)',
                        '(keydown)': 'handleKeydown($event)'
                    }
                }]
        }], function () { return [{ type: core.ElementRef }, { type: overlay.Overlay }, { type: core.ViewContainerRef }, { type: core.NgZone }, { type: undefined, decorators: [{
                    type: core.Optional
                }, {
                    type: core.Inject,
                    args: [common.DOCUMENT]
                }] }]; }, { nzAutocomplete: [{
                type: core.Input
            }] }); })();

    /**
     * @license
     * Copyright Alibaba.com All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    var NzAutocompleteModule = /** @class */ (function () {
        function NzAutocompleteModule() {
        }
        /** @nocollapse */ NzAutocompleteModule.ɵmod = core.ɵɵdefineNgModule({ type: NzAutocompleteModule });
        /** @nocollapse */ NzAutocompleteModule.ɵinj = core.ɵɵdefineInjector({ factory: function NzAutocompleteModule_Factory(t) { return new (t || NzAutocompleteModule)(); }, imports: [[common.CommonModule, overlay.OverlayModule, forms.FormsModule, core$1.NzAddOnModule, core$1.NzNoAnimationModule]] });
        return NzAutocompleteModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && core.ɵɵsetNgModuleScope(NzAutocompleteModule, { declarations: [NzAutocompleteComponent, NzAutocompleteOptionComponent, NzAutocompleteTriggerDirective, NzAutocompleteOptgroupComponent], imports: [common.CommonModule, overlay.OverlayModule, forms.FormsModule, core$1.NzAddOnModule, core$1.NzNoAnimationModule], exports: [NzAutocompleteComponent, NzAutocompleteOptionComponent, NzAutocompleteTriggerDirective, NzAutocompleteOptgroupComponent] }); })();
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NzAutocompleteModule, [{
            type: core.NgModule,
            args: [{
                    declarations: [NzAutocompleteComponent, NzAutocompleteOptionComponent, NzAutocompleteTriggerDirective, NzAutocompleteOptgroupComponent],
                    exports: [NzAutocompleteComponent, NzAutocompleteOptionComponent, NzAutocompleteTriggerDirective, NzAutocompleteOptgroupComponent],
                    imports: [common.CommonModule, overlay.OverlayModule, forms.FormsModule, core$1.NzAddOnModule, core$1.NzNoAnimationModule]
                }]
        }], null, null); })();

    exports.NZ_AUTOCOMPLETE_VALUE_ACCESSOR = NZ_AUTOCOMPLETE_VALUE_ACCESSOR;
    exports.NzAutocompleteComponent = NzAutocompleteComponent;
    exports.NzAutocompleteModule = NzAutocompleteModule;
    exports.NzAutocompleteOptgroupComponent = NzAutocompleteOptgroupComponent;
    exports.NzAutocompleteOptionComponent = NzAutocompleteOptionComponent;
    exports.NzAutocompleteTriggerDirective = NzAutocompleteTriggerDirective;
    exports.NzOptionSelectionChange = NzOptionSelectionChange;
    exports.getNzAutocompleteMissingPanelError = getNzAutocompleteMissingPanelError;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ng-zorro-antd-auto-complete.umd.js.map
