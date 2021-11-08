(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('@angular/core'),require('ng-zorro-antd/core'),require('@angular/cdk/a11y'),require('@angular/common'),require('ng-zorro-antd/icon'),exports, require('@angular/cdk/a11y'), require('@angular/cdk/keycodes'), require('@angular/core'), require('@angular/forms'), require('ng-zorro-antd/core'), require('@angular/common'), require('ng-zorro-antd/icon')) :
    typeof define === 'function' && define.amd ? define('ng-zorro-antd/switch', ['@angular/core','ng-zorro-antd/core','@angular/cdk/a11y','@angular/common','ng-zorro-antd/icon','exports', '@angular/cdk/a11y', '@angular/cdk/keycodes', '@angular/core', '@angular/forms', 'ng-zorro-antd/core', '@angular/common', 'ng-zorro-antd/icon'], factory) :
    (global = global || self, factory(global.ng.core,global.ngZorroAntd.core,global.ng.cdk.a11y,global.ng.common,global.ngZorroAntd.icon,(global['ng-zorro-antd'] = global['ng-zorro-antd'] || {}, global['ng-zorro-antd'].switch = {}), global.ng.cdk.a11y, global.ng.cdk.keycodes, global.ng.core, global.ng.forms, global['ng-zorro-antd'].core, global.ng.common, global['ng-zorro-antd'].icon));
}(this, (function (ɵngcc0,ɵngcc1,ɵngcc2,ɵngcc3,ɵngcc4,exports, a11y, keycodes, core, forms, core$1, common, icon) { 
var _c0 = ["switchElement"];
function NzSwitchComponent_i_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "i", 7);
} }
function NzSwitchComponent_ng_container_6_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r5 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r5.nzCheckedChildren);
} }
function NzSwitchComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, NzSwitchComponent_ng_container_6_ng_container_1_Template, 2, 1, "ng-container", 8);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("nzStringTemplateOutlet", ctx_r2.nzCheckedChildren);
} }
function NzSwitchComponent_ng_container_7_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r6 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r6.nzUnCheckedChildren);
} }
function NzSwitchComponent_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, NzSwitchComponent_ng_container_7_ng_container_1_Template, 2, 1, "ng-container", 8);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r3 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("nzStringTemplateOutlet", ctx_r3.nzUnCheckedChildren);
} }
function NzSwitchComponent_span_8_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span", 9);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r4 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r4.nzLabel);
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
    /** @type {?} */
    var NZ_CONFIG_COMPONENT_NAME = 'switch';
    var NzSwitchComponent = /** @class */ (function () {
        function NzSwitchComponent(nzConfigService, cdr, focusMonitor) {
            this.nzConfigService = nzConfigService;
            this.cdr = cdr;
            this.focusMonitor = focusMonitor;
            this.checked = false;
            this.onChange = (/**
             * @return {?}
             */
            function () { return null; });
            this.onTouched = (/**
             * @return {?}
             */
            function () { return null; });
            this.nzLoading = false;
            this.nzDisabled = false;
            this.nzControl = false;
            this.nzLabel = null;
        }
        /**
         * @param {?} e
         * @return {?}
         */
        NzSwitchComponent.prototype.hostClick = /**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            e.preventDefault();
            if (!this.nzDisabled && !this.nzLoading && !this.nzControl) {
                this.updateValue(!this.checked);
            }
        };
        /**
         * @param {?} value
         * @return {?}
         */
        NzSwitchComponent.prototype.updateValue = /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (this.checked !== value) {
                this.checked = value;
                this.onChange(this.checked);
            }
        };
        /**
         * @param {?} e
         * @return {?}
         */
        NzSwitchComponent.prototype.onKeyDown = /**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            if (!this.nzControl && !this.nzDisabled && !this.nzLoading) {
                if (e.keyCode === keycodes.LEFT_ARROW) {
                    this.updateValue(false);
                    e.preventDefault();
                }
                else if (e.keyCode === keycodes.RIGHT_ARROW) {
                    this.updateValue(true);
                    e.preventDefault();
                }
                else if (e.keyCode === keycodes.SPACE || e.keyCode === keycodes.ENTER) {
                    this.updateValue(!this.checked);
                    e.preventDefault();
                }
            }
        };
        /**
         * @return {?}
         */
        NzSwitchComponent.prototype.focus = /**
         * @return {?}
         */
        function () {
            this.focusMonitor.focusVia(this.switchElement.nativeElement, 'keyboard');
        };
        /**
         * @return {?}
         */
        NzSwitchComponent.prototype.blur = /**
         * @return {?}
         */
        function () {
            this.switchElement.nativeElement.blur();
        };
        /**
         * @return {?}
         */
        NzSwitchComponent.prototype.ngAfterViewInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.focusMonitor.monitor(this.switchElement.nativeElement, true).subscribe((/**
             * @param {?} focusOrigin
             * @return {?}
             */
            function (focusOrigin) {
                if (!focusOrigin) {
                    // When a focused element becomes disabled, the browser *immediately* fires a blur event.
                    // Angular does not expect events to be raised during change detection, so any state change
                    // (such as a form control's 'ng-touched') will cause a changed-after-checked error.
                    // See https://github.com/angular/angular/issues/17793. To work around this, we defer
                    // telling the form control it has been touched until the next tick.
                    Promise.resolve().then((/**
                     * @return {?}
                     */
                    function () { return _this.onTouched(); }));
                }
            }));
        };
        /**
         * @return {?}
         */
        NzSwitchComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            this.focusMonitor.stopMonitoring(this.switchElement.nativeElement);
        };
        /**
         * @param {?} value
         * @return {?}
         */
        NzSwitchComponent.prototype.writeValue = /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.checked = value;
            this.cdr.markForCheck();
        };
        /**
         * @param {?} fn
         * @return {?}
         */
        NzSwitchComponent.prototype.registerOnChange = /**
         * @param {?} fn
         * @return {?}
         */
        function (fn) {
            this.onChange = fn;
        };
        /**
         * @param {?} fn
         * @return {?}
         */
        NzSwitchComponent.prototype.registerOnTouched = /**
         * @param {?} fn
         * @return {?}
         */
        function (fn) {
            this.onTouched = fn;
        };
        /**
         * @param {?} isDisabled
         * @return {?}
         */
        NzSwitchComponent.prototype.setDisabledState = /**
         * @param {?} isDisabled
         * @return {?}
         */
        function (isDisabled) {
            this.nzDisabled = isDisabled;
            this.cdr.markForCheck();
        };
        /** @nocollapse */
        NzSwitchComponent.ctorParameters = function () { return [
            { type: core$1.NzConfigService },
            { type: core.ChangeDetectorRef },
            { type: a11y.FocusMonitor }
        ]; };
        NzSwitchComponent.propDecorators = {
            switchElement: [{ type: core.ViewChild, args: ['switchElement', { static: true },] }],
            nzLoading: [{ type: core.Input }],
            nzDisabled: [{ type: core.Input }],
            nzControl: [{ type: core.Input }],
            nzCheckedChildren: [{ type: core.Input }],
            nzUnCheckedChildren: [{ type: core.Input }],
            nzSize: [{ type: core.Input }],
            nzLabel: [{ type: core.Input }]
        };
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzSwitchComponent.prototype, "nzLoading", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzSwitchComponent.prototype, "nzDisabled", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzSwitchComponent.prototype, "nzControl", void 0);
        __decorate([
            core$1.WithConfig(NZ_CONFIG_COMPONENT_NAME, 'default'),
            __metadata("design:type", String)
        ], NzSwitchComponent.prototype, "nzSize", void 0);
NzSwitchComponent.ɵfac = function NzSwitchComponent_Factory(t) { return new (t || NzSwitchComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.NzConfigService), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.FocusMonitor)); };
NzSwitchComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzSwitchComponent, selectors: [["nz-switch"]], viewQuery: function NzSwitchComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵstaticViewQuery(_c0, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.switchElement = _t.first);
    } }, hostBindings: function NzSwitchComponent_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("click", function NzSwitchComponent_click_HostBindingHandler($event) { return ctx.hostClick($event); });
    } }, inputs: { nzLoading: "nzLoading", nzDisabled: "nzDisabled", nzControl: "nzControl", nzLabel: "nzLabel", nzCheckedChildren: "nzCheckedChildren", nzUnCheckedChildren: "nzUnCheckedChildren", nzSize: "nzSize" }, exportAs: ["nzSwitch"], features: [ɵngcc0.ɵɵProvidersFeature([
            {
                provide: forms.NG_VALUE_ACCESSOR,
                useExisting: core.forwardRef(( /**
                 * @return {?}
                 */function () { return NzSwitchComponent; })),
                multi: true
            }
        ])], decls: 9, vars: 15, consts: [[2, "display", "flex", "flex-flow", "row nowrap", "align-items", "center"], ["type", "button", "nz-wave", "", "role", "checkbox", 1, "ant-switch", 3, "disabled", "nzWaveExtraNode", "keydown"], ["switchElement", ""], ["nz-icon", "", "nzType", "loading", "class", "ant-switch-loading-icon", 4, "ngIf"], [1, "ant-switch-inner"], [4, "ngIf"], ["style", "margin-left: 6px;", 4, "ngIf"], ["nz-icon", "", "nzType", "loading", 1, "ant-switch-loading-icon"], [4, "nzStringTemplateOutlet"], [2, "margin-left", "6px"]], template: function NzSwitchComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "label", 0);
        ɵngcc0.ɵɵelementStart(1, "button", 1, 2);
        ɵngcc0.ɵɵlistener("keydown", function NzSwitchComponent_Template_button_keydown_1_listener($event) { return ctx.onKeyDown($event); });
        ɵngcc0.ɵɵtemplate(3, NzSwitchComponent_i_3_Template, 1, 0, "i", 3);
        ɵngcc0.ɵɵelementStart(4, "span", 4);
        ɵngcc0.ɵɵelementStart(5, "span");
        ɵngcc0.ɵɵtemplate(6, NzSwitchComponent_ng_container_6_Template, 2, 1, "ng-container", 5);
        ɵngcc0.ɵɵtemplate(7, NzSwitchComponent_ng_container_7_Template, 2, 1, "ng-container", 5);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(8, NzSwitchComponent_span_8_Template, 2, 1, "span", 6);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassProp("ant-switch-checked", ctx.checked)("ant-switch-loading", ctx.nzLoading)("ant-switch-disabled", ctx.nzDisabled)("ant-switch-small", ctx.nzSize === "small");
        ɵngcc0.ɵɵproperty("disabled", ctx.nzDisabled)("nzWaveExtraNode", true);
        ɵngcc0.ɵɵattribute("aria-checked", ctx.checked);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", ctx.nzLoading);
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵproperty("ngIf", ctx.checked);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.checked);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.nzLabel);
    } }, directives: [ɵngcc1.NzWaveDirective, ɵngcc3.NgIf, ɵngcc4.NzIconDirective, ɵngcc1.NzStringTemplateOutletDirective], styles: ["\n      nz-switch {\n        display: inline-block;\n      }\n    "], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzSwitchComponent, [{
        type: core.Component,
        args: [{
                selector: 'nz-switch',
                exportAs: 'nzSwitch',
                preserveWhitespaces: false,
                template: "<label style=\"display: flex; flex-flow: row nowrap; align-items: center;\">\r\n  <button type=\"button\" #switchElement nz-wave class=\"ant-switch\" [disabled]=\"nzDisabled\" [attr.aria-checked]=\"checked\"\r\n    [class.ant-switch-checked]=\"checked\" [class.ant-switch-loading]=\"nzLoading\" [class.ant-switch-disabled]=\"nzDisabled\"\r\n    [class.ant-switch-small]=\"nzSize === 'small'\" [nzWaveExtraNode]=\"true\" (keydown)=\"onKeyDown($event)\" role=\"checkbox\">\r\n    <i *ngIf=\"nzLoading\" nz-icon nzType=\"loading\" class=\"ant-switch-loading-icon\"></i>\r\n    <span class=\"ant-switch-inner\">\r\n      <span>\r\n        <ng-container *ngIf=\"checked\">\r\n          <ng-container *nzStringTemplateOutlet=\"nzCheckedChildren\">{{ nzCheckedChildren }}</ng-container>\r\n        </ng-container>\r\n        <ng-container *ngIf=\"!checked\">\r\n          <ng-container *nzStringTemplateOutlet=\"nzUnCheckedChildren\">{{ nzUnCheckedChildren }}</ng-container>\r\n        </ng-container>\r\n      </span>\r\n    </span>\r\n  </button>\r\n  <span style=\"margin-left: 6px;\" *ngIf=\"nzLabel\">{{ nzLabel }}</span>\r\n</label>",
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                encapsulation: core.ViewEncapsulation.None,
                providers: [
                    {
                        provide: forms.NG_VALUE_ACCESSOR,
                        useExisting: core.forwardRef(( /**
                         * @return {?}
                         */function () { return NzSwitchComponent; })),
                        multi: true
                    }
                ],
                host: {
                    '(click)': 'hostClick($event)'
                },
                styles: ["\n      nz-switch {\n        display: inline-block;\n      }\n    "]
            }]
    }], function () { return [{ type: ɵngcc1.NzConfigService }, { type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc2.FocusMonitor }]; }, { nzLoading: [{
            type: core.Input
        }], nzDisabled: [{
            type: core.Input
        }], nzControl: [{
            type: core.Input
        }], nzLabel: [{
            type: core.Input
        }], switchElement: [{
            type: core.ViewChild,
            args: ['switchElement', { static: true }]
        }], nzCheckedChildren: [{
            type: core.Input
        }], nzUnCheckedChildren: [{
            type: core.Input
        }], nzSize: [{
            type: core.Input
        }] }); })();
        return NzSwitchComponent;
    }());
    if (false) {
        /** @type {?} */
        NzSwitchComponent.prototype.checked;
        /** @type {?} */
        NzSwitchComponent.prototype.onChange;
        /** @type {?} */
        NzSwitchComponent.prototype.onTouched;
        /**
         * @type {?}
         * @private
         */
        NzSwitchComponent.prototype.switchElement;
        /** @type {?} */
        NzSwitchComponent.prototype.nzLoading;
        /** @type {?} */
        NzSwitchComponent.prototype.nzDisabled;
        /** @type {?} */
        NzSwitchComponent.prototype.nzControl;
        /** @type {?} */
        NzSwitchComponent.prototype.nzCheckedChildren;
        /** @type {?} */
        NzSwitchComponent.prototype.nzUnCheckedChildren;
        /** @type {?} */
        NzSwitchComponent.prototype.nzSize;
        /** @type {?} */
        NzSwitchComponent.prototype.nzLabel;
        /** @type {?} */
        NzSwitchComponent.prototype.nzConfigService;
        /**
         * @type {?}
         * @private
         */
        NzSwitchComponent.prototype.cdr;
        /**
         * @type {?}
         * @private
         */
        NzSwitchComponent.prototype.focusMonitor;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzSwitchModule = /** @class */ (function () {
        function NzSwitchModule() {
        }
NzSwitchModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: NzSwitchModule });
NzSwitchModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function NzSwitchModule_Factory(t) { return new (t || NzSwitchModule)(); }, imports: [[common.CommonModule, core$1.NzWaveModule, icon.NzIconModule, core$1.NzAddOnModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(NzSwitchModule, { declarations: [NzSwitchComponent], imports: [ɵngcc3.CommonModule, ɵngcc1.NzWaveModule, ɵngcc4.NzIconModule, ɵngcc1.NzAddOnModule], exports: [NzSwitchComponent] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzSwitchModule, [{
        type: core.NgModule,
        args: [{
                exports: [NzSwitchComponent],
                declarations: [NzSwitchComponent],
                imports: [common.CommonModule, core$1.NzWaveModule, icon.NzIconModule, core$1.NzAddOnModule]
            }]
    }], function () { return []; }, null); })();
        return NzSwitchModule;
    }());

    exports.NzSwitchComponent = NzSwitchComponent;
    exports.NzSwitchModule = NzSwitchModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));


//# sourceMappingURL=ng-zorro-antd-switch.umd.js.map