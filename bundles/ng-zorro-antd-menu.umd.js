(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('@angular/core'),require('ng-zorro-antd/core'),require('@angular/router'),require('@angular/cdk/platform'),require('@angular/cdk/overlay'),require('@angular/common'),require('ng-zorro-antd/icon'),require('@angular/forms'),require('ng-zorro-antd/button'),exports, require('@angular/core'), require('rxjs'), require('rxjs/operators'), require('ng-zorro-antd/core'), require('@angular/router'), require('@angular/cdk/overlay'), require('@angular/cdk/platform'), require('@angular/common'), require('@angular/forms'), require('ng-zorro-antd/button'), require('ng-zorro-antd/icon')) :
    typeof define === 'function' && define.amd ? define('ng-zorro-antd/menu', ['@angular/core','ng-zorro-antd/core','@angular/router','@angular/cdk/platform','@angular/cdk/overlay','@angular/common','ng-zorro-antd/icon','@angular/forms','ng-zorro-antd/button','exports', '@angular/core', 'rxjs', 'rxjs/operators', 'ng-zorro-antd/core', '@angular/router', '@angular/cdk/overlay', '@angular/cdk/platform', '@angular/common', '@angular/forms', 'ng-zorro-antd/button', 'ng-zorro-antd/icon'], factory) :
    (global = global || self, factory(global.ng.core,global.ngZorroAntd.core,global.ng.router,global.ng.cdk.platform,global.ng.cdk.overlay,global.ng.common,global.ngZorroAntd.icon,global.ng.forms,global.ngZorroAntd.button,(global['ng-zorro-antd'] = global['ng-zorro-antd'] || {}, global['ng-zorro-antd'].menu = {}), global.ng.core, global.rxjs, global.rxjs.operators, global['ng-zorro-antd'].core, global.ng.router, global.ng.cdk.overlay, global.ng.cdk.platform, global.ng.common, global.ng.forms, global['ng-zorro-antd'].button, global['ng-zorro-antd'].icon));
}(this, (function (ɵngcc0,ɵngcc1,ɵngcc2,ɵngcc3,ɵngcc4,ɵngcc5,ɵngcc6,ɵngcc7,ɵngcc8,exports, core, rxjs, operators, core$1, router, overlay, platform, common, forms, button, icon) { 
var _c0 = ["nz-submenu", ""];
function NzSubMenuComponent_i_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "i", 10);
} if (rf & 2) {
    var ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("nzType", ctx_r1.nzIcon);
} }
function NzSubMenuComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelementStart(1, "span");
    ɵngcc0.ɵɵtext(2);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate(ctx_r2.nzTitle);
} }
function NzSubMenuComponent_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵprojection(0, 0, ["*ngIf", "!nzTitle"]);
} }
function NzSubMenuComponent_span_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span", 11);
    ɵngcc0.ɵɵelement(1, "i", 12);
    ɵngcc0.ɵɵelementEnd();
} }
function NzSubMenuComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "i", 13);
} }
function NzSubMenuComponent_ul_8_1_ng_template_0_Template(rf, ctx) { }
function NzSubMenuComponent_ul_8_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, NzSubMenuComponent_ul_8_1_ng_template_0_Template, 0, 0, "ng-template", 15);
} if (rf & 2) {
    ɵngcc0.ɵɵnextContext(2);
    var _r9 = ɵngcc0.ɵɵreference(11);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", _r9);
} }
function NzSubMenuComponent_ul_8_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "ul", 14);
    ɵngcc0.ɵɵtemplate(1, NzSubMenuComponent_ul_8_1_Template, 1, 1, undefined, 4);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r7 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("@collapseMotion", ctx_r7.expandState)("@.disabled", ctx_r7.noAnimation == null ? null : ctx_r7.noAnimation.nzNoAnimation)("nzNoAnimation", ctx_r7.noAnimation == null ? null : ctx_r7.noAnimation.nzNoAnimation)("ngClass", ctx_r7.nzMenuClassName);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r7.expandState != "collapsed");
} }
function NzSubMenuComponent_ng_template_9_ng_template_2_Template(rf, ctx) { }
function NzSubMenuComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    var _r15 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 16);
    ɵngcc0.ɵɵlistener("mouseleave", function NzSubMenuComponent_ng_template_9_Template_div_mouseleave_0_listener() { ɵngcc0.ɵɵrestoreView(_r15); var ctx_r14 = ɵngcc0.ɵɵnextContext(); return ctx_r14.setMouseEnterState(false); })("mouseenter", function NzSubMenuComponent_ng_template_9_Template_div_mouseenter_0_listener() { ɵngcc0.ɵɵrestoreView(_r15); var ctx_r16 = ɵngcc0.ɵɵnextContext(); return ctx_r16.setMouseEnterState(true); });
    ɵngcc0.ɵɵelementStart(1, "ul", 17);
    ɵngcc0.ɵɵtemplate(2, NzSubMenuComponent_ng_template_9_ng_template_2_Template, 0, 0, "ng-template", 15);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r8 = ɵngcc0.ɵɵnextContext();
    var _r9 = ɵngcc0.ɵɵreference(11);
    ɵngcc0.ɵɵclassProp("ant-menu-light", ctx_r8.nzMenuService.theme === "light")("ant-menu-dark", ctx_r8.nzMenuService.theme === "dark")("ant-menu-submenu-placement-bottomLeft", ctx_r8.nzSubmenuService.mode === "horizontal")("ant-menu-submenu-placement-rightTop", ctx_r8.nzSubmenuService.mode === "vertical" && ctx_r8.placement === "rightTop")("ant-menu-submenu-placement-leftTop", ctx_r8.nzSubmenuService.mode === "vertical" && ctx_r8.placement === "leftTop");
    ɵngcc0.ɵɵproperty("@slideMotion", ctx_r8.expandState)("@zoomBigMotion", ctx_r8.expandState)("@.disabled", ctx_r8.noAnimation == null ? null : ctx_r8.noAnimation.nzNoAnimation)("nzNoAnimation", ctx_r8.noAnimation == null ? null : ctx_r8.noAnimation.nzNoAnimation);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassProp("ant-dropdown-menu", ctx_r8.nzMenuService.isInDropDown)("ant-menu", !ctx_r8.nzMenuService.isInDropDown)("ant-dropdown-menu-vertical", ctx_r8.nzMenuService.isInDropDown)("ant-menu-vertical", !ctx_r8.nzMenuService.isInDropDown)("ant-dropdown-menu-sub", ctx_r8.nzMenuService.isInDropDown)("ant-menu-sub", !ctx_r8.nzMenuService.isInDropDown);
    ɵngcc0.ɵɵproperty("ngClass", ctx_r8.nzMenuClassName);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", _r9);
} }
function NzSubMenuComponent_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵprojection(0, 1);
} }
var _c1 = [[["", "title", ""]], "*"];
var _c2 = ["[title]", "*"];
var _c3 = ["nz-menu-group", ""];
function NzMenuGroupComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r0.nzTitle);
} }
function NzMenuGroupComponent_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵprojection(0, 1, ["*ngIf", "!nzTitle"]);
} }
var _c4 = ["*", [["", "title", ""]]];
var _c5 = ["*", "[title]"];
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
    var NzMenuService = /** @class */ (function (_super) {
        __extends(NzMenuService, _super);
        function NzMenuService() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.isInDropDown = false;
            return _this;
        }
NzMenuService.ɵfac = function NzMenuService_Factory(t) { return ɵNzMenuService_BaseFactory(t || NzMenuService); };
NzMenuService.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: NzMenuService, factory: function (t) { return NzMenuService.ɵfac(t); } });
var ɵNzMenuService_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(NzMenuService);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzMenuService, [{
        type: core.Injectable
    }], null, null); })();
        return NzMenuService;
    }(core$1.NzMenuBaseService));
    if (false) {
        /** @type {?} */
        NzMenuService.prototype.isInDropDown;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzSubmenuService = /** @class */ (function () {
        function NzSubmenuService(nzHostSubmenuService, nzMenuService) {
            var _this = this;
            this.nzHostSubmenuService = nzHostSubmenuService;
            this.nzMenuService = nzMenuService;
            this.disabled = false;
            this.mode = 'vertical';
            this.mode$ = this.nzMenuService.mode$.pipe(operators.map((/**
             * @param {?} mode
             * @return {?}
             */
            function (mode) {
                if (mode === 'inline') {
                    return 'inline';
                }
                else if (mode === 'vertical' || _this.nzHostSubmenuService) {
                    return 'vertical';
                }
                else {
                    return 'horizontal';
                }
            })), operators.tap((/**
             * @param {?} mode
             * @return {?}
             */
            function (mode) { return (_this.mode = (/** @type {?} */ (mode))); })));
            this.level = 1;
            this.level$ = new rxjs.BehaviorSubject(1);
            this.subMenuOpen$ = new rxjs.BehaviorSubject(false);
            this.open$ = new rxjs.BehaviorSubject(false);
            this.mouseEnterLeave$ = new rxjs.Subject();
            this.menuOpen$ = rxjs.combineLatest(this.subMenuOpen$, this.mouseEnterLeave$).pipe(operators.map((/**
             * @param {?} value
             * @return {?}
             */
            function (value) { return value[0] || value[1]; })), operators.auditTime(150), operators.distinctUntilChanged(), operators.tap((/**
             * @param {?} data
             * @return {?}
             */
            function (data) {
                _this.setOpenState(data);
                if (_this.nzHostSubmenuService) {
                    _this.nzHostSubmenuService.subMenuOpen$.next(data);
                }
            })));
            if (this.nzHostSubmenuService) {
                this.setLevel(this.nzHostSubmenuService.level + 1);
            }
        }
        /**
         * @param {?} value
         * @return {?}
         */
        NzSubmenuService.prototype.setOpenState = /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.open$.next(value);
        };
        /**
         * @return {?}
         */
        NzSubmenuService.prototype.onMenuItemClick = /**
         * @return {?}
         */
        function () {
            this.setMouseEnterState(false);
        };
        /**
         * @param {?} value
         * @return {?}
         */
        NzSubmenuService.prototype.setLevel = /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.level$.next(value);
            this.level = value;
        };
        /**
         * @param {?} value
         * @return {?}
         */
        NzSubmenuService.prototype.setMouseEnterState = /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if ((this.mode === 'horizontal' || this.mode === 'vertical' || this.nzMenuService.isInDropDown) && !this.disabled) {
                this.mouseEnterLeave$.next(value);
            }
        };
        /** @nocollapse */
        NzSubmenuService.ctorParameters = function () { return [
            { type: NzSubmenuService, decorators: [{ type: core.SkipSelf }, { type: core.Optional }] },
            { type: NzMenuService }
        ]; };
NzSubmenuService.ɵfac = function NzSubmenuService_Factory(t) { return new (t || NzSubmenuService)(ɵngcc0.ɵɵinject(NzSubmenuService, 12), ɵngcc0.ɵɵinject(NzMenuService)); };
NzSubmenuService.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: NzSubmenuService, factory: function (t) { return NzSubmenuService.ɵfac(t); } });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzSubmenuService, [{
        type: core.Injectable
    }], function () { return [{ type: NzSubmenuService, decorators: [{
                type: core.SkipSelf
            }, {
                type: core.Optional
            }] }, { type: NzMenuService }]; }, null); })();
        return NzSubmenuService;
    }());
    if (false) {
        /** @type {?} */
        NzSubmenuService.prototype.disabled;
        /** @type {?} */
        NzSubmenuService.prototype.mode;
        /** @type {?} */
        NzSubmenuService.prototype.mode$;
        /** @type {?} */
        NzSubmenuService.prototype.level;
        /** @type {?} */
        NzSubmenuService.prototype.level$;
        /** @type {?} */
        NzSubmenuService.prototype.subMenuOpen$;
        /** @type {?} */
        NzSubmenuService.prototype.open$;
        /** @type {?} */
        NzSubmenuService.prototype.mouseEnterLeave$;
        /** @type {?} */
        NzSubmenuService.prototype.menuOpen$;
        /**
         * @type {?}
         * @private
         */
        NzSubmenuService.prototype.nzHostSubmenuService;
        /** @type {?} */
        NzSubmenuService.prototype.nzMenuService;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzMenuItemDirective = /** @class */ (function () {
        function NzMenuItemDirective(nzUpdateHostClassService, nzMenuService, nzSubmenuService, renderer, elementRef, routerLink, routerLinkWithHref, router$1) {
            var _this = this;
            this.nzUpdateHostClassService = nzUpdateHostClassService;
            this.nzMenuService = nzMenuService;
            this.nzSubmenuService = nzSubmenuService;
            this.renderer = renderer;
            this.elementRef = elementRef;
            this.routerLink = routerLink;
            this.routerLinkWithHref = routerLinkWithHref;
            this.router = router$1;
            this.el = this.elementRef.nativeElement;
            this.destroy$ = new rxjs.Subject();
            this.originalPadding = null;
            this.selected$ = new rxjs.Subject();
            this.nzDisabled = false;
            this.nzSelected = false;
            this.nzMatchRouterExact = false;
            this.nzMatchRouter = false;
            if (router$1) {
                (/** @type {?} */ (this.router)).events.pipe(operators.takeUntil(this.destroy$), operators.filter((/**
                 * @param {?} e
                 * @return {?}
                 */
                function (e) { return e instanceof router.NavigationEnd; }))).subscribe((/**
                 * @return {?}
                 */
                function () {
                    _this.updateRouterActive();
                }));
            }
        }
        /** clear all item selected status except this */
        /**
         * clear all item selected status except this
         * @param {?} e
         * @return {?}
         */
        NzMenuItemDirective.prototype.clickMenuItem = /**
         * clear all item selected status except this
         * @param {?} e
         * @return {?}
         */
        function (e) {
            if (this.nzDisabled) {
                e.preventDefault();
                e.stopPropagation();
                return;
            }
            this.nzMenuService.onMenuItemClick(this);
            if (this.nzSubmenuService) {
                this.nzSubmenuService.onMenuItemClick();
            }
        };
        /**
         * @return {?}
         */
        NzMenuItemDirective.prototype.setClassMap = /**
         * @return {?}
         */
        function () {
            var _a;
            /** @type {?} */
            var prefixName = this.nzMenuService.isInDropDown ? 'ant-dropdown-menu-item' : 'ant-menu-item';
            this.nzUpdateHostClassService.updateHostClass(this.el, (_a = {},
                _a["" + prefixName] = true,
                _a[prefixName + "-selected"] = this.nzSelected,
                _a[prefixName + "-disabled"] = this.nzDisabled,
                _a));
        };
        /**
         * @param {?} value
         * @return {?}
         */
        NzMenuItemDirective.prototype.setSelectedState = /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.nzSelected = value;
            this.selected$.next(value);
            this.setClassMap();
        };
        /**
         * @private
         * @return {?}
         */
        NzMenuItemDirective.prototype.updateRouterActive = /**
         * @private
         * @return {?}
         */
        function () {
            var _this = this;
            if (!this.listOfRouterLink ||
                !this.listOfRouterLinkWithHref ||
                !this.router ||
                !this.router.navigated ||
                !this.nzMatchRouter) {
                return;
            }
            Promise.resolve().then((/**
             * @return {?}
             */
            function () {
                /** @type {?} */
                var hasActiveLinks = _this.hasActiveLinks();
                if (_this.nzSelected !== hasActiveLinks) {
                    _this.nzSelected = hasActiveLinks;
                    _this.setSelectedState(_this.nzSelected);
                }
            }));
        };
        /**
         * @private
         * @return {?}
         */
        NzMenuItemDirective.prototype.hasActiveLinks = /**
         * @private
         * @return {?}
         */
        function () {
            /** @type {?} */
            var isActiveCheckFn = this.isLinkActive((/** @type {?} */ (this.router)));
            return ((this.routerLink && isActiveCheckFn(this.routerLink)) ||
                (this.routerLinkWithHref && isActiveCheckFn(this.routerLinkWithHref)) ||
                this.listOfRouterLink.some(isActiveCheckFn) ||
                this.listOfRouterLinkWithHref.some(isActiveCheckFn));
        };
        /**
         * @private
         * @param {?} router
         * @return {?}
         */
        NzMenuItemDirective.prototype.isLinkActive = /**
         * @private
         * @param {?} router
         * @return {?}
         */
        function (router) {
            var _this = this;
            return (/**
             * @param {?} link
             * @return {?}
             */
            function (link) { return router.isActive(link.urlTree, _this.nzMatchRouterExact); });
        };
        /**
         * @return {?}
         */
        NzMenuItemDirective.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            /**
             * store origin padding in padding
             * @type {?}
             */
            var paddingLeft = this.el.style.paddingLeft;
            if (paddingLeft) {
                this.originalPadding = parseInt(paddingLeft, 10);
            }
            rxjs.merge(this.nzMenuService.mode$, this.nzMenuService.inlineIndent$, this.nzSubmenuService ? this.nzSubmenuService.level$ : rxjs.EMPTY)
                .pipe(operators.takeUntil(this.destroy$))
                .subscribe((/**
             * @return {?}
             */
            function () {
                /** @type {?} */
                var padding = null;
                if (_this.nzMenuService.mode === 'inline') {
                    if (core$1.isNotNil(_this.nzPaddingLeft)) {
                        padding = _this.nzPaddingLeft;
                    }
                    else {
                        /** @type {?} */
                        var level = _this.nzSubmenuService ? _this.nzSubmenuService.level + 1 : 1;
                        padding = level * _this.nzMenuService.inlineIndent;
                    }
                }
                else {
                    padding = _this.originalPadding;
                }
                if (padding) {
                    _this.renderer.setStyle(_this.el, 'padding-left', padding + "px");
                }
                else {
                    _this.renderer.removeStyle(_this.el, 'padding-left');
                }
            }));
            this.setClassMap();
        };
        /**
         * @return {?}
         */
        NzMenuItemDirective.prototype.ngAfterContentInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.listOfRouterLink.changes.pipe(operators.takeUntil(this.destroy$)).subscribe((/**
             * @return {?}
             */
            function () { return _this.updateRouterActive(); }));
            this.listOfRouterLinkWithHref.changes.pipe(operators.takeUntil(this.destroy$)).subscribe((/**
             * @return {?}
             */
            function () { return _this.updateRouterActive(); }));
            this.updateRouterActive();
        };
        /**
         * @param {?} changes
         * @return {?}
         */
        NzMenuItemDirective.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
        function (changes) {
            if (changes.nzSelected) {
                this.setSelectedState(this.nzSelected);
            }
            if (changes.nzDisabled) {
                this.setClassMap();
            }
        };
        /**
         * @return {?}
         */
        NzMenuItemDirective.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            this.destroy$.next();
            this.destroy$.complete();
        };
        /** @nocollapse */
        NzMenuItemDirective.ctorParameters = function () { return [
            { type: core$1.NzUpdateHostClassService },
            { type: core$1.NzMenuBaseService },
            { type: NzSubmenuService, decorators: [{ type: core.Optional }] },
            { type: core.Renderer2 },
            { type: core.ElementRef },
            { type: router.RouterLink, decorators: [{ type: core.Optional }] },
            { type: router.RouterLinkWithHref, decorators: [{ type: core.Optional }] },
            { type: router.Router, decorators: [{ type: core.Optional }] }
        ]; };
        NzMenuItemDirective.propDecorators = {
            nzDisabled: [{ type: core.Input }],
            nzSelected: [{ type: core.Input }],
            nzPaddingLeft: [{ type: core.Input }],
            nzMatchRouterExact: [{ type: core.Input }],
            nzMatchRouter: [{ type: core.Input }],
            listOfRouterLink: [{ type: core.ContentChildren, args: [router.RouterLink, { descendants: true },] }],
            listOfRouterLinkWithHref: [{ type: core.ContentChildren, args: [router.RouterLinkWithHref, { descendants: true },] }]
        };
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzMenuItemDirective.prototype, "nzDisabled", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzMenuItemDirective.prototype, "nzSelected", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzMenuItemDirective.prototype, "nzMatchRouterExact", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzMenuItemDirective.prototype, "nzMatchRouter", void 0);
NzMenuItemDirective.ɵfac = function NzMenuItemDirective_Factory(t) { return new (t || NzMenuItemDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.NzUpdateHostClassService), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.NzMenuBaseService), ɵngcc0.ɵɵdirectiveInject(NzSubmenuService, 8), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.RouterLink, 8), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.RouterLinkWithHref, 8), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.Router, 8)); };
NzMenuItemDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: NzMenuItemDirective, selectors: [["", "nz-menu-item", ""]], contentQueries: function NzMenuItemDirective_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, router.RouterLink, true);
        ɵngcc0.ɵɵcontentQuery(dirIndex, router.RouterLinkWithHref, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.listOfRouterLink = _t);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.listOfRouterLinkWithHref = _t);
    } }, hostBindings: function NzMenuItemDirective_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("click", function NzMenuItemDirective_click_HostBindingHandler($event) { return ctx.clickMenuItem($event); });
    } }, inputs: { nzDisabled: "nzDisabled", nzSelected: "nzSelected", nzMatchRouterExact: "nzMatchRouterExact", nzMatchRouter: "nzMatchRouter", nzPaddingLeft: "nzPaddingLeft" }, exportAs: ["nzMenuItem"], features: [ɵngcc0.ɵɵProvidersFeature([core$1.NzUpdateHostClassService]), ɵngcc0.ɵɵNgOnChangesFeature] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzMenuItemDirective, [{
        type: core.Directive,
        args: [{
                selector: '[nz-menu-item]',
                exportAs: 'nzMenuItem',
                providers: [core$1.NzUpdateHostClassService],
                host: {
                    '(click)': 'clickMenuItem($event)'
                }
            }]
    }], function () { return [{ type: ɵngcc1.NzUpdateHostClassService }, { type: ɵngcc1.NzMenuBaseService }, { type: NzSubmenuService, decorators: [{
                type: core.Optional
            }] }, { type: ɵngcc0.Renderer2 }, { type: ɵngcc0.ElementRef }, { type: ɵngcc2.RouterLink, decorators: [{
                type: core.Optional
            }] }, { type: ɵngcc2.RouterLinkWithHref, decorators: [{
                type: core.Optional
            }] }, { type: ɵngcc2.Router, decorators: [{
                type: core.Optional
            }] }]; }, { nzDisabled: [{
            type: core.Input
        }], nzSelected: [{
            type: core.Input
        }], nzMatchRouterExact: [{
            type: core.Input
        }], nzMatchRouter: [{
            type: core.Input
        }], nzPaddingLeft: [{
            type: core.Input
        }], listOfRouterLink: [{
            type: core.ContentChildren,
            args: [router.RouterLink, { descendants: true }]
        }], listOfRouterLinkWithHref: [{
            type: core.ContentChildren,
            args: [router.RouterLinkWithHref, { descendants: true }]
        }] }); })();
        return NzMenuItemDirective;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        NzMenuItemDirective.prototype.el;
        /**
         * @type {?}
         * @private
         */
        NzMenuItemDirective.prototype.destroy$;
        /**
         * @type {?}
         * @private
         */
        NzMenuItemDirective.prototype.originalPadding;
        /** @type {?} */
        NzMenuItemDirective.prototype.selected$;
        /** @type {?} */
        NzMenuItemDirective.prototype.nzDisabled;
        /** @type {?} */
        NzMenuItemDirective.prototype.nzSelected;
        /** @type {?} */
        NzMenuItemDirective.prototype.nzPaddingLeft;
        /** @type {?} */
        NzMenuItemDirective.prototype.nzMatchRouterExact;
        /** @type {?} */
        NzMenuItemDirective.prototype.nzMatchRouter;
        /** @type {?} */
        NzMenuItemDirective.prototype.listOfRouterLink;
        /** @type {?} */
        NzMenuItemDirective.prototype.listOfRouterLinkWithHref;
        /**
         * @type {?}
         * @private
         */
        NzMenuItemDirective.prototype.nzUpdateHostClassService;
        /**
         * @type {?}
         * @private
         */
        NzMenuItemDirective.prototype.nzMenuService;
        /**
         * @type {?}
         * @private
         */
        NzMenuItemDirective.prototype.nzSubmenuService;
        /**
         * @type {?}
         * @private
         */
        NzMenuItemDirective.prototype.renderer;
        /**
         * @type {?}
         * @private
         */
        NzMenuItemDirective.prototype.elementRef;
        /**
         * @type {?}
         * @private
         */
        NzMenuItemDirective.prototype.routerLink;
        /**
         * @type {?}
         * @private
         */
        NzMenuItemDirective.prototype.routerLinkWithHref;
        /**
         * @type {?}
         * @private
         */
        NzMenuItemDirective.prototype.router;
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
     * @param {?} higherOrderService
     * @param {?} menuService
     * @return {?}
     */
    function NzMenuServiceFactory(higherOrderService, menuService) {
        return higherOrderService ? higherOrderService : menuService;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzSubMenuComponent = /** @class */ (function () {
        function NzSubMenuComponent(elementRef, nzMenuService, cdr, nzSubmenuService, nzUpdateHostClassService, platform, noAnimation) {
            this.elementRef = elementRef;
            this.nzMenuService = nzMenuService;
            this.cdr = cdr;
            this.nzSubmenuService = nzSubmenuService;
            this.nzUpdateHostClassService = nzUpdateHostClassService;
            this.platform = platform;
            this.noAnimation = noAnimation;
            this.nzOpen = false;
            this.nzDisabled = false;
            this.nzTogglingLabel = 'Toggle';
            this.nzOpenChange = new core.EventEmitter();
            this.placement = 'rightTop';
            this.expandState = 'collapsed';
            this.overlayPositions = __spread(core$1.DEFAULT_SUBMENU_POSITIONS);
            this.destroy$ = new rxjs.Subject();
            this.isChildMenuSelected = false;
            this.isMouseHover = false;
        }
        /**
         * @param {?} open
         * @return {?}
         */
        NzSubMenuComponent.prototype.setOpenState = /**
         * @param {?} open
         * @return {?}
         */
        function (open) {
            this.nzSubmenuService.setOpenState(open);
        };
        /**
         * @return {?}
         */
        NzSubMenuComponent.prototype.clickSubMenuTitle = /**
         * @return {?}
         */
        function () {
            if (this.nzSubmenuService.mode === 'inline' && !this.nzMenuService.isInDropDown && !this.nzDisabled) {
                this.setOpenState(!this.nzOpen);
            }
        };
        /**
         * @param {?} value
         * @return {?}
         */
        NzSubMenuComponent.prototype.setMouseEnterState = /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.isMouseHover = value;
            this.setClassMap();
            this.nzSubmenuService.setMouseEnterState(value);
        };
        /**
         * @return {?}
         */
        NzSubMenuComponent.prototype.setTriggerWidth = /**
         * @return {?}
         */
        function () {
            if (this.nzSubmenuService.mode === 'horizontal' && this.platform.isBrowser) {
                this.triggerWidth = this.cdkOverlayOrigin.nativeElement.getBoundingClientRect().width;
            }
        };
        /**
         * @param {?} position
         * @return {?}
         */
        NzSubMenuComponent.prototype.onPositionChange = /**
         * @param {?} position
         * @return {?}
         */
        function (position) {
            this.placement = (/** @type {?} */ (core$1.getPlacementName(position)));
            this.cdr.markForCheck();
        };
        /**
         * @return {?}
         */
        NzSubMenuComponent.prototype.setClassMap = /**
         * @return {?}
         */
        function () {
            var _a;
            /** @type {?} */
            var prefixName = this.nzMenuService.isInDropDown ? 'ant-dropdown-menu-submenu' : 'ant-menu-submenu';
            this.nzUpdateHostClassService.updateHostClass(this.elementRef.nativeElement, (_a = {},
                _a["" + prefixName] = true,
                _a[prefixName + "-disabled"] = this.nzDisabled,
                _a[prefixName + "-open"] = this.nzOpen,
                _a[prefixName + "-selected"] = this.isChildMenuSelected,
                _a[prefixName + "-" + this.nzSubmenuService.mode] = true,
                _a[prefixName + "-active"] = this.isMouseHover && !this.nzDisabled,
                _a));
        };
        /**
         * @return {?}
         */
        NzSubMenuComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            rxjs.combineLatest([this.nzSubmenuService.mode$, this.nzSubmenuService.open$])
                .pipe(operators.takeUntil(this.destroy$))
                .subscribe((/**
             * @param {?} __0
             * @return {?}
             */
            function (_a) {
                var _b = __read(_a, 2), mode = _b[0], open = _b[1];
                if (open && mode === 'inline') {
                    _this.expandState = 'expanded';
                }
                else if (open && mode === 'horizontal') {
                    _this.expandState = 'bottom';
                }
                else if (open && mode === 'vertical') {
                    _this.expandState = 'active';
                }
                else {
                    _this.isMouseHover = false;
                    _this.expandState = 'collapsed';
                }
                _this.overlayPositions =
                    mode === 'horizontal' ? [core$1.POSITION_MAP.bottomLeft] : [core$1.POSITION_MAP.rightTop, core$1.POSITION_MAP.leftTop];
                if (open !== _this.nzOpen) {
                    _this.setTriggerWidth();
                    _this.nzOpen = open;
                    _this.nzOpenChange.emit(_this.nzOpen);
                }
                _this.setClassMap();
            }));
            this.nzSubmenuService.menuOpen$.pipe(operators.takeUntil(this.destroy$)).subscribe((/**
             * @param {?} data
             * @return {?}
             */
            function (data) {
                _this.nzMenuService.menuOpen$.next(data);
            }));
            rxjs.merge(this.nzMenuService.mode$, this.nzMenuService.inlineIndent$, this.nzSubmenuService.level$, this.nzSubmenuService.open$, this.nzSubmenuService.mode$)
                .pipe(operators.takeUntil(this.destroy$))
                .subscribe((/**
             * @return {?}
             */
            function () {
                _this.cdr.markForCheck();
            }));
        };
        /**
         * @return {?}
         */
        NzSubMenuComponent.prototype.ngAfterContentInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.setTriggerWidth();
            this.listOfNzMenuItemDirective.changes
                .pipe(operators.startWith(true), operators.flatMap((/**
             * @return {?}
             */
            function () {
                return rxjs.merge.apply(void 0, __spread([_this.listOfNzMenuItemDirective.changes], _this.listOfNzMenuItemDirective.map((/**
                 * @param {?} menu
                 * @return {?}
                 */
                function (menu) { return menu.selected$; }))));
            })), operators.startWith(true), operators.map((/**
             * @return {?}
             */
            function () { return _this.listOfNzMenuItemDirective.some((/**
             * @param {?} e
             * @return {?}
             */
            function (e) { return e.nzSelected; })); })), operators.takeUntil(this.destroy$))
                .subscribe((/**
             * @param {?} selected
             * @return {?}
             */
            function (selected) {
                _this.isChildMenuSelected = selected;
                _this.setClassMap();
            }));
        };
        /**
         * @param {?} changes
         * @return {?}
         */
        NzSubMenuComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
        function (changes) {
            if (changes.nzOpen) {
                this.nzSubmenuService.setOpenState(this.nzOpen);
                this.setTriggerWidth();
            }
            if (changes.nzDisabled) {
                this.nzSubmenuService.disabled = this.nzDisabled;
                this.setClassMap();
            }
        };
        /**
         * @return {?}
         */
        NzSubMenuComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            this.destroy$.next();
            this.destroy$.complete();
        };
        /** @nocollapse */
        NzSubMenuComponent.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: core$1.NzMenuBaseService },
            { type: core.ChangeDetectorRef },
            { type: NzSubmenuService },
            { type: core$1.NzUpdateHostClassService },
            { type: platform.Platform },
            { type: core$1.NzNoAnimationDirective, decorators: [{ type: core.Host }, { type: core.Optional }] }
        ]; };
        NzSubMenuComponent.propDecorators = {
            nzMenuClassName: [{ type: core.Input }],
            nzPaddingLeft: [{ type: core.Input }],
            nzTitle: [{ type: core.Input }],
            nzIcon: [{ type: core.Input }],
            nzOpen: [{ type: core.Input }],
            nzDisabled: [{ type: core.Input }],
            nzTogglingLabel: [{ type: core.Input }],
            nzOpenChange: [{ type: core.Output }],
            cdkConnectedOverlay: [{ type: core.ViewChild, args: [overlay.CdkConnectedOverlay, { static: true },] }],
            cdkOverlayOrigin: [{ type: core.ViewChild, args: [overlay.CdkOverlayOrigin, { static: true, read: core.ElementRef },] }],
            listOfNzSubMenuComponent: [{ type: core.ContentChildren, args: [NzSubMenuComponent, { descendants: true },] }],
            listOfNzMenuItemDirective: [{ type: core.ContentChildren, args: [NzMenuItemDirective, { descendants: true },] }]
        };
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzSubMenuComponent.prototype, "nzOpen", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzSubMenuComponent.prototype, "nzDisabled", void 0);
NzSubMenuComponent.ɵfac = function NzSubMenuComponent_Factory(t) { return new (t || NzSubMenuComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.NzMenuBaseService), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(NzSubmenuService), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.NzUpdateHostClassService), ɵngcc0.ɵɵdirectiveInject(ɵngcc3.Platform), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.NzNoAnimationDirective, 9)); };
NzSubMenuComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzSubMenuComponent, selectors: [["", "nz-submenu", ""]], contentQueries: function NzSubMenuComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, NzSubMenuComponent, true);
        ɵngcc0.ɵɵcontentQuery(dirIndex, NzMenuItemDirective, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.listOfNzSubMenuComponent = _t);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.listOfNzMenuItemDirective = _t);
    } }, viewQuery: function NzSubMenuComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵstaticViewQuery(overlay.CdkConnectedOverlay, true);
        ɵngcc0.ɵɵstaticViewQuery(overlay.CdkOverlayOrigin, true, core.ElementRef);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.cdkConnectedOverlay = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.cdkOverlayOrigin = _t.first);
    } }, inputs: { nzOpen: "nzOpen", nzDisabled: "nzDisabled", nzTogglingLabel: "nzTogglingLabel", nzMenuClassName: "nzMenuClassName", nzPaddingLeft: "nzPaddingLeft", nzTitle: "nzTitle", nzIcon: "nzIcon" }, outputs: { nzOpenChange: "nzOpenChange" }, exportAs: ["nzSubmenu"], features: [ɵngcc0.ɵɵProvidersFeature([NzSubmenuService, core$1.NzUpdateHostClassService]), ɵngcc0.ɵɵNgOnChangesFeature], attrs: _c0, ngContentSelectors: _c2, decls: 12, vars: 20, consts: [["cdkOverlayOrigin", "", "role", "button", 3, "tabindex", "mouseenter", "mouseleave", "click", "keyup.enter"], ["origin", "cdkOverlayOrigin"], ["nz-icon", "", 3, "nzType", 4, "ngIf"], [4, "nzStringTemplateOutlet"], [4, "ngIf"], ["class", "ant-dropdown-menu-submenu-arrow", 4, "ngIf", "ngIfElse"], ["notDropdownTpl", ""], ["class", "ant-menu ant-menu-inline ant-menu-sub", 3, "nzNoAnimation", "ngClass", 4, "ngIf"], ["cdkConnectedOverlay", "", 3, "cdkConnectedOverlayPositions", "cdkConnectedOverlayOrigin", "cdkConnectedOverlayWidth", "cdkConnectedOverlayOpen", "positionChange"], ["subMenuTemplate", ""], ["nz-icon", "", 3, "nzType"], [1, "ant-dropdown-menu-submenu-arrow"], ["nz-icon", "", "nzType", "right", 1, "anticon-right", "ant-dropdown-menu-submenu-arrow-icon"], [1, "ant-menu-submenu-arrow"], [1, "ant-menu", "ant-menu-inline", "ant-menu-sub", 3, "nzNoAnimation", "ngClass"], [3, "ngTemplateOutlet"], [1, "ant-menu-submenu", "ant-menu-submenu-popup", 3, "nzNoAnimation", "mouseleave", "mouseenter"], [3, "ngClass"]], template: function NzSubMenuComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef(_c1);
        ɵngcc0.ɵɵelementStart(0, "div", 0, 1);
        ɵngcc0.ɵɵlistener("mouseenter", function NzSubMenuComponent_Template_div_mouseenter_0_listener() { return ctx.setMouseEnterState(true); })("mouseleave", function NzSubMenuComponent_Template_div_mouseleave_0_listener() { return ctx.setMouseEnterState(false); })("click", function NzSubMenuComponent_Template_div_click_0_listener() { return ctx.clickSubMenuTitle(); })("keyup.enter", function NzSubMenuComponent_Template_div_keyup_enter_0_listener() { return ctx.clickSubMenuTitle(); });
        ɵngcc0.ɵɵtemplate(2, NzSubMenuComponent_i_2_Template, 1, 1, "i", 2);
        ɵngcc0.ɵɵtemplate(3, NzSubMenuComponent_ng_container_3_Template, 3, 1, "ng-container", 3);
        ɵngcc0.ɵɵtemplate(4, NzSubMenuComponent_4_Template, 1, 0, undefined, 4);
        ɵngcc0.ɵɵtemplate(5, NzSubMenuComponent_span_5_Template, 2, 0, "span", 5);
        ɵngcc0.ɵɵtemplate(6, NzSubMenuComponent_ng_template_6_Template, 1, 0, "ng-template", null, 6, ɵngcc0.ɵɵtemplateRefExtractor);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(8, NzSubMenuComponent_ul_8_Template, 2, 5, "ul", 7);
        ɵngcc0.ɵɵtemplate(9, NzSubMenuComponent_ng_template_9_Template, 3, 28, "ng-template", 8);
        ɵngcc0.ɵɵlistener("positionChange", function NzSubMenuComponent_Template_ng_template_positionChange_9_listener($event) { return ctx.onPositionChange($event); });
        ɵngcc0.ɵɵtemplate(10, NzSubMenuComponent_ng_template_10_Template, 1, 0, "ng-template", null, 9, ɵngcc0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        var _r0 = ɵngcc0.ɵɵreference(1);
        var _r5 = ɵngcc0.ɵɵreference(7);
        ɵngcc0.ɵɵstyleProp("padding-left", ctx.nzMenuService.mode === "inline" ? ctx.nzPaddingLeft ? ctx.nzPaddingLeft : ctx.nzSubmenuService.level * ctx.nzMenuService.inlineIndent : null, "px");
        ɵngcc0.ɵɵclassProp("ant-dropdown-menu-submenu-title", ctx.nzMenuService.isInDropDown)("ant-menu-submenu-title", !ctx.nzMenuService.isInDropDown);
        ɵngcc0.ɵɵproperty("tabindex", ctx.nzDisabled ? 0 - 1 : 0);
        ɵngcc0.ɵɵattribute("aria-label", ctx.nzTogglingLabel)("aria-disabled", ctx.nzDisabled)("aria-expanded", ctx.nzOpen);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", ctx.nzIcon);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("nzStringTemplateOutlet", ctx.nzTitle);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.nzTitle);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.nzMenuService.isInDropDown)("ngIfElse", _r5);
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵproperty("ngIf", ctx.nzMenuService.mode === "inline");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("cdkConnectedOverlayPositions", ctx.overlayPositions)("cdkConnectedOverlayOrigin", _r0)("cdkConnectedOverlayWidth", ctx.triggerWidth)("cdkConnectedOverlayOpen", ctx.nzOpen && ctx.nzMenuService.mode !== "inline");
    } }, directives: [ɵngcc4.CdkOverlayOrigin, ɵngcc5.NgIf, ɵngcc1.NzStringTemplateOutletDirective, ɵngcc4.CdkConnectedOverlay, ɵngcc6.NzIconDirective, ɵngcc1.NzNoAnimationDirective, ɵngcc5.NgClass, ɵngcc5.NgTemplateOutlet], styles: ["\n      :root .ant-menu-submenu.ant-menu-submenu-placement-bottomLeft {\n        top: 6px;\n        position: relative;\n      }\n\n      :root .ant-menu-submenu.ant-menu-submenu-placement-rightTop {\n        left: 4px;\n        position: relative;\n      }\n\n      :root .ant-menu-submenu.ant-menu-submenu-placement-leftTop {\n        right: 4px;\n        position: relative;\n      }\n    "], encapsulation: 2, data: { animation: [core$1.collapseMotion, core$1.zoomBigMotion, core$1.slideMotion] }, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzSubMenuComponent, [{
        type: core.Component,
        args: [{
                selector: '[nz-submenu]',
                exportAs: 'nzSubmenu',
                providers: [NzSubmenuService, core$1.NzUpdateHostClassService],
                animations: [core$1.collapseMotion, core$1.zoomBigMotion, core$1.slideMotion],
                encapsulation: core.ViewEncapsulation.None,
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                preserveWhitespaces: false,
                template: "<div cdkOverlayOrigin\r\n     #origin=\"cdkOverlayOrigin\"\r\n     [class.ant-dropdown-menu-submenu-title]=\"nzMenuService.isInDropDown\"\r\n     [class.ant-menu-submenu-title]=\"!nzMenuService.isInDropDown\"\r\n     [style.paddingLeft.px]=\"nzMenuService.mode === 'inline'? (nzPaddingLeft ? nzPaddingLeft : nzSubmenuService.level * nzMenuService.inlineIndent) : null\"\r\n     (mouseenter)=\"setMouseEnterState(true)\"\r\n     (mouseleave)=\"setMouseEnterState(false)\"\r\n     (click)=\"clickSubMenuTitle()\"\r\n     [tabindex]=\"nzDisabled ? -1 : 0\"\r\n     (keyup.enter)=\"clickSubMenuTitle()\"\r\n     [attr.aria-label]=\"nzTogglingLabel\"\r\n     [attr.aria-disabled]=\"nzDisabled\"\r\n     [attr.aria-expanded]=\"nzOpen\"\r\n     role=\"button\">\r\n  <i nz-icon [nzType]=\"nzIcon\" *ngIf=\"nzIcon\"></i>\r\n  <ng-container *nzStringTemplateOutlet=\"nzTitle\"><span>{{ nzTitle }}</span></ng-container>\r\n  <ng-content select=\"[title]\" *ngIf=\"!nzTitle\"></ng-content>\r\n  <span *ngIf=\"nzMenuService.isInDropDown; else notDropdownTpl\" class=\"ant-dropdown-menu-submenu-arrow\">\r\n    <i nz-icon nzType=\"right\" class=\"anticon-right ant-dropdown-menu-submenu-arrow-icon\"></i>\r\n  </span>\r\n  <ng-template #notDropdownTpl>\r\n    <i class=\"ant-menu-submenu-arrow\"></i>\r\n  </ng-template>\r\n</div>\r\n<ul *ngIf=\"nzMenuService.mode === 'inline'\"\r\n    [@collapseMotion]=\"expandState\"\r\n    [@.disabled]=\"noAnimation?.nzNoAnimation\"\r\n    [nzNoAnimation]=\"noAnimation?.nzNoAnimation\"\r\n    [ngClass]=\"nzMenuClassName\"\r\n    class=\"ant-menu ant-menu-inline ant-menu-sub\">\r\n  <ng-template *ngIf=\"expandState != 'collapsed'\" [ngTemplateOutlet]=\"subMenuTemplate\"></ng-template>\r\n</ul>\r\n<ng-template cdkConnectedOverlay\r\n             (positionChange)=\"onPositionChange($event)\"\r\n             [cdkConnectedOverlayPositions]=\"overlayPositions\"\r\n             [cdkConnectedOverlayOrigin]=\"origin\"\r\n             [cdkConnectedOverlayWidth]=\"triggerWidth\"\r\n             [cdkConnectedOverlayOpen]=\"nzOpen && nzMenuService.mode !== 'inline'\">\r\n  <div class=\"ant-menu-submenu ant-menu-submenu-popup\"\r\n       [@slideMotion]=\"expandState\"\r\n       [@zoomBigMotion]=\"expandState\"\r\n       [@.disabled]=\"noAnimation?.nzNoAnimation\"\r\n       [nzNoAnimation]=\"noAnimation?.nzNoAnimation\"\r\n       [class.ant-menu-light]=\"nzMenuService.theme === 'light'\"\r\n       [class.ant-menu-dark]=\"nzMenuService.theme === 'dark'\"\r\n       [class.ant-menu-submenu-placement-bottomLeft]=\"nzSubmenuService.mode === 'horizontal'\"\r\n       [class.ant-menu-submenu-placement-rightTop]=\"nzSubmenuService.mode === 'vertical' && placement === 'rightTop'\"\r\n       [class.ant-menu-submenu-placement-leftTop]=\"nzSubmenuService.mode === 'vertical' && placement === 'leftTop'\"\r\n       (mouseleave)=\"setMouseEnterState(false)\"\r\n       (mouseenter)=\"setMouseEnterState(true)\">\r\n    <ul [class.ant-dropdown-menu]=\"nzMenuService.isInDropDown\"\r\n        [class.ant-menu]=\"!nzMenuService.isInDropDown\"\r\n        [class.ant-dropdown-menu-vertical]=\"nzMenuService.isInDropDown\"\r\n        [class.ant-menu-vertical]=\"!nzMenuService.isInDropDown\"\r\n        [class.ant-dropdown-menu-sub]=\"nzMenuService.isInDropDown\"\r\n        [class.ant-menu-sub]=\"!nzMenuService.isInDropDown\"\r\n        [ngClass]=\"nzMenuClassName\">\r\n      <ng-template [ngTemplateOutlet]=\"subMenuTemplate\"></ng-template>\r\n    </ul>\r\n  </div>\r\n</ng-template>\r\n\r\n<ng-template #subMenuTemplate>\r\n  <ng-content></ng-content>\r\n</ng-template>\r\n",
                styles: ["\n      :root .ant-menu-submenu.ant-menu-submenu-placement-bottomLeft {\n        top: 6px;\n        position: relative;\n      }\n\n      :root .ant-menu-submenu.ant-menu-submenu-placement-rightTop {\n        left: 4px;\n        position: relative;\n      }\n\n      :root .ant-menu-submenu.ant-menu-submenu-placement-leftTop {\n        right: 4px;\n        position: relative;\n      }\n    "]
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc1.NzMenuBaseService }, { type: ɵngcc0.ChangeDetectorRef }, { type: NzSubmenuService }, { type: ɵngcc1.NzUpdateHostClassService }, { type: ɵngcc3.Platform }, { type: ɵngcc1.NzNoAnimationDirective, decorators: [{
                type: core.Host
            }, {
                type: core.Optional
            }] }]; }, { nzOpen: [{
            type: core.Input
        }], nzDisabled: [{
            type: core.Input
        }], nzTogglingLabel: [{
            type: core.Input
        }], nzOpenChange: [{
            type: core.Output
        }], nzMenuClassName: [{
            type: core.Input
        }], nzPaddingLeft: [{
            type: core.Input
        }], nzTitle: [{
            type: core.Input
        }], nzIcon: [{
            type: core.Input
        }], cdkConnectedOverlay: [{
            type: core.ViewChild,
            args: [overlay.CdkConnectedOverlay, { static: true }]
        }], cdkOverlayOrigin: [{
            type: core.ViewChild,
            args: [overlay.CdkOverlayOrigin, { static: true, read: core.ElementRef }]
        }], listOfNzSubMenuComponent: [{
            type: core.ContentChildren,
            args: [NzSubMenuComponent, { descendants: true }]
        }], listOfNzMenuItemDirective: [{
            type: core.ContentChildren,
            args: [NzMenuItemDirective, { descendants: true }]
        }] }); })();
        return NzSubMenuComponent;
    }());
    if (false) {
        /** @type {?} */
        NzSubMenuComponent.prototype.nzMenuClassName;
        /** @type {?} */
        NzSubMenuComponent.prototype.nzPaddingLeft;
        /** @type {?} */
        NzSubMenuComponent.prototype.nzTitle;
        /** @type {?} */
        NzSubMenuComponent.prototype.nzIcon;
        /** @type {?} */
        NzSubMenuComponent.prototype.nzOpen;
        /** @type {?} */
        NzSubMenuComponent.prototype.nzDisabled;
        /** @type {?} */
        NzSubMenuComponent.prototype.nzTogglingLabel;
        /** @type {?} */
        NzSubMenuComponent.prototype.nzOpenChange;
        /** @type {?} */
        NzSubMenuComponent.prototype.cdkConnectedOverlay;
        /** @type {?} */
        NzSubMenuComponent.prototype.cdkOverlayOrigin;
        /** @type {?} */
        NzSubMenuComponent.prototype.listOfNzSubMenuComponent;
        /** @type {?} */
        NzSubMenuComponent.prototype.listOfNzMenuItemDirective;
        /** @type {?} */
        NzSubMenuComponent.prototype.placement;
        /** @type {?} */
        NzSubMenuComponent.prototype.triggerWidth;
        /** @type {?} */
        NzSubMenuComponent.prototype.expandState;
        /** @type {?} */
        NzSubMenuComponent.prototype.overlayPositions;
        /**
         * @type {?}
         * @private
         */
        NzSubMenuComponent.prototype.destroy$;
        /**
         * @type {?}
         * @private
         */
        NzSubMenuComponent.prototype.isChildMenuSelected;
        /**
         * @type {?}
         * @private
         */
        NzSubMenuComponent.prototype.isMouseHover;
        /**
         * @type {?}
         * @private
         */
        NzSubMenuComponent.prototype.elementRef;
        /** @type {?} */
        NzSubMenuComponent.prototype.nzMenuService;
        /**
         * @type {?}
         * @private
         */
        NzSubMenuComponent.prototype.cdr;
        /** @type {?} */
        NzSubMenuComponent.prototype.nzSubmenuService;
        /**
         * @type {?}
         * @private
         */
        NzSubMenuComponent.prototype.nzUpdateHostClassService;
        /**
         * @type {?}
         * @private
         */
        NzSubMenuComponent.prototype.platform;
        /** @type {?} */
        NzSubMenuComponent.prototype.noAnimation;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ɵ0 = NzMenuServiceFactory;
    var NzMenuDirective = /** @class */ (function () {
        function NzMenuDirective(elementRef, nzMenuService, nzUpdateHostClassService) {
            this.elementRef = elementRef;
            this.nzMenuService = nzMenuService;
            this.nzUpdateHostClassService = nzUpdateHostClassService;
            this.destroy$ = new rxjs.Subject();
            this.listOfOpenedNzSubMenuComponent = [];
            this.nzInlineIndent = 24;
            this.nzTheme = 'light';
            this.nzMode = 'vertical';
            this.nzInDropDown = false;
            this.nzInlineCollapsed = false;
            this.nzSelectable = !this.nzMenuService.isInDropDown;
            this.nzClick = new core.EventEmitter();
        }
        /**
         * @return {?}
         */
        NzMenuDirective.prototype.updateInlineCollapse = /**
         * @return {?}
         */
        function () {
            if (this.listOfNzMenuItemDirective) {
                if (this.nzInlineCollapsed) {
                    this.listOfOpenedNzSubMenuComponent = this.listOfNzSubMenuComponent.filter((/**
                     * @param {?} submenu
                     * @return {?}
                     */
                    function (submenu) { return submenu.nzOpen; }));
                    this.listOfNzSubMenuComponent.forEach((/**
                     * @param {?} submenu
                     * @return {?}
                     */
                    function (submenu) { return submenu.setOpenState(false); }));
                    this.nzMode = 'vertical';
                }
                else {
                    this.listOfOpenedNzSubMenuComponent.forEach((/**
                     * @param {?} submenu
                     * @return {?}
                     */
                    function (submenu) { return submenu.setOpenState(true); }));
                    this.listOfOpenedNzSubMenuComponent = [];
                    this.nzMode = this.cacheMode;
                }
                this.nzMenuService.setMode(this.nzMode);
            }
        };
        /**
         * @return {?}
         */
        NzMenuDirective.prototype.setClassMap = /**
         * @return {?}
         */
        function () {
            var _a;
            /** @type {?} */
            var prefixName = this.nzMenuService.isInDropDown ? 'ant-dropdown-menu' : 'ant-menu';
            this.nzUpdateHostClassService.updateHostClass(this.elementRef.nativeElement, (_a = {},
                _a["" + prefixName] = true,
                _a[prefixName + "-root"] = true,
                _a[prefixName + "-" + this.nzTheme] = true,
                _a[prefixName + "-" + this.nzMode] = true,
                _a[prefixName + "-inline-collapsed"] = this.nzInlineCollapsed,
                _a));
        };
        /**
         * @return {?}
         */
        NzMenuDirective.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.setClassMap();
            this.nzMenuService.menuItemClick$.pipe(operators.takeUntil(this.destroy$)).subscribe((/**
             * @param {?} menu
             * @return {?}
             */
            function (menu) {
                _this.nzClick.emit(menu);
                if (_this.nzSelectable) {
                    _this.listOfNzMenuItemDirective.forEach((/**
                     * @param {?} item
                     * @return {?}
                     */
                    function (item) { return item.setSelectedState(item === menu); }));
                }
            }));
        };
        /**
         * @return {?}
         */
        NzMenuDirective.prototype.ngAfterContentInit = /**
         * @return {?}
         */
        function () {
            this.cacheMode = this.nzMode;
            this.updateInlineCollapse();
        };
        /**
         * @param {?} changes
         * @return {?}
         */
        NzMenuDirective.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
        function (changes) {
            if (changes.nzInlineCollapsed) {
                this.updateInlineCollapse();
            }
            if (changes.nzInlineIndent) {
                this.nzMenuService.setInlineIndent(this.nzInlineIndent);
            }
            if (changes.nzInDropDown) {
                this.nzMenuService.isInDropDown = this.nzInDropDown;
            }
            if (changes.nzTheme) {
                this.nzMenuService.setTheme(this.nzTheme);
            }
            if (changes.nzMode) {
                this.nzMenuService.setMode(this.nzMode);
                if (!changes.nzMode.isFirstChange() && this.listOfNzSubMenuComponent) {
                    this.listOfNzSubMenuComponent.forEach((/**
                     * @param {?} submenu
                     * @return {?}
                     */
                    function (submenu) { return submenu.setOpenState(false); }));
                }
            }
            if (changes.nzTheme || changes.nzMode || changes.nzInlineCollapsed) {
                this.setClassMap();
            }
        };
        /**
         * @return {?}
         */
        NzMenuDirective.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            this.destroy$.next();
            this.destroy$.complete();
        };
        /** @nocollapse */
        NzMenuDirective.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: core$1.NzMenuBaseService },
            { type: core$1.NzUpdateHostClassService }
        ]; };
        NzMenuDirective.propDecorators = {
            listOfNzMenuItemDirective: [{ type: core.ContentChildren, args: [NzMenuItemDirective, { descendants: true },] }],
            listOfNzSubMenuComponent: [{ type: core.ContentChildren, args: [NzSubMenuComponent, { descendants: true },] }],
            nzInlineIndent: [{ type: core.Input }],
            nzTheme: [{ type: core.Input }],
            nzMode: [{ type: core.Input }],
            nzInDropDown: [{ type: core.Input }],
            nzInlineCollapsed: [{ type: core.Input }],
            nzSelectable: [{ type: core.Input }],
            nzClick: [{ type: core.Output }]
        };
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzMenuDirective.prototype, "nzInDropDown", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzMenuDirective.prototype, "nzInlineCollapsed", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzMenuDirective.prototype, "nzSelectable", void 0);
NzMenuDirective.ɵfac = function NzMenuDirective_Factory(t) { return new (t || NzMenuDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.NzMenuBaseService), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.NzUpdateHostClassService)); };
NzMenuDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: NzMenuDirective, selectors: [["", "nz-menu", ""]], contentQueries: function NzMenuDirective_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, NzMenuItemDirective, true);
        ɵngcc0.ɵɵcontentQuery(dirIndex, NzSubMenuComponent, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.listOfNzMenuItemDirective = _t);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.listOfNzSubMenuComponent = _t);
    } }, inputs: { nzInlineIndent: "nzInlineIndent", nzTheme: "nzTheme", nzMode: "nzMode", nzInDropDown: "nzInDropDown", nzInlineCollapsed: "nzInlineCollapsed", nzSelectable: "nzSelectable" }, outputs: { nzClick: "nzClick" }, exportAs: ["nzMenu"], features: [ɵngcc0.ɵɵProvidersFeature([
            core$1.NzUpdateHostClassService,
            NzMenuService,
            {
                provide: core$1.NzMenuBaseService,
                useFactory: ɵ0,
                deps: [[new core.SkipSelf(), new core.Optional(), core$1.NzDropdownHigherOrderServiceToken], NzMenuService]
            }
        ]), ɵngcc0.ɵɵNgOnChangesFeature] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzMenuDirective, [{
        type: core.Directive,
        args: [{
                selector: '[nz-menu]',
                exportAs: 'nzMenu',
                providers: [
                    core$1.NzUpdateHostClassService,
                    NzMenuService,
                    {
                        provide: core$1.NzMenuBaseService,
                        useFactory: ɵ0,
                        deps: [[new core.SkipSelf(), new core.Optional(), core$1.NzDropdownHigherOrderServiceToken], NzMenuService]
                    }
                ]
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc1.NzMenuBaseService }, { type: ɵngcc1.NzUpdateHostClassService }]; }, { nzInlineIndent: [{
            type: core.Input
        }], nzTheme: [{
            type: core.Input
        }], nzMode: [{
            type: core.Input
        }], nzInDropDown: [{
            type: core.Input
        }], nzInlineCollapsed: [{
            type: core.Input
        }], nzSelectable: [{
            type: core.Input
        }], nzClick: [{
            type: core.Output
        }], listOfNzMenuItemDirective: [{
            type: core.ContentChildren,
            args: [NzMenuItemDirective, { descendants: true }]
        }], listOfNzSubMenuComponent: [{
            type: core.ContentChildren,
            args: [NzSubMenuComponent, { descendants: true }]
        }] }); })();
        return NzMenuDirective;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        NzMenuDirective.prototype.destroy$;
        /**
         * @type {?}
         * @private
         */
        NzMenuDirective.prototype.cacheMode;
        /**
         * @type {?}
         * @private
         */
        NzMenuDirective.prototype.listOfOpenedNzSubMenuComponent;
        /** @type {?} */
        NzMenuDirective.prototype.listOfNzMenuItemDirective;
        /** @type {?} */
        NzMenuDirective.prototype.listOfNzSubMenuComponent;
        /** @type {?} */
        NzMenuDirective.prototype.nzInlineIndent;
        /** @type {?} */
        NzMenuDirective.prototype.nzTheme;
        /** @type {?} */
        NzMenuDirective.prototype.nzMode;
        /** @type {?} */
        NzMenuDirective.prototype.nzInDropDown;
        /** @type {?} */
        NzMenuDirective.prototype.nzInlineCollapsed;
        /** @type {?} */
        NzMenuDirective.prototype.nzSelectable;
        /** @type {?} */
        NzMenuDirective.prototype.nzClick;
        /** @type {?} */
        NzMenuDirective.prototype.elementRef;
        /**
         * @type {?}
         * @private
         */
        NzMenuDirective.prototype.nzMenuService;
        /**
         * @type {?}
         * @private
         */
        NzMenuDirective.prototype.nzUpdateHostClassService;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzMenuGroupComponent = /** @class */ (function () {
        function NzMenuGroupComponent(elementRef, renderer) {
            this.elementRef = elementRef;
            this.renderer = renderer;
            this.renderer.addClass(elementRef.nativeElement, 'ant-menu-item-group');
        }
        /** @nocollapse */
        NzMenuGroupComponent.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: core.Renderer2 }
        ]; };
        NzMenuGroupComponent.propDecorators = {
            nzTitle: [{ type: core.Input }]
        };
NzMenuGroupComponent.ɵfac = function NzMenuGroupComponent_Factory(t) { return new (t || NzMenuGroupComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2)); };
NzMenuGroupComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzMenuGroupComponent, selectors: [["", "nz-menu-group", ""]], inputs: { nzTitle: "nzTitle" }, exportAs: ["nzMenuGroup"], attrs: _c3, ngContentSelectors: _c5, decls: 5, vars: 2, consts: [[1, "ant-menu-item-group-title"], [4, "nzStringTemplateOutlet"], [4, "ngIf"], [1, "ant-menu-item-group-list"]], template: function NzMenuGroupComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef(_c4);
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵtemplate(1, NzMenuGroupComponent_ng_container_1_Template, 2, 1, "ng-container", 1);
        ɵngcc0.ɵɵtemplate(2, NzMenuGroupComponent_2_Template, 1, 0, undefined, 2);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(3, "ul", 3);
        ɵngcc0.ɵɵprojection(4);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("nzStringTemplateOutlet", ctx.nzTitle);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.nzTitle);
    } }, directives: [ɵngcc1.NzStringTemplateOutletDirective, ɵngcc5.NgIf], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzMenuGroupComponent, [{
        type: core.Component,
        args: [{
                selector: '[nz-menu-group]',
                exportAs: 'nzMenuGroup',
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                encapsulation: core.ViewEncapsulation.None,
                template: "<div class=\"ant-menu-item-group-title\">\r\n  <ng-container *nzStringTemplateOutlet=\"nzTitle\">{{ nzTitle }}</ng-container>\r\n  <ng-content select=\"[title]\" *ngIf=\"!nzTitle\"></ng-content>\r\n</div>\r\n<ul class=\"ant-menu-item-group-list\">\r\n  <ng-content></ng-content>\r\n</ul>",
                preserveWhitespaces: false
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc0.Renderer2 }]; }, { nzTitle: [{
            type: core.Input
        }] }); })();
        return NzMenuGroupComponent;
    }());
    if (false) {
        /** @type {?} */
        NzMenuGroupComponent.prototype.nzTitle;
        /** @type {?} */
        NzMenuGroupComponent.prototype.elementRef;
        /**
         * @type {?}
         * @private
         */
        NzMenuGroupComponent.prototype.renderer;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzMenuDividerDirective = /** @class */ (function () {
        function NzMenuDividerDirective(elementRef, renderer) {
            this.elementRef = elementRef;
            this.renderer = renderer;
            this.renderer.addClass(elementRef.nativeElement, 'ant-dropdown-menu-item-divider');
        }
        /** @nocollapse */
        NzMenuDividerDirective.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: core.Renderer2 }
        ]; };
NzMenuDividerDirective.ɵfac = function NzMenuDividerDirective_Factory(t) { return new (t || NzMenuDividerDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2)); };
NzMenuDividerDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: NzMenuDividerDirective, selectors: [["", "nz-menu-divider", ""]], exportAs: ["nzMenuDivider"] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzMenuDividerDirective, [{
        type: core.Directive,
        args: [{
                selector: '[nz-menu-divider]',
                exportAs: 'nzMenuDivider'
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc0.Renderer2 }]; }, null); })();
        return NzMenuDividerDirective;
    }());
    if (false) {
        /** @type {?} */
        NzMenuDividerDirective.prototype.elementRef;
        /**
         * @type {?}
         * @private
         */
        NzMenuDividerDirective.prototype.renderer;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzMenuModule = /** @class */ (function () {
        function NzMenuModule() {
        }
NzMenuModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: NzMenuModule });
NzMenuModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function NzMenuModule_Factory(t) { return new (t || NzMenuModule)(); }, imports: [[
            common.CommonModule,
            forms.FormsModule,
            platform.PlatformModule,
            button.NzButtonModule,
            overlay.OverlayModule,
            icon.NzIconModule,
            core$1.NzNoAnimationModule,
            core$1.NzAddOnModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(NzMenuModule, { declarations: [NzMenuDirective,
        NzMenuItemDirective,
        NzSubMenuComponent,
        NzMenuDividerDirective,
        NzMenuGroupComponent], imports: [ɵngcc5.CommonModule, ɵngcc7.FormsModule, ɵngcc3.PlatformModule, ɵngcc8.NzButtonModule, ɵngcc4.OverlayModule, ɵngcc6.NzIconModule, ɵngcc1.NzNoAnimationModule, ɵngcc1.NzAddOnModule], exports: [NzMenuDirective,
        NzMenuItemDirective,
        NzSubMenuComponent,
        NzMenuDividerDirective,
        NzMenuGroupComponent] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzMenuModule, [{
        type: core.NgModule,
        args: [{
                imports: [
                    common.CommonModule,
                    forms.FormsModule,
                    platform.PlatformModule,
                    button.NzButtonModule,
                    overlay.OverlayModule,
                    icon.NzIconModule,
                    core$1.NzNoAnimationModule,
                    core$1.NzAddOnModule
                ],
                declarations: [
                    NzMenuDirective,
                    NzMenuItemDirective,
                    NzSubMenuComponent,
                    NzMenuDividerDirective,
                    NzMenuGroupComponent
                ],
                exports: [NzMenuDirective, NzMenuItemDirective, NzSubMenuComponent, NzMenuDividerDirective, NzMenuGroupComponent]
            }]
    }], function () { return []; }, null); })();
        return NzMenuModule;
    }());

    exports.NzMenuDirective = NzMenuDirective;
    exports.NzMenuDividerDirective = NzMenuDividerDirective;
    exports.NzMenuGroupComponent = NzMenuGroupComponent;
    exports.NzMenuItemDirective = NzMenuItemDirective;
    exports.NzMenuModule = NzMenuModule;
    exports.NzMenuService = NzMenuService;
    exports.NzMenuServiceFactory = NzMenuServiceFactory;
    exports.NzSubMenuComponent = NzSubMenuComponent;
    exports.NzSubmenuService = NzSubmenuService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));


//# sourceMappingURL=ng-zorro-antd-menu.umd.js.map