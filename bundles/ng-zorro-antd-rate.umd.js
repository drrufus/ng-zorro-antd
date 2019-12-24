(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/cdk/keycodes'), require('@angular/core'), require('@angular/forms'), require('rxjs'), require('rxjs/operators'), require('ng-zorro-antd/core'), require('@angular/common'), require('ng-zorro-antd/tooltip'), require('ng-zorro-antd/icon')) :
    typeof define === 'function' && define.amd ? define('ng-zorro-antd/rate', ['exports', '@angular/cdk/keycodes', '@angular/core', '@angular/forms', 'rxjs', 'rxjs/operators', 'ng-zorro-antd/core', '@angular/common', 'ng-zorro-antd/tooltip', 'ng-zorro-antd/icon'], factory) :
    (global = global || self, factory((global['ng-zorro-antd'] = global['ng-zorro-antd'] || {}, global['ng-zorro-antd'].rate = {}), global.ng.cdk.keycodes, global.ng.core, global.ng.forms, global.rxjs, global.rxjs.operators, global['ng-zorro-antd'].core, global.ng.common, global['ng-zorro-antd'].tooltip, global['ng-zorro-antd'].icon));
}(this, (function (exports, keycodes, core, forms, rxjs, operators, core$1, common, tooltip, icon) { 'use strict';

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

    var _c0 = ["nz-rate-item", ""];
    function NzRateItemComponent_ng_template_1_Template(rf, ctx) { }
    function NzRateItemComponent_ng_template_3_Template(rf, ctx) { }
    function NzRateItemComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelement(0, "i", 4);
    } }
    var NzRateItemComponent = /** @class */ (function () {
        function NzRateItemComponent() {
            this.allowHalf = false;
            this.itemHover = new core.EventEmitter();
            this.itemClick = new core.EventEmitter();
        }
        NzRateItemComponent.prototype.hoverRate = function (isHalf) {
            this.itemHover.next(isHalf && this.allowHalf);
        };
        NzRateItemComponent.prototype.clickRate = function (isHalf) {
            this.itemClick.next(isHalf && this.allowHalf);
        };
        /** @nocollapse */ NzRateItemComponent.ɵfac = function NzRateItemComponent_Factory(t) { return new (t || NzRateItemComponent)(); };
        /** @nocollapse */ NzRateItemComponent.ɵcmp = core.ɵɵdefineComponent({ type: NzRateItemComponent, selectors: [["", "nz-rate-item", ""]], inputs: { character: "character", allowHalf: "allowHalf" }, outputs: { itemHover: "itemHover", itemClick: "itemClick" }, exportAs: ["nzRateItem"], attrs: _c0, decls: 6, vars: 2, consts: [[1, "ant-rate-star-second", 3, "mouseover", "click"], [3, "ngTemplateOutlet"], [1, "ant-rate-star-first", 3, "mouseover", "click"], ["defaultCharacter", ""], ["nz-icon", "", "nzType", "star", "nzTheme", "fill"]], template: function NzRateItemComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵelementStart(0, "div", 0);
                core.ɵɵlistener("mouseover", function NzRateItemComponent_Template_div_mouseover_0_listener($event) { ctx.hoverRate(false); return $event.stopPropagation(); })("click", function NzRateItemComponent_Template_div_click_0_listener($event) { return ctx.clickRate(false); });
                core.ɵɵtemplate(1, NzRateItemComponent_ng_template_1_Template, 0, 0, "ng-template", 1);
                core.ɵɵelementEnd();
                core.ɵɵelementStart(2, "div", 2);
                core.ɵɵlistener("mouseover", function NzRateItemComponent_Template_div_mouseover_2_listener($event) { ctx.hoverRate(true); return $event.stopPropagation(); })("click", function NzRateItemComponent_Template_div_click_2_listener($event) { return ctx.clickRate(true); });
                core.ɵɵtemplate(3, NzRateItemComponent_ng_template_3_Template, 0, 0, "ng-template", 1);
                core.ɵɵelementEnd();
                core.ɵɵtemplate(4, NzRateItemComponent_ng_template_4_Template, 1, 0, "ng-template", null, 3, core.ɵɵtemplateRefExtractor);
            } if (rf & 2) {
                var _r702 = core.ɵɵreference(5);
                core.ɵɵadvance(1);
                core.ɵɵproperty("ngTemplateOutlet", ctx.character || _r702);
                core.ɵɵadvance(2);
                core.ɵɵproperty("ngTemplateOutlet", ctx.character || _r702);
            } }, directives: [common.NgTemplateOutlet, icon.NzIconDirective], encapsulation: 2, changeDetection: 0 });
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Boolean)
        ], NzRateItemComponent.prototype, "allowHalf", void 0);
        return NzRateItemComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NzRateItemComponent, [{
            type: core.Component,
            args: [{
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    encapsulation: core.ViewEncapsulation.None,
                    selector: '[nz-rate-item]',
                    exportAs: 'nzRateItem',
                    templateUrl: './nz-rate-item.component.html'
                }]
        }], null, { character: [{
                type: core.Input
            }], allowHalf: [{
                type: core.Input
            }], itemHover: [{
                type: core.Output
            }], itemClick: [{
                type: core.Output
            }] }); })();

    var _c0$1 = ["ulElement"];
    function NzRateComponent_li_2_Template(rf, ctx) { if (rf & 1) {
        var _r698 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "li", 3);
        core.ɵɵelementStart(1, "div", 4);
        core.ɵɵlistener("itemHover", function NzRateComponent_li_2_Template_div_itemHover_1_listener($event) { core.ɵɵrestoreView(_r698); var i_r696 = ctx.index; var ctx_r697 = core.ɵɵnextContext(); return ctx_r697.onItemHover(i_r696, $event); })("itemClick", function NzRateComponent_li_2_Template_div_itemClick_1_listener($event) { core.ɵɵrestoreView(_r698); var i_r696 = ctx.index; var ctx_r699 = core.ɵɵnextContext(); return ctx_r699.onItemClick(i_r696, $event); });
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var star_r695 = ctx.$implicit;
        var i_r696 = ctx.index;
        var ctx_r694 = core.ɵɵnextContext();
        core.ɵɵproperty("ngClass", ctx_r694.setClasses(star_r695))("nzTitle", ctx_r694.nzTooltips[i_r696]);
        core.ɵɵadvance(1);
        core.ɵɵproperty("allowHalf", ctx_r694.nzAllowHalf)("character", ctx_r694.nzCharacter);
    } }
    var NZ_CONFIG_COMPONENT_NAME = 'rate';
    var NzRateComponent = /** @class */ (function () {
        function NzRateComponent(nzConfigService, renderer, cdr) {
            this.nzConfigService = nzConfigService;
            this.renderer = renderer;
            this.cdr = cdr;
            this.nzDisabled = false;
            this.nzAutoFocus = false;
            this.nzTooltips = [];
            this.nzOnBlur = new core.EventEmitter();
            this.nzOnFocus = new core.EventEmitter();
            this.nzOnHoverChange = new core.EventEmitter();
            this.nzOnKeyDown = new core.EventEmitter();
            this.hasHalf = false;
            this.hoverValue = 0;
            this.prefixCls = 'ant-rate';
            this.innerPrefixCls = this.prefixCls + "-star";
            this.isFocused = false;
            this.isInit = false;
            this.starArray = [];
            this.destroy$ = new rxjs.Subject();
            this._count = 5;
            this._value = 0;
            this.onChange = function () { return null; };
            this.onTouched = function () { return null; };
        }
        Object.defineProperty(NzRateComponent.prototype, "nzCount", {
            get: function () {
                return this._count;
            },
            set: function (value) {
                if (this._count === value) {
                    return;
                }
                this._count = value;
                this.updateStarArray();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzRateComponent.prototype, "nzValue", {
            get: function () {
                return this._value;
            },
            set: function (input) {
                if (this._value === input) {
                    return;
                }
                this._value = input;
                this.hasHalf = !Number.isInteger(input);
                this.hoverValue = Math.ceil(input);
            },
            enumerable: true,
            configurable: true
        });
        NzRateComponent.prototype.ngOnChanges = function (changes) {
            if (changes.nzAutoFocus && !changes.nzAutoFocus.isFirstChange()) {
                if (this.nzAutoFocus && !this.nzDisabled) {
                    this.renderer.setAttribute(this.ulElement.nativeElement, 'autofocus', 'autofocus');
                }
                else {
                    this.renderer.removeAttribute(this.ulElement.nativeElement, 'autofocus');
                }
            }
        };
        NzRateComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.updateStarArray();
            this.nzConfigService
                .getConfigChangeEventForComponent(NZ_CONFIG_COMPONENT_NAME)
                .pipe(operators.takeUntil(this.destroy$))
                .subscribe(function () { return _this.cdr.markForCheck(); });
        };
        NzRateComponent.prototype.ngOnDestroy = function () {
            this.destroy$.next();
            this.destroy$.complete();
        };
        NzRateComponent.prototype.ngAfterViewInit = function () {
            this.isInit = true;
        };
        NzRateComponent.prototype.onItemClick = function (index, isHalf) {
            if (this.nzDisabled) {
                return;
            }
            this.hoverValue = index + 1;
            var actualValue = isHalf ? index + 0.5 : index + 1;
            if (this.nzValue === actualValue) {
                if (this.nzAllowClear) {
                    this.nzValue = 0;
                    this.onChange(this.nzValue);
                }
            }
            else {
                this.nzValue = actualValue;
                this.onChange(this.nzValue);
            }
        };
        NzRateComponent.prototype.onItemHover = function (index, isHalf) {
            if (this.nzDisabled || (this.hoverValue === index + 1 && isHalf === this.hasHalf)) {
                return;
            }
            this.hoverValue = index + 1;
            this.hasHalf = isHalf;
            this.nzOnHoverChange.emit(this.hoverValue);
        };
        NzRateComponent.prototype.onRateLeave = function () {
            this.hasHalf = !Number.isInteger(this.nzValue);
            this.hoverValue = Math.ceil(this.nzValue);
        };
        NzRateComponent.prototype.onFocus = function (e) {
            this.isFocused = true;
            this.nzOnFocus.emit(e);
        };
        NzRateComponent.prototype.onBlur = function (e) {
            this.isFocused = false;
            this.nzOnBlur.emit(e);
        };
        NzRateComponent.prototype.focus = function () {
            this.ulElement.nativeElement.focus();
        };
        NzRateComponent.prototype.blur = function () {
            this.ulElement.nativeElement.blur();
        };
        NzRateComponent.prototype.onKeyDown = function (e) {
            var oldVal = this.nzValue;
            if (e.keyCode === keycodes.RIGHT_ARROW && this.nzValue < this.nzCount) {
                this.nzValue += this.nzAllowHalf ? 0.5 : 1;
            }
            else if (e.keyCode === keycodes.LEFT_ARROW && this.nzValue > 0) {
                this.nzValue -= this.nzAllowHalf ? 0.5 : 1;
            }
            if (oldVal !== this.nzValue) {
                this.onChange(this.nzValue);
                this.nzOnKeyDown.emit(e);
                this.cdr.markForCheck();
            }
        };
        NzRateComponent.prototype.setClasses = function (i) {
            var _a;
            return _a = {},
                _a[this.innerPrefixCls + "-full"] = i + 1 < this.hoverValue || (!this.hasHalf && i + 1 === this.hoverValue),
                _a[this.innerPrefixCls + "-half"] = this.hasHalf && i + 1 === this.hoverValue,
                _a[this.innerPrefixCls + "-active"] = this.hasHalf && i + 1 === this.hoverValue,
                _a[this.innerPrefixCls + "-zero"] = i + 1 > this.hoverValue,
                _a[this.innerPrefixCls + "-focused"] = this.hasHalf && i + 1 === this.hoverValue && this.isFocused,
                _a;
        };
        NzRateComponent.prototype.updateStarArray = function () {
            this.starArray = Array(this.nzCount)
                .fill(0)
                .map(function (_, i) { return i; });
        };
        // #region Implement `ControlValueAccessor`
        NzRateComponent.prototype.writeValue = function (value) {
            this.nzValue = value || 0;
            this.cdr.markForCheck();
        };
        NzRateComponent.prototype.setDisabledState = function (isDisabled) {
            this.nzDisabled = isDisabled;
        };
        NzRateComponent.prototype.registerOnChange = function (fn) {
            this.onChange = fn;
        };
        NzRateComponent.prototype.registerOnTouched = function (fn) {
            this.onTouched = fn;
        };
        /** @nocollapse */ NzRateComponent.ɵfac = function NzRateComponent_Factory(t) { return new (t || NzRateComponent)(core.ɵɵdirectiveInject(core$1.NzConfigService), core.ɵɵdirectiveInject(core.Renderer2), core.ɵɵdirectiveInject(core.ChangeDetectorRef)); };
        /** @nocollapse */ NzRateComponent.ɵcmp = core.ɵɵdefineComponent({ type: NzRateComponent, selectors: [["nz-rate"]], viewQuery: function NzRateComponent_Query(rf, ctx) { if (rf & 1) {
                core.ɵɵviewQuery(_c0$1, true);
            } if (rf & 2) {
                var _t;
                core.ɵɵqueryRefresh(_t = core.ɵɵloadQuery()) && (ctx.ulElement = _t.first);
            } }, inputs: { nzAllowClear: "nzAllowClear", nzAllowHalf: "nzAllowHalf", nzDisabled: "nzDisabled", nzAutoFocus: "nzAutoFocus", nzCharacter: "nzCharacter", nzTooltips: "nzTooltips", nzCount: "nzCount" }, outputs: { nzOnBlur: "nzOnBlur", nzOnFocus: "nzOnFocus", nzOnHoverChange: "nzOnHoverChange", nzOnKeyDown: "nzOnKeyDown" }, exportAs: ["nzRate"], features: [core.ɵɵProvidersFeature([
                    {
                        provide: forms.NG_VALUE_ACCESSOR,
                        useExisting: core.forwardRef((function () { return NzRateComponent; })),
                        multi: true
                    }
                ]), core.ɵɵNgOnChangesFeature()], decls: 3, vars: 4, consts: [[1, "ant-rate", 3, "ngClass", "tabindex", "blur", "focus", "keydown", "mouseleave"], ["ulElement", ""], ["class", "ant-rate-star", "nz-tooltip", "", 3, "ngClass", "nzTitle", 4, "ngFor", "ngForOf"], ["nz-tooltip", "", 1, "ant-rate-star", 3, "ngClass", "nzTitle"], ["nz-rate-item", "", 3, "allowHalf", "character", "itemHover", "itemClick"]], template: function NzRateComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵelementStart(0, "ul", 0, 1);
                core.ɵɵlistener("blur", function NzRateComponent_Template_ul_blur_0_listener($event) { return ctx.onBlur($event); })("focus", function NzRateComponent_Template_ul_focus_0_listener($event) { return ctx.onFocus($event); })("keydown", function NzRateComponent_Template_ul_keydown_0_listener($event) { ctx.onKeyDown($event); return $event.preventDefault(); })("mouseleave", function NzRateComponent_Template_ul_mouseleave_0_listener($event) { ctx.onRateLeave(); return $event.stopPropagation(); });
                core.ɵɵtemplate(2, NzRateComponent_li_2_Template, 2, 4, "li", 2);
                core.ɵɵelementEnd();
            } if (rf & 2) {
                core.ɵɵclassProp("ant-rate-disabled", ctx.nzDisabled);
                core.ɵɵproperty("ngClass", ctx.classMap)("tabindex", ctx.nzDisabled ? 0 - 1 : 1);
                core.ɵɵadvance(2);
                core.ɵɵproperty("ngForOf", ctx.starArray);
            } }, directives: [common.NgClass, common.NgForOf, tooltip.NzTooltipDirective, NzRateItemComponent], encapsulation: 2, changeDetection: 0 });
        __decorate([
            core$1.WithConfig(NZ_CONFIG_COMPONENT_NAME, true), core$1.InputBoolean(),
            __metadata("design:type", Boolean)
        ], NzRateComponent.prototype, "nzAllowClear", void 0);
        __decorate([
            core$1.WithConfig(NZ_CONFIG_COMPONENT_NAME, false), core$1.InputBoolean(),
            __metadata("design:type", Boolean)
        ], NzRateComponent.prototype, "nzAllowHalf", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Boolean)
        ], NzRateComponent.prototype, "nzDisabled", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Boolean)
        ], NzRateComponent.prototype, "nzAutoFocus", void 0);
        return NzRateComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NzRateComponent, [{
            type: core.Component,
            args: [{
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    encapsulation: core.ViewEncapsulation.None,
                    selector: 'nz-rate',
                    exportAs: 'nzRate',
                    preserveWhitespaces: false,
                    templateUrl: './nz-rate.component.html',
                    providers: [
                        {
                            provide: forms.NG_VALUE_ACCESSOR,
                            useExisting: core.forwardRef((function () { return NzRateComponent; })),
                            multi: true
                        }
                    ]
                }]
        }], function () { return [{ type: core$1.NzConfigService }, { type: core.Renderer2 }, { type: core.ChangeDetectorRef }]; }, { ulElement: [{
                type: core.ViewChild,
                args: ['ulElement', { static: false }]
            }], nzAllowClear: [{
                type: core.Input
            }], nzAllowHalf: [{
                type: core.Input
            }], nzDisabled: [{
                type: core.Input
            }], nzAutoFocus: [{
                type: core.Input
            }], nzCharacter: [{
                type: core.Input
            }], nzTooltips: [{
                type: core.Input
            }], nzOnBlur: [{
                type: core.Output
            }], nzOnFocus: [{
                type: core.Output
            }], nzOnHoverChange: [{
                type: core.Output
            }], nzOnKeyDown: [{
                type: core.Output
            }], nzCount: [{
                type: core.Input
            }] }); })();

    /**
     * @license
     * Copyright Alibaba.com All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
     */
    var NzRateModule = /** @class */ (function () {
        function NzRateModule() {
        }
        /** @nocollapse */ NzRateModule.ɵmod = core.ɵɵdefineNgModule({ type: NzRateModule });
        /** @nocollapse */ NzRateModule.ɵinj = core.ɵɵdefineInjector({ factory: function NzRateModule_Factory(t) { return new (t || NzRateModule)(); }, imports: [[common.CommonModule, icon.NzIconModule, tooltip.NzToolTipModule]] });
        return NzRateModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && core.ɵɵsetNgModuleScope(NzRateModule, { declarations: [NzRateComponent, NzRateItemComponent], imports: [common.CommonModule, icon.NzIconModule, tooltip.NzToolTipModule], exports: [NzRateComponent] }); })();
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NzRateModule, [{
            type: core.NgModule,
            args: [{
                    exports: [NzRateComponent],
                    declarations: [NzRateComponent, NzRateItemComponent],
                    imports: [common.CommonModule, icon.NzIconModule, tooltip.NzToolTipModule]
                }]
        }], null, null); })();

    exports.NzRateComponent = NzRateComponent;
    exports.NzRateItemComponent = NzRateItemComponent;
    exports.NzRateModule = NzRateModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ng-zorro-antd-rate.umd.js.map
