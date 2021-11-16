(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('@angular/core'),require('@angular/common'),require('@angular/router'),require('@angular/cdk/platform'),require('ng-zorro-antd/core'),require('@angular/cdk/bidi'),require('ng-zorro-antd/icon'),require('@angular/cdk/observers'),exports, require('@angular/core'), require('ng-zorro-antd/core'), require('rxjs'), require('@angular/router'), require('@angular/cdk/observers'), require('@angular/cdk/platform'), require('@angular/common'), require('ng-zorro-antd/icon'), require('@angular/cdk/bidi'), require('rxjs/operators')) :
    typeof define === 'function' && define.amd ? define('ng-zorro-antd/tabs', ['@angular/core','@angular/common','@angular/router','@angular/cdk/platform','ng-zorro-antd/core','@angular/cdk/bidi','ng-zorro-antd/icon','@angular/cdk/observers','exports', '@angular/core', 'ng-zorro-antd/core', 'rxjs', '@angular/router', '@angular/cdk/observers', '@angular/cdk/platform', '@angular/common', 'ng-zorro-antd/icon', '@angular/cdk/bidi', 'rxjs/operators'], factory) :
    (global = global || self, factory(global.ng.core,global.ng.common,global.ng.router,global.ng.cdk.platform,global.ngZorroAntd.core,global.ng.cdk.bidi,global.ngZorroAntd.icon,global.ng.cdk.observers,(global['ng-zorro-antd'] = global['ng-zorro-antd'] || {}, global['ng-zorro-antd'].tabs = {}), global.ng.core, global['ng-zorro-antd'].core, global.rxjs, global.ng.router, global.ng.cdk.observers, global.ng.cdk.platform, global.ng.common, global['ng-zorro-antd'].icon, global.ng.cdk.bidi, global.rxjs.operators));
}(this, (function (ɵngcc0,ɵngcc1,ɵngcc2,ɵngcc3,ɵngcc4,ɵngcc5,ɵngcc6,ɵngcc7,exports, core, core$1, rxjs, router, observers, platform, common, icon, bidi, operators) { 
var _c0 = ["nz-tab-body", ""];
function NzTabBodyComponent_ng_container_0_ng_template_1_Template(rf, ctx) { }
function NzTabBodyComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, NzTabBodyComponent_ng_container_0_ng_template_1_Template, 0, 0, "ng-template", 1);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r0.content);
} }
var _c1 = ["bodyTpl"];
var _c2 = ["titleTpl"];
function NzTabComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵprojection(0);
} }
function NzTabComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵprojection(0, 1);
} }
var _c3 = [[["", "nz-tab-link", ""]], "*"];
var _c4 = ["[nz-tab-link]", "*"];
var _c5 = ["navContainerElement"];
var _c6 = ["navListElement"];
var _c7 = ["scrollListElement"];
var _c8 = ["nz-tabs-nav", ""];
function NzTabsNavComponent_div_0_ng_template_1_Template(rf, ctx) { }
function NzTabsNavComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 15);
    ɵngcc0.ɵɵtemplate(1, NzTabsNavComponent_div_0_ng_template_1_Template, 0, 0, "ng-template", 16);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r0.nzTabBarExtraContent);
} }
var _c9 = ["*"];
var _c10 = ["tabContent"];
var _c11 = ["focusable"];
function NzTabSetComponent_ng_container_0_div_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var tab_r5 = ɵngcc0.ɵɵnextContext().$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(tab_r5.nzTitle);
} }
function NzTabSetComponent_ng_container_0_div_3_Template(rf, ctx) { if (rf & 1) {
    var _r11 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 7, 8);
    ɵngcc0.ɵɵlistener("click", function NzTabSetComponent_ng_container_0_div_3_Template_div_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r11); var i_r6 = ctx.index; var tab_r5 = ctx.$implicit; var ctx_r10 = ɵngcc0.ɵɵnextContext(2); return ctx_r10.clickLabel(i_r6, tab_r5.nzDisabled); })("keyup.enter", function NzTabSetComponent_ng_container_0_div_3_Template_div_keyup_enter_0_listener() { ɵngcc0.ɵɵrestoreView(_r11); var i_r6 = ctx.index; var tab_r5 = ctx.$implicit; var ctx_r12 = ɵngcc0.ɵɵnextContext(2); return ctx_r12.clickLabel(i_r6, tab_r5.nzDisabled); })("keyup.space", function NzTabSetComponent_ng_container_0_div_3_Template_div_keyup_space_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r11); var ctx_r13 = ɵngcc0.ɵɵnextContext(2); ctx_r13.clickPreselected(); return $event.preventDefault(); })("keydown.space", function NzTabSetComponent_ng_container_0_div_3_Template_div_keydown_space_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r11); return $event.preventDefault(); })("keydown.arrowright", function NzTabSetComponent_ng_container_0_div_3_Template_div_keydown_arrowright_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r11); return $event.preventDefault(); })("keydown.arrowleft", function NzTabSetComponent_ng_container_0_div_3_Template_div_keydown_arrowleft_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r11); return $event.preventDefault(); })("keyup.arrowright", function NzTabSetComponent_ng_container_0_div_3_Template_div_keyup_arrowright_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r11); var ctx_r17 = ɵngcc0.ɵɵnextContext(2); return ctx_r17.moveRight($event); })("keyup.arrowleft", function NzTabSetComponent_ng_container_0_div_3_Template_div_keyup_arrowleft_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r11); var ctx_r18 = ɵngcc0.ɵɵnextContext(2); return ctx_r18.moveLeft($event); });
    ɵngcc0.ɵɵtemplate(2, NzTabSetComponent_ng_container_0_div_3_ng_container_2_Template, 2, 1, "ng-container", 9);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var tab_r5 = ctx.$implicit;
    var i_r6 = ctx.index;
    var ctx_r2 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵstyleProp("margin-right", ctx_r2.nzTabBarGutter, "px");
    ɵngcc0.ɵɵclassProp("ant-tabs-tab-active", ctx_r2.nzSelectedIndex == i_r6 && !ctx_r2.nzHideAll)("ant-tabs-tab-preselected", ctx_r2.preselectionIndex == i_r6);
    ɵngcc0.ɵɵproperty("disabled", tab_r5.nzDisabled);
    ɵngcc0.ɵɵattribute("tabindex", ctx_r2.nzSelectedIndex == i_r6 ? 0 : 0 - 1)("aria-selected", ctx_r2.nzSelectedIndex == i_r6)("aria-label", tab_r5.nzTitleAriaLabel)("aria-disabled", tab_r5.nzDisabled);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("nzStringTemplateOutlet", tab_r5.nzTitle || tab_r5.title);
} }
function NzTabSetComponent_ng_container_0_div_6_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "div", 10);
} if (rf & 2) {
    var tab_r19 = ctx.$implicit;
    var i_r20 = ctx.index;
    var ctx_r4 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("active", ctx_r4.nzSelectedIndex == i_r20 && !ctx_r4.nzHideAll)("forceRender", tab_r19.nzForceRender)("content", tab_r19.template || tab_r19.content);
} }
function NzTabSetComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    var _r22 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelementStart(1, "div", 1, 2);
    ɵngcc0.ɵɵlistener("nzOnNextClick", function NzTabSetComponent_ng_container_0_Template_div_nzOnNextClick_1_listener() { ɵngcc0.ɵɵrestoreView(_r22); var ctx_r21 = ɵngcc0.ɵɵnextContext(); return ctx_r21.nzOnNextClick.emit(); })("nzOnPrevClick", function NzTabSetComponent_ng_container_0_Template_div_nzOnPrevClick_1_listener() { ɵngcc0.ɵɵrestoreView(_r22); var ctx_r23 = ɵngcc0.ɵɵnextContext(); return ctx_r23.nzOnPrevClick.emit(); });
    ɵngcc0.ɵɵtemplate(3, NzTabSetComponent_ng_container_0_div_3_Template, 3, 12, "div", 3);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(4, "div", 4, 5);
    ɵngcc0.ɵɵtemplate(6, NzTabSetComponent_ng_container_0_div_6_Template, 1, 3, "div", 6);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassProp("ant-tabs-card-bar", ctx_r0.nzType === "card")("ant-tabs-top-bar", ctx_r0.nzTabPosition === "top")("ant-tabs-bottom-bar", ctx_r0.nzTabPosition === "bottom")("ant-tabs-left-bar", ctx_r0.nzTabPosition === "left")("ant-tabs-right-bar", ctx_r0.nzTabPosition === "right")("ant-tabs-small-bar", ctx_r0.nzSize === "small")("ant-tabs-default-bar", ctx_r0.nzSize === "default")("ant-tabs-large-bar", ctx_r0.nzSize === "large");
    ɵngcc0.ɵɵproperty("nzType", ctx_r0.nzType)("nzShowPagination", ctx_r0.nzShowPagination)("nzPositionMode", ctx_r0.tabPositionMode)("nzAnimated", ctx_r0.inkBarAnimated)("ngStyle", ctx_r0.nzTabBarStyle)("nzHideBar", ctx_r0.nzHideAll)("nzTabBarExtraContent", ctx_r0.nzTabBarExtraContent)("selectedIndex", ctx_r0.nzSelectedIndex);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r0.listOfNzTabComponent);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵstyleProp("margin-left", ctx_r0.tabPositionMode === "horizontal" && ctx_r0.tabPaneAnimated && (0 - (ctx_r0.nzSelectedIndex || 0)) * 100, "%");
    ɵngcc0.ɵɵclassProp("ant-tabs-top-content", ctx_r0.nzTabPosition === "top")("ant-tabs-bottom-content", ctx_r0.nzTabPosition === "bottom")("ant-tabs-left-content", ctx_r0.nzTabPosition === "left")("ant-tabs-right-content", ctx_r0.nzTabPosition === "right")("ant-tabs-content-animated", ctx_r0.tabPaneAnimated)("ant-tabs-card-content", ctx_r0.nzType === "card")("ant-tabs-content-no-animated", !ctx_r0.tabPaneAnimated);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r0.listOfNzTabComponent);
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
    var NzTabBodyComponent = /** @class */ (function () {
        function NzTabBodyComponent() {
            this.active = false;
            this.forceRender = false;
        }
        NzTabBodyComponent.propDecorators = {
            content: [{ type: core.Input }],
            active: [{ type: core.Input }],
            forceRender: [{ type: core.Input }]
        };
NzTabBodyComponent.ɵfac = function NzTabBodyComponent_Factory(t) { return new (t || NzTabBodyComponent)(); };
NzTabBodyComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzTabBodyComponent, selectors: [["", "nz-tab-body", ""]], hostVars: 4, hostBindings: function NzTabBodyComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("ant-tabs-tabpane-active", ctx.active)("ant-tabs-tabpane-inactive", !ctx.active);
    } }, inputs: { active: "active", forceRender: "forceRender", content: "content" }, exportAs: ["nzTabBody"], attrs: _c0, decls: 1, vars: 1, consts: [[4, "ngIf"], [3, "ngTemplateOutlet"]], template: function NzTabBodyComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, NzTabBodyComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", ctx.active || ctx.forceRender);
    } }, directives: [ɵngcc1.NgIf, ɵngcc1.NgTemplateOutlet], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzTabBodyComponent, [{
        type: core.Component,
        args: [{
                selector: '[nz-tab-body]',
                exportAs: 'nzTabBody',
                preserveWhitespaces: false,
                encapsulation: core.ViewEncapsulation.None,
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                template: "<ng-container *ngIf=\"active || forceRender\">\r\n  <ng-template [ngTemplateOutlet]=\"content\"></ng-template>\r\n</ng-container>",
                host: {
                    '[class.ant-tabs-tabpane-active]': 'active',
                    '[class.ant-tabs-tabpane-inactive]': '!active'
                }
            }]
    }], function () { return []; }, { active: [{
            type: core.Input
        }], forceRender: [{
            type: core.Input
        }], content: [{
            type: core.Input
        }] }); })();
        return NzTabBodyComponent;
    }());
    if (false) {
        /** @type {?} */
        NzTabBodyComponent.prototype.content;
        /** @type {?} */
        NzTabBodyComponent.prototype.active;
        /** @type {?} */
        NzTabBodyComponent.prototype.forceRender;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzTabLabelDirective = /** @class */ (function () {
        function NzTabLabelDirective(elementRef, renderer) {
            this.elementRef = elementRef;
            this.disabled = false;
            renderer.addClass(elementRef.nativeElement, 'ant-tabs-tab');
        }
        /**
         * @return {?}
         */
        NzTabLabelDirective.prototype.getOffsetLeft = /**
         * @return {?}
         */
        function () {
            return this.elementRef.nativeElement.offsetLeft;
        };
        /**
         * @return {?}
         */
        NzTabLabelDirective.prototype.getOffsetWidth = /**
         * @return {?}
         */
        function () {
            return this.elementRef.nativeElement.offsetWidth;
        };
        /**
         * @return {?}
         */
        NzTabLabelDirective.prototype.getOffsetTop = /**
         * @return {?}
         */
        function () {
            return this.elementRef.nativeElement.offsetTop;
        };
        /**
         * @return {?}
         */
        NzTabLabelDirective.prototype.getOffsetHeight = /**
         * @return {?}
         */
        function () {
            return this.elementRef.nativeElement.offsetHeight;
        };
        /** @nocollapse */
        NzTabLabelDirective.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: core.Renderer2 }
        ]; };
        NzTabLabelDirective.propDecorators = {
            disabled: [{ type: core.Input }]
        };
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzTabLabelDirective.prototype, "disabled", void 0);
NzTabLabelDirective.ɵfac = function NzTabLabelDirective_Factory(t) { return new (t || NzTabLabelDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2)); };
NzTabLabelDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: NzTabLabelDirective, selectors: [["", "nz-tab-label", ""]], hostVars: 2, hostBindings: function NzTabLabelDirective_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("ant-tabs-tab-disabled", ctx.disabled);
    } }, inputs: { disabled: "disabled" }, exportAs: ["nzTabLabel"] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzTabLabelDirective, [{
        type: core.Directive,
        args: [{
                selector: '[nz-tab-label]',
                exportAs: 'nzTabLabel',
                host: {
                    '[class.ant-tabs-tab-disabled]': 'disabled'
                }
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc0.Renderer2 }]; }, { disabled: [{
            type: core.Input
        }] }); })();
        return NzTabLabelDirective;
    }());
    if (false) {
        /** @type {?} */
        NzTabLabelDirective.prototype.disabled;
        /** @type {?} */
        NzTabLabelDirective.prototype.elementRef;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * This component is for catching `routerLink` directive.
     */
    var NzTabLinkDirective = /** @class */ (function () {
        function NzTabLinkDirective(routerLink, routerLinkWithHref) {
            this.routerLink = routerLink;
            this.routerLinkWithHref = routerLinkWithHref;
        }
        /** @nocollapse */
        NzTabLinkDirective.ctorParameters = function () { return [
            { type: router.RouterLink, decorators: [{ type: core.Optional }, { type: core.Self }] },
            { type: router.RouterLinkWithHref, decorators: [{ type: core.Optional }, { type: core.Self }] }
        ]; };
NzTabLinkDirective.ɵfac = function NzTabLinkDirective_Factory(t) { return new (t || NzTabLinkDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc2.RouterLink, 10), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.RouterLinkWithHref, 10)); };
NzTabLinkDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: NzTabLinkDirective, selectors: [["a", "nz-tab-link", ""]], exportAs: ["nzTabLink"] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzTabLinkDirective, [{
        type: core.Directive,
        args: [{
                selector: 'a[nz-tab-link]',
                exportAs: 'nzTabLink'
            }]
    }], function () { return [{ type: ɵngcc2.RouterLink, decorators: [{
                type: core.Optional
            }, {
                type: core.Self
            }] }, { type: ɵngcc2.RouterLinkWithHref, decorators: [{
                type: core.Optional
            }, {
                type: core.Self
            }] }]; }, null); })();
        return NzTabLinkDirective;
    }());
    if (false) {
        /** @type {?} */
        NzTabLinkDirective.prototype.routerLink;
        /** @type {?} */
        NzTabLinkDirective.prototype.routerLinkWithHref;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * Decorates the `ng-template` tags and reads out the template from it.
     */
    var NzTabDirective = /** @class */ (function () {
        function NzTabDirective() {
        }
NzTabDirective.ɵfac = function NzTabDirective_Factory(t) { return new (t || NzTabDirective)(); };
NzTabDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: NzTabDirective, selectors: [["", "nz-tab", ""]], exportAs: ["nzTab"] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzTabDirective, [{
        type: core.Directive,
        args: [{
                selector: '[nz-tab]',
                exportAs: 'nzTab'
            }]
    }], function () { return []; }, null); })();
        return NzTabDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzTabComponent = /** @class */ (function () {
        function NzTabComponent(elementRef, renderer) {
            this.elementRef = elementRef;
            this.renderer = renderer;
            this.position = null;
            this.origin = null;
            this.isActive = false;
            this.stateChanges = new rxjs.Subject();
            this.nzTitleAriaLabel = null;
            this.nzForceRender = false;
            this.nzDisabled = false;
            this.nzClick = new core.EventEmitter();
            this.nzSelect = new core.EventEmitter();
            this.nzDeselect = new core.EventEmitter();
            this.renderer.addClass(elementRef.nativeElement, 'ant-tabs-tabpane');
        }
        /**
         * @param {?} changes
         * @return {?}
         */
        NzTabComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
        function (changes) {
            if (changes.nzTitle || changes.nzForceRender || changes.nzDisabled) {
                this.stateChanges.next();
            }
        };
        /**
         * @return {?}
         */
        NzTabComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            this.stateChanges.complete();
        };
        /** @nocollapse */
        NzTabComponent.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: core.Renderer2 }
        ]; };
        NzTabComponent.propDecorators = {
            content: [{ type: core.ViewChild, args: ['bodyTpl', { static: true },] }],
            title: [{ type: core.ViewChild, args: ['titleTpl', { static: true },] }],
            template: [{ type: core.ContentChild, args: [NzTabDirective, { static: false, read: core.TemplateRef },] }],
            linkDirective: [{ type: core.ContentChild, args: [NzTabLinkDirective, { static: false },] }],
            nzTitle: [{ type: core.Input }],
            nzTitleAriaLabel: [{ type: core.Input }],
            nzRouterIdentifier: [{ type: core.Input }],
            nzForceRender: [{ type: core.Input }],
            nzDisabled: [{ type: core.Input }],
            nzClick: [{ type: core.Output }],
            nzSelect: [{ type: core.Output }],
            nzDeselect: [{ type: core.Output }]
        };
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzTabComponent.prototype, "nzForceRender", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzTabComponent.prototype, "nzDisabled", void 0);
NzTabComponent.ɵfac = function NzTabComponent_Factory(t) { return new (t || NzTabComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2)); };
NzTabComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzTabComponent, selectors: [["nz-tab"]], contentQueries: function NzTabComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, NzTabDirective, true, core.TemplateRef);
        ɵngcc0.ɵɵcontentQuery(dirIndex, NzTabLinkDirective, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.template = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.linkDirective = _t.first);
    } }, viewQuery: function NzTabComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵstaticViewQuery(_c1, true);
        ɵngcc0.ɵɵstaticViewQuery(_c2, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.content = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.title = _t.first);
    } }, inputs: { nzTitleAriaLabel: "nzTitleAriaLabel", nzForceRender: "nzForceRender", nzDisabled: "nzDisabled", nzTitle: "nzTitle", nzRouterIdentifier: "nzRouterIdentifier" }, outputs: { nzClick: "nzClick", nzSelect: "nzSelect", nzDeselect: "nzDeselect" }, exportAs: ["nzTab"], features: [ɵngcc0.ɵɵNgOnChangesFeature], ngContentSelectors: _c4, decls: 4, vars: 0, consts: [["titleTpl", ""], ["bodyTpl", ""]], template: function NzTabComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef(_c3);
        ɵngcc0.ɵɵtemplate(0, NzTabComponent_ng_template_0_Template, 1, 0, "ng-template", null, 0, ɵngcc0.ɵɵtemplateRefExtractor);
        ɵngcc0.ɵɵtemplate(2, NzTabComponent_ng_template_2_Template, 1, 0, "ng-template", null, 1, ɵngcc0.ɵɵtemplateRefExtractor);
    } }, encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzTabComponent, [{
        type: core.Component,
        args: [{
                selector: 'nz-tab',
                exportAs: 'nzTab',
                preserveWhitespaces: false,
                encapsulation: core.ViewEncapsulation.None,
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                template: "<ng-template #titleTpl>\r\n  <ng-content select=\"[nz-tab-link]\"></ng-content>\r\n</ng-template>\r\n<ng-template #bodyTpl>\r\n  <ng-content></ng-content>\r\n</ng-template>"
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc0.Renderer2 }]; }, { nzTitleAriaLabel: [{
            type: core.Input
        }], nzForceRender: [{
            type: core.Input
        }], nzDisabled: [{
            type: core.Input
        }], nzClick: [{
            type: core.Output
        }], nzSelect: [{
            type: core.Output
        }], nzDeselect: [{
            type: core.Output
        }], content: [{
            type: core.ViewChild,
            args: ['bodyTpl', { static: true }]
        }], title: [{
            type: core.ViewChild,
            args: ['titleTpl', { static: true }]
        }], template: [{
            type: core.ContentChild,
            args: [NzTabDirective, { static: false, read: core.TemplateRef }]
        }], linkDirective: [{
            type: core.ContentChild,
            args: [NzTabLinkDirective, { static: false }]
        }], nzTitle: [{
            type: core.Input
        }], nzRouterIdentifier: [{
            type: core.Input
        }] }); })();
        return NzTabComponent;
    }());
    if (false) {
        /** @type {?} */
        NzTabComponent.prototype.position;
        /** @type {?} */
        NzTabComponent.prototype.origin;
        /** @type {?} */
        NzTabComponent.prototype.isActive;
        /** @type {?} */
        NzTabComponent.prototype.stateChanges;
        /** @type {?} */
        NzTabComponent.prototype.content;
        /** @type {?} */
        NzTabComponent.prototype.title;
        /** @type {?} */
        NzTabComponent.prototype.template;
        /** @type {?} */
        NzTabComponent.prototype.linkDirective;
        /** @type {?} */
        NzTabComponent.prototype.nzTitle;
        /** @type {?} */
        NzTabComponent.prototype.nzTitleAriaLabel;
        /** @type {?} */
        NzTabComponent.prototype.nzRouterIdentifier;
        /** @type {?} */
        NzTabComponent.prototype.nzForceRender;
        /** @type {?} */
        NzTabComponent.prototype.nzDisabled;
        /** @type {?} */
        NzTabComponent.prototype.nzClick;
        /** @type {?} */
        NzTabComponent.prototype.nzSelect;
        /** @type {?} */
        NzTabComponent.prototype.nzDeselect;
        /** @type {?} */
        NzTabComponent.prototype.elementRef;
        /**
         * @type {?}
         * @private
         */
        NzTabComponent.prototype.renderer;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzTabsInkBarDirective = /** @class */ (function () {
        function NzTabsInkBarDirective(renderer, elementRef, ngZone) {
            this.renderer = renderer;
            this.elementRef = elementRef;
            this.ngZone = ngZone;
            this.nzAnimated = false;
            this.nzPositionMode = 'horizontal';
            renderer.addClass(elementRef.nativeElement, 'ant-tabs-ink-bar');
        }
        /**
         * @param {?} element
         * @return {?}
         */
        NzTabsInkBarDirective.prototype.alignToElement = /**
         * @param {?} element
         * @return {?}
         */
        function (element) {
            var _this = this;
            if (typeof requestAnimationFrame !== 'undefined') {
                this.ngZone.runOutsideAngular((/**
                 * @return {?}
                 */
                function () {
                    requestAnimationFrame((/**
                     * @return {?}
                     */
                    function () { return _this.setStyles(element); }));
                }));
            }
            else {
                this.setStyles(element);
            }
        };
        /**
         * @param {?} element
         * @return {?}
         */
        NzTabsInkBarDirective.prototype.setStyles = /**
         * @param {?} element
         * @return {?}
         */
        function (element) {
            /** when horizontal remove height style and add transform left **/
            if (this.nzPositionMode === 'horizontal') {
                this.renderer.removeStyle(this.elementRef.nativeElement, 'height');
                this.renderer.setStyle(this.elementRef.nativeElement, 'transform', "translate3d(" + this.getLeftPosition(element) + ", 0px, 0px)");
                this.renderer.setStyle(this.elementRef.nativeElement, 'width', this.getElementWidth(element));
            }
            else {
                /** when vertical remove width style and add transform top **/
                this.renderer.removeStyle(this.elementRef.nativeElement, 'width');
                this.renderer.setStyle(this.elementRef.nativeElement, 'transform', "translate3d(0px, " + this.getTopPosition(element) + ", 0px)");
                this.renderer.setStyle(this.elementRef.nativeElement, 'height', this.getElementHeight(element));
            }
        };
        /**
         * @param {?} element
         * @return {?}
         */
        NzTabsInkBarDirective.prototype.getLeftPosition = /**
         * @param {?} element
         * @return {?}
         */
        function (element) {
            return element ? element.offsetLeft + 'px' : '0';
        };
        /**
         * @param {?} element
         * @return {?}
         */
        NzTabsInkBarDirective.prototype.getElementWidth = /**
         * @param {?} element
         * @return {?}
         */
        function (element) {
            return element ? element.offsetWidth + 'px' : '0';
        };
        /**
         * @param {?} element
         * @return {?}
         */
        NzTabsInkBarDirective.prototype.getTopPosition = /**
         * @param {?} element
         * @return {?}
         */
        function (element) {
            return element ? element.offsetTop + 'px' : '0';
        };
        /**
         * @param {?} element
         * @return {?}
         */
        NzTabsInkBarDirective.prototype.getElementHeight = /**
         * @param {?} element
         * @return {?}
         */
        function (element) {
            return element ? element.offsetHeight + 'px' : '0';
        };
        /** @nocollapse */
        NzTabsInkBarDirective.ctorParameters = function () { return [
            { type: core.Renderer2 },
            { type: core.ElementRef },
            { type: core.NgZone }
        ]; };
        NzTabsInkBarDirective.propDecorators = {
            nzAnimated: [{ type: core.Input }],
            nzPositionMode: [{ type: core.Input }]
        };
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzTabsInkBarDirective.prototype, "nzAnimated", void 0);
NzTabsInkBarDirective.ɵfac = function NzTabsInkBarDirective_Factory(t) { return new (t || NzTabsInkBarDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.NgZone)); };
NzTabsInkBarDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: NzTabsInkBarDirective, selectors: [["", "nz-tabs-ink-bar", ""]], hostVars: 4, hostBindings: function NzTabsInkBarDirective_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("ant-tabs-ink-bar-animated", ctx.nzAnimated)("ant-tabs-ink-bar-no-animated", !ctx.nzAnimated);
    } }, inputs: { nzAnimated: "nzAnimated", nzPositionMode: "nzPositionMode" }, exportAs: ["nzTabsInkBar"] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzTabsInkBarDirective, [{
        type: core.Directive,
        args: [{
                selector: '[nz-tabs-ink-bar]',
                exportAs: 'nzTabsInkBar',
                host: {
                    '[class.ant-tabs-ink-bar-animated]': 'nzAnimated',
                    '[class.ant-tabs-ink-bar-no-animated]': '!nzAnimated'
                }
            }]
    }], function () { return [{ type: ɵngcc0.Renderer2 }, { type: ɵngcc0.ElementRef }, { type: ɵngcc0.NgZone }]; }, { nzAnimated: [{
            type: core.Input
        }], nzPositionMode: [{
            type: core.Input
        }] }); })();
        return NzTabsInkBarDirective;
    }());
    if (false) {
        /** @type {?} */
        NzTabsInkBarDirective.prototype.nzAnimated;
        /** @type {?} */
        NzTabsInkBarDirective.prototype.nzPositionMode;
        /**
         * @type {?}
         * @private
         */
        NzTabsInkBarDirective.prototype.renderer;
        /**
         * @type {?}
         * @private
         */
        NzTabsInkBarDirective.prototype.elementRef;
        /**
         * @type {?}
         * @private
         */
        NzTabsInkBarDirective.prototype.ngZone;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var EXAGGERATED_OVERSCROLL = 64;
    var NzTabsNavComponent = /** @class */ (function () {
        function NzTabsNavComponent(elementRef, ngZone, renderer, cdr, platform, nzDomEventService, dir) {
            this.elementRef = elementRef;
            this.ngZone = ngZone;
            this.renderer = renderer;
            this.cdr = cdr;
            this.platform = platform;
            this.nzDomEventService = nzDomEventService;
            this.dir = dir;
            this._tabPositionMode = 'horizontal';
            this._scrollDistance = 0;
            this._selectedIndex = 0;
            this.destroy$ = new rxjs.Subject();
            this.showPaginationControls = false;
            this.disableScrollAfter = true;
            this.disableScrollBefore = true;
            this.selectedIndexChanged = false;
            this.realignInkBar = null;
            this.nzOnNextClick = new core.EventEmitter();
            this.nzOnPrevClick = new core.EventEmitter();
            this.nzAnimated = true;
            this.nzHideBar = false;
            this.nzShowPagination = true;
            this.nzType = 'line';
        }
        Object.defineProperty(NzTabsNavComponent.prototype, "nzPositionMode", {
            get: /**
             * @return {?}
             */
            function () {
                return this._tabPositionMode;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                var _this = this;
                this._tabPositionMode = value;
                this.alignInkBarToSelectedTab();
                if (this.nzShowPagination) {
                    Promise.resolve().then((/**
                     * @return {?}
                     */
                    function () {
                        _this.updatePagination();
                    }));
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzTabsNavComponent.prototype, "selectedIndex", {
            get: /**
             * @return {?}
             */
            function () {
                return this._selectedIndex;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                this.selectedIndexChanged = this._selectedIndex !== value;
                this._selectedIndex = value;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        NzTabsNavComponent.prototype.onContentChanges = /**
         * @return {?}
         */
        function () {
            var _this = this;
            /** @type {?} */
            var textContent = this.elementRef.nativeElement.textContent;
            // We need to diff the text content of the header, because the MutationObserver callback
            // will fire even if the text content didn't change which is inefficient and is prone
            // to infinite loops if a poorly constructed expression is passed in (see #14249).
            if (textContent !== this.currentTextContent) {
                this.currentTextContent = textContent;
                this.ngZone.run((/**
                 * @return {?}
                 */
                function () {
                    if (_this.nzShowPagination) {
                        _this.updatePagination();
                    }
                    _this.alignInkBarToSelectedTab();
                    _this.cdr.markForCheck();
                }));
            }
        };
        /**
         * @param {?} scrollDir
         * @return {?}
         */
        NzTabsNavComponent.prototype.scrollHeader = /**
         * @param {?} scrollDir
         * @return {?}
         */
        function (scrollDir) {
            if (scrollDir === 'before' && !this.disableScrollBefore) {
                this.nzOnPrevClick.emit();
            }
            else if (scrollDir === 'after' && !this.disableScrollAfter) {
                this.nzOnNextClick.emit();
            }
            // Move the scroll distance one-third the length of the tab list's viewport.
            this.scrollDistance += ((scrollDir === 'before' ? -1 : 1) * this.viewWidthHeightPix) / 3;
        };
        /**
         * @return {?}
         */
        NzTabsNavComponent.prototype.ngAfterContentChecked = /**
         * @return {?}
         */
        function () {
            if (this.tabLabelCount !== this.listOfNzTabLabelDirective.length) {
                if (this.nzShowPagination) {
                    this.updatePagination();
                }
                this.tabLabelCount = this.listOfNzTabLabelDirective.length;
                this.cdr.markForCheck();
            }
            if (this.selectedIndexChanged) {
                this.scrollToLabel(this._selectedIndex);
                if (this.nzShowPagination) {
                    this.checkScrollingControls();
                }
                this.alignInkBarToSelectedTab();
                this.selectedIndexChanged = false;
                this.cdr.markForCheck();
            }
            if (this.scrollDistanceChanged) {
                if (this.nzShowPagination) {
                    this.updateTabScrollPosition();
                }
                this.scrollDistanceChanged = false;
                this.cdr.markForCheck();
            }
        };
        /**
         * @return {?}
         */
        NzTabsNavComponent.prototype.ngAfterContentInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.realignInkBar = this.ngZone.runOutsideAngular((/**
             * @return {?}
             */
            function () {
                /** @type {?} */
                var dirChange = _this.dir ? _this.dir.change : rxjs.of(null);
                /** @type {?} */
                var resize = typeof window !== 'undefined'
                    ? _this.nzDomEventService.registerResizeListener().pipe(operators.takeUntil(_this.destroy$), operators.finalize((/**
                     * @return {?}
                     */
                    function () { return _this.nzDomEventService.unregisterResizeListener(); })))
                    : rxjs.of(null);
                return rxjs.merge(dirChange, resize)
                    .pipe(operators.startWith(null))
                    .subscribe((/**
                 * @return {?}
                 */
                function () {
                    if (_this.nzShowPagination) {
                        _this.updatePagination();
                    }
                    _this.alignInkBarToSelectedTab();
                }));
            }));
        };
        /**
         * @return {?}
         */
        NzTabsNavComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            this.destroy$.next();
            this.destroy$.complete();
            if (this.realignInkBar) {
                this.realignInkBar.unsubscribe();
            }
        };
        /**
         * @return {?}
         */
        NzTabsNavComponent.prototype.updateTabScrollPosition = /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var scrollDistance = this.scrollDistance;
            if (this.nzPositionMode === 'horizontal') {
                /** @type {?} */
                var translateX = this.getLayoutDirection() === 'ltr' ? -scrollDistance : scrollDistance;
                this.renderer.setStyle(this.navListElement.nativeElement, 'transform', "translate3d(" + translateX + "px, 0, 0)");
            }
            else {
                this.renderer.setStyle(this.navListElement.nativeElement, 'transform', "translate3d(0," + -scrollDistance + "px, 0)");
            }
        };
        /**
         * @return {?}
         */
        NzTabsNavComponent.prototype.updatePagination = /**
         * @return {?}
         */
        function () {
            this.checkPaginationEnabled();
            this.checkScrollingControls();
            this.updateTabScrollPosition();
        };
        /**
         * @return {?}
         */
        NzTabsNavComponent.prototype.checkPaginationEnabled = /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var isEnabled = this.tabListScrollWidthHeightPix > this.tabListScrollOffSetWidthHeight;
            if (!isEnabled) {
                this.scrollDistance = 0;
            }
            if (isEnabled !== this.showPaginationControls) {
                this.cdr.markForCheck();
            }
            this.showPaginationControls = isEnabled;
        };
        /**
         * @param {?} labelIndex
         * @return {?}
         */
        NzTabsNavComponent.prototype.scrollToLabel = /**
         * @param {?} labelIndex
         * @return {?}
         */
        function (labelIndex) {
            /** @type {?} */
            var selectedLabel = this.listOfNzTabLabelDirective ? this.listOfNzTabLabelDirective.toArray()[labelIndex] : null;
            if (selectedLabel) {
                // The view length is the visible width of the tab labels.
                /** @type {?} */
                var labelBeforePos = void 0;
                /** @type {?} */
                var labelAfterPos = void 0;
                if (this.nzPositionMode === 'horizontal') {
                    if (this.getLayoutDirection() === 'ltr') {
                        labelBeforePos = selectedLabel.getOffsetLeft();
                        labelAfterPos = labelBeforePos + selectedLabel.getOffsetWidth();
                    }
                    else {
                        labelAfterPos = this.navListElement.nativeElement.offsetWidth - selectedLabel.getOffsetLeft();
                        labelBeforePos = labelAfterPos - selectedLabel.getOffsetWidth();
                    }
                }
                else {
                    labelBeforePos = selectedLabel.getOffsetTop();
                    labelAfterPos = labelBeforePos + selectedLabel.getOffsetHeight();
                }
                /** @type {?} */
                var beforeVisiblePos = this.scrollDistance;
                /** @type {?} */
                var afterVisiblePos = this.scrollDistance + this.viewWidthHeightPix;
                if (labelBeforePos < beforeVisiblePos) {
                    // Scroll header to move label to the before direction
                    this.scrollDistance -= beforeVisiblePos - labelBeforePos + EXAGGERATED_OVERSCROLL;
                }
                else if (labelAfterPos > afterVisiblePos) {
                    // Scroll header to move label to the after direction
                    this.scrollDistance += labelAfterPos - afterVisiblePos + EXAGGERATED_OVERSCROLL;
                }
            }
        };
        /**
         * @return {?}
         */
        NzTabsNavComponent.prototype.checkScrollingControls = /**
         * @return {?}
         */
        function () {
            // Check if the pagination arrows should be activated.
            this.disableScrollBefore = this.scrollDistance === 0;
            this.disableScrollAfter = this.scrollDistance === this.getMaxScrollDistance();
            this.cdr.markForCheck();
        };
        /**
         * Determines what is the maximum length in pixels that can be set for the scroll distance. This
         * is equal to the difference in width between the tab list container and tab header container.
         *
         * This is an expensive call that forces a layout reflow to compute box and scroll metrics and
         * should be called sparingly.
         */
        /**
         * Determines what is the maximum length in pixels that can be set for the scroll distance. This
         * is equal to the difference in width between the tab list container and tab header container.
         *
         * This is an expensive call that forces a layout reflow to compute box and scroll metrics and
         * should be called sparingly.
         * @return {?}
         */
        NzTabsNavComponent.prototype.getMaxScrollDistance = /**
         * Determines what is the maximum length in pixels that can be set for the scroll distance. This
         * is equal to the difference in width between the tab list container and tab header container.
         *
         * This is an expensive call that forces a layout reflow to compute box and scroll metrics and
         * should be called sparingly.
         * @return {?}
         */
        function () {
            return this.tabListScrollWidthHeightPix - this.viewWidthHeightPix || 0;
        };
        Object.defineProperty(NzTabsNavComponent.prototype, "scrollDistance", {
            get: /**
             * @return {?}
             */
            function () {
                return this._scrollDistance;
            },
            /** Sets the distance in pixels that the tab header should be transformed in the X-axis. */
            set: /**
             * Sets the distance in pixels that the tab header should be transformed in the X-axis.
             * @param {?} v
             * @return {?}
             */
            function (v) {
                this._scrollDistance = Math.max(0, Math.min(this.getMaxScrollDistance(), v));
                // Mark that the scroll distance has changed so that after the view is checked, the CSS
                // transformation can move the header.
                this.scrollDistanceChanged = true;
                this.checkScrollingControls();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzTabsNavComponent.prototype, "viewWidthHeightPix", {
            get: /**
             * @return {?}
             */
            function () {
                /** @type {?} */
                var PAGINATION_PIX = 0;
                if (this.showPaginationControls) {
                    PAGINATION_PIX = this.navContainerScrollPaddingPix;
                }
                if (this.nzPositionMode === 'horizontal') {
                    return this.navContainerElement.nativeElement.offsetWidth - PAGINATION_PIX;
                }
                else {
                    return this.navContainerElement.nativeElement.offsetHeight - PAGINATION_PIX;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzTabsNavComponent.prototype, "navContainerScrollPaddingPix", {
            get: /**
             * @return {?}
             */
            function () {
                if (this.platform.isBrowser) {
                    /** @type {?} */
                    var navContainer = this.navContainerElement.nativeElement;
                    // tslint:disable: no-any
                    /** @type {?} */
                    var originStyle = window.getComputedStyle
                        ? window.getComputedStyle(navContainer)
                        : ((/** @type {?} */ (navContainer))).currentStyle;
                    if (this.nzPositionMode === 'horizontal') {
                        return core$1.pxToNumber(originStyle.paddingLeft) + core$1.pxToNumber(originStyle.paddingRight);
                    }
                    else {
                        return core$1.pxToNumber(originStyle.paddingTop) + core$1.pxToNumber(originStyle.paddingBottom);
                    }
                }
                else {
                    return 0;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzTabsNavComponent.prototype, "tabListScrollWidthHeightPix", {
            get: /**
             * @return {?}
             */
            function () {
                if (this.nzPositionMode === 'horizontal') {
                    return this.navListElement.nativeElement.scrollWidth;
                }
                else {
                    return this.navListElement.nativeElement.scrollHeight;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzTabsNavComponent.prototype, "tabListScrollOffSetWidthHeight", {
            get: /**
             * @return {?}
             */
            function () {
                if (this.nzPositionMode === 'horizontal') {
                    return this.scrollListElement.nativeElement.offsetWidth;
                }
                else {
                    return this.elementRef.nativeElement.offsetHeight;
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        NzTabsNavComponent.prototype.getLayoutDirection = /**
         * @return {?}
         */
        function () {
            return this.dir && this.dir.value === 'rtl' ? 'rtl' : 'ltr';
        };
        /**
         * @return {?}
         */
        NzTabsNavComponent.prototype.alignInkBarToSelectedTab = /**
         * @return {?}
         */
        function () {
            if (this.nzType === 'line') {
                /** @type {?} */
                var selectedLabelWrapper = this.listOfNzTabLabelDirective && this.listOfNzTabLabelDirective.length
                    ? this.listOfNzTabLabelDirective.toArray()[this.selectedIndex].elementRef.nativeElement
                    : null;
                if (this.nzTabsInkBarDirective) {
                    this.nzTabsInkBarDirective.alignToElement(selectedLabelWrapper);
                }
            }
        };
        /** @nocollapse */
        NzTabsNavComponent.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: core.NgZone },
            { type: core.Renderer2 },
            { type: core.ChangeDetectorRef },
            { type: platform.Platform },
            { type: core$1.NzDomEventService },
            { type: bidi.Directionality, decorators: [{ type: core.Optional }] }
        ]; };
        NzTabsNavComponent.propDecorators = {
            listOfNzTabLabelDirective: [{ type: core.ContentChildren, args: [NzTabLabelDirective,] }],
            nzTabsInkBarDirective: [{ type: core.ViewChild, args: [NzTabsInkBarDirective, { static: true },] }],
            navContainerElement: [{ type: core.ViewChild, args: ['navContainerElement', { static: true },] }],
            navListElement: [{ type: core.ViewChild, args: ['navListElement', { static: true },] }],
            scrollListElement: [{ type: core.ViewChild, args: ['scrollListElement', { static: true },] }],
            nzOnNextClick: [{ type: core.Output }],
            nzOnPrevClick: [{ type: core.Output }],
            nzTabBarExtraContent: [{ type: core.Input }],
            nzAnimated: [{ type: core.Input }],
            nzHideBar: [{ type: core.Input }],
            nzShowPagination: [{ type: core.Input }],
            nzType: [{ type: core.Input }],
            nzPositionMode: [{ type: core.Input }],
            selectedIndex: [{ type: core.Input }]
        };
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzTabsNavComponent.prototype, "nzAnimated", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzTabsNavComponent.prototype, "nzHideBar", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzTabsNavComponent.prototype, "nzShowPagination", void 0);
NzTabsNavComponent.ɵfac = function NzTabsNavComponent_Factory(t) { return new (t || NzTabsNavComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.NgZone), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc3.Platform), ɵngcc0.ɵɵdirectiveInject(ɵngcc4.NzDomEventService), ɵngcc0.ɵɵdirectiveInject(ɵngcc5.Directionality, 8)); };
NzTabsNavComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzTabsNavComponent, selectors: [["", "nz-tabs-nav", ""]], contentQueries: function NzTabsNavComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, NzTabLabelDirective, false);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.listOfNzTabLabelDirective = _t);
    } }, viewQuery: function NzTabsNavComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵstaticViewQuery(NzTabsInkBarDirective, true);
        ɵngcc0.ɵɵstaticViewQuery(_c5, true);
        ɵngcc0.ɵɵstaticViewQuery(_c6, true);
        ɵngcc0.ɵɵstaticViewQuery(_c7, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.nzTabsInkBarDirective = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.navContainerElement = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.navListElement = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.scrollListElement = _t.first);
    } }, inputs: { nzAnimated: "nzAnimated", nzHideBar: "nzHideBar", nzShowPagination: "nzShowPagination", nzType: "nzType", nzPositionMode: "nzPositionMode", selectedIndex: "selectedIndex", nzTabBarExtraContent: "nzTabBarExtraContent" }, outputs: { nzOnNextClick: "nzOnNextClick", nzOnPrevClick: "nzOnPrevClick" }, exportAs: ["nzTabsNav"], attrs: _c8, ngContentSelectors: _c9, decls: 17, vars: 18, consts: [["style", "float:right;", "class", "ant-tabs-extra-content", 4, "ngIf"], [1, "ant-tabs-nav-container"], ["navContainerElement", ""], [1, "ant-tabs-tab-prev", 3, "click"], [1, "ant-tabs-tab-prev-icon"], ["nz-icon", "", 1, "ant-tabs-tab-prev-icon-target", 3, "nzType"], [1, "ant-tabs-tab-next", 3, "click"], [1, "ant-tabs-tab-next-icon"], ["nz-icon", "", 1, "ant-tabs-tab-next-icon-target", 3, "nzType"], [1, "ant-tabs-nav-wrap"], [1, "ant-tabs-nav-scroll"], ["scrollListElement", ""], [1, "ant-tabs-nav", 3, "cdkObserveContent"], ["navListElement", ""], ["nz-tabs-ink-bar", "", 2, "display", "block", 3, "hidden", "nzAnimated", "nzPositionMode"], [1, "ant-tabs-extra-content", 2, "float", "right"], [3, "ngTemplateOutlet"]], template: function NzTabsNavComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵtemplate(0, NzTabsNavComponent_div_0_Template, 2, 1, "div", 0);
        ɵngcc0.ɵɵelementStart(1, "div", 1, 2);
        ɵngcc0.ɵɵelementStart(3, "span", 3);
        ɵngcc0.ɵɵlistener("click", function NzTabsNavComponent_Template_span_click_3_listener() { return ctx.scrollHeader("before"); });
        ɵngcc0.ɵɵelementStart(4, "span", 4);
        ɵngcc0.ɵɵelement(5, "i", 5);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(6, "span", 6);
        ɵngcc0.ɵɵlistener("click", function NzTabsNavComponent_Template_span_click_6_listener() { return ctx.scrollHeader("after"); });
        ɵngcc0.ɵɵelementStart(7, "span", 7);
        ɵngcc0.ɵɵelement(8, "i", 8);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(9, "div", 9);
        ɵngcc0.ɵɵelementStart(10, "div", 10, 11);
        ɵngcc0.ɵɵelementStart(12, "div", 12, 13);
        ɵngcc0.ɵɵlistener("cdkObserveContent", function NzTabsNavComponent_Template_div_cdkObserveContent_12_listener() { return ctx.onContentChanges(); });
        ɵngcc0.ɵɵelementStart(14, "div");
        ɵngcc0.ɵɵprojection(15);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelement(16, "div", 14);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", ctx.nzTabBarExtraContent);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassProp("ant-tabs-nav-container-scrolling", ctx.showPaginationControls);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵclassProp("ant-tabs-tab-btn-disabled", ctx.disableScrollBefore)("ant-tabs-tab-arrow-show", ctx.showPaginationControls);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("nzType", ctx.nzPositionMode === "horizontal" ? "left" : "up");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassProp("ant-tabs-tab-btn-disabled", ctx.disableScrollAfter)("ant-tabs-tab-arrow-show", ctx.showPaginationControls);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("nzType", ctx.nzPositionMode === "horizontal" ? "right" : "down");
        ɵngcc0.ɵɵadvance(4);
        ɵngcc0.ɵɵclassProp("ant-tabs-nav-animated", ctx.nzAnimated);
        ɵngcc0.ɵɵadvance(4);
        ɵngcc0.ɵɵproperty("hidden", ctx.nzHideBar)("nzAnimated", ctx.nzAnimated)("nzPositionMode", ctx.nzPositionMode);
    } }, directives: [ɵngcc1.NgIf, ɵngcc6.NzIconDirective, ɵngcc7.CdkObserveContent, NzTabsInkBarDirective, ɵngcc1.NgTemplateOutlet], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzTabsNavComponent, [{
        type: core.Component,
        args: [{
                selector: '[nz-tabs-nav]',
                exportAs: 'nzTabsNav',
                preserveWhitespaces: false,
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                encapsulation: core.ViewEncapsulation.None,
                template: "<div style=\"float:right;\" *ngIf=\"nzTabBarExtraContent\" class=\"ant-tabs-extra-content\">\r\n  <ng-template [ngTemplateOutlet]=\"nzTabBarExtraContent\"></ng-template>\r\n</div>\r\n<div class=\"ant-tabs-nav-container\"\r\n  [class.ant-tabs-nav-container-scrolling]=\"showPaginationControls\"\r\n  #navContainerElement>\r\n  <span class=\"ant-tabs-tab-prev\"\r\n    (click)=\"scrollHeader('before')\"\r\n    [class.ant-tabs-tab-btn-disabled]=\"disableScrollBefore\"\r\n    [class.ant-tabs-tab-arrow-show]=\"showPaginationControls\">\r\n    <span class=\"ant-tabs-tab-prev-icon\">\r\n      <i nz-icon [nzType]=\"nzPositionMode === 'horizontal' ? 'left' : 'up'\" class=\"ant-tabs-tab-prev-icon-target\"></i>\r\n    </span>\r\n  </span>\r\n  <span class=\"ant-tabs-tab-next\"\r\n    (click)=\"scrollHeader('after')\"\r\n    [class.ant-tabs-tab-btn-disabled]=\"disableScrollAfter\"\r\n    [class.ant-tabs-tab-arrow-show]=\"showPaginationControls\">\r\n    <span class=\"ant-tabs-tab-next-icon\">\r\n      <i nz-icon [nzType]=\"nzPositionMode === 'horizontal' ? 'right' : 'down'\" class=\"ant-tabs-tab-next-icon-target\"></i>\r\n    </span>\r\n  </span>\r\n  <div class=\"ant-tabs-nav-wrap\">\r\n    <div class=\"ant-tabs-nav-scroll\" #scrollListElement>\r\n      <div class=\"ant-tabs-nav\"\r\n        [class.ant-tabs-nav-animated]=\"nzAnimated\"\r\n        #navListElement\r\n        (cdkObserveContent)=\"onContentChanges()\">\r\n        <div>\r\n          <ng-content></ng-content>\r\n        </div>\r\n        <div nz-tabs-ink-bar [hidden]=\"nzHideBar\" [nzAnimated]=\"nzAnimated\" [nzPositionMode]=\"nzPositionMode\" style=\"display: block;\"></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc0.NgZone }, { type: ɵngcc0.Renderer2 }, { type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc3.Platform }, { type: ɵngcc4.NzDomEventService }, { type: ɵngcc5.Directionality, decorators: [{
                type: core.Optional
            }] }]; }, { nzOnNextClick: [{
            type: core.Output
        }], nzOnPrevClick: [{
            type: core.Output
        }], nzAnimated: [{
            type: core.Input
        }], nzHideBar: [{
            type: core.Input
        }], nzShowPagination: [{
            type: core.Input
        }], nzType: [{
            type: core.Input
        }], nzPositionMode: [{
            type: core.Input
        }], selectedIndex: [{
            type: core.Input
        }], listOfNzTabLabelDirective: [{
            type: core.ContentChildren,
            args: [NzTabLabelDirective]
        }], nzTabsInkBarDirective: [{
            type: core.ViewChild,
            args: [NzTabsInkBarDirective, { static: true }]
        }], navContainerElement: [{
            type: core.ViewChild,
            args: ['navContainerElement', { static: true }]
        }], navListElement: [{
            type: core.ViewChild,
            args: ['navListElement', { static: true }]
        }], scrollListElement: [{
            type: core.ViewChild,
            args: ['scrollListElement', { static: true }]
        }], nzTabBarExtraContent: [{
            type: core.Input
        }] }); })();
        return NzTabsNavComponent;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        NzTabsNavComponent.prototype._tabPositionMode;
        /**
         * @type {?}
         * @private
         */
        NzTabsNavComponent.prototype._scrollDistance;
        /**
         * @type {?}
         * @private
         */
        NzTabsNavComponent.prototype._selectedIndex;
        /**
         * Cached text content of the header.
         * @type {?}
         * @private
         */
        NzTabsNavComponent.prototype.currentTextContent;
        /**
         * @type {?}
         * @private
         */
        NzTabsNavComponent.prototype.destroy$;
        /** @type {?} */
        NzTabsNavComponent.prototype.showPaginationControls;
        /** @type {?} */
        NzTabsNavComponent.prototype.disableScrollAfter;
        /** @type {?} */
        NzTabsNavComponent.prototype.disableScrollBefore;
        /** @type {?} */
        NzTabsNavComponent.prototype.selectedIndexChanged;
        /** @type {?} */
        NzTabsNavComponent.prototype.realignInkBar;
        /** @type {?} */
        NzTabsNavComponent.prototype.tabLabelCount;
        /** @type {?} */
        NzTabsNavComponent.prototype.scrollDistanceChanged;
        /** @type {?} */
        NzTabsNavComponent.prototype.listOfNzTabLabelDirective;
        /** @type {?} */
        NzTabsNavComponent.prototype.nzTabsInkBarDirective;
        /** @type {?} */
        NzTabsNavComponent.prototype.navContainerElement;
        /** @type {?} */
        NzTabsNavComponent.prototype.navListElement;
        /** @type {?} */
        NzTabsNavComponent.prototype.scrollListElement;
        /** @type {?} */
        NzTabsNavComponent.prototype.nzOnNextClick;
        /** @type {?} */
        NzTabsNavComponent.prototype.nzOnPrevClick;
        /** @type {?} */
        NzTabsNavComponent.prototype.nzTabBarExtraContent;
        /** @type {?} */
        NzTabsNavComponent.prototype.nzAnimated;
        /** @type {?} */
        NzTabsNavComponent.prototype.nzHideBar;
        /** @type {?} */
        NzTabsNavComponent.prototype.nzShowPagination;
        /** @type {?} */
        NzTabsNavComponent.prototype.nzType;
        /** @type {?} */
        NzTabsNavComponent.prototype.elementRef;
        /**
         * @type {?}
         * @private
         */
        NzTabsNavComponent.prototype.ngZone;
        /**
         * @type {?}
         * @private
         */
        NzTabsNavComponent.prototype.renderer;
        /**
         * @type {?}
         * @private
         */
        NzTabsNavComponent.prototype.cdr;
        /**
         * @type {?}
         * @private
         */
        NzTabsNavComponent.prototype.platform;
        /**
         * @type {?}
         * @private
         */
        NzTabsNavComponent.prototype.nzDomEventService;
        /**
         * @type {?}
         * @private
         */
        NzTabsNavComponent.prototype.dir;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     */
    function NzAnimatedInterface() { }
    if (false) {
        /** @type {?} */
        NzAnimatedInterface.prototype.inkBar;
        /** @type {?} */
        NzAnimatedInterface.prototype.tabPane;
    }
    var NzTabChangeEvent = /** @class */ (function () {
        function NzTabChangeEvent() {
        }
        return NzTabChangeEvent;
    }());
    if (false) {
        /** @type {?} */
        NzTabChangeEvent.prototype.index;
        /** @type {?} */
        NzTabChangeEvent.prototype.tab;
    }
    /** @type {?} */
    var NZ_CONFIG_COMPONENT_NAME = 'tabs';
    var NzTabSetComponent = /** @class */ (function () {
        function NzTabSetComponent(nzConfigService, renderer, nzUpdateHostClassService, elementRef, cdr, router) {
            this.nzConfigService = nzConfigService;
            this.renderer = renderer;
            this.nzUpdateHostClassService = nzUpdateHostClassService;
            this.elementRef = elementRef;
            this.cdr = cdr;
            this.router = router;
            this.indexToSelect = 0;
            this.el = this.elementRef.nativeElement;
            this._selectedIndex = null;
            /**
             * Subscription to tabs being added/removed.
             */
            this.tabsSubscription = rxjs.Subscription.EMPTY;
            /**
             * Subscription to changes in the tab labels.
             */
            this.tabLabelSubscription = rxjs.Subscription.EMPTY;
            this.destroy$ = new rxjs.Subject();
            this.tabPositionMode = 'horizontal';
            this.nzHideAll = false;
            this.nzTabPosition = 'top';
            this.nzLinkRouter = false;
            this.nzLinkExact = true;
            this.nzPreselectionMode = false;
            this.preselectionIndex = null;
            this.nzOnNextClick = new core.EventEmitter();
            this.nzOnPrevClick = new core.EventEmitter();
            this.nzSelectChange = new core.EventEmitter(true);
            this.nzSelectedIndexChange = new core.EventEmitter();
        }
        Object.defineProperty(NzTabSetComponent.prototype, "nzSelectedIndex", {
            get: /**
             * @return {?}
             */
            function () {
                return this._selectedIndex;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                this.indexToSelect = value ? core$1.toNumber(value, null) : null;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzTabSetComponent.prototype, "inkBarAnimated", {
            get: /**
             * @return {?}
             */
            function () {
                return this.nzAnimated === true || ((/** @type {?} */ (this.nzAnimated))).inkBar === true;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzTabSetComponent.prototype, "tabPaneAnimated", {
            get: /**
             * @return {?}
             */
            function () {
                return this.nzAnimated === true || ((/** @type {?} */ (this.nzAnimated))).tabPane === true;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} $event
         * @return {?}
         */
        NzTabSetComponent.prototype.moveRight = /**
         * @param {?} $event
         * @return {?}
         */
        function ($event) {
            var _this = this;
            $event.stopPropagation();
            $event.preventDefault();
            /** @type {?} */
            var selectedIndex = (/** @type {?} */ (this.nzSelectedIndex));
            /** @type {?} */
            var index = (this.nzPreselectionMode && this.preselectionIndex != null) ? this.preselectionIndex : selectedIndex;
            /** @type {?} */
            var tabs = this.listOfNzTabComponent.toArray();
            /** @type {?} */
            var count = tabs.length;
            if (index === (count - 1) || tabs.filter((/**
             * @param {?} tab
             * @param {?} idx
             * @return {?}
             */
            function (tab, idx) { return idx > index && !tab.nzDisabled; })).length === 0) {
                return;
            }
            /** @type {?} */
            var tab = null;
            while (index < (count - 1) && (!tab || (/** @type {?} */ (tab)).nzDisabled)) {
                index++;
                tab = tabs[index];
            }
            if (tab) {
                if (this.nzPreselectionMode) {
                    this.preselectionIndex = index;
                    this._nav.scrollToLabel(index);
                }
                else {
                    this.nzSelectedIndex = index;
                    tabs[index].nzClick.emit();
                }
                setTimeout((/**
                 * @return {?}
                 */
                function () {
                    _this._focusableDivs.toArray()[index].nativeElement.focus();
                }), 100);
            }
        };
        /**
         * @param {?} $event
         * @return {?}
         */
        NzTabSetComponent.prototype.moveLeft = /**
         * @param {?} $event
         * @return {?}
         */
        function ($event) {
            var _this = this;
            $event.stopPropagation();
            $event.preventDefault();
            /** @type {?} */
            var selectedIndex = (/** @type {?} */ (this.nzSelectedIndex));
            /** @type {?} */
            var index = (this.nzPreselectionMode && this.preselectionIndex != null) ? this.preselectionIndex : selectedIndex;
            /** @type {?} */
            var tabs = this.listOfNzTabComponent.toArray();
            if (index === 0 || tabs.filter((/**
             * @param {?} tab
             * @param {?} idx
             * @return {?}
             */
            function (tab, idx) { return idx < index && !tab.nzDisabled; })).length === 0) {
                return;
            }
            /** @type {?} */
            var tab = null;
            while (index > 0 && (!tab || (/** @type {?} */ (tab)).nzDisabled)) {
                index--;
                tab = tabs[index];
            }
            if (tab) {
                if (this.nzPreselectionMode) {
                    this._nav.scrollToLabel(index);
                    this.preselectionIndex = index;
                }
                else {
                    this.nzSelectedIndex = index;
                    tabs[index].nzClick.emit();
                }
                setTimeout((/**
                 * @return {?}
                 */
                function () {
                    _this._focusableDivs.toArray()[index].nativeElement.focus();
                }), 100);
            }
        };
        /**
         * @param {?} value
         * @return {?}
         */
        NzTabSetComponent.prototype.setPosition = /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (this.tabContent) {
                if (value === 'bottom') {
                    this.renderer.insertBefore(this.el, this.tabContent.nativeElement, this.nzTabsNavComponent.elementRef.nativeElement);
                }
                else {
                    this.renderer.insertBefore(this.el, this.nzTabsNavComponent.elementRef.nativeElement, this.tabContent.nativeElement);
                }
            }
        };
        /**
         * @return {?}
         */
        NzTabSetComponent.prototype.setClassMap = /**
         * @return {?}
         */
        function () {
            var _a;
            this.nzUpdateHostClassService.updateHostClass(this.el, (_a = {},
                _a["ant-tabs"] = true,
                _a["ant-tabs-vertical"] = this.nzTabPosition === 'left' || this.nzTabPosition === 'right',
                _a["ant-tabs-" + this.nzTabPosition] = this.nzTabPosition,
                _a["ant-tabs-no-animation"] = this.nzAnimated === false || ((/** @type {?} */ (this.nzAnimated))).tabPane === false,
                _a["ant-tabs-" + this.nzType] = this.nzType,
                _a["ant-tabs-large"] = this.nzSize === 'large',
                _a["ant-tabs-small"] = this.nzSize === 'small',
                _a));
        };
        /**
         * @param {?} index
         * @param {?} disabled
         * @return {?}
         */
        NzTabSetComponent.prototype.clickLabel = /**
         * @param {?} index
         * @param {?} disabled
         * @return {?}
         */
        function (index, disabled) {
            this.preselectionIndex = null;
            if (!disabled) {
                /** @type {?} */
                var tabs = this.listOfNzTabComponent.toArray();
                this.nzSelectedIndex = index;
                tabs[index].nzClick.emit();
            }
        };
        /**
         * @return {?}
         */
        NzTabSetComponent.prototype.clickPreselected = /**
         * @return {?}
         */
        function () {
            var _this = this;
            if (this.nzPreselectionMode && this.preselectionIndex != null) {
                /** @type {?} */
                var tabs = this.listOfNzTabComponent.toArray();
                /** @type {?} */
                var index_1 = this.preselectionIndex;
                this.nzSelectedIndex = index_1;
                tabs[index_1].nzClick.emit();
                setTimeout((/**
                 * @return {?}
                 */
                function () {
                    _this._focusableDivs.toArray()[index_1].nativeElement.focus();
                }), 500);
            }
        };
        /**
         * @param {?} index
         * @return {?}
         */
        NzTabSetComponent.prototype.createChangeEvent = /**
         * @param {?} index
         * @return {?}
         */
        function (index) {
            /** @type {?} */
            var event = new NzTabChangeEvent();
            event.index = index;
            if (this.listOfNzTabComponent && this.listOfNzTabComponent.length) {
                event.tab = this.listOfNzTabComponent.toArray()[index];
                this.listOfNzTabComponent.forEach((/**
                 * @param {?} item
                 * @param {?} i
                 * @return {?}
                 */
                function (item, i) {
                    if (i !== index) {
                        item.nzDeselect.emit();
                    }
                }));
                event.tab.nzSelect.emit();
            }
            return event;
        };
        /** Clamps the given index to the bounds of 0 and the tabs length. */
        /**
         * Clamps the given index to the bounds of 0 and the tabs length.
         * @private
         * @param {?} index
         * @return {?}
         */
        NzTabSetComponent.prototype.clampTabIndex = /**
         * Clamps the given index to the bounds of 0 and the tabs length.
         * @private
         * @param {?} index
         * @return {?}
         */
        function (index) {
            // Note the `|| 0`, which ensures that values like NaN can't get through
            // and which would otherwise throw the component into an infinite loop
            // (since Math.max(NaN, 0) === NaN).
            return Math.min(this.listOfNzTabComponent.length - 1, Math.max(index || 0, 0));
        };
        /**
         * @private
         * @return {?}
         */
        NzTabSetComponent.prototype.subscribeToTabLabels = /**
         * @private
         * @return {?}
         */
        function () {
            var _this = this;
            if (this.tabLabelSubscription) {
                this.tabLabelSubscription.unsubscribe();
            }
            this.tabLabelSubscription = rxjs.merge.apply(void 0, __spread(this.listOfNzTabComponent.map((/**
             * @param {?} tab
             * @return {?}
             */
            function (tab) { return tab.stateChanges; })))).subscribe((/**
             * @return {?}
             */
            function () {
                return _this.cdr.markForCheck();
            }));
        };
        /**
         * @param {?} changes
         * @return {?}
         */
        NzTabSetComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
        function (changes) {
            if (changes.nzTabPosition) {
                if (this.nzTabPosition === 'top' || this.nzTabPosition === 'bottom') {
                    this.tabPositionMode = 'horizontal';
                }
                else {
                    this.tabPositionMode = 'vertical';
                }
                this.setPosition(this.nzTabPosition);
            }
            if (changes.nzType) {
                if (this.nzType === 'card') {
                    this.nzAnimated = false;
                }
            }
            if (changes.nzSize || changes.nzAnimated || changes.nzTabPosition || changes.nzType) {
                this.setClassMap();
            }
        };
        /**
         * @return {?}
         */
        NzTabSetComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            this.setClassMap();
        };
        /**
         * @return {?}
         */
        NzTabSetComponent.prototype.ngAfterContentChecked = /**
         * @return {?}
         */
        function () {
            var _this = this;
            if (this.listOfNzTabComponent && this.listOfNzTabComponent.length) {
                // Don't clamp the `indexToSelect` immediately in the setter because it can happen that
                // the amount of tabs changes before the actual change detection runs.
                /** @type {?} */
                var indexToSelect_1 = (this.indexToSelect = this.clampTabIndex(this.indexToSelect));
                // If there is a change in selected index, emit a change event. Should not trigger if
                // the selected index has not yet been initialized.
                if (this._selectedIndex !== indexToSelect_1) {
                    /** @type {?} */
                    var isFirstRun_1 = this._selectedIndex == null;
                    if (!isFirstRun_1) {
                        this.nzSelectChange.emit(this.createChangeEvent(indexToSelect_1));
                    }
                    // Changing these values after change detection has run
                    // since the checked content may contain references to them.
                    Promise.resolve().then((/**
                     * @return {?}
                     */
                    function () {
                        _this.listOfNzTabComponent.forEach((/**
                         * @param {?} tab
                         * @param {?} index
                         * @return {?}
                         */
                        function (tab, index) { return (tab.isActive = index === indexToSelect_1); }));
                        if (!isFirstRun_1) {
                            _this.nzSelectedIndexChange.emit(indexToSelect_1);
                        }
                    }));
                }
                // Setup the position for each tab and optionally setup an origin on the next selected tab.
                this.listOfNzTabComponent.forEach((/**
                 * @param {?} tab
                 * @param {?} index
                 * @return {?}
                 */
                function (tab, index) {
                    tab.position = index - indexToSelect_1;
                    // If there is already a selected tab, then set up an origin for the next selected tab
                    // if it doesn't have one already.
                    if (_this._selectedIndex != null && tab.position === 0 && !tab.origin) {
                        tab.origin = indexToSelect_1 - _this._selectedIndex;
                    }
                }));
                if (this._selectedIndex !== indexToSelect_1) {
                    this._selectedIndex = indexToSelect_1;
                    this.cdr.markForCheck();
                }
            }
        };
        /**
         * @return {?}
         */
        NzTabSetComponent.prototype.ngAfterContentInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.subscribeToTabLabels();
            // Subscribe to changes in the amount of tabs, in order to be
            // able to re-render the content as new tabs are added or removed.
            this.tabsSubscription = this.listOfNzTabComponent.changes.subscribe((/**
             * @return {?}
             */
            function () {
                /** @type {?} */
                var indexToSelect = _this.clampTabIndex(_this.indexToSelect);
                // Maintain the previously-selected tab if a new tab is added or removed and there is no
                // explicit change that selects a different tab.
                if (indexToSelect === _this._selectedIndex) {
                    /** @type {?} */
                    var tabs = _this.listOfNzTabComponent.toArray();
                    for (var i = 0; i < tabs.length; i++) {
                        if (tabs[i].isActive) {
                            // Assign both to the `_indexToSelect` and `_selectedIndex` so we don't fire a changed
                            // event, otherwise the consumer may end up in an infinite loop in some edge cases like
                            // adding a tab within the `selectedIndexChange` event.
                            _this.indexToSelect = _this._selectedIndex = i;
                            break;
                        }
                    }
                }
                _this.subscribeToTabLabels();
                _this.cdr.markForCheck();
            }));
        };
        /**
         * @return {?}
         */
        NzTabSetComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            this.tabsSubscription.unsubscribe();
            this.tabLabelSubscription.unsubscribe();
            this.destroy$.next();
            this.destroy$.complete();
        };
        /**
         * @return {?}
         */
        NzTabSetComponent.prototype.ngAfterViewInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.setPosition(this.nzTabPosition);
            if (this.nzLinkRouter) {
                if (!this.router) {
                    throw new Error(core$1.PREFIX + " you should import 'RouterModule' if you want to use 'nzLinkRouter'!");
                }
                this.router.events
                    .pipe(operators.takeUntil(this.destroy$), operators.filter((/**
                 * @param {?} e
                 * @return {?}
                 */
                function (e) { return e instanceof router.NavigationEnd; })), operators.startWith(true))
                    .subscribe((/**
                 * @return {?}
                 */
                function () {
                    _this.updateRouterActive();
                    _this.cdr.markForCheck();
                }));
            }
        };
        /**
         * @private
         * @return {?}
         */
        NzTabSetComponent.prototype.updateRouterActive = /**
         * @private
         * @return {?}
         */
        function () {
            if (this.router.navigated) {
                /** @type {?} */
                var index = this.findShouldActiveTabIndex();
                if (index !== this._selectedIndex) {
                    this.nzSelectedIndex = index;
                    this.nzSelectedIndexChange.emit(index);
                }
                this.nzHideAll = index === -1;
            }
        };
        /**
         * @private
         * @return {?}
         */
        NzTabSetComponent.prototype.findShouldActiveTabIndex = /**
         * @private
         * @return {?}
         */
        function () {
            /** @type {?} */
            var tabs = this.listOfNzTabComponent.toArray();
            /** @type {?} */
            var isActive = this.isLinkActive(this.router);
            return tabs.findIndex((/**
             * @param {?} tab
             * @return {?}
             */
            function (tab) {
                /** @type {?} */
                var c = tab.linkDirective;
                return c ? isActive(c.routerLink) || isActive(c.routerLinkWithHref) : false;
            }));
        };
        /**
         * @private
         * @param {?} router
         * @return {?}
         */
        NzTabSetComponent.prototype.isLinkActive = /**
         * @private
         * @param {?} router
         * @return {?}
         */
        function (router) {
            var _this = this;
            return (/**
             * @param {?=} link
             * @return {?}
             */
            function (link) { return (link ? router.isActive(link.urlTree, _this.nzLinkExact) : false); });
        };
        /** @nocollapse */
        NzTabSetComponent.ctorParameters = function () { return [
            { type: core$1.NzConfigService },
            { type: core.Renderer2 },
            { type: core$1.NzUpdateHostClassService },
            { type: core.ElementRef },
            { type: core.ChangeDetectorRef },
            { type: router.Router, decorators: [{ type: core.Optional }] }
        ]; };
        NzTabSetComponent.propDecorators = {
            listOfNzTabComponent: [{ type: core.ContentChildren, args: [NzTabComponent,] }],
            nzTabsNavComponent: [{ type: core.ViewChild, args: [NzTabsNavComponent, { static: false },] }],
            tabContent: [{ type: core.ViewChild, args: ['tabContent', { static: false },] }],
            _focusableDivs: [{ type: core.ViewChildren, args: ["focusable",] }],
            _nav: [{ type: core.ViewChild, args: [NzTabsNavComponent, { static: false },] }],
            nzTabBarExtraContent: [{ type: core.Input }],
            nzShowPagination: [{ type: core.Input }],
            nzAnimated: [{ type: core.Input }],
            nzHideAll: [{ type: core.Input }],
            nzTabPosition: [{ type: core.Input }],
            nzSize: [{ type: core.Input }],
            nzTabBarGutter: [{ type: core.Input }],
            nzTabBarStyle: [{ type: core.Input }],
            nzType: [{ type: core.Input }],
            nzLinkRouter: [{ type: core.Input }],
            nzLinkExact: [{ type: core.Input }],
            nzPreselectionMode: [{ type: core.Input }],
            nzOnNextClick: [{ type: core.Output }],
            nzOnPrevClick: [{ type: core.Output }],
            nzSelectChange: [{ type: core.Output }],
            nzSelectedIndexChange: [{ type: core.Output }],
            nzSelectedIndex: [{ type: core.Input }]
        };
        __decorate([
            core$1.WithConfig(NZ_CONFIG_COMPONENT_NAME, true),
            __metadata("design:type", Boolean)
        ], NzTabSetComponent.prototype, "nzShowPagination", void 0);
        __decorate([
            core$1.WithConfig(NZ_CONFIG_COMPONENT_NAME, true),
            __metadata("design:type", Object)
        ], NzTabSetComponent.prototype, "nzAnimated", void 0);
        __decorate([
            core$1.WithConfig(NZ_CONFIG_COMPONENT_NAME, 'default'),
            __metadata("design:type", String)
        ], NzTabSetComponent.prototype, "nzSize", void 0);
        __decorate([
            core$1.WithConfig(NZ_CONFIG_COMPONENT_NAME),
            __metadata("design:type", Number)
        ], NzTabSetComponent.prototype, "nzTabBarGutter", void 0);
        __decorate([
            core$1.WithConfig(NZ_CONFIG_COMPONENT_NAME, 'line'),
            __metadata("design:type", String)
        ], NzTabSetComponent.prototype, "nzType", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzTabSetComponent.prototype, "nzLinkRouter", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzTabSetComponent.prototype, "nzLinkExact", void 0);
NzTabSetComponent.ɵfac = function NzTabSetComponent_Factory(t) { return new (t || NzTabSetComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc4.NzConfigService), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(ɵngcc4.NzUpdateHostClassService), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.Router, 8)); };
NzTabSetComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzTabSetComponent, selectors: [["nz-tabset"]], contentQueries: function NzTabSetComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, NzTabComponent, false);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.listOfNzTabComponent = _t);
    } }, viewQuery: function NzTabSetComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(NzTabsNavComponent, true);
        ɵngcc0.ɵɵviewQuery(_c10, true);
        ɵngcc0.ɵɵviewQuery(NzTabsNavComponent, true);
        ɵngcc0.ɵɵviewQuery(_c11, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.nzTabsNavComponent = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.tabContent = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx._nav = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx._focusableDivs = _t);
    } }, inputs: { nzHideAll: "nzHideAll", nzTabPosition: "nzTabPosition", nzLinkRouter: "nzLinkRouter", nzLinkExact: "nzLinkExact", nzPreselectionMode: "nzPreselectionMode", nzSelectedIndex: "nzSelectedIndex", nzAnimated: "nzAnimated", nzTabBarExtraContent: "nzTabBarExtraContent", nzShowPagination: "nzShowPagination", nzSize: "nzSize", nzTabBarGutter: "nzTabBarGutter", nzTabBarStyle: "nzTabBarStyle", nzType: "nzType" }, outputs: { nzOnNextClick: "nzOnNextClick", nzOnPrevClick: "nzOnPrevClick", nzSelectChange: "nzSelectChange", nzSelectedIndexChange: "nzSelectedIndexChange" }, exportAs: ["nzTabset"], features: [ɵngcc0.ɵɵProvidersFeature([core$1.NzUpdateHostClassService]), ɵngcc0.ɵɵNgOnChangesFeature], decls: 1, vars: 1, consts: [[4, "ngIf"], ["nz-tabs-nav", "", "role", "tablist", 1, "ant-tabs-bar", 3, "nzType", "nzShowPagination", "nzPositionMode", "nzAnimated", "ngStyle", "nzHideBar", "nzTabBarExtraContent", "selectedIndex", "nzOnNextClick", "nzOnPrevClick"], ["nav", ""], ["nz-tab-label", "", "role", "tab", 3, "margin-right", "ant-tabs-tab-active", "disabled", "ant-tabs-tab-preselected", "click", "keyup.enter", "keyup.space", "keydown.space", "keydown.arrowright", "keydown.arrowleft", "keyup.arrowright", "keyup.arrowleft", 4, "ngFor", "ngForOf"], [1, "ant-tabs-content"], ["tabContent", ""], ["nz-tab-body", "", "class", "ant-tabs-tabpane", 3, "active", "forceRender", "content", 4, "ngFor", "ngForOf"], ["nz-tab-label", "", "role", "tab", 3, "disabled", "click", "keyup.enter", "keyup.space", "keydown.space", "keydown.arrowright", "keydown.arrowleft", "keyup.arrowright", "keyup.arrowleft"], ["focusable", ""], [4, "nzStringTemplateOutlet"], ["nz-tab-body", "", 1, "ant-tabs-tabpane", 3, "active", "forceRender", "content"]], template: function NzTabSetComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, NzTabSetComponent_ng_container_0_Template, 7, 42, "ng-container", 0);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", ctx.listOfNzTabComponent);
    } }, directives: [ɵngcc1.NgIf, NzTabsNavComponent, ɵngcc1.NgStyle, ɵngcc1.NgForOf, NzTabLabelDirective, ɵngcc4.NzStringTemplateOutletDirective, NzTabBodyComponent], styles: ["\n      nz-tabset {\n        display: block;\n      }\n    "], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzTabSetComponent, [{
        type: core.Component,
        args: [{
                selector: 'nz-tabset',
                exportAs: 'nzTabset',
                preserveWhitespaces: false,
                encapsulation: core.ViewEncapsulation.None,
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                providers: [core$1.NzUpdateHostClassService],
                template: "<ng-container *ngIf=\"listOfNzTabComponent\">\r\n  <div nz-tabs-nav\r\n    #nav\r\n    role=\"tablist\"\r\n    class=\"ant-tabs-bar\"\r\n    [class.ant-tabs-card-bar]=\"nzType === 'card'\"\r\n    [class.ant-tabs-top-bar]=\"nzTabPosition === 'top'\"\r\n    [class.ant-tabs-bottom-bar]=\"nzTabPosition === 'bottom'\"\r\n    [class.ant-tabs-left-bar]=\"nzTabPosition === 'left'\"\r\n    [class.ant-tabs-right-bar]=\"nzTabPosition === 'right'\"\r\n    [class.ant-tabs-small-bar]=\"nzSize === 'small'\"\r\n    [class.ant-tabs-default-bar]=\"nzSize === 'default'\"\r\n    [class.ant-tabs-large-bar]=\"nzSize === 'large'\"\r\n    [nzType]=\"nzType\"\r\n    [nzShowPagination]=\"nzShowPagination\"\r\n    [nzPositionMode]=\"tabPositionMode\"\r\n    [nzAnimated]=\"inkBarAnimated\"\r\n    [ngStyle]=\"nzTabBarStyle\"\r\n    [nzHideBar]=\"nzHideAll\"\r\n    [nzTabBarExtraContent]=\"nzTabBarExtraContent\"\r\n    [selectedIndex]=\"nzSelectedIndex\"\r\n    (nzOnNextClick)=\"nzOnNextClick.emit()\"\r\n    (nzOnPrevClick)=\"nzOnPrevClick.emit()\">\r\n    <div nz-tab-label\r\n      [attr.tabindex]=\"nzSelectedIndex == i ? 0 : -1\"\r\n      role=\"tab\"\r\n      [attr.aria-selected]=\"nzSelectedIndex == i\"\r\n      [attr.aria-label]=\"tab.nzTitleAriaLabel\"\r\n      [attr.aria-disabled]=\"tab.nzDisabled\"\r\n      [style.margin-right.px]=\"nzTabBarGutter\"\r\n      [class.ant-tabs-tab-active]=\"(nzSelectedIndex == i) && !nzHideAll\"\r\n      [disabled]=\"tab.nzDisabled\"\r\n      (click)=\"clickLabel(i,tab.nzDisabled)\"\r\n      (keyup.enter)=\"clickLabel(i,tab.nzDisabled)\"\r\n      (keyup.space)=\"clickPreselected(); $event.preventDefault()\"\r\n      (keydown.space)=\"$event.preventDefault()\"\r\n      (keydown.arrowright)=\"$event.preventDefault()\"\r\n      (keydown.arrowleft)=\"$event.preventDefault()\"\r\n      (keyup.arrowright)=\"moveRight($event)\"\r\n      (keyup.arrowleft)=\"moveLeft($event)\"\r\n      *ngFor=\"let tab of listOfNzTabComponent; let i = index\"\r\n      [class.ant-tabs-tab-preselected]=\"preselectionIndex == i\"\r\n      #focusable>\r\n      <ng-container *nzStringTemplateOutlet=\"tab.nzTitle || tab.title\">{{ tab.nzTitle }}</ng-container>\r\n    </div>\r\n  </div>\r\n  <div #tabContent\r\n    class=\"ant-tabs-content\"\r\n    [class.ant-tabs-top-content]=\"nzTabPosition === 'top'\"\r\n    [class.ant-tabs-bottom-content]=\"nzTabPosition === 'bottom'\"\r\n    [class.ant-tabs-left-content]=\"nzTabPosition === 'left'\"\r\n    [class.ant-tabs-right-content]=\"nzTabPosition === 'right'\"\r\n    [class.ant-tabs-content-animated]=\"tabPaneAnimated\"\r\n    [class.ant-tabs-card-content]=\"nzType === 'card'\"\r\n    [class.ant-tabs-content-no-animated]=\"!tabPaneAnimated\"\r\n    [style.margin-left.%]=\"(tabPositionMode === 'horizontal') && tabPaneAnimated && (-(nzSelectedIndex || 0 ) * 100)\">\r\n    <div nz-tab-body\r\n      class=\"ant-tabs-tabpane\"\r\n      *ngFor=\"let tab of listOfNzTabComponent; let i = index\"\r\n      [active]=\"(nzSelectedIndex == i) && !nzHideAll\"\r\n      [forceRender]=\"tab.nzForceRender\"\r\n      [content]=\"tab.template || tab.content\">\r\n    </div>\r\n  </div>\r\n</ng-container>",
                styles: ["\n      nz-tabset {\n        display: block;\n      }\n    "]
            }]
    }], function () { return [{ type: ɵngcc4.NzConfigService }, { type: ɵngcc0.Renderer2 }, { type: ɵngcc4.NzUpdateHostClassService }, { type: ɵngcc0.ElementRef }, { type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc2.Router, decorators: [{
                type: core.Optional
            }] }]; }, { nzHideAll: [{
            type: core.Input
        }], nzTabPosition: [{
            type: core.Input
        }], nzLinkRouter: [{
            type: core.Input
        }], nzLinkExact: [{
            type: core.Input
        }], nzPreselectionMode: [{
            type: core.Input
        }], nzOnNextClick: [{
            type: core.Output
        }], nzOnPrevClick: [{
            type: core.Output
        }], nzSelectChange: [{
            type: core.Output
        }], nzSelectedIndexChange: [{
            type: core.Output
        }], nzSelectedIndex: [{
            type: core.Input
        }], nzAnimated: [{
            type: core.Input
        }], listOfNzTabComponent: [{
            type: core.ContentChildren,
            args: [NzTabComponent]
        }], nzTabsNavComponent: [{
            type: core.ViewChild,
            args: [NzTabsNavComponent, { static: false }]
        }], tabContent: [{
            type: core.ViewChild,
            args: ['tabContent', { static: false }]
        }], _focusableDivs: [{
            type: core.ViewChildren,
            args: ["focusable"]
        }], _nav: [{
            type: core.ViewChild,
            args: [NzTabsNavComponent, { static: false }]
        }], nzTabBarExtraContent: [{
            type: core.Input
        }], nzShowPagination: [{
            type: core.Input
        }], nzSize: [{
            type: core.Input
        }], nzTabBarGutter: [{
            type: core.Input
        }], nzTabBarStyle: [{
            type: core.Input
        }], nzType: [{
            type: core.Input
        }] }); })();
        return NzTabSetComponent;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        NzTabSetComponent.prototype.indexToSelect;
        /**
         * @type {?}
         * @private
         */
        NzTabSetComponent.prototype.el;
        /**
         * @type {?}
         * @private
         */
        NzTabSetComponent.prototype._selectedIndex;
        /**
         * Subscription to tabs being added/removed.
         * @type {?}
         * @private
         */
        NzTabSetComponent.prototype.tabsSubscription;
        /**
         * Subscription to changes in the tab labels.
         * @type {?}
         * @private
         */
        NzTabSetComponent.prototype.tabLabelSubscription;
        /**
         * @type {?}
         * @private
         */
        NzTabSetComponent.prototype.destroy$;
        /** @type {?} */
        NzTabSetComponent.prototype.tabPositionMode;
        /** @type {?} */
        NzTabSetComponent.prototype.listOfNzTabComponent;
        /** @type {?} */
        NzTabSetComponent.prototype.nzTabsNavComponent;
        /** @type {?} */
        NzTabSetComponent.prototype.tabContent;
        /**
         * @type {?}
         * @private
         */
        NzTabSetComponent.prototype._focusableDivs;
        /**
         * @type {?}
         * @private
         */
        NzTabSetComponent.prototype._nav;
        /** @type {?} */
        NzTabSetComponent.prototype.nzTabBarExtraContent;
        /** @type {?} */
        NzTabSetComponent.prototype.nzShowPagination;
        /** @type {?} */
        NzTabSetComponent.prototype.nzAnimated;
        /** @type {?} */
        NzTabSetComponent.prototype.nzHideAll;
        /** @type {?} */
        NzTabSetComponent.prototype.nzTabPosition;
        /** @type {?} */
        NzTabSetComponent.prototype.nzSize;
        /** @type {?} */
        NzTabSetComponent.prototype.nzTabBarGutter;
        /** @type {?} */
        NzTabSetComponent.prototype.nzTabBarStyle;
        /** @type {?} */
        NzTabSetComponent.prototype.nzType;
        /** @type {?} */
        NzTabSetComponent.prototype.nzLinkRouter;
        /** @type {?} */
        NzTabSetComponent.prototype.nzLinkExact;
        /** @type {?} */
        NzTabSetComponent.prototype.nzPreselectionMode;
        /** @type {?} */
        NzTabSetComponent.prototype.preselectionIndex;
        /** @type {?} */
        NzTabSetComponent.prototype.nzOnNextClick;
        /** @type {?} */
        NzTabSetComponent.prototype.nzOnPrevClick;
        /** @type {?} */
        NzTabSetComponent.prototype.nzSelectChange;
        /** @type {?} */
        NzTabSetComponent.prototype.nzSelectedIndexChange;
        /** @type {?} */
        NzTabSetComponent.prototype.nzConfigService;
        /**
         * @type {?}
         * @private
         */
        NzTabSetComponent.prototype.renderer;
        /**
         * @type {?}
         * @private
         */
        NzTabSetComponent.prototype.nzUpdateHostClassService;
        /**
         * @type {?}
         * @private
         */
        NzTabSetComponent.prototype.elementRef;
        /**
         * @type {?}
         * @private
         */
        NzTabSetComponent.prototype.cdr;
        /**
         * @type {?}
         * @private
         */
        NzTabSetComponent.prototype.router;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzTabsModule = /** @class */ (function () {
        function NzTabsModule() {
        }
NzTabsModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: NzTabsModule });
NzTabsModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function NzTabsModule_Factory(t) { return new (t || NzTabsModule)(); }, imports: [[common.CommonModule, observers.ObserversModule, icon.NzIconModule, core$1.NzAddOnModule, platform.PlatformModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(NzTabsModule, { declarations: [NzTabComponent,
        NzTabDirective,
        NzTabSetComponent,
        NzTabsNavComponent,
        NzTabLabelDirective,
        NzTabsInkBarDirective,
        NzTabBodyComponent,
        NzTabLinkDirective], imports: [ɵngcc1.CommonModule, ɵngcc7.ObserversModule, ɵngcc6.NzIconModule, ɵngcc4.NzAddOnModule, ɵngcc3.PlatformModule], exports: [NzTabComponent,
        NzTabDirective,
        NzTabSetComponent,
        NzTabsNavComponent,
        NzTabLabelDirective,
        NzTabsInkBarDirective,
        NzTabBodyComponent,
        NzTabLinkDirective] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzTabsModule, [{
        type: core.NgModule,
        args: [{
                declarations: [
                    NzTabComponent,
                    NzTabDirective,
                    NzTabSetComponent,
                    NzTabsNavComponent,
                    NzTabLabelDirective,
                    NzTabsInkBarDirective,
                    NzTabBodyComponent,
                    NzTabLinkDirective
                ],
                exports: [
                    NzTabComponent,
                    NzTabDirective,
                    NzTabSetComponent,
                    NzTabsNavComponent,
                    NzTabLabelDirective,
                    NzTabsInkBarDirective,
                    NzTabBodyComponent,
                    NzTabLinkDirective
                ],
                imports: [common.CommonModule, observers.ObserversModule, icon.NzIconModule, core$1.NzAddOnModule, platform.PlatformModule]
            }]
    }], function () { return []; }, null); })();
        return NzTabsModule;
    }());

    exports.NzTabBodyComponent = NzTabBodyComponent;
    exports.NzTabChangeEvent = NzTabChangeEvent;
    exports.NzTabComponent = NzTabComponent;
    exports.NzTabDirective = NzTabDirective;
    exports.NzTabLabelDirective = NzTabLabelDirective;
    exports.NzTabLinkDirective = NzTabLinkDirective;
    exports.NzTabSetComponent = NzTabSetComponent;
    exports.NzTabsInkBarDirective = NzTabsInkBarDirective;
    exports.NzTabsModule = NzTabsModule;
    exports.NzTabsNavComponent = NzTabsNavComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=ng-zorro-antd-tabs.umd.js.map